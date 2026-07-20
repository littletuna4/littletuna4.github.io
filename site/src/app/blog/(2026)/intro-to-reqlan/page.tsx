import React from "react";

const tooltips = {
  transpiler: "A source-to-source compiler that translates source code from one programming language to another at a similar level of abstraction.",
  lean: "A functional programming language and theorem prover used by mathematicians to formally verify proofs.",
  lsp: "Language Server Protocol: A standardized communications protocol between code editors and language servers providing autocomplete, go-to-definition, and diagnostics.",
  changesets: "A tool for managing versioning and changelogs in multi-package repositories.",
  toon: "Token-optimized serialization format designed to minimize context window consumption in LLM workflows."
};

const sections = {
  introduction: (
    <section>
      <h1>Introduction to Reqlan</h1>
      <p>
        Some LLM-enabled ramblings of questionable quality about a half-baked little technical project developed with intensity.
      </p>
      
      <h2>What's Going On?</h2>
      <p>
        The world is changing rapidly. For computer users and developers, code is unprecedentedly accessible and cheap to write. Consequently, an unprecedented volume is being generated. Projects are getting more capable, but larger and more challenging to comprehend and reason about. 
      </p>
      <p>
        There is an addressable irony here: programming and software engineering are the very domains that provide the tools to handle large, complex informational assets. <em>Programming is the use of tools that allow you to organize, automate, and express interrelated complex ideas.</em>
      </p>

      <h2>Where It's Going: The Abstraction Trajectory</h2>
      <p>
        Despite post-GPT-3 AI's short history, clear parities exist between the current technological landscape and historical computer development. The software story is one of incremental abstraction:
      </p>
      <ol>
        <li>Engineers wrote raw machine code.</li>
        <li>Higher-level languages introduced functions and reusable abstractions.</li>
        <li>Now, developers express semantic intent in near-natural language.</li>
      </ol>
      <p>
        Each step along this path renders previous manual workflows obsolete as trust builds in an automated wrapper. Punch cards gave way to assemblers, which gave way to compilers.
      </p>
      <blockquote>
        <p>If the software truism "code is read far more than it is written, and run more than it is read" holds, when was the last time you read assembly?</p>
      </blockquote>
      <p>
        Software excels at providing tools that repeatably execute scriptable tasks. However, for those tasks to be performant, explainable, on-target, and useful in a complex project, engineering effort is required to build the right abstractions and mental models.
      </p>

      <h2>LLMs as Transpilers</h2>
      <p>
        Writing an application by prompting an LLM is the act of incrementally transpiling natural language into a target language or format. However, performing transpilation with LLMs introduces architectural quirks because they are:
      </p>
      <ul>
        <li><strong>General-purpose:</strong> Lacking domain-specific structural constraints by default.</li>
        <li><strong>Non-deterministic:</strong> Potentially silently incorrect across identical runs.</li>
        <li><strong>Cooperative to a fault:</strong> They rarely throw hard errors when provided faulty inputs.</li>
        <li><strong>Resource-intensive:</strong> Fantastically expensive to host and run at scale.</li>
        <li><strong>Context-sensitive:</strong> Output quality is a direct function of input quality, token size, and batch limitations.</li>
      </ul>
      <p>
        Semantic equivalence does not require perfect determinism or upfront certainty—especially when paired with strong testing and verification feedback loops. As humans, we currently write large applications with finite context windows; we manage this through decomposition, abstraction, documentation, and relational references. This is a workflow problem, not a context-length problem.
      </p>
      <p>
        With sufficiently specific prompts and verification harnesses, LLMs can reliably add value to the definition of logical systems—functioning as analysts, coaches, and intelligent executors.
      </p>
    </section>
  ),

  "development-and-implementation": (
    <section>
      <h2>Why Markdown Isn’t Enough</h2>
      <p>
        Writing wish lists in <code>.md</code> files is not engineering. While Markdown will remain ubiquitous in LLM workflows, its emerging limitations as an engineering tool are severe. The status quo toolset is inadequate for auditing developer intent.
      </p>
      <p>
        Todo lists grow endlessly. They accumulate semantic and technical dependencies, lack rigor, provide zero static verification, and are rarely context-optimized for machine execution.
      </p>

      <h3>Requirements of a Strong Agent Specification</h3>
      <ul>
        <li>Detail precise functional changes.</li>
        <li>Point directly to applicable technical standards.</li>
        <li>Provide minimal, curated, and distilled context required to effect changes.</li>
        <li>Strictly separate requirements (static, referenceable) from execution plans (sequencing and approach).</li>
        <li>Maintain exhaustive coverage without token bloat.</li>
      </ul>
      <p>
        <em>What if specification-driven development referenced a living requirements graph instead of duplicating content across fragmented Markdown files?</em>
      </p>

      <h2>The Verification Pattern: Lessons from Mathematics</h2>
      <p>
        Recent AI-led solutions to Erdős problems demonstrate a critical workflow evolution. These mathematical proofs are verified using <strong>Lean</strong>. Providing an LLM access to Lean gives it the deterministic grounding required to work through complex logic. 
      </p>
      <p>
        By checking reasoning steps against a compiler that enforces logical validity, the LLM's primary weaknesses (drift, hallucination, silent errors) are mitigated. This same pattern of sequential verification against firm requirements must be applied to general software engineering. If a harness organizes atomic requirements appropriately, LLMs can test themselves against semantic assertions and execute productive, verified change.
      </p>

      <h2>Paradigm Comparison</h2>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse", width: "100%", margin: "1rem 0" }}>
        <thead>
          <tr>
            <th>Concept</th>
            <th>Traditional Coding Tools</th>
            <th>LLM Prompting</th>
            <th>Reqlan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Determinism</strong></td>
            <td>Yes</td>
            <td>No</td>
            <td>Yes (Verified Bounds)</td>
          </tr>
          <tr>
            <td><strong>Execution Cost</strong></td>
            <td>Cheap to run</td>
            <td>Expensive per call</td>
            <td>Optimized via targeted context</td>
          </tr>
          <tr>
            <td><strong>Abstraction Level</strong></td>
            <td>Generally Lower</td>
            <td>Natural Language (High)</td>
            <td>Semantic Functional Spec</td>
          </tr>
          <tr>
            <td><strong>Human Readability</strong></td>
            <td>Potentially Poor / Dense</td>
            <td>High</td>
            <td>High (Structured)</td>
          </tr>
          <tr>
            <td><strong>Context Mechanics</strong></td>
            <td>Deterministic project indexing</td>
            <td>Finite size, cost & performance scaling limits</td>
            <td>Graph-based, token-optimized (TOON)</td>
          </tr>
        </tbody>
      </table>

      <h2>Technical Journey & Architecture Notes</h2>
      <ul>
        <li><strong>Graph Rendering & Physics:</strong> Differentiating between Cola and physics-based layouts for semantic dependency graphs.</li>
        <li><strong>Fable for Analysis:</strong> Utilizing Fable to perform deep analysis on graph rendering, state machines, and sequencing bugs. While resource-intensive on tokens, it forces a first-principles analysis style that identifies complex root causes.</li>
        <li><strong>Changesets:</strong> Integrating robust versioning and changelog management for structured schema updates.</li>
        <li><strong>CI/CD & Identity:</strong> Multi-platform pipelines spanning Azure DevOps, OpenVSX, GitHub Actions, and federated identity configurations.</li>
        <li><strong>Prompt Ergonomics:</strong> Designing inputs to be token-minimized, stripping implicit conventions, and supplying only necessary architectural context.</li>
      </ul>
    </section>
  ),

  extension: (
    <section>
      <h2>Reqlan: Semantic Programming Toolset</h2>
      <p>
        <strong>Reqlan</strong> is an IDE extension and language grammar designed to bridge the abstract support offered by autonomous agents and rigorous engineering practice. It is an approach to standardized, IDE-integrated functional specification generation and consumption.
      </p>
      
      <h3>Core Architecture</h3>
      <p>
        Reqlan operates close to the code, replacing static wish lists with an interactive ontology. The grammar structures systems into three core primitives:
      </p>
      <ul>
        <li><strong>Ideas:</strong> Conceptual nodes and feature definitions.</li>
        <li><strong>Attributes:</strong> Static requirements, constraints, and metadata.</li>
        <li><strong>References:</strong> Relational edges linking specifications directly to implementation files and standards.</li>
      </ul>
      <p>
        <em>Note: To review the foundational architecture, inspect the <code>ontology.rq</code> file within the project repository.</em>
      </p>

      <h3>Current Capabilities & Roadmap</h3>
      <ul>
        <li><strong>Language Server Protocol (LSP) Integration:</strong> Continuous improvement of language grammar, diagnostic rigor, and real-time validation.</li>
        <li><strong>IDE Functionality:</strong> Advanced search experiences and graph-based indexing against vector embeddings.</li>
        <li><strong>Continuous Verification:</strong> Automated auditing of developer and agent intent against stated semantic constraints.</li>
        <li><strong>Future Scope:</strong> Expanded verification functions and potential cloud-native graph synchronization (Reqlan Cloud).</li>
      </ul>

      <h2>Closing Thoughts</h2>
      <p>
        Programming is the art of using tools to organize, automate, and express interrelated complex ideas. Reqlan is a contribution toward making that process more intentional, auditable, and verifiable in the LLM era.
      </p>
      
      <div style={{ marginTop: "2rem" }}>
        <h3>Resources & Access</h3>
        <ul>
          <li><a href="#site">Reqlan Site</a></li>
          <li><a href="#vsc">VS Code Marketplace</a></li>
          <li><a href="#openvsx">Open VSX Registry</a></li>
        </ul>
      </div>
    </section>
  )
};

export default function IntroToReqlanPage(): React.JSX.Element {
  return (
    <div className="reqlan-page-container" style={{ fontFamily: "monospace", maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <header style={{ borderBottom: "2px solid #000", paddingBottom: "1rem", marginBottom: "2rem" }}>
        <h1>REQLAN // SPECIFICATION & ONTOLOGY</h1>
        <p>A standardized approach to semantic programming and intent verification.</p>
      </header>

      <main>
        {sections.introduction}
        
        <hr style={{ margin: "2rem 0" }} />
        
        <details style={{ margin: "2rem 0", padding: "1rem", border: "1px solid #ccc" }}>
          <summary style={{ fontWeight: "bold", cursor: "pointer" }}>
            VIEW DEVELOPMENT, IMPLEMENTATION & ARCHITECTURE SPECIFICS
          </summary>
          <div style={{ marginTop: "1rem" }}>
            {sections["development-and-implementation"]}
          </div>
        </details>

        <hr style={{ margin: "2rem 0" }} />

        {sections.extension}
      </main>
    </div>
  );
}