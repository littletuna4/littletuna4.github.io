/**
 * Individual Dinner Party Event Page
 *
 * Functional Requirements:
 * - Display event details (date, theme, description)
 * - Show confirmed guest list (public names only)
 * - Embed RSVP Google Form
 * - Display dietary requirements summary (if public)
 * - Handle invalid eventId gracefully
 * - Generate static params for all events at build time
 * - Fully responsive layout
 * - Integrate with theme system for consistent styling
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ChevronLeft,
  ExternalLink,
  Utensils,
  Check,
} from 'lucide-react';
import { MetadataBreadcrumb } from '@/components/ui/metadata-breadcrumb';
import {
  fetchDinnerPartyEvents,
  fetchEventRsvpResponses,
  DinnerPartyEvent,
  RsvpResponse,
  DINNER_PARTY_CONFIG,
} from '@/lib/dinner-parties/google-sheets-client';

interface EventPageProps {
  readonly params: Promise<{ eventId: string }>;
}

export async function generateStaticParams(): Promise<
  Array<{ eventId: string }>
> {
  const events = await fetchDinnerPartyEvents();
  return events.map(event => ({
    eventId: event.eventId,
  }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const events = await fetchDinnerPartyEvents();
  const event = events.find(e => e.eventId === resolvedParams.eventId);

  if (!event) {
    return {
      title: 'Event Not Found',
    };
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return {
    title: `${event.theme || 'Dinner Party'} | ${formattedDate}`,
    description:
      event.description ||
      `Join us for a potluck dinner on ${formattedDate} in Taringa, Brisbane.`,
  };
}

function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatEventTime(timeString: string | undefined): string {
  if (!timeString) return '6:00 PM';
  return timeString;
}

function GuestListItem({
  guest,
}: {
  readonly guest: RsvpResponse;
}): React.JSX.Element {
  return (
    <div className='flex items-center gap-3 py-2'>
      <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
        <span className='text-primary text-sm font-medium'>
          {guest.displayName.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className='flex-1 min-w-0'>
        <p className='text-foreground font-medium truncate'>
          {guest.displayName}
        </p>
        {guest.hasPlusOne && (
          <p className='text-xs text-foreground-tertiary'>+1</p>
        )}
      </div>
      <Check
        className='w-4 h-4 text-success flex-shrink-0'
        aria-label='Confirmed'
      />
    </div>
  );
}

export default async function DinnerPartyEventPage({
  params,
}: EventPageProps): Promise<React.JSX.Element> {
  const resolvedParams = await params;
  const events = await fetchDinnerPartyEvents();
  const event = events.find(e => e.eventId === resolvedParams.eventId);

  if (!event) {
    notFound();
  }

  const rsvpResponses = await fetchEventRsvpResponses(event.eventId);
  const confirmedGuests = rsvpResponses.filter(r => r.response === 'yes');
  const totalAttendees = confirmedGuests.reduce(
    (count, guest) => count + 1 + (guest.hasPlusOne ? 1 : 0),
    0
  );

  const isPastEvent = new Date(event.date) < new Date();
  const rsvpFormUrl = `${DINNER_PARTY_CONFIG.RSVP_FORM_BASE_URL}?entry.EVENT_ID=${event.eventId}`;

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        {/* Breadcrumb */}
        <div className='mb-8'>
          <MetadataBreadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Events', href: '/events' },
              { label: event.theme || 'Dinner Party' },
            ]}
          />
        </div>

        {/* Back Link */}
        <Link
          href='/events'
          className='inline-flex items-center text-foreground-tertiary hover:text-foreground transition-colors mb-8'
        >
          <ChevronLeft className='w-4 h-4 mr-1' aria-hidden='true' />
          Back to all events
        </Link>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Event Header */}
            <section>
              {isPastEvent && (
                <span className='inline-block text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full mb-4'>
                  Past Event
                </span>
              )}
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                {event.theme || 'Potluck Dinner'}
              </h1>

              {/* Event Meta */}
              <div className='flex flex-wrap gap-4 text-foreground-secondary'>
                <div className='flex items-center gap-2'>
                  <Calendar className='w-5 h-5' aria-hidden='true' />
                  <span>{formatEventDate(event.date)}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <Clock className='w-5 h-5' aria-hidden='true' />
                  <span>{formatEventTime(event.time)}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <MapPin className='w-5 h-5' aria-hidden='true' />
                  <span>{event.location || 'Taringa, Brisbane'}</span>
                </div>
              </div>
            </section>

            {/* Description */}
            {event.description && (
              <section className='bg-card border border-border rounded-2xl p-6'>
                <h2 className='text-xl font-semibold text-foreground mb-4'>
                  About this dinner
                </h2>
                <p className='text-foreground-secondary whitespace-pre-line'>
                  {event.description}
                </p>
              </section>
            )}

            {/* What to Expect */}
            <section className='bg-card border border-border rounded-2xl p-6'>
              <h2 className='text-xl font-semibold text-foreground mb-4'>
                What to expect
              </h2>
              <ul className='space-y-3 text-foreground-secondary'>
                <li className='flex items-start gap-3'>
                  <Utensils
                    className='w-5 h-5 text-primary flex-shrink-0 mt-0.5'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='text-foreground'>Potluck style</strong> —
                    Bring a dish to share if you can. Don't stress about it.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <Users
                    className='w-5 h-5 text-primary flex-shrink-0 mt-0.5'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='text-foreground'>Plus-ones welcome</strong> —
                    Partners, friends, whoever makes you more comfortable.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <MapPin
                    className='w-5 h-5 text-primary flex-shrink-0 mt-0.5'
                    aria-hidden='true'
                  />
                  <span>
                    <strong className='text-foreground'>Casual venue</strong> —
                    It's a sharehouse, not a restaurant. BYO drinks recommended.
                  </span>
                </li>
              </ul>
            </section>

            {/* RSVP Form */}
            {!isPastEvent && (
              <section className='bg-card border border-border rounded-2xl p-6'>
                <h2 className='text-xl font-semibold text-foreground mb-4'>
                  RSVP
                </h2>
                <p className='text-foreground-secondary mb-6'>
                  Let me know if you can make it. No pressure either way.
                </p>
                <a
                  href={rsvpFormUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='
                    inline-flex items-center gap-2
                    bg-primary hover:bg-primary/90 text-primary-foreground
                    px-6 py-3 rounded-lg font-semibold
                    transition-colors
                  '
                >
                  Open RSVP Form
                  <ExternalLink className='w-4 h-4' aria-hidden='true' />
                </a>
                <p className='text-xs text-foreground-muted mt-4'>
                  The form will ask for your invite code if you have one. If you
                  don't have a code, you can still register interest.
                </p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Guest List */}
            <section className='bg-card border border-border rounded-2xl p-6'>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold text-foreground'>
                  Who's coming
                </h2>
                <span className='text-sm text-foreground-tertiary'>
                  {totalAttendees} attending
                </span>
              </div>

              {confirmedGuests.length > 0 ? (
                <div className='divide-y divide-border'>
                  {confirmedGuests.map(guest => (
                    <GuestListItem key={guest.inviteId} guest={guest} />
                  ))}
                </div>
              ) : (
                <p className='text-foreground-tertiary text-sm'>
                  No confirmed guests yet. Be the first!
                </p>
              )}
            </section>

            {/* Event Details Card */}
            <section className='bg-primary/5 border border-primary/20 rounded-2xl p-6'>
              <h2 className='text-lg font-semibold text-foreground mb-4'>
                Details
              </h2>
              <dl className='space-y-3 text-sm'>
                <div>
                  <dt className='text-foreground-tertiary'>Date</dt>
                  <dd className='text-foreground font-medium'>
                    {formatEventDate(event.date)}
                  </dd>
                </div>
                <div>
                  <dt className='text-foreground-tertiary'>Time</dt>
                  <dd className='text-foreground font-medium'>
                    {formatEventTime(event.time)}
                  </dd>
                </div>
                <div>
                  <dt className='text-foreground-tertiary'>Location</dt>
                  <dd className='text-foreground font-medium'>
                    {event.location || 'Taringa, Brisbane'}
                  </dd>
                </div>
                {event.status && (
                  <div>
                    <dt className='text-foreground-tertiary'>Status</dt>
                    <dd className='text-foreground font-medium capitalize'>
                      {event.status}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className='text-foreground-tertiary'>Format</dt>
                  <dd className='text-foreground font-medium'>
                    Potluck (bring a dish)
                  </dd>
                </div>
              </dl>
            </section>

            {/* Questions */}
            <section className='bg-card border border-border rounded-2xl p-6'>
              <h2 className='text-lg font-semibold text-foreground mb-4'>
                Questions?
              </h2>
              <p className='text-foreground-secondary text-sm mb-4'>
                Just reply to the invite message or reach out however you
                normally would. Don't overthink it.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
