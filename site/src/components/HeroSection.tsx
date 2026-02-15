'use client';

import Link from 'next/link';
import Image from 'next/image';
import { blog, events } from '@/lib/routes';
import { TypewriterAnimation } from '@/components';
import { APP_CONSTS } from '@/data/app';

/**
 * HeroSection
 *
 * Functional Requirements:
 * - Full-viewport hero with app name, tagline, and primary CTAs (Events, Blog).
 * - Tagline cycles through use cases via TypewriterAnimation (resume, personal projects, contact details, blog, experimental stuff).
 * - Tagline container has two-line min-height so wrapped/spill text has reserved space and layout stays stable.
 * - Responsive grid: stacked on small screens, two columns on lg.
 * - Headshot image in a bordered card; responsive and priority-loaded.
 */
export default function HeroSection() {
  return (
    <section className='min-h-screen bg-background flex items-center'>
      <div className='container mx-auto px-6 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8'>
            <h1 className='text-4xl md:text-6xl font-bold text-foreground leading-tight'>
              {APP_CONSTS.APP_NAME}
            </h1>
            <p className='text-xl text-foreground-secondary leading-relaxed min-h-[3.25em]'>
              <TypewriterAnimation
                className='inline'
                typingSpeed={60}
                deletingSpeed={35}
                pauseDuration={1800}
                prefix="Here's a little nextjs github pages hub site for "
                phrases={[
                  'resume',
                  'personal projects',
                  'contact details',
                  'blog posts',
                  'experimental stuff',
                ]}
              />
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link
                href={events()}
                className='text-primary hover:text-primary/80 px-8 py-4 font-semibold transition-colors text-center'
              >
                Events
              </Link>
              
              <Link
                href={blog()}
                className='bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors text-center'
              >
                Blog
              </Link>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='w-full max-w-lg'>
              <div className='bg-background-secondary rounded-lg p-8 aspect-square flex items-center justify-center border border-border'>
                <Image
                  src='assets/headshots/anthony-cerqui.png'
                  alt='Hero Image'
                  width={500}
                  height={500}
                  priority
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
