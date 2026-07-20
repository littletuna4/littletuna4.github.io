# Blog

## Post formats

Blog posts live under `site/src/app/blog/` in year route groups (for example `(2026)/my-post/`). Each post folder needs:

- `metadata.ts` exporting `blogPostMetadata` (see `_types.ts`)
- Either `page.mdx` or `page.tsx` as the post content (default-export React component)

The build script (`pnpm build:blog-index`) scans for both formats and writes `post_index.ts`. If a folder contains **both** `page.mdx` and `page.tsx`, MDX is used for index imports and a warning is logged.

Use **MDX** for typical prose posts. Use **TSX** when the post needs custom React layout, interactivity, or non-markdown structure (see `(2026)/intro-to-reqlan/page.tsx`).

### Interactive graphs in TSX posts

The intro-to-reqlan post embeds `ReqlanGraph.tsx`, which wraps the shared `BaseGraph` component (from `src/components/Industries/BaseGraph.tsx`) with post-specific node/edge data in `intro-to-reqlan/data/`. Nodes are grouped into five categories (language, data format, tool, concept, practice) with theme-aware colors. Graph data uses force layout with drag-and-pin interaction. Follow the same pattern for other posts: define nodes/edges in a `data/` module, build a graphology graph, and render via `BaseGraph` in a client component.

TSX posts should use theme Tailwind tokens (`text-foreground`, `text-primary`, `border-border`, etc.) for typography and links. Keep monospace scoped to `<code>` / `<pre>` only — the blog layout’s `.mdx-content` class applies code styling automatically.

## Images in blog posts

For MDX posts, use **imported Next.js images** instead of markdown image syntax.

1. Place image files (e.g. `.png`) in the same directory as the post’s `page.mdx`.
2. At the top of the MDX file, import the image(s):
   ```ts
   import myImage from './my-image.png';
   ```
3. In the body, use the shared `Image` component (provided by MDX components) with the imported asset:
   ```tsx
   <Image src={myImage} alt="Descriptive alt text" className="max-w-full h-auto rounded-lg shadow-sm mb-4" />
   ```

Do not use markdown image syntax `![alt](path)`; it does not use the Next.js Image component. Metadata (e.g. `metadata.ts` `image`) still uses string paths for OG/social and is processed by the blog build script.
