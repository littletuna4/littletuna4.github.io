# Intro to Reqlan blog post

Static TSX blog article at `src/app/blog/(2026)/intro-to-reqlan/`. Styling follows [THEME_SYSTEM.md](./THEME_SYSTEM.md).

## Layout

`page.tsx` owns article chrome only:

- Header (title + subtitle)
- Tooltip provider wrapper
- Horizontal rules between major narrative blocks
- Collapsible `<details>` around development/implementation notes

Body copy lives in numbered `sections/sN_desc` files and is composed in reading order.

## Sections

| File | Component | Responsibility |
| --- | --- | --- |
| `s1_introduction.tsx` | `S1IntroductionSection` | Opening framing, “What’s going on?”, “Where its going.” + Mermaid abstraction flowchart |
| `s2_llmsAsTranspilers.tsx` | `S2LlmsAsTranspilersSection` | Natural-language transpilation thesis; quirk/mitigation table with rowspan-merged shared mitigations and full `border-border` cell grid; Lean/Erdős sequential-verification argument |
| `s3_reqlan.tsx` | `S3ReqlanSection` | Narrative intro to the Reqlan toolset: workflow, language/CLI/extension, ontology.rq + install deeplinks, next steps |
| `s4_semanticProgrammingToolset.tsx` | `S4SemanticProgrammingToolsetSection` | Reqlan overview, architecture, ideas graph, influences, roadmap |
| `s5_markdownWishLists.tsx` | `S5MarkdownWishListsSection` | Why Markdown is a poor spec-driven-development tool; agent-spec criteria; living requirements graph vs wish lists; AGENT.md; doc drift |
| `s6_paradigmComparison.tsx` | `S6ParadigmComparisonSection` | Comparison table (traditional / prompting / Reqlan) |
| `s7_developmentAndImplementation.tsx` | `S7DevelopmentAndImplementationSection` | Integration, distribution, technical journey |
| `s8_closingThoughts.tsx` | `S8ClosingThoughtsSection` | Closing framing for reqlan in the LLM era; invite feedback and contributors |
| `introToReqlanBlogPostThemedLinkClassName.ts` | — | Shared primary-link Tailwind classes |
| `index.tsx` | — | Barrel re-exports for the page |

## Related modules

- `ReqlanBlogPostTermWithTooltip.tsx` — glossary tooltips (client)
- `ReqlanGraph.tsx` — interactive ideas graph
- `data/` — graph data and loader
- `metadata.ts` — route metadata
