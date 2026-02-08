/**
 * Build Script for Blog Post Index Generation
 * 
 * Functional Requirements:
 * - Scan the blog directory for blog post subdirectories
 * - Extract metadata from each post's metadata.ts file
 * - Generate AllPosts array sorted by featured status, then by date
 * - Generate TagsIndex object grouping posts by tag
 * - Write the generated index to post_index.ts
 * - Emit a generation date in the generated file header
 * - Handle errors gracefully and provide useful logging
 */

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { PostMetadata, PostSpec } from './_types';

// Get the directory of this script (works in both ESM and CommonJS contexts)
function getScriptDir(): string {
  try {
    // ESM context
    if (import.meta.url) {
      return dirname(fileURLToPath(import.meta.url));
    }
  } catch {
    // Fallback for CommonJS
  }
  // CommonJS or fallback
  return __dirname || process.cwd();
}

const scriptDir = getScriptDir();

// Internal interface for build script use (similar to PostSpec but with build-time fields)
interface BuildTimePostSpec extends Omit<PostSpec, 'Content'> {
  relativePath?: string; // Internal use for import paths
  Content: string; // Will be replaced in generated code (string during build, ComponentType in generated file)
}

/**
 * Recursively scans the blog directory for blog post subdirectories
 * Returns an array of objects with the relative path and slug for each post
 */
interface PostPath {
  relativePath: string; // Path relative to blog dir, e.g., "(2025)/hello"
  slug: string; // Final slug for URL, e.g., "hello" (route groups removed)
}

function scanBlogPostDirectoriesRecursive(
  currentDir: string,
  relativePath: string = '',
  excludeDirs: string[] = []
): PostPath[] {
  const posts: PostPath[] = [];
  
  if (!existsSync(currentDir)) {
    return posts;
  }

  const entries = readdirSync(currentDir, { withFileTypes: true });
  const baseExcludeDirs = ['_types', '_buildScript', 'example', 'highlightedblogs', 'layout', 'not-found', 'page', 'post_index.ts'];

  for (const entry of entries) {
    const entryPath = join(currentDir, entry.name);
    const entryRelativePath = relativePath ? join(relativePath, entry.name) : entry.name;
    
    // Skip excluded directories and files starting with underscore (except route groups)
    if (entry.isDirectory()) {
      const isRouteGroup = entry.name.startsWith('(') && entry.name.endsWith(')');
      
      if (!baseExcludeDirs.includes(entry.name) && !excludeDirs.includes(entry.name) && 
          (isRouteGroup || !entry.name.startsWith('_'))) {
        
        const metadataFile = join(entryPath, 'metadata.ts');
        const mdxFile = join(entryPath, 'page.mdx');
        
        // Check if this directory has both metadata.ts and page.mdx (it's a blog post)
        if (existsSync(metadataFile) && existsSync(mdxFile)) {
          // Extract slug by removing route groups from the path
          const slug = entryRelativePath
            .split(/[/\\]/)
            .filter(part => !part.startsWith('(') || !part.endsWith(')'))
            .join('/');
          
          posts.push({
            relativePath: entryRelativePath.replace(/\\/g, '/'), // Normalize to forward slashes
            slug: slug
          });
        } else {
          // Recursively scan subdirectories
          const subPosts = scanBlogPostDirectoriesRecursive(entryPath, entryRelativePath, excludeDirs);
          posts.push(...subPosts);
        }
      }
    }
  }

  return posts;
}

/**
 * Scans the blog directory for blog post subdirectories
 * Returns an array of valid blog post paths
 */
function scanBlogPostDirectories(): PostPath[] {
  const blogDir = scriptDir;
  
  if (!existsSync(blogDir)) {
    console.error(`Blog directory not found: ${blogDir}`);
    return [];
  }

  return scanBlogPostDirectoriesRecursive(blogDir);
}

/**
 * Reads metadata from a blog post's metadata.ts file using native TypeScript imports
 */
function readPostMetadata(relativePath: string): PostMetadata | null {
  const blogDir = scriptDir;
  const metadataFile = join(blogDir, relativePath, 'metadata.ts');
  
  if (!existsSync(metadataFile)) {
    console.warn(`Metadata file not found for post: ${relativePath}`);
    return null;
  }

  try {
    // Use require to load the metadata file (works in Node.js/tsx)
    // Convert to absolute path for require
    const absolutePath = join(blogDir, relativePath, 'metadata.ts');
    
    // Clear require cache to ensure fresh import
    delete require.cache[require.resolve(absolutePath)];
    
    // Require the metadata module
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const metadataModule = require(absolutePath);
    
    // Extract the blogPostMetadata export
    if (metadataModule.blogPostMetadata) {
      const metadata = metadataModule.blogPostMetadata as PostMetadata;
      
      // Validate that date is a Date object if provided
      if (metadata.date !== undefined && !(metadata.date instanceof Date)) {
        console.error(`  ❌ Invalid date type for post "${relativePath}": date must be a Date object, got ${typeof metadata.date}`);
        return null;
      }
      
      // Check if image path exists and warn if it doesn't
      if (metadata.image) {
        // Image paths in metadata are relative to the metadata.ts file location
        // Convert relative paths to absolute paths for checking
        let imagePath: string;
        if (metadata.image.startsWith('/')) {
          // Absolute path - check if it's a /blog/ path or public path
          if (metadata.image.startsWith('/blog/')) {
            // Image is colocated with the blog post
            const imageRelativePath = metadata.image.replace(/^\/blog\//, '');
            imagePath = join(blogDir, imageRelativePath);
          } else {
            // Legacy: public directory files
            imagePath = join(process.cwd(), 'public', metadata.image);
          }
        } else {
          // Relative path - resolve relative to the metadata file location (same directory as post)
          const metadataDir = join(blogDir, relativePath);
          imagePath = join(metadataDir, metadata.image);
        }
        
        if (!existsSync(imagePath)) {
          console.warn(`  ⚠️  Image not found for post "${relativePath}": ${metadata.image} (checked: ${imagePath})`);
        }
      }
      
      return metadata;
    }
    
    console.warn(`blogPostMetadata export not found in: ${relativePath}`);
    return null;
  } catch (error) {
    console.error(`Error reading metadata for post ${relativePath}:`, error);
    return null;
  }
}

/**
 * Generates the post index file content
 */
function generatePostIndexContent(posts: BuildTimePostSpec[]): string {
  // Sort posts: featured first, then by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    // Featured posts first
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    
    // Then by date (newest first) - posts without dates go to the end
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.getTime() - a.date.getTime();
  });

  // Generate import statements for all post content
  const importStatements = sortedPosts.map(post => {
    const contentVarName = post.slug.replace(/[^a-zA-Z0-9]/g, '_') + 'Content';
    const importPath = (post.relativePath || post.slug).replace(/\\/g, '/');
    return `import ${contentVarName} from './${importPath}/page.mdx';`;
  }).join('\n');

  // Generate AllPosts array
  const allPostsContent = sortedPosts.map(post => {
    const contentVarName = post.slug.replace(/[^a-zA-Z0-9]/g, '_') + 'Content';
    const importPath = (post.relativePath || post.slug).replace(/\\/g, '/');
    const props: string[] = [`slug: '${post.slug}'`];
    
    if (post.title) props.push(`title: '${post.title.replace(/'/g, "\\'")}'`);
    // Convert Date to ISO string and create new Date() in generated code (only if date exists and is valid)
    if (post.date && post.date instanceof Date && !isNaN(post.date.getTime())) {
      const dateISO = post.date.toISOString();
      props.push(`date: new Date('${dateISO}')`);
    }
    if (post.tags && post.tags.length > 0) {
      props.push(`tags: [${post.tags.map(tag => `'${tag.replace(/'/g, "\\'")}'`).join(', ')}]`);
    }
    if (post.excerpt) props.push(`excerpt: '${post.excerpt.replace(/'/g, "\\'")}'`);
    if (post.image) {
      // Convert relative image paths to paths that work in the generated index
      // Relative paths (./image.png) need to be converted to /blog/... paths
      // Use slug (not relativePath) to exclude route groups like (2025) from URL
      let imagePath = post.image;
      if (imagePath.startsWith('./') || (!imagePath.startsWith('/') && !imagePath.startsWith('http'))) {
        // Relative path - convert to /blog/{slug}/... path (slug excludes route groups)
        const imageRelativePath = imagePath.replace(/^\.\//, '');
        imagePath = `/blog/${post.slug}/${imageRelativePath}`;
      }
      props.push(`image: '${imagePath}'`);
    }
    if (post.imageAlt) props.push(`imageAlt: '${post.imageAlt.replace(/'/g, "\\'")}'`);
    if (post.readingTime !== undefined) props.push(`readingTime: ${post.readingTime}`);
    if (post.isFeatured !== undefined) props.push(`isFeatured: ${post.isFeatured}`);
    props.push(`Content: ${contentVarName}`);
    
    return `  {\n    ${props.join(',\n    ')}\n  }`;
  }).join(',\n');

  // Generate TagsIndex
  const tagsIndex: Record<string, BuildTimePostSpec[]> = {};
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => {
        if (!tagsIndex[tag]) {
          tagsIndex[tag] = [];
        }
        tagsIndex[tag].push(post);
      });
    }
  });

  // Sort posts within each tag by featured, then date
  Object.keys(tagsIndex).forEach(tag => {
    tagsIndex[tag].sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      // Posts without dates go to the end
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return b.date.getTime() - a.date.getTime();
    });
  });

  const tagsIndexContent = Object.keys(tagsIndex).length > 0
    ? Object.entries(tagsIndex)
        .map(([tag, tagPosts]) => {
          const tagPostsContent = tagPosts.map(post => {
            const contentVarName = post.slug.replace(/[^a-zA-Z0-9]/g, '_') + 'Content';
            const importPath = (post.relativePath || post.slug).replace(/\\/g, '/');
            const props: string[] = [`slug: '${post.slug}'`];
            if (post.title) props.push(`title: '${post.title.replace(/'/g, "\\'")}'`);
            // Convert Date to ISO string and create new Date() in generated code (only if date exists)
            if (post.date) {
              const dateISO = post.date.toISOString();
              props.push(`date: new Date('${dateISO}')`);
            }
            if (post.tags && post.tags.length > 0) {
              props.push(`tags: [${post.tags.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}]`);
            }
            if (post.excerpt) props.push(`excerpt: '${post.excerpt.replace(/'/g, "\\'")}'`);
            if (post.image) {
              // Convert relative image paths to paths that work in the generated index
              // Use slug (not relativePath) to exclude route groups like (2025) from URL
              let imagePath = post.image;
              if (imagePath.startsWith('./') || (!imagePath.startsWith('/') && !imagePath.startsWith('http'))) {
                // Relative path - convert to /blog/{slug}/... path (slug excludes route groups)
                const imageRelativePath = imagePath.replace(/^\.\//, '');
                imagePath = `/blog/${post.slug}/${imageRelativePath}`;
              }
              props.push(`image: '${imagePath}'`);
            }
            if (post.imageAlt) props.push(`imageAlt: '${post.imageAlt.replace(/'/g, "\\'")}'`);
            if (post.readingTime !== undefined) props.push(`readingTime: ${post.readingTime}`);
            if (post.isFeatured !== undefined) props.push(`isFeatured: ${post.isFeatured}`);
            props.push(`Content: ${contentVarName}`);
            return `      {\n        ${props.join(',\n        ')}\n      }`;
          }).join(',\n');
          return `  '${tag.replace(/'/g, "\\'")}': [\n${tagPostsContent}\n  ]`;
        })
        .join(',\n')
    : '';

  const generatedAt = new Date().toISOString();
  return `/**
 * This is an autogenerated file that contains a list of all of the blog posts in the blog directory.
 * It also has some derived types objects used in sub indexes.
 * Generated at: ${generatedAt}
 */

import {PostMetadata, PostSpec} from './_types';

${importStatements}

// A list of all of the posts in order of first, if they're featured, then by date.
export const AllPosts: PostSpec[] = [
${allPostsContent}
]

// A list of each of the tags and the posts that have that tag.
export const TagsIndex: Record<string, PostSpec[]> = {
${tagsIndexContent}
}
`;
}

/**
 * Copies blog post images to public directory for static serving
 */
function copyBlogImagesToPublic(posts: BuildTimePostSpec[]): void {
  const publicBlogDir = join(process.cwd(), 'public', 'blog');
  
  for (const post of posts) {
    if (post.image && post.relativePath) {
      // Only process relative paths (colocated images)
      if (post.image.startsWith('./') || (!post.image.startsWith('/') && !post.image.startsWith('http'))) {
        const imageFileName = post.image.replace(/^\.\//, '');
        const sourceImagePath = join(scriptDir, post.relativePath, imageFileName);
        const destImageDir = join(publicBlogDir, post.slug);
        const destImagePath = join(destImageDir, imageFileName);
        
        if (existsSync(sourceImagePath)) {
          // Ensure destination directory exists
          if (!existsSync(destImageDir)) {
            const { mkdirSync } = require('fs');
            mkdirSync(destImageDir, { recursive: true });
          }
          
          // Copy image to public directory
          const { copyFileSync } = require('fs');
          copyFileSync(sourceImagePath, destImagePath);
          console.log(`  📸 Copied image: ${post.slug}/${imageFileName}`);
        }
      }
    }
  }
}

/**
 * Main function to build the post index
 */
function buildPostIndex(): void {
  console.log('Building blog post index...');
  
  const postSlugs = scanBlogPostDirectories();
  console.log(`Found ${postSlugs.length} blog post(s)`);

  const posts: BuildTimePostSpec[] = [];

  for (const postPath of postSlugs) {
    const metadata = readPostMetadata(postPath.relativePath);
    if (metadata) {
      // Skip posts with suppressPublish flag
      if (metadata.suppressPublish) {
        console.log(`  ⏭️  Skipping ${postPath.slug} (suppressPublish: true)`);
        continue;
      }
      
      posts.push({
        slug: postPath.slug,
        relativePath: postPath.relativePath,
        ...metadata,
        Content: '', // Placeholder, will be replaced in the generated code
      });
      console.log(`  - ${postPath.slug} (${postPath.relativePath}): ${metadata.title || 'Untitled'}`);
    }
  }

  if (posts.length === 0) {
    console.warn('No blog posts found. Generating empty index.');
  }

  // Copy images to public directory for static serving
  console.log('\nCopying blog images to public directory...');
  copyBlogImagesToPublic(posts);

  const indexContent = generatePostIndexContent(posts);
  const outputPath = join(scriptDir, 'post_index.ts');
  
  writeFileSync(outputPath, indexContent, 'utf-8');
  console.log(`\nPost index generated successfully at: ${outputPath}`);
}

// Run the build script
buildPostIndex();
