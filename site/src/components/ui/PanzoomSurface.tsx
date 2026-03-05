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
 * - Zoom on mobile: two-finger pinch (MDN pattern — cache both pointers, scale from distance ratio)
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
const PINCH_DISTANCE_SENTINEL = -1;

function buildTransformString(translateX: number, translateY: number, scale: number): string {
  return `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;
}

function distance(
  a: { clientX: number; clientY: number },
  b: { clientX: number; clientY: number }
): number {
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
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
  const translateXRef = useRef(translateX);
  const translateYRef = useRef(translateY);
  const isPanningRef = useRef(false);
  const pointerCacheRef = useRef<Map<number, { clientX: number; clientY: number }>>(new Map());
  const lastPinchDistanceRef = useRef<number>(PINCH_DISTANCE_SENTINEL);

  scaleRef.current = scale;
  translateXRef.current = translateX;
  translateYRef.current = translateY;
  isPanningRef.current = isDragging;

  useEffect(() => {
    if (isDragging || !transformElRef.current) return;
    transformElRef.current.style.transform = buildTransformString(translateX, translateY, scale);
  }, [translateX, translateY, scale, isDragging]);

  useEffect(() => {
    const el = surfaceRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (isPanningRef.current || pointerCacheRef.current.size >= 2) e.preventDefault();
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
      pointerCacheRef.current.set(e.pointerId, { clientX: e.clientX, clientY: e.clientY });
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
      e.preventDefault();
      const cache = pointerCacheRef.current;
      cache.set(e.pointerId, { clientX: e.clientX, clientY: e.clientY });

      if (cache.size === 2) {
        const [[, posA], [, posB]] = Array.from(cache.entries());
        const curDist = distance(posA, posB);
        if (lastPinchDistanceRef.current > 0) {
          const ratio = curDist / lastPinchDistanceRef.current;
          const newScale = clampScale(scaleRef.current * ratio);
          scaleRef.current = newScale;
          const el = transformElRef.current;
          if (el) {
            el.style.transform = buildTransformString(
              translateXRef.current,
              translateYRef.current,
              newScale
            );
          }
        }
        lastPinchDistanceRef.current = curDist;
        return;
      }

      if (cache.size === 1) {
        lastPinchDistanceRef.current = PINCH_DISTANCE_SENTINEL;
      }

      if (cache.size === 1 && lastPointerRef.current) {
        const dx = e.clientX - lastPointerRef.current.x;
        const dy = e.clientY - lastPointerRef.current.y;
        const newX = Math.max(-PAN_CLAMP_PX, Math.min(PAN_CLAMP_PX, lastTranslateRef.current.x + dx));
        const newY = Math.max(-PAN_CLAMP_PX, Math.min(PAN_CLAMP_PX, lastTranslateRef.current.y + dy));
        lastTranslateRef.current = { x: newX, y: newY };
        translateXRef.current = newX;
        translateYRef.current = newY;
        lastPointerRef.current = { x: e.clientX, y: e.clientY };
        const el = transformElRef.current;
        if (el) {
          el.style.transform = buildTransformString(newX, newY, scaleRef.current);
        }
      }
    },
    [clampScale]
  );

  const handlePointerUp = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      const wasCapturedPointer = capturedPointerIdRef.current === e.pointerId;
      releaseCaptureForPointer(target, e.pointerId);
      pointerCacheRef.current.delete(e.pointerId);
      activePointerCountRef.current = Math.max(0, activePointerCountRef.current - 1);
      if (pointerCacheRef.current.size < 2) {
        lastPinchDistanceRef.current = PINCH_DISTANCE_SENTINEL;
        setScale(scaleRef.current);
      }
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
      pointerCacheRef.current.delete(e.pointerId);
      activePointerCountRef.current = Math.max(0, activePointerCountRef.current - 1);
      if (pointerCacheRef.current.size < 2) {
        lastPinchDistanceRef.current = PINCH_DISTANCE_SENTINEL;
        setScale(scaleRef.current);
      }
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
    ? {
        transform: buildTransformString(
          lastTranslateRef.current.x,
          lastTranslateRef.current.y,
          scaleRef.current
        ),
      }
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
