"use client";

/**
 * Reqlan blog post term tooltip components
 *
 * Functional Requirements:
 * - Render glossary terms with accessible Radix tooltips styled via theme tokens
 * - Support React node triggers (e.g. bold/code wrappers) and plain text labels
 * - Provide a single TooltipProvider wrapper for the intro-to-reqlan article body
 * - Style triggers distinctly from body text and links using accent theme tokens
 */

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const reqlanBlogPostTermTooltips = {
  python: "Prioritizes developer ergonomics.",
  typescript: "Provides type safety and compile-time guarantees.",
  rust: "Ensures memory safety and strict type guarantees.",
  json: "Standardized data serialization.",
  markdown:
    "Offers simplicity and basic AI support, lacking static verification.",
  lean: "Functional programming language enabling deterministic proof verification.",
  transpiler:
    "A source-to-source compiler that translates source code from one programming language to another at a similar level of abstraction.",
  lsp: "Language Server Protocol: A standardized communications protocol between code editors and language servers providing autocomplete, go-to-definition, and diagnostics.",
  changesets:
    "A tool for managing versioning and changelogs in multi-package repositories.",
  toon: "Token-optimized serialization format designed to minimize context window consumption in LLM workflows.",
} as const;

export type ReqlanBlogPostTooltipKey = keyof typeof reqlanBlogPostTermTooltips;

const reqlanBlogPostTermTooltipTriggerClassName =
  "inline cursor-help rounded-md border border-accent/25 bg-accent/10 px-1.5 py-0.5 font-medium text-accent shadow-sm transition-colors hover:border-accent/45 hover:bg-accent/15 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background [&_code]:rounded [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:font-medium [&_code]:text-accent [&_strong]:font-semibold [&_strong]:text-accent";

export function IntroToReqlanBlogPostTooltipProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      {children}
    </TooltipProvider>
  );
}

export function ReqlanBlogPostTermWithTooltip({
  term,
  tooltipKey,
  className,
}: {
  term: React.ReactNode;
  tooltipKey: ReqlanBlogPostTooltipKey;
  className?: string;
}): React.JSX.Element {
  const tooltipText = reqlanBlogPostTermTooltips[tooltipKey];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          tabIndex={0}
          className={cn(reqlanBlogPostTermTooltipTriggerClassName, className)}
        >
          {term}
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-xs border-border bg-popover text-popover-foreground text-sm leading-snug"
      >
        {tooltipText}
      </TooltipContent>
    </Tooltip>
  );
}
