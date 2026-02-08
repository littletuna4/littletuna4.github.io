/**
 * Dinner Parties Landing Page
 *
 * Functional Requirements:
 * - Display concept explanation for the 2026 potluck dinner series
 * - List upcoming events fetched from Google Sheets (build time)
 * - Informal, self-aware, human tone
 * - Link to individual event pages
 * - Expression of interest section
 * - Fully responsive layout
 * - Integrate with theme system for consistent styling
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Users, Utensils, MapPin, ChevronRight } from 'lucide-react';
import { MetadataBreadcrumb } from '@/components/ui/metadata-breadcrumb';
import {
  fetchDinnerPartyEvents,
  DinnerPartyEvent,
  DINNER_PARTY_CONFIG,
} from '@/lib/dinner-parties/google-sheets-client';

export const metadata: Metadata = {
  title: 'Dinner Parties | 2026 Potluck Series',
  description:
    'A 2026 experiment in deliberate socialising. Small potluck dinners as an antidote to social atomisation.',
};

function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function EventCard({
  event,
}: {
  readonly event: DinnerPartyEvent;
}): React.JSX.Element {
  const isPastEvent = new Date(event.date) < new Date();

  return (
    <Link
      href={`/events/${event.eventId}`}
      className={`
        group
        bg-card border border-border rounded-2xl p-6
        flex flex-col gap-4
        shadow-sm hover:shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/50
        text-foreground no-underline
        ${isPastEvent ? 'opacity-60' : ''}
      `}
    >
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2 text-foreground-tertiary'>
          <Calendar className='w-4 h-4' aria-hidden='true' />
          <span className='text-sm'>{formatEventDate(event.date)}</span>
        </div>
        {isPastEvent && (
          <span className='text-xs bg-muted text-muted-foreground px-2 py-1 rounded'>
            Past
          </span>
        )}
      </div>

      <h3 className='text-xl font-semibold text-foreground group-hover:text-primary transition-colors'>
        {event.theme || 'Potluck Dinner'}
      </h3>

      {event.description && (
        <p className='text-foreground-secondary text-sm line-clamp-2'>
          {event.description}
        </p>
      )}

      <div className='flex items-center gap-4 text-sm text-foreground-muted mt-auto'>
        <div className='flex items-center gap-1'>
          <MapPin className='w-4 h-4' aria-hidden='true' />
          <span>{event.location || 'Taringa, Brisbane'}</span>
        </div>
        {event.status && (
          <span className='text-xs bg-primary/10 text-primary px-2 py-0.5 rounded'>
            {event.status}
          </span>
        )}
      </div>

      <div className='flex items-center text-primary text-sm font-medium group-hover:underline'>
        View details
        <ChevronRight
          className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform'
          aria-hidden='true'
        />
      </div>
    </Link>
  );
}

export default async function DinnerPartiesLandingPage(): Promise<React.JSX.Element> {
  const events = await fetchDinnerPartyEvents();
  const upcomingEvents = events.filter(
    event => new Date(event.date) >= new Date()
  );
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        {/* Breadcrumb */}
        <div className='mb-8'>
          <MetadataBreadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Events' }]}
          />
        </div>

        {/* Hero Section */}
        <section className='max-w-3xl mx-auto text-center mb-16'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight'>
            Dinner Parties
          </h1>
          <p className='text-xl sm:text-2xl text-foreground-secondary mb-4'>
            A 2026 experiment in deliberate socialising.
          </p>
          <p className='text-foreground-tertiary'>
            Small potluck dinners as an antidote to social atomisation.
          </p>
        </section>

        {/* Concept Explanation */}
        <section className='max-w-2xl mx-auto mb-16 space-y-6'>
          <div className='bg-card border border-border rounded-2xl p-6 sm:p-8'>
            <h2 className='text-2xl font-semibold text-foreground mb-4'>
              What's this about?
            </h2>
            <div className='space-y-4 text-foreground-secondary'>
              <p>
                Look, I'll be honest. Social media promised to connect us, but
                most of us feel more disconnected than ever. So here's my
                low-tech solution: actual dinner parties.
              </p>
              <p>
                In 2026, I'm hosting a series of small potluck dinners. The idea
                is simple: get 8-12 people in a room, share some food, have some
                conversations that aren't mediated by algorithms.
              </p>
              <p>
                Each dinner brings together a mix of friends, family, and
                sometimes people I haven't spoken to in years. It's deliberately
                eclectic.
              </p>
            </div>
          </div>

          {/* Expectations */}
          <div className='bg-card border border-border rounded-2xl p-6 sm:p-8'>
            <h2 className='text-2xl font-semibold text-foreground mb-4'>
              What to expect
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                  <Utensils
                    className='w-4 h-4 text-primary'
                    aria-hidden='true'
                  />
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>Potluck style</h3>
                  <p className='text-sm text-foreground-tertiary'>
                    Bring something if you can. No pressure.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                  <Users className='w-4 h-4 text-primary' aria-hidden='true' />
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>Plus-ones welcome</h3>
                  <p className='text-sm text-foreground-tertiary'>
                    Safety buffer for awkwardness.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0'>
                  <MapPin className='w-4 h-4 text-primary' aria-hidden='true' />
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>Sharehouse vibes</h3>
                  <p className='text-sm text-foreground-tertiary'>
                    Not fancy. Definitely not Instagram-worthy.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0'>
                  <span className='text-accent text-sm'>?!</span>
                </div>
                <div>
                  <h3 className='font-medium text-foreground'>Probably awkward</h3>
                  <p className='text-sm text-foreground-tertiary'>
                    That's kind of the point.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className='mb-16'>
            <h2 className='text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center'>
              Upcoming Dinners
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {upcomingEvents.map(event => (
                <EventCard key={event.eventId} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* No Events Fallback */}
        {events.length === 0 && (
          <section className='mb-16'>
            <div className='bg-card border border-border rounded-2xl p-8 text-center max-w-xl mx-auto'>
              <Calendar
                className='w-12 h-12 text-foreground-muted mx-auto mb-4'
                aria-hidden='true'
              />
              <h3 className='text-xl font-semibold text-foreground mb-2'>
                No events scheduled yet
              </h3>
              <p className='text-foreground-secondary'>
                Check back soon, or register your interest below to be notified
                when the next dinner is announced.
              </p>
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className='mb-16'>
            <h2 className='text-xl font-semibold text-foreground-tertiary mb-6'>
              Past Dinners
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {pastEvents.map(event => (
                <EventCard key={event.eventId} event={event} />
              ))}
            </div>
          </section>
        )}

        {/* Expression of Interest */}
        <section className='max-w-2xl mx-auto'>
          <div className='bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center'>
            <h2 className='text-2xl font-semibold text-foreground mb-4'>
              Interested?
            </h2>
            <p className='text-foreground-secondary mb-6'>
              If you'd like to come to a future dinner (or you're wondering why
              you got this link), you can register your interest. No commitment,
              just a way for me to know who's out there.
            </p>
            <a
              href={DINNER_PARTY_CONFIG.EOI_FORM_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='
                inline-flex items-center gap-2
                bg-primary hover:bg-primary/90 text-primary-foreground
                px-6 py-3 rounded-lg font-semibold
                transition-colors
              '
            >
              Register Interest
              <ChevronRight className='w-4 h-4' aria-hidden='true' />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
