# MDX custom components

Custom components available in all blog and MDX content via `useMDXComponents` (see `src/mdx-components.tsx`). Styling follows THEME_SYSTEM.md.

## Code blocks and inline code

Inline and fenced code are styled via the `.mdx-content` scope in `src/app/globals.css`: monospace font, line breaks preserved for blocks, and distinct background/padding for inline snippets. The MDX compiler emits `<pre><code>...</code></pre>` for fenced blocks and `<code>...</code>` for inline; context (inside `pre` or not) drives the CSS. The only special handling in components is Mermaid (see below).

## Tables

GitHub Flavored Markdown (GFM) table syntax is supported via `remark-gfm` (see `next.config.ts`). The plugin is registered under `options.remarkPlugins` using the string `'remark-gfm'` so that Turbopack (used in build) can resolve it; function references are not serializable for the Rust pipeline. Tables are parsed from standard markdown and rendered with custom table components in `mdx-components.tsx` (CustomTable, thead, tbody, tr, th, td) for borders, header styling, and horizontal scroll on small screens.

Use standard GFM table syntax in MDX:

```md
| Column A | Column B |
| -------- | -------- |
| Cell 1   | Cell 2   |
```

## Math (LaTeX)

Inline and block math are supported via `remark-math` and `rehype-katex` (see `next.config.ts`). KaTeX styles are loaded in `src/app/blog/layout.tsx`.

- **Inline math**: single dollar delimiters: `$E = mc^2$` → E = mc² (inline).
- **Block (display) math**: double dollar delimiters, optionally on their own lines:

```md
$$
P(y = 1 \mid x; w) = \frac{1}{1 + e^{-w^T x}}
$$
```

Use standard LaTeX/KaTeX commands. Block math is centered and rendered in display style.

## Typography (SmartyPants)

`remark-smartypants` runs on all MDX content and converts ASCII punctuation to typographic characters:

- Straight double quotes `"..."` → curly quotes “…”
- Double hyphen `--` → en dash –
- Triple hyphen `---` → em dash —
- Ellipsis `...` → …

No extra syntax required; write normal markdown and the plugin applies these replacements.

## Mermaid diagrams

Fenced code blocks with language `mermaid` are rendered as diagrams on the client. The Mermaid library is loaded conditionally from a CDN (jsDelivr) only when a diagram is on the page (see `src/components/ui/MermaidDiagram.tsx`). No npm dependency; no import in MDX required. Use standard markdown:

- Opening fence: \`\`\`mermaid
- Then your Mermaid source (e.g. `graph TD`, `flowchart LR`, etc.)
- Closing fence: \`\`\`

Example: a diagram defined with `graph TD` and `A[Start] --> B[End]` will render as a flowchart.

Diagrams are rendered after hydration. Theme (light/dark) is read at render time from `document.documentElement.classList`. If rendering fails, the raw source is shown in an error block.

## ExpandableSection

Collapsible section using native `<details>` / `<summary>`. Supports arbitrary nesting.

### Usage in MDX

```mdx
<ExpandableSection summary="Short label shown when collapsed">
  <p>Content when expanded. Can include nested ExpandableSections.</p>
  <ExpandableSection summary="Nested section">
    <p>Deeper content.</p>
  </ExpandableSection>
</ExpandableSection>
```

### Props

| Prop       | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------- |
| `summary`  | `string` | Label used as the disclosure trigger.             |
| `children` | `ReactNode` | Rendered when expanded; may include nested sections. |
| `className`| `string` | Optional class names for the outer `<details>`.   |

### Implementation

- Implemented in `src/components/ui/ExpandableSection.tsx`.
- Uses theme classes: `border-border`, `bg-background-secondary`, `text-foreground-secondary`, etc.
- Chevron (lucide-react `ChevronDown`) rotates when open via `group-open:rotate-180`.
