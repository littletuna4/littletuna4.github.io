/**
 * Personal Site 404 Not Found Page
 *
 * Functional Requirements:
 * - Display a friendly and personal 404 error message when a page is not found
 * - Provide clear navigation options back to main site sections
 * - Include a fun, interactive searching animation element
 * - Maintain consistent styling with the main application theme system
 * - Use lucide-react icons instead of emojis
 * - Support both light and dark mode themes
 * - Include contact information for additional assistance
 * - Use proper typography hierarchy and spacing
 * - Ensure mobile responsiveness across all device sizes
 * - Follow WCAG accessibility guidelines for contrast and navigation
 * - Create an engaging and personal user experience
 */

'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  BookOpen,
  Briefcase,
  Link as LinkIcon,
  Search,
  ArrowLeft,
  Mail,
  Phone,
} from 'lucide-react';
import { APP_CONSTS } from '@/data/app';

function SearchingAnimation(): React.JSX.Element {
  return (
    <div className='relative mb-12 h-32 flex items-center justify-center'>
      <div className='relative'>
        {/* Main searching icon with animation */}
        <div className='animate-bounce'>
          <Search
            className='w-16 h-16 text-primary'
            strokeWidth={1.5}
            aria-hidden='true'
          />
        </div>
        {/* Floating dots around the search icon with staggered animation */}
        <div className='absolute -top-2 -left-2 w-3 h-3 bg-accent rounded-full animate-ping opacity-75' />
        <div
          className='absolute -bottom-2 -right-2 w-2 h-2 bg-accent rounded-full animate-ping opacity-75'
          style={{ animationDelay: '0.3s' }}
        />
        <div
          className='absolute top-0 -right-4 w-2 h-2 bg-primary/60 rounded-full animate-ping opacity-75'
          style={{ animationDelay: '0.5s' }}
        />
      </div>
    </div>
  );
}

export default function PersonalSiteNotFoundPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-background flex flex-col'>
      {/* Main Content Area */}
      <div className='flex-1 flex items-center justify-center px-4 py-16'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Fun Searching Animation */}
          <SearchingAnimation />

          {/* 404 Visual Element */}
          <div className='mb-8'>
            <div className='text-8xl md:text-9xl font-bold text-foreground-muted mb-4'>
              404
            </div>
            <div className='w-24 h-1 bg-primary mx-auto rounded-full'></div>
          </div>

          {/* Error Message */}
          <div className='mb-12'>
            <h1 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
              Page Not Found
            </h1>
            <p className='text-lg text-foreground-secondary mb-6 max-w-2xl mx-auto leading-relaxed'>
              Looks like you&apos;ve wandered off the beaten path! This page
              doesn&apos;t exist (yet) or may have moved. Let me help you find
              your way back.
            </p>
          </div>

          {/* Navigation Options */}
          <div className='mb-12'>
            <h2 className='text-xl font-semibold text-foreground mb-6'>
              Where would you like to go?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto'>
              {/* Home */}
              <Link
                href='/'
                className='group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-1'
              >
                <div className='mb-3 flex justify-center'>
                  <Home
                    className='w-8 h-8 text-primary group-hover:text-accent transition-colors'
                    strokeWidth={1.5}
                    aria-hidden='true'
                  />
                </div>
                <h3 className='font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  Home
                </h3>
                <p className='text-sm text-foreground-secondary'>
                  Back to the homepage
                </p>
              </Link>

              {/* Blog */}
              <Link
                href='/blog'
                className='group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-1'
              >
                <div className='mb-3 flex justify-center'>
                  <BookOpen
                    className='w-8 h-8 text-primary group-hover:text-accent transition-colors'
                    strokeWidth={1.5}
                    aria-hidden='true'
                  />
                </div>
                <h3 className='font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  Blog
                </h3>
                <p className='text-sm text-foreground-secondary'>
                  Read my latest posts
                </p>
              </Link>

              {/* Career Ledger */}
              <Link
                href='/career-ledger'
                className='group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-1'
              >
                <div className='mb-3 flex justify-center'>
                  <Briefcase
                    className='w-8 h-8 text-primary group-hover:text-accent transition-colors'
                    strokeWidth={1.5}
                    aria-hidden='true'
                  />
                </div>
                <h3 className='font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  Career Ledger
                </h3>
                <p className='text-sm text-foreground-secondary'>
                  My professional journey
                </p>
              </Link>

              {/* Links */}
              <Link
                href='/#links'
                className='group p-6 bg-background-secondary hover:bg-background-tertiary border border-border rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-1'
              >
                <div className='mb-3 flex justify-center'>
                  <LinkIcon
                    className='w-8 h-8 text-primary group-hover:text-accent transition-colors'
                    strokeWidth={1.5}
                    aria-hidden='true'
                  />
                </div>
                <h3 className='font-semibold text-foreground mb-2 group-hover:text-primary transition-colors'>
                  Links
                </h3>
                <p className='text-sm text-foreground-secondary'>
                  Connect with me online
                </p>
              </Link>
            </div>
          </div>

          {/* Primary Action Button */}
          <div className='mb-8'>
            <Link
              href='/'
              className='inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
            >
              <ArrowLeft className='w-5 h-5 mr-2' aria-hidden='true' />
              Back to Home
            </Link>
          </div>

          {/* Additional Help */}
          <div className='text-center'>
            <p className='text-foreground-tertiary text-sm mb-4'>
              Still can&apos;t find what you&apos;re looking for?
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Link
                href={`mailto:${APP_CONSTS.APP_CONTACT_EMAIL}`}
                className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium'
              >
                <Mail className='w-4 h-4' aria-hidden='true' />
                {APP_CONSTS.APP_CONTACT_EMAIL}
              </Link>
              {APP_CONSTS.APP_CONTACT_PHONE && (
                <>
                  <span className='text-foreground-muted hidden sm:inline'>
                    •
                  </span>
                  <Link
                    href={`tel:${APP_CONSTS.APP_CONTACT_PHONE}`}
                    className='inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium'
                  >
                    <Phone className='w-4 h-4' aria-hidden='true' />
                    {APP_CONSTS.APP_CONTACT_PHONE}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className='bg-background-tertiary border-t border-border py-8'>
        <div className='container mx-auto px-6 text-center'>
          <p className='text-foreground-muted text-sm'>
            {APP_CONSTS.APP_NAME} - {APP_CONSTS.APP_DESCRIPTION}
          </p>
        </div>
      </div>
    </div>
  );
}
