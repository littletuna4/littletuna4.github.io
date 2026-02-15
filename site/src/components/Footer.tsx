'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { blog, root } from '@/lib/routes';
import { SimpleThemeToggle } from '@/components/ui/SimpleThemeToggle';
import { LinkedInIcon, FacebookIcon } from '@/components';
import { APP_CONSTS } from '@/data/app';

export default function Footer() {
  return (
    <footer className='bg-background-tertiary text-foreground py-12 border-t border-border'>
      <div className='container mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          <div className='md:col-span-2'>
            <div className='flex items-center mb-4 gap-3'>
              <Image
                src='/logo.png'
                alt={APP_CONSTS.APP_NAME || ''}
                width={40}
                height={40}
                priority
              />
              <span className='text-xl font-bold text-foreground'>
                {APP_CONSTS.APP_SHORTNAME}
              </span>
            </div>
            <p className='text-foreground-secondary mb-4'>
              {APP_CONSTS.APP_DESCRIPTION}
            </p>
            <div className='space-y-2'>
              <Link
                href={`mailto:${APP_CONSTS.APP_CONTACT_EMAIL}`}
                className='flex items-center text-foreground-secondary hover:text-foreground transition-colors gap-2'
              >
                <Mail className=' h-4 w-4' />
                {APP_CONSTS.APP_CONTACT_EMAIL}
              </Link>
              {APP_CONSTS.APP_CONTACT_PHONE && (
                <Link
                  href={`tel:${APP_CONSTS.APP_CONTACT_PHONE}`}
                  className='flex items-center text-foreground-secondary hover:text-foreground transition-colors gap-2'
                >
                  <Phone className=' h-4 w-4' />
                  {APP_CONSTS.APP_CONTACT_PHONE}
                </Link>
              )}
              <div className='flex items-center text-foreground-secondary gap-2'>
                <MapPin className=' h-4 w-4' />
                Brisbane, Australia
              </div>
              {APP_CONSTS.APP_LINKEDIN && (
                <Link
                  href={APP_CONSTS.APP_LINKEDIN}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground-secondary hover:text-foreground transition-colors flex items-center gap-2'
                  aria-label='LinkedIn page'
                >
                  <LinkedInIcon size={20} color='current' className='h-5 w-5' />{' '}
                  Follow on LinkedIn
                </Link>
              )}
              {APP_CONSTS.APP_FACEBOOK && (
                <Link
                  href={APP_CONSTS.APP_FACEBOOK}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground-secondary hover:text-foreground transition-colors'
                  aria-label='Visit our Facebook page'
                >
                  <FacebookIcon size={20} color='current' className='h-5 w-5' />
                </Link>
              )}
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4 text-foreground'>
              Blogs
            </h3>
            <div className='space-y-2'>
              <Link
                href={blog()}
                className='block text-foreground-secondary hover:text-foreground transition-colors'
              >
                Blog
              </Link>
              {/* <Link
                href={`${root()}#services`}
                className='block text-foreground-secondary hover:text-foreground transition-colors'
              >
                Services
              </Link> */}
            </div>
          </div>
        </div>

        <div className='border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center'>
          <div className='text-foreground-muted text-sm mb-4 md:mb-0'>
            © Copyright {new Date().getFullYear()} {APP_CONSTS.APP_NAME}
            <br />
            {APP_CONSTS?.APP_ABN && `ABN: ${APP_CONSTS.APP_ABN}`}
          </div>
          <div className='flex items-center space-x-6'>
            <SimpleThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
