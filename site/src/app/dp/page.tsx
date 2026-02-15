'use client'
/**
 * Functional requirements:
 * - Embed cold_draw (obsidian-utils) app via iframe.
 * - Full-viewport responsive iframe; usable on mobile and desktop.
 */

const COLD_DRAW_APP_URL = 'https://obsidian-utils-1040520853607.australia-southeast1.run.app/';

export default function DpPage(): React.ReactElement {
  return (
    <div className='min-h-screen w-full bg-background p-0'>
      <iframe
        title='cold_draw'
        src={COLD_DRAW_APP_URL}
        className='h-[100vh] min-h-[480px] w-full border-0'
        allow='fullscreen'
        loading='lazy'
      />
    </div>
  );
}
