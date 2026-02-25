/**
 * Events Not Found Page
 *
 * Functional Requirements:
 * - Display friendly message when an event is not found
 * - Provide link back to events listing
 * - Match overall site styling
 */

import Link from 'next/link';
import { Calendar, ChevronLeft } from 'lucide-react';
import { events } from '@/lib/routes';

export default function EventNotFound(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center'>
        <Calendar
          className='w-16 h-16 text-foreground-muted mx-auto mb-6'
          aria-hidden='true'
        />
        <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
          Event not found
        </h1>
        <p className='text-foreground-secondary max-w-md mx-auto mb-8'>
          This event doesn't exist, or you might have an old link. Check the
          events page for upcoming dinners.
        </p>
        <Link
          href={events()}
          className='
            inline-flex items-center gap-2
            bg-primary hover:bg-primary/90 text-primary-foreground
            px-6 py-3 rounded-lg font-semibold
            transition-colors
          '
        >
          <ChevronLeft className='w-4 h-4' aria-hidden='true' />
          Back to Events
        </Link>
      </div>
    </div>
  );
}
