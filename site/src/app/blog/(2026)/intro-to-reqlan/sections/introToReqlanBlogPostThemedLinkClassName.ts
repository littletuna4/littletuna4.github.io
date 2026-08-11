/**
 * Shared themed link class for Intro to Reqlan blog post sections.
 *
 * Functional Requirements:
 * - Export a single Tailwind class string for primary-colored underlinked anchors
 * - Follow THEME_SYSTEM.md tokens (text-primary, focus ring)
 * - Remain usable from any section component without duplication
 */

export const introToReqlanBlogPostThemedLinkClassName =
  "text-primary underline underline-offset-2 transition-colors hover:text-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm";
