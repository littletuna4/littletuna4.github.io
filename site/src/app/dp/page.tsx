'use client'

import { useSearchParams } from "next/navigation";

/**
 * Functional requirements:
 * - Embed cold_draw (obsidian-utils) app via iframe.
 * - Full-viewport responsive iframe; usable on mobile and desktop.
 */

const COLD_DRAW_APP_URL = 'https://obsidian-utils-1040520853607.australia-southeast1.run.app/';

/**
 * The invite page is at /invite/[eventId]/[inviteToken]
 * If these are provided in the url as query parameters the iframe should use them
 */

export default function DpPage(): React.ReactElement {
    const searchParams = useSearchParams();
    const eventId = searchParams.get('e');
    const inviteToken = searchParams.get('t');

    const url = new URL(COLD_DRAW_APP_URL);
    if (eventId && inviteToken) {
        // set the path to /invite/[eventId]/[inviteToken]
        url.pathname = `/invite/${eventId}/${inviteToken}`;
    }

  return (
    <div className='min-h-screen w-full p-0'>
        <pre>{JSON.stringify(url, null, 2)}</pre>
      <iframe
        title='cold_draw'
        src={url.toString()}
        className='h-[100vh] min-h-[480px] w-full border-0'
        allow='fullscreen'
        loading='lazy'
      />
    </div>
  );
}
