# MDX custom components

Custom components available in all blog and MDX content via `useMDXComponents` (see `src/mdx-components.tsx`). Styling follows THEME_SYSTEM.md.

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
