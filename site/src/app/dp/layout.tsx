/**
 * Layout for /dp (dinner party invite / cold_draw) route.
 *
 * Functional requirements:
 * - Provide Open Graph and general metadata for dinner party invite pages.
 * - Server Component so metadata is available at build time for static export.
 */

import type { Metadata } from 'next';
import { APP_CONSTS } from '@/data/app';

const PAGE_TITLE = 'Dinner Party Invite';
const PAGE_DESCRIPTION =
  'RSVP and details for a small potluck dinner. Part of the 2026 dinner party series.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'website',
    url: APP_CONSTS.APP_URL ? `${APP_CONSTS.APP_URL}/dp` : undefined,
    siteName: APP_CONSTS.APP_SHORTNAME ?? 'Dinner Party',
  },
};

export default function DpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <>{children}</>;
}
