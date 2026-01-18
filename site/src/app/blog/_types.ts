/**
 * This is file contains types. Notably the post metadata types that are used to tag, date, etc the blog posts
 */

// This is the post metadata provided by the author
export interface PostMetadata {
  title?: string;
  date?: Date;
  tags?: string[];
  excerpt?: string;
  image?: string;
  imageAlt?: string;
  readingTime?: number;
  isFeatured?: boolean;
  suppressPublish?: boolean; // If true, post will not appear in the post list
}

// This is extended to include the slug, which is
export interface PostSpec extends PostMetadata {
  slug: string;
  Content: React.ComponentType;
}

// Type for blog post list items (excludes Content component for client components)
export interface PostListItem extends PostMetadata {
  slug: string;
}