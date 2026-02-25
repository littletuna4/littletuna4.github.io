/**
 * Blog layout: max-width container and KaTeX CSS for LaTeX math in MDX posts.
 */
import 'katex/dist/katex.min.css';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
}
