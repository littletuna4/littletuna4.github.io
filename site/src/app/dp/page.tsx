'use client';

import { Suspense, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Functional requirements:
 * - Embed cold_draw (obsidian-utils) app via iframe.
 * - Full-viewport responsive iframe; usable on mobile and desktop.
 * - useSearchParams is wrapped in Suspense so static export can prerender (no request-time params).
 * - Iframe min-height is max(100vh, embedded content height) when the embed posts height via postMessage, to avoid double scroll bars.
 */

const COLD_DRAW_APP_URL = 'https://obsidian-utils-1040520853607.australia-southeast1.run.app/';
const COLD_DRAW_ORIGIN = new URL(COLD_DRAW_APP_URL).origin;

/** Message payload the embedded app may send so we can size the iframe to content and avoid double scroll. */
const COLD_DRAW_HEIGHT_MESSAGE_TYPE = 'cold_draw_content_height';

/**
 * The invite page is at /invite/[inviteToken].
 * If t (invite token) is provided as a query param the iframe uses that path; e is ignored.
 */
function DpPageContent(): React.ReactElement {
  const searchParams = useSearchParams();
  const inviteToken = searchParams.get('t');
  const [contentHeightPx, setContentHeightPx] = useState<number | null>(null);

  const url = new URL(COLD_DRAW_APP_URL);
  if (inviteToken) {
    url.pathname = `/invite/${inviteToken}`;
  }

  const handleMessage = useCallback((event: MessageEvent) => {
    if (event.origin !== COLD_DRAW_ORIGIN) return;
    const data = event.data as { type?: string; height?: number };
    if (data?.type !== COLD_DRAW_HEIGHT_MESSAGE_TYPE || typeof data?.height !== 'number' || data.height < 0) return;
    setContentHeightPx(data.height);
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  const isFullViewportOnly = contentHeightPx === null;
  return (
    <div
      className={`w-full p-0 ${isFullViewportOnly ? 'h-screen overflow-hidden' : 'min-h-screen'}`}
    >
      <iframe
        title="cold_draw"
        src={url.toString()}
        className="min-h-[480px] h-full w-full border-0"
        style={{
          height:
            contentHeightPx !== null
              ? `max(100vh, ${contentHeightPx}px)`
              : '100vh',
        }}
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
}

/** Fallback for prerender: iframe with base URL (no invite params). */
function DpPageFallback(): React.ReactElement {
  return (
    <div className="h-screen w-full overflow-hidden p-0">
      <iframe
        title="cold_draw"
        src={COLD_DRAW_APP_URL}
        className="h-full min-h-[480px] w-full border-0"
        style={{ height: '100vh' }}
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
