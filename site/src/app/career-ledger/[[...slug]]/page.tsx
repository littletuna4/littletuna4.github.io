import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';
import { MetadataBreadcrumb } from '@/components/ui/metadata-breadcrumb';

/**
 * Career Ledger Dynamic Page Handler
 *
 * Functional Requirements:
 * - Dynamically render markdown files from the career-ledger directory
 * - Support nested directory structures (jobs, projects, education, skills)
 * - Handle index.md files as default pages
 * - Generate static params at build time for static export
 * - Provide breadcrumb navigation
 * - Render markdown with proper styling
 */

interface CareerLedgerPageProps {
  readonly params: Promise<{ slug?: string[] }>;
}

export async function generateStaticParams(): Promise<
  Array<{ slug: string[] }>
> {
  const careerLedgerPath = path.join(process.cwd(), 'src/app/career-ledger');

  const staticParams: Array<{ slug: string[] }> = [{ slug: [] }]; // Root page

  function scanDirectory(dirPath: string, segments: string[]): void {
    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true });

      for (const entry of entries) {
        const entryPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
          const newSegments = [...segments, entry.name];
          const indexPath = path.join(entryPath, 'index.md');

          // Add directory if it has index.md
          if (fs.existsSync(indexPath)) {
            staticParams.push({ slug: newSegments });
          }

          // Recursively scan subdirectories
          scanDirectory(entryPath, newSegments);
        } else if (
          entry.isFile() &&
          entry.name.endsWith('.md') &&
          entry.name !== 'README.md' &&
          entry.name !== 'index.md'
        ) {
          // Add standalone markdown files (e.g., certifications.md)
          const filenameWithoutExt = entry.name.replace('.md', '');
          const newSegments = [...segments, filenameWithoutExt];
          staticParams.push({ slug: newSegments });
        }
      }
    } catch (error) {
      console.error(`Error scanning directory ${dirPath}:`, error);
    }
  }

  scanDirectory(careerLedgerPath, []);

  return staticParams;
}

export default async function CareerLedgerPage({
  params,
}: CareerLedgerPageProps): Promise<React.JSX.Element> {
  const resolvedParams = await params;
  const segments = resolvedParams.slug || [];
  const careerLedgerPath = path.join(process.cwd(), 'src/app/career-ledger');

  // Construct file path
  let filePath: string;

  if (segments.length === 0) {
    // Root page - try README.md first, then index.md
    filePath = path.join(careerLedgerPath, 'README.md');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(careerLedgerPath, 'index.md');
    }
  } else {
    // Nested pages - try index.md first, then {last-segment}.md, then page.md
    const lastSegment = segments[segments.length - 1];
    const parentPath = segments.slice(0, -1);

    filePath = path.join(careerLedgerPath, ...segments, 'index.md');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(
        careerLedgerPath,
        ...parentPath,
        `${lastSegment}.md`
      );
    }
    if (!fs.existsSync(filePath)) {
      filePath = path.join(careerLedgerPath, ...segments, 'page.md');
    }
  }

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract title from first heading
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const pageTitle = titleMatch
    ? titleMatch[1]
    : segments.length > 0
      ? segments[segments.length - 1].replace(/-/g, ' ')
      : 'Career Ledger';

  // Build breadcrumb
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Career Ledger', href: '/career-ledger' },
  ];

  segments.forEach((segment, index) => {
    const href = `/career-ledger/${segments.slice(0, index + 1).join('/')}`;
    breadcrumbItems.push({
      label: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      href,
    });
  });

  return (
    <>
      <div className='mb-8'>
        <MetadataBreadcrumb items={breadcrumbItems} />
      </div>
      <article>
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className='text-4xl font-bold text-foreground mb-6 mt-8 first:mt-0'>
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className='text-3xl font-bold text-foreground mb-4 mt-6'>
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className='text-2xl font-bold text-foreground mb-3 mt-4'>
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className='text-xl font-bold text-foreground mb-2 mt-3'>
                {children}
              </h4>
            ),
            p: ({ children }) => (
              <p className='text-foreground-secondary mb-4 leading-relaxed'>
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className='list-disc list-inside mb-4 text-foreground-secondary space-y-2 ml-4'>
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className='list-decimal list-inside mb-4 text-foreground-secondary space-y-2 ml-4'>
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className='text-foreground-secondary'>{children}</li>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className='text-primary hover:text-primary/80 underline transition-colors'
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={
                  href?.startsWith('http') ? 'noopener noreferrer' : undefined
                }
              >
                {children}
              </a>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              return isInline ? (
                <code className='bg-background-secondary px-1.5 py-0.5 rounded text-sm font-mono text-foreground'>
                  {children}
                </code>
              ) : (
                <pre className='bg-background-secondary p-4 rounded-lg overflow-x-auto mb-4'>
                  <code className='text-sm font-mono text-foreground'>
                    {children}
                  </code>
                </pre>
              );
            },
            blockquote: ({ children }) => (
              <blockquote className='border-l-4 border-primary pl-4 italic text-foreground-secondary mb-4 my-4'>
                {children}
              </blockquote>
            ),
            hr: () => <hr className='my-8 border-border' />,
            strong: ({ children }) => (
              <strong className='font-bold text-foreground'>{children}</strong>
            ),
            em: ({ children }) => (
              <em className='italic text-foreground-secondary'>{children}</em>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
  );
}
