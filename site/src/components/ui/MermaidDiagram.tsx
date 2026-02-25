'use client';

/**
 * MermaidDiagram
 *
 * Functional Requirements:
 * - Renders Mermaid diagram source as SVG on the client; loads mermaid from CDN only when needed.
 * - Uses a unique id per instance so multiple diagrams on a page work.
 * - Themed: respects dark mode via mermaid.initialize theme when possible.
 * - Re-renders when theme changes (subscribes to useTheme resolvedTheme) so theme switcher updates diagrams.
 * - Fallback: if render or script load fails, shows the raw source in a code-style block.
 * - No layout shift: container has min-height during load; overflow for wide diagrams.
 */

import React, { useEffect, useId, useRef, useState } from 'react';
import { useTheme } from '@/components/providers/ThemeProvider';

const MERMAID_CDN_URL = 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.min.js';

declare global {
  interface Window {
    mermaid?: {
      initialize: (config: { startOnLoad?: boolean; theme?: string; securityLevel?: string }) => void;
      render: (
        id: string,
        source: string
      ) => Promise<{ svg: string; bindFunctions?: (element: HTMLElement) => void }>;
    };
  }
}

let mermaidLoadPromise: Promise<Window['mermaid']> | null = null;

function loadMermaidScript(): Promise<Window['mermaid']> {
  if (typeof window === 'undefined') return Promise.reject(new Error('Not in browser'));
  if (window.mermaid) return Promise.resolve(window.mermaid);
  if (mermaidLoadPromise) return mermaidLoadPromise;

  mermaidLoadPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${MERMAID_CDN_URL}"]`);
    if (existing) {
      if (window.mermaid) {
        resolve(window.mermaid);
        return;
      }
      existing.addEventListener('load', () => resolve(window.mermaid));
      return;
    }

    const script = document.createElement('script');
    script.src = MERMAID_CDN_URL;
    script.async = true;
    script.onload = () => resolve(window.mermaid);
    script.onerror = () => reject(new Error('Failed to load Mermaid from CDN'));
    document.head.appendChild(script);
  });

  return mermaidLoadPromise;
}

function getMermaidTheme(): 'default' | 'dark' {
  if (typeof document === 'undefined') return 'default';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'default';
}

export interface MermaidDiagramProps {
  /** Raw Mermaid diagram source (e.g. "graph TD\n  A --> B"). */
  source: string;
  /** Optional class name for the wrapper. */
  className?: string;
}

export function MermaidDiagram({ source, className }: MermaidDiagramProps): React.ReactElement {
  const id = useId().replace(/:/g, '-');
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const trimmed = source.trim();
    if (!trimmed) {
      setSvgContent('');
      return;
    }

    let cancelled = false;

    async function render(): Promise<void> {
      try {
        const mermaid = await loadMermaidScript();
        if (!mermaid || cancelled) return;

        const theme = getMermaidTheme();
        mermaid.initialize({
          startOnLoad: false,
          theme,
          securityLevel: 'loose',
        });
        const { svg, bindFunctions } = await mermaid.render(`mermaid-${id}`, trimmed);
        if (cancelled) return;
        setSvgContent(svg);
        setError(null);
        if (containerRef.current && bindFunctions) {
          bindFunctions(containerRef.current);
        }
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : String(err));
        setSvgContent(null);
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [source, id, resolvedTheme]);

  if (error) {
    return (
      <div
        className={`rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 mb-4 overflow-x-auto ${className ?? ''}`}
        role="alert"
      >
        <p className="text-sm text-red-800 dark:text-red-200 mb-2">Mermaid diagram failed to render.</p>
        <pre className="text-xs font-mono text-gray-700 dark:text-gray-300 whitespace-pre-wrap break-words">
          <code>{source}</code>
        </pre>
      </div>
    );
  }

  if (svgContent === null) {
    return (
      <div
        className={`min-h-[120px] rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 ${className ?? ''}`}
        aria-busy="true"
      >
        <span className="text-sm text-gray-500 dark:text-gray-400">Loading diagram…</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mermaid-diagram overflow-x-auto my-4 flex justify-center [&_svg]:max-w-full [&_svg]:h-auto ${className ?? ''}`}
      dangerouslySetInnerHTML={svgContent ? { __html: svgContent } : undefined}
    />
  );
}
