/**
 * Intro to Reqlan blog post (TSX)
 *
 * Functional Requirements:
 * - Present Reqlan context: abstraction trajectory, LLM transpilation, and verification patterns
 * - Explain why Markdown alone is insufficient for agent specifications
 * - Describe Reqlan architecture, influences, infrastructure, and roadmap
 * - Provide paradigm comparison and resource links
 * - Use theme Tailwind tokens for typography and links; monospace only on code/pre
 * - Remain fully responsive within the blog layout container
 * - Render glossary terms via styled Radix tooltip client components
 * - Display an interactive ideas graph (ReqlanBlogPostIdeasGraph via BaseGraph)
 */

import React from "react";
import { REQLAN_INTERNAL_PATH } from "@/data/links";
import {
  IntroToReqlanBlogPostTooltipProvider,
  ReqlanBlogPostTermWithTooltip,
} from "./ReqlanBlogPostTermWithTooltip";
import ReqlanBlogPostIdeasGraph from "./ReqlanGraph";

const reqlanBlogPostThemedLinkClassName =
  "text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm";

const sections = {
  introduction: (
    <section className="space-y-4">
      <h2>Introduction to Reqlan</h2>
      <p>
        Some LLM-enabled ramblings of questionable quality about a half-baked
        little technical project developed with intensity.
      </p>

      <h2>What&apos;s Going On?</h2>
      <p>
        The world is changing rapidly. For computer users and developers, code
        is unprecedentedly accessible and cheap to write. Consequently, an
        unprecedented volume is being generated. Projects are getting more
        capable, but larger and more challenging to comprehend and reason
        about.
      </p>
      <p>
        There is an addressable irony here: programming and software engineering
        are the very domains that provide the tools to handle large, complex
        informational assets.{" "}
        <em>
          Programming is the use of tools that allow you to organize, automate,
          and express interrelated complex ideas.
        </em>
      </p>

      <h2>Where It&apos;s Going: The Abstraction Trajectory</h2>
      <p>
        Despite post-GPT-3 AI&apos;s short history, clear parities exist
        between the current technological landscape and historical computer
        development. The software story is one of incremental abstraction:
      </p>
      <ol className="list-decimal pl-6 space-y-1">
        <li>Machine instructions written by hand.</li>
        <li>Punch cards and physical program storage.</li>
        <li>Assemblers translating mnemonic notation into machine code.</li>
        <li>Compilers for higher-level languages.</li>
        <li>Functions, modules, and reusable abstractions.</li>
        <li>Semantic intent expressed in near-natural language.</li>
      </ol>
      <p>
        Each step along this path renders previous manual workflows obsolete as
        trust builds in an automated wrapper. Automated transpilation of intent
        into execution replaces manual syntax authoring.
      </p>
      <blockquote>
        <p>
          If the software truism &ldquo;code is read far more than it is
          written, and run more than it is read&rdquo; holds, when was the last
          time you read assembly?
        </p>
      </blockquote>
      <p>
        Software excels at providing tools that repeatably execute scriptable
        tasks. However, for those tasks to be performant, explainable,
        on-target, and useful in a complex project, engineering effort is
        required to build the right abstractions and mental models.
      </p>
    </section>
  ),

  extension: (
    <section className="space-y-4">
      <h2>LLMs as Transpilers</h2>
      <p>
        Writing an application by prompting an LLM is the act of incrementally
        transpiling natural language into a target language or format. LLMs
        function as natural language transpilers across three operational
        paradigms: <strong>Analyst</strong>, <strong>Coach</strong>, and{" "}
        <strong>Task Executor</strong>. However, performing transpilation with
        LLMs introduces architectural quirks because they are:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>General-purpose:</strong> Lacking domain-specific structural
          constraints by default.
        </li>
        <li>
          <strong>Non-deterministic:</strong> Potentially silently incorrect
          across identical runs.
        </li>
        <li>
          <strong>Cooperative to a fault:</strong> They rarely throw hard errors
          when provided faulty inputs.
        </li>
        <li>
          <strong>Resource-intensive:</strong> Fantastically expensive to host
          and run at scale.
        </li>
        <li>
          <strong>Context-sensitive:</strong> Output quality is a direct
          function of input quality, token size, and batch limitations.
        </li>
      </ul>
      <p>
        Semantic equivalence does not require perfect determinism or upfront
        certainty—especially when paired with strong testing and verification
        feedback loops. As humans, we currently write large applications with
        finite context windows; we manage this through decomposition,
        abstraction, documentation, and relational references. This is a workflow
        problem, not a context-length problem.
      </p>
      <p>
        With sufficiently specific prompts and verification harnesses, LLMs can
        reliably add value to the definition of logical systems—functioning as
        analysts, coaches, and intelligent executors. Subjecting LLMs to strict,
        atomic semantic requirements enables self-correction and accurate
        logical generation.
      </p>

      <h2>The Verification Pattern: Lessons from Mathematics</h2>
      <p>
        Recent AI-led solutions to Erdős problems demonstrate a critical
        workflow evolution. These mathematical proofs are verified using{" "}
        <ReqlanBlogPostTermWithTooltip term={<strong>Lean</strong>} tooltipKey="lean" />
        . Providing an LLM access to Lean gives it the deterministic grounding
        required to work through complex logic.
      </p>
      <p>
        By checking reasoning steps against a compiler that enforces logical
        validity, the LLM&apos;s primary weaknesses (drift, hallucination,
        silent errors) are mitigated. Semantic equivalence supersedes strict
        determinism when verified. This same pattern of sequential verification
        against firm requirements must be applied to general software
        engineering. If a harness organizes atomic requirements appropriately,
        LLMs can test themselves against semantic assertions and execute
        productive, verified change.
      </p>
      <p>
        Prompt engineering heuristics require token minimization, strict context
        curation, and the omission of implicit conventions.
      </p>

      <h2>Reqlan: Semantic Programming Toolset</h2>
      <p>
        <strong>Reqlan</strong> is an IDE extension and language grammar designed
        to bridge the abstract support offered by autonomous agents and rigorous
        engineering practice. It is an approach to standardized, IDE-integrated
        functional specification generation and consumption.
      </p>

      <h3>Core Architecture</h3>
      <p>
        Reqlan operates close to the code, replacing static wish lists with an
        interactive ontology mapped through <code>.rq</code> files. The grammar
        structures systems into three core primitives:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Ideas:</strong> Conceptual nodes and feature definitions.
        </li>
        <li>
          <strong>Attributes:</strong> Static requirements, constraints, and
          metadata.
        </li>
        <li>
          <strong>References:</strong> Relational edges linking specifications
          directly to implementation files and standards.
        </li>
      </ul>
      <p>
        <em>
          Note: To review the foundational architecture, inspect the{" "}
          <code>ontology.rq</code> file within the project repository.
        </em>
      </p>

      <div className="not-prose my-6">
        <p className="text-sm text-foreground-secondary mb-3">
          Drag nodes to explore how Reqlan concepts relate. Colors group nodes
          by language, data format, tool, concept, and practice. Double-click to
          pin a node in place.
        </p>
        <div className="relative w-full bg-card rounded-lg border border-border overflow-hidden shadow-sm h-[min(480px,70vh)] min-h-[320px]">
          <ReqlanBlogPostIdeasGraph minHeight="320px" />
        </div>
      </div>

      
      <h3>Influences</h3>
      <p>
        Reqlan draws from several adjacent disciplines and toolchains:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Personal Knowledge Management (PKM) semantic graphs and relational
          note structures.
        </li>
        <li>
          Industrial control functional specifications and structured requirement
          hierarchies.
        </li>
        <li>
          Palantir Foundry-style ontology modeling for typed entity
          relationships.
        </li>
        <li>
          <ReqlanBlogPostTermWithTooltip term="TOON" tooltipKey="toon" /> and
          other token-efficiency formats for LLM context optimization.
        </li>
        <li>Static code analysis and lint-driven specification enforcement.</li>
      </ul>

      <h3>Current Capabilities &amp; Roadmap</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Language Server Protocol (LSP) Integration:</strong> Continuous
          improvement of language grammar, diagnostic rigor, and real-time
          validation.
        </li>
        <li>
          <strong>IDE Functionality:</strong> Advanced search experiences and
          graph-based indexing against vector embeddings.
        </li>
        <li>
          <strong>Continuous Verification:</strong> Automated auditing of
          developer and agent intent against stated semantic constraints.
        </li>
        <li>
          <strong>Future Scope:</strong> Reqlan Cloud infrastructure,
          embedding-indexed search for semantic graphs, deterministic
          verification loops for assumed logic, and expanded verification
          functions.
        </li>
      </ul>
      <h2>Why Markdown Isn&apos;t Enough</h2>
      <p>
        Writing wish lists in{" "}
        <ReqlanBlogPostTermWithTooltip
          term={<code>.md</code>}
          tooltipKey="markdown"
        />{" "}
        files is not engineering. While Markdown will remain ubiquitous in LLM
        workflows, its emerging limitations as an engineering tool are severe.
        The status quo toolset is inadequate for auditing developer intent.
      </p>
      <p>
        Todo lists grow endlessly. They accumulate semantic and technical
        dependencies, lack rigor, provide zero static verification, and are
        rarely context-optimized for machine execution. Standard documentation
        structures conflate immutable requirements with execution plans.
      </p>

      <h3>Requirements of a Strong Agent Specification</h3>
      <p>A rigorous agent specification must:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Detail precise functional changes.</li>
        <li>Point directly to applicable technical standards.</li>
        <li>
          Provide minimal, curated, and distilled context required to effect
          changes.
        </li>
        <li>
          Strictly separate requirements (static, referenceable) from execution
          plans (sequencing and approach).
        </li>
        <li>Maintain exhaustive coverage without token bloat.</li>
      </ul>
      <p>
        <em>
          What if specification-driven development referenced a living
          requirements graph instead of duplicating content across fragmented
          Markdown files?
        </em>
      </p>

      <h2>Paradigm Comparison</h2>
      <div className="overflow-x-auto -mx-1 px-1">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="border-b border-border bg-background-secondary">
              <th className="px-3 py-2 text-left font-semibold text-foreground">
                Concept
              </th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">
                Traditional Coding
              </th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">
                LLM Prompting
              </th>
              <th className="px-3 py-2 text-left font-semibold text-foreground">
                Reqlan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/60">
              <td className="px-3 py-2 font-medium">Determinism</td>
              <td className="px-3 py-2 text-foreground-secondary">Yes</td>
              <td className="px-3 py-2 text-foreground-secondary">No</td>
              <td className="px-3 py-2 text-foreground-secondary">
                Yes (verified bounds)
              </td>
            </tr>
            <tr className="border-b border-border/60">
              <td className="px-3 py-2 font-medium">Execution cost</td>
              <td className="px-3 py-2 text-foreground-secondary">
                Cheap to run
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Expensive per call
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Optimized via targeted context
              </td>
            </tr>
            <tr className="border-b border-border/60">
              <td className="px-3 py-2 font-medium">Abstraction level</td>
              <td className="px-3 py-2 text-foreground-secondary">
                Generally lower (
                <ReqlanBlogPostTermWithTooltip
                  term="Python"
                  tooltipKey="python"
                />
                ,{" "}
                <ReqlanBlogPostTermWithTooltip
                  term="TypeScript"
                  tooltipKey="typescript"
                />
                ,{" "}
                <ReqlanBlogPostTermWithTooltip term="Rust" tooltipKey="rust" />
                )
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Natural language (high)
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Semantic functional spec
              </td>
            </tr>
            <tr className="border-b border-border/60">
              <td className="px-3 py-2 font-medium">Human readability</td>
              <td className="px-3 py-2 text-foreground-secondary">
                Potentially poor / dense
              </td>
              <td className="px-3 py-2 text-foreground-secondary">High</td>
              <td className="px-3 py-2 text-foreground-secondary">
                High (structured)
              </td>
            </tr>
            <tr className="border-b border-border/60">
              <td className="px-3 py-2 font-medium">Context mechanics</td>
              <td className="px-3 py-2 text-foreground-secondary">
                Deterministic project indexing
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Finite size, cost &amp; performance scaling limits
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Graph-based, token-optimized (
                <ReqlanBlogPostTermWithTooltip term="TOON" tooltipKey="toon" />
                )
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 font-medium">Serialization</td>
              <td className="px-3 py-2 text-foreground-secondary">
                Source files
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                Unstructured prompts
              </td>
              <td className="px-3 py-2 text-foreground-secondary">
                <ReqlanBlogPostTermWithTooltip
                  term="JSON"
                  tooltipKey="json"
                />{" "}
                / <code>.rq</code> graphs
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  ),

  "development-and-implementation": (
    <section className="space-y-4">
      <h2>Integration &amp; Distribution</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>IDE integration:</strong> Native extension for VS Code and
          Cursor.
        </li>
        <li>
          <strong>Distribution:</strong> VS Code Marketplace and Open VSX
          Registry.
        </li>
        <li>
          <strong>Language server:</strong> Custom{" "}
          <ReqlanBlogPostTermWithTooltip
            term="Language Server Protocol (LSP)"
            tooltipKey="lsp"
          />{" "}
          integration with real-time validation and diagnostics.
        </li>
      </ul>

      <h2>Technical Journey &amp; Architecture Notes</h2>
      <p>
        Development prioritizes systematic logic verification over textual
        accumulation. Infrastructure implements:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Graph rendering &amp; physics:</strong> Differentiating between
          Cola and physics-based layouts for semantic dependency graphs.
        </li>
        <li>
          <strong>Fable for analysis:</strong> Utilizing Fable to perform deep
          analysis on graph rendering, state machines, and sequencing bugs.
          While resource-intensive on tokens, it forces a first-principles
          analysis style that identifies complex root causes.
        </li>
        <li>
          <strong>
            <ReqlanBlogPostTermWithTooltip
              term="Changesets"
              tooltipKey="changesets"
            />
            :
          </strong>{" "}
          Integrating robust versioning and changelog management for structured
          schema updates.
        </li>
        <li>
          <strong>CI/CD &amp; identity:</strong> Pipelines via Azure DevOps
          (ADO) and GitHub Actions; federated identity and Azure identity
          management; distribution through Open VSX.
        </li>
        <li>
          <strong>Prompt ergonomics:</strong> Designing inputs to be
          token-minimized, stripping implicit conventions, and supplying only
          necessary architectural context.
        </li>
      </ul>
    </section>
  ),
};

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
          {sections.introduction}

          <hr className="border-border my-8" />

          {sections.extension}

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
            <div className="mt-5 pt-5 border-t border-border/60">
              {sections["development-and-implementation"]}
            </div>
          </details>

          <section className="space-y-4">
            <h2>Closing Thoughts</h2>
            <p>
              Programming is the art of using tools to organize, automate, and
              express interrelated complex ideas. Reqlan is a contribution toward
              making that process more intentional, auditable, and verifiable in
              the LLM era.
            </p>

            <div>
              <h3>Resources &amp; Access</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a href={REQLAN_INTERNAL_PATH} className={reqlanBlogPostThemedLinkClassName}>
                    Reqlan site
                  </a>
                </li>
                <li>
                  <a
                    href="https://marketplace.visualstudio.com/search?term=reqlan&target=VSCode&category=All%20categories&sortBy=Relevance"
                    className={reqlanBlogPostThemedLinkClassName}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    VS Code Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="https://open-vsx.org/?search=reqlan"
                    className={reqlanBlogPostThemedLinkClassName}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Open VSX Registry
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </IntroToReqlanBlogPostTooltipProvider>
    </article>
  );
}
