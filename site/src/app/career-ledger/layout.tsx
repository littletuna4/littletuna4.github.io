import CareerLedgerNavigation from '@/components/CareerLedgerNavigation';

/**
 * Career Ledger Layout
 *
 * Functional Requirements:
 * - Provide consistent layout for all career ledger pages
 * - Include navigation to main sections
 * - Maintain responsive design and theme consistency
 * - Support markdown content rendering
 */

export default function CareerLedgerLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className='min-h-screen bg-background'>
      <div className='container mx-auto px-6 py-20'>
        <div className='max-w-4xl mx-auto'>
          <CareerLedgerNavigation />
          <div className='prose prose-lg dark:prose-invert max-w-none'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
