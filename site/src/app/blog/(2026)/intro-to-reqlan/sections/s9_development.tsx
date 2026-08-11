import { ReqlanBlogPostTermWithTooltip } from "../ReqlanBlogPostTermWithTooltip";

export default function S9DevelopmentSection(): React.JSX.Element {
  return (
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
  );
}