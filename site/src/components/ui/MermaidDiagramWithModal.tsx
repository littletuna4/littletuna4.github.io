'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Renders Mermaid diagram inline; click opens pan/zoom modal with same diagram
 * - Reuses MermaidDiagram for both inline and modal content
 * - Respects DisablePanzoomModals context; when disabled, renders diagram only
 * - Modal: measure content area, render diagram at 2× that size then scale 50% so it fills viewport and stays sharp
 */

import { useState, useRef, useLayoutEffect } from 'react';
import { Expand } from 'lucide-react';
import { useDisablePanzoomModals } from '@/components/contexts/DisablePanzoomModalsContext';
import { MermaidDiagram } from '@/components/ui/MermaidDiagram';
import { PanzoomModalRoot } from '@/components/ui/PanzoomModalRoot';
import { PanzoomSurface } from '@/components/ui/PanzoomSurface';

const MERMAID_MODAL_RESOLUTION_MULTIPLIER = 2;

export interface MermaidDiagramWithModalProps {
  source: string;
  className?: string;
}

export function MermaidDiagramWithModal({ source, className = '' }: MermaidDiagramWithModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contentSize, setContentSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const contentRef = useRef<HTMLDivElement>(null);
  const contextDisable = useDisablePanzoomModals();

  useLayoutEffect(() => {
    if (!isModalOpen || !contentRef.current) return;
    const el = contentRef.current;
    const update = () => {
      if (el) {
        const w = el.clientWidth;
        const h = el.clientHeight;
        if (w > 0 && h > 0) setContentSize({ width: w, height: h });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isModalOpen]);

  if (contextDisable) {
    return <MermaidDiagram source={source} className={className} />;
  }

  const intrinsicWidth = contentSize.width * MERMAID_MODAL_RESOLUTION_MULTIPLIER;
  const intrinsicHeight = contentSize.height * MERMAID_MODAL_RESOLUTION_MULTIPLIER;
  const scaleDown = 1 / MERMAID_MODAL_RESOLUTION_MULTIPLIER;
  const hasSize = contentSize.width > 0 && contentSize.height > 0;

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsModalOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        className={`relative group cursor-zoom-in rounded-lg outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 block w-full ${className}`}
        aria-label="Expand diagram"
      >
        <MermaidDiagram source={source} />
        <span className="absolute top-2 right-2 rounded p-1.5 bg-muted/80 text-foreground-secondary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <Expand className="w-4 h-4" aria-hidden />
        </span>
      </div>
      {isModalOpen && (
        <PanzoomModalRoot
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          ariaLabel="Mermaid diagram"
          scrollOnly={false}
        >
          <PanzoomSurface className="w-full h-full min-h-0">
            <div ref={contentRef} className="w-full h-full min-h-0 relative overflow-hidden">
              {hasSize ? (
                <div
                  className="absolute top-0 left-0 will-change-transform"
                  style={{
                    width: intrinsicWidth,
                    height: intrinsicHeight,
                    transform: `scale(${scaleDown})`,
                    transformOrigin: '0 0',
                  }}
                >
                  <MermaidDiagram
                    source={source}
                    intrinsicSize={{ width: intrinsicWidth, height: intrinsicHeight }}
                    className="!my-0 [&_svg]:w-full [&_svg]:h-full [&_svg]:object-contain"
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <MermaidDiagram source={source} className="!my-0" />
                </div>
              )}
            </div>
          </PanzoomSurface>
        </PanzoomModalRoot>
      )}
    </>
  );
}
