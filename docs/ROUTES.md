# Route definitions

All internal links in the site use the centralized route definitions from `site/src/lib/routes.ts`.

## Source

Routes are **auto-generated** by `scripts/gen-routes.ts`. Run `pnpm gen:routes` to regenerate.

The script:
- Scans `src/app` for `page.tsx`, `page.ts`, and `page.mdx` files
- Collapses blog post routes into a single `/blog/[slug]` dynamic route
- Emits type-safe builder functions (e.g. `root()`, `blog()`, `events_eventId({ eventId })`)

## Usage

Import route builders from `@/lib/routes`:

```ts
import { root, blog, events, events_eventId, blog_slug } from '@/lib/routes';

// Static routes
<Link href={root()}>Home</Link>
<Link href={blog()}>Blog</Link>
<Link href={events()}>Events</Link>

// Dynamic routes
<Link href={events_eventId({ eventId: '1' })}>Event 1</Link>
<Link href={blog_slug({ slug: 'my-post' })}>Blog post</Link>

// Anchors
<Link href={`${root()}#links`}>Links section</Link>
```

## Convention

- Never hardcode internal paths (e.g. `/blog`, `/events`) in components
- Use route builders for all internal `href` values
- External links (mailto, tel, https) remain as-is
