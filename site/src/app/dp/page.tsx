'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Functional requirements:
 * - Embed cold_draw (obsidian-utils) app via iframe.
 * - Full-viewport responsive iframe; usable on mobile and desktop.
 * - useSearchParams is wrapped in Suspense so static export can prerender (no request-time params).
 */

const COLD_DRAW_APP_URL = 'https://obsidian-utils-1040520853607.australia-southeast1.run.app/';

/**
 * The invite page is at /invite/[eventId]/[inviteToken]
 * If e and t are provided as query params the iframe uses that path.
 */
function DpPageContent(): React.ReactElement {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('e');
  const inviteToken = searchParams.get('t');

  const url = new URL(COLD_DRAW_APP_URL);
  if (eventId && inviteToken) {
    url.pathname = `/invite/${inviteToken}`;
  }

  return (
    <div className="min-h-screen w-full p-0">
      <iframe
        title="cold_draw"
        src={url.toString()}
        className="h-[100vh] min-h-[480px] w-full border-0"
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
}

/** Fallback for prerender: iframe with base URL (no invite params). */
function DpPageFallback(): React.ReactElement {
  return (
    <div className="min-h-screen w-full p-0">
      <iframe
        title="cold_draw"
        src={COLD_DRAW_APP_URL}
        className="h-[100vh] min-h-[480px] w-full border-0"
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
}

export default function DpPage(): React.ReactElement {
  return (
    <Suspense fallback={<DpPageFallback />}>
      <DpPageContent />
    </Suspense>
  );
}
