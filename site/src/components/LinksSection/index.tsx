'use client';

import Link from 'next/link';
import {
  ExternalLink,
  Linkedin,
  Github,
  FileText,
  Mail,
  Globe,
  BookOpen,
  Activity,
} from 'lucide-react';
import linksData from './data.json';

/**
 * Links Section Component
 *
 * Functional Requirements:
 * - Display external links from data.json with proper labels
 * - Show appropriate icons for each link type using lucide-react
 * - Handle email links with mailto: protocol
 * - Support hover effects and smooth transitions
 * - Maintain responsive grid layout for different screen sizes
 * - Ensure all external links open in new tab with proper security attributes
 * - Provide accessible link labels and aria attributes
 */

interface LinkData {
  readonly label: string;
  readonly url: string;
}

const getIconForLink = (label: string): React.ReactNode => {
  const iconProps = { className: 'w-5 h-5', 'aria-hidden': true as const };

  switch (label.toLowerCase()) {
    case 'linkedin':
      return <Linkedin {...iconProps} />;
    case 'github':
      return <Github {...iconProps} />;
    case 'resume':
      return <FileText {...iconProps} />;
    case 'email':
      return <Mail {...iconProps} />;
    case 'well tested':
      return <Globe {...iconProps} />;
    case 'storygraph':
      return <BookOpen {...iconProps} />;
    case 'strava':
      return <Activity {...iconProps} />;
    default:
      return <ExternalLink {...iconProps} />;
  }
};

const getHrefForLink = (url: string): string => {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  if (url.includes('@')) {
    return `mailto:${url}`;
  }
  return url;
};

const isExternalLink = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

export default function LinksSection(): React.JSX.Element {
  const links: readonly LinkData[] = linksData as readonly LinkData[];

  return (
    <section id='links' className='py-20 bg-background'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
            Links
          </h2>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {links.map((link: LinkData) => {
            const href = getHrefForLink(link.url);
            const external = isExternalLink(link.url);

            return (
              <Link
                key={link.url}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className='
                  group
                  bg-background-secondary border border-border rounded-lg p-6
                  flex flex-col items-center gap-3
                  hover:shadow-lg hover:border-primary/50
                  transition-all duration-300
                  hover:-translate-y-1
                  text-foreground no-underline
                  cursor-pointer
                '
                aria-label={`Visit ${link.label}${external ? ' (opens in new tab)' : ''}`}
              >
                <div className='text-primary group-hover:text-primary/80 transition-colors'>
                  {getIconForLink(link.label)}
                </div>
                <div className='flex flex-grow items-center align-middle gap-2'>
                  <h3 className='text-lg font-semibold text-foreground text-center align-middle m-2'>
                    {link.label}
                  </h3>
                  {external && (
                    <ExternalLink
                      className='w-4 h-4 text-foreground-tertiary group-hover:text-primary transition-colors flex-shrink-0'
                      aria-hidden={true}
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
