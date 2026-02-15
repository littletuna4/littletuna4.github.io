/**
 * Services Index Page
 *
 * Functional Requirements:
 * - Display a grid of service links in card format
 * - Provide quick access to commonly used services and applications
 * - Support external links opening in new tabs with proper security attributes
 * - Fully responsive grid layout that adapts to different screen sizes
 * - Integrate with the forest theme system for consistent styling
 * - Include page metadata for SEO
 * - Display service label and URL for each service
 */

import { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { MetadataBreadcrumb } from '@/components/ui/metadata-breadcrumb';
import { root } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Service Index',
  description: 'Quick access to commonly used services and applications.',
};

interface ServiceLink {
  readonly label: string;
  readonly link: string;
}

const services: readonly ServiceLink[] = [
  {
    label: 'VW App',
    link: 'https://vw-1040520853607.australia-southeast1.run.app',
  },
  {
    label: 'n8n (ton8n)',
    link: 'https://ton8n-1040520853607.australia-southeast2.run.app',
  },
  {
    label: 'noVNC (tonovnc)',
    link: 'https://tonovnc-1040520853607.australia-southeast2.run.app/vnc.html',
  },
] as const;

export default function ServicesPage(): React.JSX.Element {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
        {/* Breadcrumb */}
        <div className='mb-8'>
          <MetadataBreadcrumb
            items={[{ label: 'Home', href: root() }, { label: 'Services' }]}
          />
        </div>

        {/* Page Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight'>
            Service Index
          </h1>
          <p className='text-lg sm:text-xl text-foreground-secondary max-w-2xl mx-auto'>
            Some links I don't want to remember (I use this as my browser homepage)
          </p>
        </div>

        {/* Services Grid */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {services.map((service: ServiceLink) => (
            <a
              key={service.link}
              href={service.link}
              target='_blank'
              rel='noopener noreferrer'
              className='
                group
                bg-card border border-border rounded-2xl p-5 sm:p-6
                flex flex-col items-center gap-3
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/50
                text-foreground no-underline
                cursor-pointer
              '
            >
              <div className='flex items-center gap-2'>
                <h2 className='text-xl sm:text-2xl font-semibold text-foreground text-center tracking-tight'>
                  {service.label}
                </h2>
                <ExternalLink
                  className='w-4 h-4 sm:w-5 sm:h-5 text-foreground-tertiary group-hover:text-primary transition-colors flex-shrink-0'
                  aria-hidden='true'
                />
              </div>
              <div
                className='
                font-mono text-xs sm:text-sm text-foreground-muted
                break-all text-center w-full
                group-hover:text-foreground-secondary transition-colors
              '
              >
                {service.link}
              </div>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
