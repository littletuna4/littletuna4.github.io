'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Renders Mermaid diagram inline; click opens pan/zoom modal with same diagram
 * - Reuses MermaidDiagram for both inline and modal content
 * - Respects DisablePanzoomModals context; when disabled, renders diagram only
 */

import { useState } from 'react';
import { Expand } from 'lucide-react';
import { useDisablePanzoomModals } from '@/components/contexts/DisablePanzoomModalsContext';
import { MermaidDiagram } from '@/components/ui/MermaidDiagram';
import { PanzoomModalRoot } from '@/components/ui/PanzoomModalRoot';
import { PanzoomSurface } from '@/components/ui/PanzoomSurface';

export interface MermaidDiagramWithModalProps {
  source: string;
  className?: string;
}

export function MermaidDiagramWithModal({ source, className = '' }: MermaidDiagramWithModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contextDisable = useDisablePanzoomModals();

  if (contextDisable) {
    return <MermaidDiagram source={source} className={className} />;
  }

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
            <div className="w-full h-full min-h-[50vh] flex items-center justify-center">
              <div className="w-full h-full min-w-0 min-h-0 flex items-center justify-center">
                <MermaidDiagram
                  source={source}
                  className="!my-0 w-full h-full min-w-0 min-h-0 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full [&_svg]:object-contain"
                />
              </div>
            </div>
          </PanzoomSurface>
        </PanzoomModalRoot>
      )}
    </>
  );
}
