'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Wrap a pre/code block so clicking opens a modal with the same code (scrollable, no panzoom)
 * - Preserve syntax highlighting class (codeClassName) in modal for .mdx-content-style display
 * - Expand affordance (cursor, hover) so users know the block is clickable
 * - Uses PanzoomModalRoot with scrollOnly for code content
 */

import { useState, ReactNode } from 'react';
import { Expand } from 'lucide-react';
import { useDisablePanzoomModals } from '@/components/contexts/DisablePanzoomModalsContext';
import { PanzoomModalRoot } from '@/components/ui/PanzoomModalRoot';

export interface PreWithCodeModalTriggerProps {
  codeText: string;
  codeClassName?: string;
  children: ReactNode;
}

const PRE_CLASSES =
  'font-[var(--font-mono)] whitespace-pre p-4 rounded-lg overflow-x-auto text-[0.95em] bg-[hsl(var(--code-bg))] text-[hsl(var(--code-fg))]';

export function PreWithCodeModalTrigger({
  codeText,
  codeClassName = '',
  children,
}: PreWithCodeModalTriggerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contextDisable = useDisablePanzoomModals();

  if (contextDisable) {
    return <pre className={`${PRE_CLASSES} mb-4`}>{children}</pre>;
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
        className="relative group cursor-zoom-in rounded-lg outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Expand code block"
      >
        <pre className={`${PRE_CLASSES} mb-4`}>{children}</pre>
        <span className="absolute top-2 right-2 rounded p-1.5 bg-muted/80 text-foreground-secondary opacity-0 group-hover:opacity-100 transition-opacity">
          <Expand className="w-4 h-4" aria-hidden />
        </span>
      </div>
      <PanzoomModalRoot
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ariaLabel="Code block"
        scrollOnly
      >
        <pre className={`${PRE_CLASSES} min-h-0`}>
          <code className={codeClassName}>{codeText}</code>
        </pre>
      </PanzoomModalRoot>
    </>
  );
}
