/**
 * ExpandableSection
 *
 * Functional Requirements:
 * - Renders collapsible content with a visible summary; expanded on user interaction.
 * - Uses native <details>/<summary> for accessibility and no-JS behaviour.
 * - Supports arbitrary nesting; multiple ExpandableSections may be nested.
 * - Themed styling (border, background, text) per THEME_SYSTEM.md.
 * - Chevron icon indicates expand/collapse state via CSS (no client JS required).
 */

import React, { type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ExpandableSectionProps {
  /** Short label shown when collapsed; acts as the disclosure trigger. */
  summary: string;
  /** Content shown when expanded; may include nested ExpandableSections. */
  children: ReactNode;
  /** Optional class names for the outer details element. */
  className?: string;
}

export function ExpandableSection({
  summary,
  children,
  className,
}: ExpandableSectionProps): React.ReactElement {
  return (
    <details
      className={cn(
        'group my-3 rounded-md border border-border bg-background-secondary text-foreground-secondary',
        'open:bg-background-tertiary',
        '[&_details]:ml-4 [&_details]:border-l-2 [&_details]:border-l-border',
        className
      )}
    >
      <summary className="list-none cursor-pointer select-none">
        <span className="flex items-center gap-2 py-2 px-3 font-medium text-foreground hover:text-foreground-secondary">
          <ChevronDown
            aria-hidden
            className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"
          />
          {summary}
        </span>
      </summary>
      <div className="px-3 pb-3 pt-0 text-sm leading-relaxed [&>p]:mb-2 last:[&>p]:mb-0">
        {children}
      </div>
    </details>
  );
}
