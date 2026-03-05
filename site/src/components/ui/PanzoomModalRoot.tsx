'use client';

/**
 * FUNCTIONAL REQUIREMENTS:
 * - Full-viewport overlay modal for pan/zoom content (images, code)
 * - Backdrop click and ESC close; lucide X close button
 * - Focus trap and body scroll lock when open
 * - ARIA dialog role and aria-modal for accessibility
 * - Theme-aware styling (border, card, foreground) per THEME_SYSTEM.md
 * - Responsive padding and safe area; no external panzoom deps
 */

import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface PanzoomModalRootProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Optional label for the dialog (e.g. "Enlarge image"). */
  ariaLabel?: string;
  /** If true, content area is scrollable only (e.g. code block); no panzoom surface. */
  scrollOnly?: boolean;
}

export function PanzoomModalRoot({
  isOpen,
  onClose,
  children,
  ariaLabel = 'Enlarge content',
  scrollOnly = false,
}: PanzoomModalRootProps) {
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      previouslyFocusedElementRef.current =
        (document.activeElement as HTMLElement) ?? null;
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      if (previouslyFocusedElementRef.current?.focus) {
        previouslyFocusedElementRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex flex-col p-2 sm:p-3"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Enter' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close"
      />
      <div
        className="relative flex flex-col flex-1 min-h-0 bg-card border border-border rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 rounded-lg bg-black/30 text-white/80 hover:bg-black/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <div
          className={
            scrollOnly
              ? 'flex-1 overflow-auto min-h-0 p-4'
              : 'flex-1 min-h-0 overflow-hidden p-2'
          }
        >
          {children}
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }
  return modalContent;
}
