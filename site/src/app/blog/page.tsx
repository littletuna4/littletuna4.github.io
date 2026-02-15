/**
 * Main Blog Page
 * 
 * Functional Requirements:
 * - Display all available blog posts from the generated post index
 * - Provide a clean, focused view of blog content
 * - Include page title and description for SEO
 * - Maintain consistent styling with the blog layout
 * - Show blog posts sorted by featured status, then by date
 */

import { Metadata } from 'next';
import { MetadataBreadcrumb } from '@/components/ui/metadata-breadcrumb';
import BlogPostsList from '@/components/BlogPostsList';
import { blog, root } from '@/lib/routes';
import { AllPosts } from './post_index';
import { PostListItem } from './_types';

export const metadata: Metadata = {
  title: 'Blog - YTPN',
  description: 'Read our latest insights on technology, digital transformation, and business solutions.',
};

export default function BlogPage() {
  // Filter out Content component for client component (can't serialize functions)
  const postsForList: PostListItem[] = AllPosts.map(({ Content, ...post }) => post);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <MetadataBreadcrumb 
            items={[
              { label: 'Home', href: root() },
              { label: 'Blog' }
            ]}
          />
        </div>
        
        {/* Blog Page Header */}
        <div className="text-center py-3">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, strategies, and thoughts on technology, digital transformation, 
            and modern business solutions.
          </p>
        </div>

        {/* Blog Posts List - Bento Grid Layout with Batching */}
        <div className="mt-8">
          <BlogPostsList posts={postsForList} />
        </div>
      </div>
    </div>
  );
}
