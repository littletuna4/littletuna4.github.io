# Blog

## Images in blog posts

Blog post pages are MDX under `site/src/app/blog/`. Use **imported Next.js images** instead of markdown image syntax.

1. Place image files (e.g. `.png`) in the same directory as the post’s `page.mdx`.
2. At the top of the MDX file, import the image(s):
   ```ts
   import myImage from './my-image.png';
   ```
3. In the body, use the shared `Image` component (provided by MDX components) with the imported asset:
   ```tsx
   <Image src={myImage} alt="Descriptive alt text" className="max-w-full h-auto rounded-lg shadow-sm mb-4" />
   ```

Do not use markdown image syntax `![alt](path)`; it does not use the Next.js Image component. Metadata (e.g. `metadata.ts` `image`) still uses string paths for OG/social and is processed by the blog build script.
