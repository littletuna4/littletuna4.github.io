# MDX pan/zoom modals

Images and fenced code blocks in MDX open in modals: images in a **pan/zoom** modal, code blocks in a **scroll-only** modal. Implemented in `src/mdx-components.tsx` and the UI components below.

## Behavior

- **Images**: Clicking an `<Image>` (Next.js) in MDX opens a full overlay with the same image. You can zoom (wheel, double-click) and pan (drag). Close via backdrop click, Escape, or the close (X) button. Uses `PanzoomModalRoot` + `PanzoomSurface`. MDX must not import `Image` from `next/image` so the global `Image` (wrapper) is used.
- **Code blocks**: Fenced blocks (e.g. ` ```js `) are wrapped in a clickable block. Click opens a modal with the same code in a scrollable area.
- **Mermaid**: Fenced ` ```mermaid ` blocks render as diagrams; clicking opens a pan/zoom modal with the same diagram.

## Components

| Component | Role |
| --------- | ----- |
| `PanzoomModalRoot` | Overlay, backdrop, close button (lucide X), ESC/backdrop close, body scroll lock, ARIA dialog. |
| `PanzoomSurface` | Pan/zoom for a single child (pointer + wheel); scale clamped; double-tap to zoom/reset. |
| `MdxImagePanzoomModalWrapper` | Wraps Next `Image`; click opens modal with image in `PanzoomSurface`. |
| `PreWithCodeModalTrigger` | Wraps `pre`; click opens modal with code (scroll-only). |

## Opt-out

### Per image

- **Prop**: `<Image disablePanzoomModal alt="..." src={...} />` — that image does not open the modal.
- **Alternative**: Use the non-modal image component so the global `Image` mapping is not used for that node:

```mdx
import { MdxInlineImageWithoutPanzoomModal } from '@/components/ui/MdxImagePanzoomModalWrapper';

<MdxInlineImageWithoutPanzoomModal src={myImage} alt="No modal" />
```

### Page/section level

Wrap content in the context provider to disable modals for all images and code blocks in that subtree:

```tsx
import { DisablePanzoomModalsForChildrenProvider } from '@/components/contexts/DisablePanzoomModalsContext';

<DisablePanzoomModalsForChildrenProvider disable>
  <YourMdxContent />
</DisablePanzoomModalsForChildrenProvider>
```

There is no per–code-block component (MDX emits `pre`/`code` from the parser); use the provider to disable code modals for a whole page or section.

## Accessibility

- Modal uses `role="dialog"`, `aria-modal="true"`, and an optional `ariaLabel`.
- Close button and backdrop are keyboard-accessible; focus is restored on close.
- Body scroll is locked while the modal is open.

## Theming

Modals use theme tokens from THEME_SYSTEM.md: `bg-card`, `border-border`, `text-foreground`, `bg-muted`, etc., so they match light/dark and the navy-green palette.
