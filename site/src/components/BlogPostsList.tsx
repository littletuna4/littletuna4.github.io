'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostListItem } from '@/app/blog/_types';
import { ChevronDown } from 'lucide-react';

/**
 * Blog Posts List Component with Bento Layout
 * 
 * Functional Requirements:
 * - Display blog posts in a bento grid layout
 * - Show posts in batches of 5
 * - Provide "Show More" button to load additional batches
 * - Maintain responsive design across all screen sizes
 * - Support featured post highlighting with larger cards
 * - Handle empty state gracefully
 */

interface BlogPostsListProps {
  posts: PostListItem[];
}

const POSTS_PER_BATCH = 10;

export default function BlogPostsList({ posts }: BlogPostsListProps) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_BATCH);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const handleShowMore = () => {
    setVisibleCount(prev => Math.min(prev + POSTS_PER_BATCH, posts.length));
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No blog posts available yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 items-start">
        {visiblePosts.map((post, visibleIndex) => {
          // Get the original index from the full posts array for proper featured post sizing
          const originalIndex = posts.findIndex(p => p.slug === post.slug);
          
          // Determine card size based on featured status and position
          const isFeatured = post.isFeatured;
          const isFirstFeatured = isFeatured && originalIndex === 0;
          
          // Bento layout logic:
          // - First featured post: spans 2 columns, 2 rows (large)
          // - Other featured posts: span 2 columns, 1 row (wide)
          // - Regular posts: span 1 column, 1 row (small)
          const colSpan = isFirstFeatured ? 'md:col-span-2 lg:col-span-4' : isFeatured ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2';
          const rowSpan = isFirstFeatured ? 'md:row-span-2' : '';
          const imageHeight = isFirstFeatured ? 'h-64 md:h-full' : isFeatured ? 'h-56' : 'h-48';
          const titleSize = isFirstFeatured ? 'text-2xl md:text-3xl' : isFeatured ? 'text-xl md:text-2xl' : 'text-lg md:text-xl';
          const excerptLines = isFirstFeatured ? 'line-clamp-4 md:line-clamp-6' : isFeatured ? 'line-clamp-3 md:line-clamp-4' : 'line-clamp-2 md:line-clamp-3';
          
          return (
            <article 
              key={post.slug} 
              className={`${colSpan} ${rowSpan} bg-white dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 flex flex-col h-full group`}
            >
              {post.image && (
                <div className={`${imageHeight} relative overflow-hidden border-b border-gray-200 dark:border-gray-700 flex-shrink-0`}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt || post.title || 'Blog post image'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              )}
              <div className={`p-4 md:p-6 flex flex-col ${post.image ? 'flex-grow' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  {post.date && (
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 font-semibold">
                      {post.date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  )}
                  {post.readingTime && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {post.readingTime} min
                    </p>
                  )}
                </div>
                <h2 className={`${titleSize} font-bold text-gray-900 dark:text-white mb-2 md:mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                  {post.title || 'Untitled Post'}
                </h2>
                {post.excerpt && (
                  <p className={`text-gray-600 dark:text-gray-400 text-sm md:text-base mb-3 md:mb-4 ${excerptLines} ${post.image ? 'flex-grow' : ''}`}>
                    {post.excerpt}
                  </p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                    {post.tags.slice(0, isFirstFeatured ? 4 : isFeatured ? 3 : 2).map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm transition-colors inline-flex items-center gap-1 mt-auto"
                >
                  Read More 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Show More
            <ChevronDown className="w-5 h-5" />
          </button>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Showing {visibleCount} of {posts.length} posts
          </p>
        </div>
      )}
    </>
  );
}
