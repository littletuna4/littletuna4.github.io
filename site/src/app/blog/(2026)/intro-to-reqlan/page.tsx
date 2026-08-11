/**
 * Intro to Reqlan blog post (TSX)
 *
 * Functional Requirements:
 * - Present Reqlan context: abstraction trajectory, LLM transpilation, and verification patterns
 * - Introduce the Reqlan toolset workflow, components, install deeplinks, and next steps
 * - Explain why Markdown alone is insufficient for agent specifications
 * - Describe Reqlan architecture, influences, infrastructure, and roadmap
 * - Provide paradigm comparison and a closing invite for feedback and contributors
 * - Compose content from numbered sections/ components (s1_–s8_); keep layout chrome here
 * - Use theme Tailwind tokens for typography and links; monospace only on code/pre
 * - Remain fully responsive within the blog layout container
 * - Render glossary terms via styled Radix tooltip client components
 * - Display an interactive ideas graph (ReqlanBlogPostIdeasGraph via BaseGraph)
 */

import React from "react";
import { IntroToReqlanBlogPostTooltipProvider } from "./ReqlanBlogPostTermWithTooltip";
import {
  S1IntroductionSection,
  S2LlmsAsTranspilersSection,
  S3ReqlanSection,
  S4SemanticProgrammingToolsetSection,
  S8ClosingThoughtsSection,
  S9DevelopmentSection,
} from "./sections";

export default function IntroToReqlanPage(): React.JSX.Element {
  return (
    <article className="reqlan-page-container w-full text-foreground">
      <header className="mb-8 border-b border-border pb-6">
        <h1 className="text-foreground">Reqlan: Semantic Specification Protocol</h1>
        <p className="text-foreground-secondary text-lg mb-0">
          A standardized approach to semantic programming and intent verification.
        </p>
      </header>

      <IntroToReqlanBlogPostTooltipProvider>
        <main className="mdx-content space-y-8">
          <S1IntroductionSection />

          <hr className="border-border my-8" />

          <S2LlmsAsTranspilersSection />
          <S3ReqlanSection />
          <S4SemanticProgrammingToolsetSection />

          <hr className="border-border my-8" />

          <details className="group rounded-lg border border-border bg-background-secondary/40 p-4 sm:p-5">
            <summary className="cursor-pointer font-semibold text-foreground list-none flex items-center justify-between gap-2 [&::-webkit-details-marker]:hidden">
              <span>Development, implementation &amp; architecture specifics</span>
              <span
                aria-hidden
                className="text-foreground-tertiary transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>
            <S9DevelopmentSection />
          </details>

          <S8ClosingThoughtsSection />
        </main>
      </IntroToReqlanBlogPostTooltipProvider>
    </article>
  );
}
