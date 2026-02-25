# /dp iframe embed contract

The `/dp` page embeds the cold_draw (obsidian-utils) app in an iframe. The parent locks the document to one viewport (no sidebar/footer, html/body overflow and height locked) so there is only one scroll bar (inside the iframe).

## Do you need to change the embedded page?

- **To remove nested scroll bars:** No. The parent (this site) handles it: full-viewport passthrough and document scroll lock on `/dp`. The only scroll is inside the iframe.
- **To have the page scroll (and iframe not scroll) when embed content is taller than the viewport:** Yes. The embedded app must post its content height (see Message contract below). Then the parent sets the iframe height to that and the page scrolls once.

## Behaviour

- If the embedded app **does not** send a height message, the iframe uses `height: 100vh` (one scroll bar inside the iframe when content overflows).
- If the embedded app **does** send a height message, the iframe uses `height: max(100vh, contentHeightPx)`, so the page has a single scroll bar and the iframe does not scroll internally.

## Message contract (optional, from embed to parent)

From the embedded app (same origin as the iframe `src`), post a message to the parent:

- **Type:** `cold_draw_content_height`
- **Payload:** `{ type: 'cold_draw_content_height', height: number }`
- **Origin check:** Parent only accepts messages from the iframe’s origin (e.g. `https://obsidian-utils-1040520853607.australia-southeast1.run.app`).
- **When to send:** On load and when content height changes (e.g. resize observer on `document.body` or root container). `height` should be the full scroll height of the content (e.g. `document.documentElement.scrollHeight` or `document.body.scrollHeight`).

Example (inside the embedded app):

```ts
const height = Math.max(
  document.documentElement.scrollHeight,
  document.body.scrollHeight
);
window.parent.postMessage(
  { type: 'cold_draw_content_height', height },
  'https://littletuna4-origin.example.com' // parent origin
);
```

Parent implementation: `site/src/app/dp/page.tsx` (constant `COLD_DRAW_HEIGHT_MESSAGE_TYPE`).
