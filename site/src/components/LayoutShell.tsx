'use client';

/**
 * Functional requirements:
 * - Wrap app content with sidebar layout: Sidebar + main area.
 * - Provide mobile menu state and trigger bar (logo + hamburger) for small screens.
 * - Desktop: persist sidebar collapsed state in localStorage; main area padding reflects sidebar width.
 * - Main content has left margin on desktop to account for sidebar; full width on mobile.
 * - /dp route: full-viewport passthrough (no sidebar, header, footer) so only the embedded iframe scrolls and nested scroll bars are avoided.
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { root } from '@/lib/routes';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { APP_CONSTS } from '@/data/app';

const DP_PATH = '/dp';

const SIDEBAR_COLLAPSED_STORAGE_KEY = 'sidebar-collapsed';

/**
 * Locks html/body to one viewport and removes default margin so only the iframe scrolls (no nested scroll bars).
 * Cleans up on unmount or when navigating away from /dp.
 */
function DpFullViewportContainer({ children }: { children: React.ReactNode }): React.ReactElement {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevHtmlHeight = html.style.height;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyHeight = body.style.height;
    const prevBodyMargin = body.style.margin;
    html.style.overflow = 'hidden';
    html.style.height = '100%';
    body.style.overflow = 'hidden';
    body.style.height = '100%';
    body.style.margin = '0';
    return () => {
      html.style.overflow = prevHtmlOverflow;
      html.style.height = prevHtmlHeight;
      body.style.overflow = prevBodyOverflow;
      body.style.height = prevBodyHeight;
      body.style.margin = prevBodyMargin;
    };
  }, []);
  return <div className="min-h-screen w-full">{children}</div>;
}

function readStoredSidebarCollapsed(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const v = localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY);
    return v === 'true';
  } catch {
    return false;
  }
}

type LayoutShellProps = {
  children: React.ReactNode;
};

export default function LayoutShell({ children }: LayoutShellProps): React.ReactElement {
  const pathname = usePathname();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  useEffect(() => {
    setIsDesktopCollapsed(readStoredSidebarCollapsed());
  }, []);

  const handleDesktopCollapseToggle = (): void => {
    setIsDesktopCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, String(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  if (pathname === DP_PATH) {
    return (
      <DpFullViewportContainer>{children}</DpFullViewportContainer>
    );
  }

  return (
    <>
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
        isDesktopCollapsed={isDesktopCollapsed}
        onDesktopCollapseToggle={handleDesktopCollapseToggle}
      />

      {/* Mobile-only top bar: menu trigger + logo */}
      <header className='sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background px-4 py-3 md:hidden'>
        <button
          type='button'
          className='rounded-md p-2 hover:bg-background-secondary'
          aria-label='Open menu'
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <Menu className='h-6 w-6' />
        </button>
        <Link href={root()} className='flex items-center gap-2' onClick={() => setIsMobileSidebarOpen(false)}>
          <Image src='/logo.png' alt={APP_CONSTS.APP_NAME ?? ''} width={120} height={36} className='h-9 w-auto' />
        </Link>
        <div className='w-10' aria-hidden />
      </header>

      <div
        className={`min-h-screen ${isDesktopCollapsed ? 'md:pl-[var(--sidebar-collapsed-width)]' : 'md:pl-[var(--sidebar-width)]'}`}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
