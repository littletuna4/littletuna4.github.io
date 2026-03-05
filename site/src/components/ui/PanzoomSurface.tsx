'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Pan and zoom a single child (e.g. image) via pointer and wheel
 * - Scale clamped to min/max; pan clamped so content stays reachable
 * - Double-click or double-tap toggles zoom in / reset
 * - GPU-accelerated transform (translate3d + scale)
 * - Works with mouse and touch; no external panzoom libs
 * - During pan, transform is applied via ref (direct DOM) to avoid re-renders and reduce jitter on touch
 * - Pointer capture used so touch pan keeps receiving move events on mobile (avoids one-frame-then-lock)
 * - Double-tap only when a single pointer is down; second finger of a pinch must not trigger double-tap
 */

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  ReactNode,
  WheelEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';

const SCALE_MIN = 0.5;
const SCALE_MAX = 12;
const SCALE_STEP = 0.25;
const DOUBLE_TAP_MS = 300;
const PAN_CLAMP_PX = 1200;

function buildTransformString(translateX: number, translateY: number, scale: number): string {
  return `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
}

export interface PanzoomSurfaceProps {
  children: ReactNode;
  /** Optional class for the wrapper that receives pan/zoom transform. */
  className?: string;
}

export function PanzoomSurface({ children, className = '' }: PanzoomSurfaceProps) {
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  const lastTranslateRef = useRef({ x: 0, y: 0 });
  const lastTapRef = useRef<number>(0);
  const activePointerCountRef = useRef(0);
  const capturedPointerIdRef = useRef<number | null>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const transformElRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(scale);
  const isPanningRef = useRef(false);

  scaleRef.current = scale;
  isPanningRef.current = isDragging;

  useEffect(() => {
    if (isDragging || !transformElRef.current) return;
    transformElRef.current.style.transform = buildTransformString(translateX, translateY, scale);
  }, [translateX, translateY, scale, isDragging]);

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (isPanningRef.current) e.preventDefault();
    };
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => el.removeEventListener('touchmove', onTouchMove);
  }, []);

  const clampScale = useCallback((s: number) =>
    Math.max(SCALE_MIN, Math.min(SCALE_MAX, s)), []);

  const handleWheel = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -SCALE_STEP : SCALE_STEP;
      setScale((prev) => clampScale(prev + delta));
    },
    [clampScale]
  );

  const releaseCaptureForPointer = useCallback((target: HTMLElement, pointerId: number) => {
    if (capturedPointerIdRef.current !== pointerId) return;
    try {
      target.releasePointerCapture(pointerId);
    } catch {
      // ignore if already released
    }
    capturedPointerIdRef.current = null;
  }, []);

  const handlePointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (e.button !== 0) return;
      activePointerCountRef.current += 1;
      const isSinglePointer = activePointerCountRef.current === 1;
      const now = Date.now();
      if (isSinglePointer && now - lastTapRef.current < DOUBLE_TAP_MS) {
        setScale((prev) => (prev > 1 ? 1 : 1.5));
        setTranslateX(0);
        setTranslateY(0);
        lastTapRef.current = 0;
        activePointerCountRef.current -= 1;
        return;
      }
      if (isSinglePointer) {
        lastTapRef.current = now;
      }
      e.preventDefault();
      isPanningRef.current = true;
      const target = e.currentTarget;
      if (activePointerCountRef.current === 1) {
        target.setPointerCapture(e.pointerId);
        capturedPointerIdRef.current = e.pointerId;
      }
      setIsDragging(true);
      if (activePointerCountRef.current === 1) {
        lastPointerRef.current = { x: e.clientX, y: e.clientY };
        lastTranslateRef.current = { x: translateX, y: translateY };
      }
    },
    [translateX, translateY]
  );

  const handlePointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!lastPointerRef.current) return;
      e.preventDefault();
      const dx = e.clientX - lastPointerRef.current.x;
      const dy = e.clientY - lastPointerRef.current.y;
      const newX = Math.max(-PAN_CLAMP_PX, Math.min(PAN_CLAMP_PX, lastTranslateRef.current.x + dx));
      const newY = Math.max(-PAN_CLAMP_PX, Math.min(PAN_CLAMP_PX, lastTranslateRef.current.y + dy));
      lastTranslateRef.current = { x: newX, y: newY };
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      const el = transformElRef.current;
      if (el) {
        el.style.transform = buildTransformString(newX, newY, scaleRef.current);
      }
    },
    []
  );

  const handlePointerUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      const wasCapturedPointer = capturedPointerIdRef.current === e.pointerId;
      releaseCaptureForPointer(target, e.pointerId);
      activePointerCountRef.current = Math.max(0, activePointerCountRef.current - 1);
      if (wasCapturedPointer || activePointerCountRef.current === 0) {
        isPanningRef.current = false;
        if (lastPointerRef.current) {
          setTranslateX(lastTranslateRef.current.x);
          setTranslateY(lastTranslateRef.current.y);
        }
        setIsDragging(false);
        lastPointerRef.current = null;
      }
    },
    [releaseCaptureForPointer]
  );

  const handlePointerLeave = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      releaseCaptureForPointer(target, e.pointerId);
      activePointerCountRef.current = Math.max(0, activePointerCountRef.current - 1);
      if (lastPointerRef.current) {
        isPanningRef.current = false;
        setTranslateX(lastTranslateRef.current.x);
        setTranslateY(lastTranslateRef.current.y);
      }
      setIsDragging(false);
      lastPointerRef.current = null;
    },
    [releaseCaptureForPointer]
  );

  const transformStyle = isDragging
    ? { transform: buildTransformString(lastTranslateRef.current.x, lastTranslateRef.current.y, scale) }
    : { transform: buildTransformString(translateX, translateY, scale) };

  return (
    <div
      ref={surfaceRef}
      className={`w-full h-full overflow-hidden touch-none ${className}`}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div
        ref={transformElRef}
        className="w-full h-full will-change-transform"
        style={transformStyle}
      >
        {children}
      </div>
    </div>
  );
}
