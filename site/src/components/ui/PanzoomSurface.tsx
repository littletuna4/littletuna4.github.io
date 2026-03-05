'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Pan and zoom a single child (e.g. image) via pointer and wheel
 * - Scale clamped to min/max; pan clamped so content stays reachable
 * - Double-click or double-tap toggles zoom in / reset
 * - GPU-accelerated transform (translate3d + scale)
 * - Works with mouse and touch; no external panzoom libs
 */

import {
  useRef,
  useState,
  useCallback,
  ReactNode,
  WheelEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';

const SCALE_MIN = 0.5;
const SCALE_MAX = 4;
const SCALE_STEP = 0.25;
const DOUBLE_TAP_MS = 300;
const PAN_CLAMP_PX = 1200;

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

  const handlePointerDown = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (e.button !== 0) return;
      const now = Date.now();
      if (now - lastTapRef.current < DOUBLE_TAP_MS) {
        setScale((prev) => (prev > 1 ? 1 : 1.5));
        setTranslateX(0);
        setTranslateY(0);
        lastTapRef.current = 0;
        return;
      }
      lastTapRef.current = now;
      setIsDragging(true);
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      lastTranslateRef.current = { x: translateX, y: translateY };
    },
    [translateX, translateY]
  );

  const handlePointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging || !lastPointerRef.current) return;
      const dx = e.clientX - lastPointerRef.current.x;
      const dy = e.clientY - lastPointerRef.current.y;
      const newX = Math.max(-PAN_CLAMP_PX, Math.min(PAN_CLAMP_PX, lastTranslateRef.current.x + dx));
      const newY = Math.max(-PAN_CLAMP_PX, Math.min(PAN_CLAMP_PX, lastTranslateRef.current.y + dy));
      lastTranslateRef.current = { x: newX, y: newY };
      lastPointerRef.current = { x: e.clientX, y: e.clientY };
      setTranslateX(newX);
      setTranslateY(newY);
    },
    [isDragging]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    lastPointerRef.current = null;
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsDragging(false);
    lastPointerRef.current = null;
  }, []);

  return (
    <div
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
        className="w-full h-full will-change-transform"
        style={{
          transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
