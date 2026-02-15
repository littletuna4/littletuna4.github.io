'use client';

/**
 * Functional requirements:
 * - Provide persistent left sidebar with logo and short app name, nav links, theme toggle, contact.
 * - Desktop: fixed sidebar, collapsible to icon-only strip; state persisted in localStorage.
 * - Mobile: overlay drawer toggled by external trigger.
 * - Responsive: full/collapsed on md+; drawer with backdrop on small screens; no overlapping controls.
 * - Touch targets at least 44px for mobile; clear visual hierarchy and hover/active states.
 */

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, X, Newspaper, UtensilsCrossed, PanelLeftClose, PanelLeft } from 'lucide-react';
import { SimpleThemeToggle } from '@/components/ui/SimpleThemeToggle';
import { APP_CONSTS } from '@/data/app';
import { blog, dp, root } from '@/lib/routes';

const NAV_LINKS: { href: string; label: string; icon: React.ReactNode }[] = [
  { href: blog(), label: 'Blog', icon: <Newspaper className='h-5 w-5 shrink-0' /> },
  { href: dp(), label: 'Dinners', icon: <UtensilsCrossed className='h-5 w-5 shrink-0' /> },
];

type SidebarProps = {
  isMobileOpen: boolean;
  onMobileClose: () => void;
  isDesktopCollapsed: boolean;
  onDesktopCollapseToggle: () => void;
};

export default function Sidebar({
  isMobileOpen,
  onMobileClose,
  isDesktopCollapsed,
  onDesktopCollapseToggle,
}: SidebarProps): React.ReactElement {
  return (
    <>
      {/* Backdrop for mobile when drawer is open */}
      <button
        type='button'
        aria-label='Close sidebar'
        className='fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm md:hidden transition-opacity duration-200'
        style={{ visibility: isMobileOpen ? 'visible' : 'hidden', opacity: isMobileOpen ? 1 : 0 }}
        onClick={onMobileClose}
        tabIndex={isMobileOpen ? 0 : -1}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full flex-col border-r border-border bg-background transition-[width,transform] duration-200 ease-out ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-[var(--sidebar-width)] ${isDesktopCollapsed ? 'md:w-[var(--sidebar-collapsed-width)]' : ''}`}
      >
        <div className={`flex flex-1 flex-col overflow-y-auto overflow-x-hidden ${isDesktopCollapsed ? 'p-3 md:px-2 md:py-4' : 'p-4'}`}>
          {/* Header: logo row; desktop toggle in second row. When open: logo and toggle left-aligned with nav (px-3). When closed: centered. */}
          <div className='shrink-0 border-b border-border pb-3'>
            <div
              className={`flex h-14 items-center gap-2 ${isDesktopCollapsed ? 'md:justify-center md:px-0' : 'justify-between px-3'}`}
            >
              <Link
                href={root()}
                className={`flex min-w-0 items-center gap-3 text-xl font-bold outline-none ring-primary/50 focus-visible:ring-2 rounded-md ${isDesktopCollapsed ? 'flex-none md:justify-center md:gap-0 md:min-w-0' : 'flex-1 min-w-0'}`}
                onClick={onMobileClose}
              >
                <span
                  className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded ${isDesktopCollapsed ? 'h-9 w-9' : 'h-8 w-8 min-w-[2rem] md:h-10 md:w-10 md:min-w-[2.5rem]'}`}
                >
                  <Image
                    src='/logo.png'
                    alt={APP_CONSTS.APP_NAME ?? ''}
                    width={180}
                    height={50}
                    className={`object-contain object-left max-h-full max-w-full ${isDesktopCollapsed ? 'h-full w-full' : 'h-full w-full max-h-8 max-w-[6rem] md:max-h-10 md:max-w-[10rem]'}`}
                    priority
                  />
                </span>
                <span
                  className={`min-w-0 truncate overflow-hidden text-foreground transition-[opacity,max-width] duration-200 ease-out md:duration-200 md:ease-out ${isDesktopCollapsed ? 'md:max-w-0 md:opacity-0 md:pointer-events-none' : 'max-w-[4.5rem] md:max-w-[10rem]'}`}
                  title={APP_CONSTS.APP_SHORTNAME ?? undefined}
                >
                  {APP_CONSTS.APP_SHORTNAME ?? ''}
                </span>
              </Link>
              <button
                type='button'
                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground active:scale-95 md:hidden'
                aria-label='Close menu'
                onClick={onMobileClose}
              >
                <X className='h-5 w-5' />
              </button>
            </div>
            {/* Desktop only: expand/collapse toggle. When open: left-aligned with nav (pl-3). When closed: centered. */}
            <div
              className={`hidden md:flex md:w-full md:pt-1 ${isDesktopCollapsed ? 'md:justify-center' : 'md:justify-start md:pl-3'}`}
            >
              <button
                type='button'
                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground active:scale-95'
                aria-label={isDesktopCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                onClick={onDesktopCollapseToggle}
              >
                {isDesktopCollapsed ? (
                  <PanelLeft className='h-5 w-5' />
                ) : (
                  <PanelLeftClose className='h-5 w-5' />
                )}
              </button>
            </div>
          </div>

          <nav className='mt-5 flex flex-col gap-1.5' aria-label='Main'>
            {NAV_LINKS.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                title={isDesktopCollapsed ? label : undefined}
                className={`flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${isDesktopCollapsed ? 'md:justify-center md:gap-0 md:px-2 md:min-h-[40px]' : ''}`}
                onClick={onMobileClose}
              >
                {icon}
                <span className={`whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-200 ease-out md:duration-200 md:ease-out ${isDesktopCollapsed ? 'md:max-w-0 md:opacity-0 md:pointer-events-none' : 'md:max-w-[8rem]'}`}>
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          <div className={`mt-auto flex flex-col gap-4 border-t border-border pt-5 ${isDesktopCollapsed ? 'md:gap-3 md:pt-4' : ''}`}>
            {APP_CONSTS.APP_CONTACT_PHONE && (
              <Link
                href={`tel:${APP_CONSTS.APP_CONTACT_PHONE}`}
                title={isDesktopCollapsed ? APP_CONSTS.APP_CONTACT_PHONE : undefined}
                className={`flex min-h-[44px] items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground-secondary transition-colors hover:bg-background-secondary hover:text-foreground md:min-h-[40px] ${isDesktopCollapsed ? 'md:justify-center md:gap-0 md:px-2' : ''}`}
                onClick={onMobileClose}
              >
                <Phone className='h-4 w-4 shrink-0' />
                <span className={`whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-200 ease-out md:duration-200 md:ease-out ${isDesktopCollapsed ? 'md:max-w-0 md:opacity-0 md:pointer-events-none' : 'md:max-w-[10rem]'}`}>
                  {APP_CONSTS.APP_CONTACT_PHONE}
                </span>
              </Link>
            )}
            <Link
              href={`mailto:${APP_CONSTS.APP_CONTACT_EMAIL}`}
              title={isDesktopCollapsed ? 'Contact' : undefined}
              className={`flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 active:scale-[0.98] md:min-h-[40px] ${isDesktopCollapsed ? 'md:gap-0 md:px-2' : ''}`}
              onClick={onMobileClose}
            >
              <Mail className='h-4 w-4 shrink-0' />
              <span className={`whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-200 ease-out md:duration-200 md:ease-out ${isDesktopCollapsed ? 'md:max-w-0 md:opacity-0 md:pointer-events-none' : 'md:max-w-[5rem]'}`}>
                Contact
              </span>
            </Link>
            <div className={`flex min-h-[30px] items-center gap-2 rounded-lg px-3 md:min-h-[25px] ${isDesktopCollapsed ? 'md:justify-center md:gap-0 md:px-2' : ''}`}>
              <SimpleThemeToggle />
              <span className={`text-sm text-foreground-muted whitespace-nowrap overflow-hidden transition-[opacity,max-width] duration-200 ease-out md:duration-200 md:ease-out ${isDesktopCollapsed ? 'md:max-w-0 md:opacity-0 md:pointer-events-none' : 'md:max-w-[5rem]'}`}>
                Theme
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
