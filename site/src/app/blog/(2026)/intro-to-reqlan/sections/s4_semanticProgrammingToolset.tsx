/**
 * Reqlan semantic programming toolset section for the Intro to Reqlan blog post.
 *
 * Functional Requirements:
 * - Describe Reqlan purpose, core architecture primitives, influences, and roadmap
 * - Display the interactive ideas graph (ReqlanBlogPostIdeasGraph via BaseGraph)
 * - Render glossary terms via ReqlanBlogPostTermWithTooltip
 * - Use theme tokens for secondary caption text and card chrome; remain fully responsive
 */

import React from "react";
import { ReqlanBlogPostTermWithTooltip } from "../ReqlanBlogPostTermWithTooltip";
import ReqlanBlogPostIdeasGraph from "../ReqlanGraph";

export default function S4SemanticProgrammingToolsetSection(): React.JSX.Element {
  return (
    <section className="space-y-4">
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
    </section>
  );
}
