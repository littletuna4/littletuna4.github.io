'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Award,
  Home,
} from 'lucide-react';

/**
 * Career Ledger Navigation Component
 *
 * Functional Requirements:
 * - Provide navigation links to main career ledger sections
 * - Highlight active section based on current path
 * - Support responsive design for mobile and desktop
 * - Use lucide-react icons for visual enhancement
 * - Maintain theme consistency
 */

interface NavigationItem {
  readonly label: string;
  readonly href: string;
  readonly icon: React.ReactNode;
}

const navigationItems: readonly NavigationItem[] = [
  {
    label: 'Overview',
    href: '/career-ledger',
    icon: <Home className='w-5 h-5' aria-hidden='true' />,
  },
  {
    label: 'Jobs',
    href: '/career-ledger/jobs',
    icon: <Briefcase className='w-5 h-5' aria-hidden='true' />,
  },
  {
    label: 'Projects',
    href: '/career-ledger/projects',
    icon: <FolderKanban className='w-5 h-5' aria-hidden='true' />,
  },
  {
    label: 'Skills',
    href: '/career-ledger/skills',
    icon: <Award className='w-5 h-5' aria-hidden='true' />,
  },
  {
    label: 'Education',
    href: '/career-ledger/education',
    icon: <GraduationCap className='w-5 h-5' aria-hidden='true' />,
  },
];

export default function CareerLedgerNavigation(): React.JSX.Element {
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === '/career-ledger') {
      return pathname === '/career-ledger' || pathname === '/career-ledger/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className='mb-8' aria-label='Career Ledger Navigation'>
      <div className='flex flex-wrap gap-2'>
        {navigationItems.map(item => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                ${
                  active
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-background-secondary text-foreground hover:bg-background-tertiary hover:text-foreground border border-border'
                }
              `}
              aria-current={active ? 'page' : undefined}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
