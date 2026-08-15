# Intro to Reqlan blog post

Static TSX blog article at `src/app/blog/(2026)/intro-to-reqlan/`. Styling follows [THEME_SYSTEM.md](./THEME_SYSTEM.md).

## Layout

`page.tsx` owns article chrome only:

- Header (Ed mascot + title + subtitle)
- Tooltip provider wrapper
- Horizontal rules between major narrative blocks
- Collapsible `<details>` around development/implementation notes

Body copy lives in numbered `sections/sN_desc` files and is composed in reading order.

## Images (static / public)

Colocated next to `page.tsx` / `metadata.ts` like other posts (not under `assets/`):

| File | Role |
| --- | --- |
| `logo.png` | Reqlan logo (512); shown in `s3_reqlan` at toolset introduction |
| `logo-256.png` / `logo-128.png` | Smaller logo rasters |
| `ed.svg` | Ed mascot source |
| `ed.png` | Ed mascot raster (512); featured `metadata.image`; header |
| `ed-256.png` / `ed-128.png` | Smaller Ed rasters |

`pnpm build:blog-index` copies all colocated image files into `public/blog/intro-to-reqlan/` for static URLs (`/blog/intro-to-reqlan/logo.png`, `/blog/intro-to-reqlan/ed.png`, etc.). Regenerate size variants with `pnpm generate-ed-mascot-pngs` (bakes Ed SVG `transform` / `transform-box` into path coords before sharp/librsvg rasterize — otherwise the body/ears render malformed).

## Sections

| File | Component | Responsibility |
| --- | --- | --- |
| `s1_introduction.tsx` | `S1IntroductionSection` | Opening framing, “What’s going on?”, “Where its going.” + Mermaid abstraction flowchart |
| `s2_llmsAsTranspilers.tsx` | `S2LlmsAsTranspilersSection` | Natural-language transpilation thesis; quirk/mitigation table with rowspan-merged shared mitigations and full `border-border` cell grid; Lean/Erdős sequential-verification argument |
| `s3_reqlan.tsx` | `S3ReqlanSection` | Narrative intro to the Reqlan toolset (logo.png), workflow, language/CLI/extension, ontology.rq (reqlan.com spec primary, GitHub codebase alternative) + install deeplinks, next steps |
| `s4_semanticProgrammingToolset.tsx` | `S4SemanticProgrammingToolsetSection` | Reqlan overview, architecture, ideas graph, influences, roadmap |
| `s5_markdownWishLists.tsx` | `S5MarkdownWishListsSection` | Why Markdown is a poor spec-driven-development tool; agent-spec criteria; living requirements graph vs wish lists; AGENT.md; doc drift |
| `s6_paradigmComparison.tsx` | `S6ParadigmComparisonSection` | Comparison table (traditional / prompting / Reqlan) |
| `s7_developmentAndImplementation.tsx` | `S7DevelopmentAndImplementationSection` | Integration, distribution, technical journey |
| `s8_closingThoughts.tsx` | `S8ClosingThoughtsSection` | Closing framing for reqlan in the LLM era; invite feedback and contributors |
| `introToReqlanBlogPostThemedLinkClassName.ts` | — | Shared primary-link Tailwind classes |
| `index.tsx` | — | Barrel re-exports for the page |

## Related modules

- `ReqlanBlogPostTermWithTooltip.tsx` — glossary tooltips (client)
- `ReqlanGraph.tsx` — interactive ideas graph (Sigma.js via BaseGraph; explicit-height host so WebGL sizes on mobile)
- `data/` — graph data and loader
- `metadata.ts` — route metadata (`image: './ed.png'`)
- `scripts/generate-intro-to-reqlan-ed-mascot-pngs.mjs` — sharp PNG generator for Ed + logo size variants
