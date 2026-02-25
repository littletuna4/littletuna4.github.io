# Site layout

## Sidebar layout

The app uses a **sidebar layout** (no sticky header). The sidebar is fully responsive and uses a flex layout so header controls (logo, close, collapse) never overlap.

- **Desktop (md+):** A fixed left sidebar (`--sidebar-width`: 16rem) contains logo, main nav (Blog, Dinners), phone, theme toggle, and Contact CTA. It is **collapsible** to an icon-only strip (`--sidebar-collapsed-width`: 5rem); collapse state is persisted in `localStorage` under `sidebar-collapsed`. Main content padding switches between the two widths. Header uses flex (logo flex-1, collapse button shrink-0) so the collapse control does not overlap the logo. When collapsed, header uses `justify-between` so logo and collapse sit at opposite ends.
- **Mobile:** The sidebar is hidden by default. A thin top bar shows a menu icon and logo; tapping the icon opens the sidebar as an overlay drawer with a backdrop. Tapping the backdrop or the close (X) button closes it. Nav and footer actions use minimum 44px touch targets where practical.

## Key components

- **`LayoutShell`** – Client wrapper used in root layout. Renders `Sidebar`, the mobile top bar, and the main content wrapper (including `Footer`). Holds mobile sidebar open/close state and desktop collapsed state (read/write from localStorage). For the `/dp` route only, renders a full-viewport passthrough (no Sidebar, mobile bar, or Footer) so the embedded iframe is the only content and only one scroll context (no nested scroll bars); see `docs/DP_IFRAME_EMBED.md`.
- **`Sidebar`** – Logo, nav links, theme toggle, contact. Fixed left on desktop, collapsible to icon-only; overlay drawer on mobile, controlled by `isMobileOpen` / `onMobileClose`. Receives `isDesktopCollapsed` and `onDesktopCollapseToggle` from `LayoutShell`.
- **`Footer`** – Unchanged; still rendered below main content inside `LayoutShell`.

## CSS

- `globals.css` defines in `:root`: `--sidebar-width: 16rem`, `--sidebar-collapsed-width: 5rem`.
- Main content area uses `md:pl-[var(--sidebar-width)]` when expanded and `md:pl-[var(--sidebar-collapsed-width)]` when collapsed.

## Header component

`Header` is no longer used in the root layout. It remains in the codebase for reference or reuse; the sidebar and mobile bar replace its behaviour.
