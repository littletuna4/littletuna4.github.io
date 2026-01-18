const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

/**
 * Convert PNG images to WebP format for better compression
 * This script runs at build time to optimize images
 */

const ASSETS_DIR = path.join(__dirname, '../public/assets');
const IMAGES_DIR = path.join(ASSETS_DIR, 'images');
const BLOG_DIR = path.join(__dirname, '../public/blog');

// Quality settings for different image types
const QUALITY_SETTINGS = {
  hero: 85,      // Hero images - higher quality
  team: 80,      // Team photos - good quality
  networking: 75, // Networking photos - balanced
  party: 75,     // Party photos - balanced
  default: 80    // Default quality
};

/**
 * Get quality setting based on image name
 */
function getQuality(imageName) {
  if (imageName.includes('hero')) return QUALITY_SETTINGS.hero;
  if (imageName.includes('team')) return QUALITY_SETTINGS.team;
  if (imageName.includes('networking')) return QUALITY_SETTINGS.networking;
  if (imageName.includes('party')) return QUALITY_SETTINGS.party;
  return QUALITY_SETTINGS.default;
}

/**
 * Convert a single PNG file to WebP
 */
async function convertToWebP(inputPath, outputPath, quality = 80) {
  try {
    const stats = await fs.promises.stat(inputPath);
    const originalSize = stats.size;
    
    await sharp(inputPath)
      .webp({ 
        quality,
        effort: 6, // Higher effort for better compression
        smartSubsample: true
      })
      .toFile(outputPath);
    
    const newStats = await fs.promises.stat(outputPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Converted ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
    return { originalSize, newSize, savings };
  } catch (error) {
    console.error(`❌ Failed to convert ${inputPath}:`, error.message);
    return null;
  }
}

/**
 * Process all PNG and JPG files in a directory recursively
 */
async function processDirectory(dir, relativePath = '') {
  if (!fs.existsSync(dir)) {
    return { totalOriginalSize: 0, totalNewSize: 0, convertedCount: 0 };
  }
  
  const items = await fs.promises.readdir(dir);
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let convertedCount = 0;
  
  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = await fs.promises.stat(itemPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subResult = await processDirectory(itemPath, path.join(relativePath, item));
      totalOriginalSize += subResult.totalOriginalSize;
      totalNewSize += subResult.totalNewSize;
      convertedCount += subResult.convertedCount;
    } else {
      // Process image files
      const lower = item.toLowerCase();
      if (lower.endsWith('.png') || lower.endsWith('.jpg') || lower.endsWith('.jpeg')) {
        const webpFile = item.replace(/\.(png|jpg|jpeg)$/i, '.webp');
        const outputPath = path.join(dir, webpFile);
        
        // Skip if WebP already exists and is newer
        if (fs.existsSync(outputPath)) {
          const imageStats = await fs.promises.stat(itemPath);
          const webpStats = await fs.promises.stat(outputPath);
          
          if (webpStats.mtime > imageStats.mtime) {
            console.log(`⏭️  Skipping ${path.join(relativePath, item)} (WebP already up to date)`);
            continue;
          }
        }
        
        const quality = getQuality(item);
        const result = await convertToWebP(itemPath, outputPath, quality);
        
        if (result) {
          totalOriginalSize += result.originalSize;
          totalNewSize += result.newSize;
          convertedCount++;
        }
      }
    }
  }
  
  return { totalOriginalSize, totalNewSize, convertedCount };
}

/**
 * Process all PNG and JPG files in the images directory
 */
async function processImages() {
  console.log('🖼️  Converting PNG and JPG images to WebP...\n');
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let convertedCount = 0;
  
  // Process assets/images directory
  if (fs.existsSync(IMAGES_DIR)) {
    console.log('📁 Processing assets/images...');
    const result = await processDirectory(IMAGES_DIR, 'assets/images');
    totalOriginalSize += result.totalOriginalSize;
    totalNewSize += result.totalNewSize;
    convertedCount += result.convertedCount;
  } else {
    console.log('📁 Assets/images directory not found, skipping');
  }
  
  // Process blog directory
  if (fs.existsSync(BLOG_DIR)) {
    console.log('\n📁 Processing blog images...');
    const result = await processDirectory(BLOG_DIR, 'blog');
    totalOriginalSize += result.totalOriginalSize;
    totalNewSize += result.totalNewSize;
    convertedCount += result.convertedCount;
  } else {
    console.log('📁 Blog directory not found, skipping');
  }
  
  if (convertedCount > 0) {
    const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n📊 Conversion Summary:`);
    console.log(`   • ${convertedCount} images converted`);
    console.log(`   • ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB → ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   • ${totalSavings}% total size reduction`);
  } else {
    console.log('\n✨ All images are already up to date!');
  }
}

/**
 * Update image references in events data to use WebP
 */
async function updateImageReferences() {
  console.log('\n🔄 Updating image references to use WebP...');
  
  const eventsFile = path.join(__dirname, '../src/db/data/events.ts');
  const blogIndexFile = path.join(__dirname, '../src/app/blog/post_index.ts');
  let hasAnyChanges = false;
  
  // Update events file
  if (fs.existsSync(eventsFile)) {
    try {
      let content = await fs.promises.readFile(eventsFile, 'utf8');
      let hasChanges = false;
      
      // Replace PNG references with WebP
      const pngToWebpRegex = /\/assets\/images\/([^"']+)\.png/g;
      content = content.replace(pngToWebpRegex, (match, imageName) => {
        const webpPath = `/assets/images/${imageName}.webp`;
        console.log(`   • ${match} → ${webpPath}`);
        hasChanges = true;
        return webpPath;
      });
      
      // Replace JPG references with WebP
      const jpgToWebpRegex = /\/assets\/images\/([^"']+)\.(jpg|jpeg)/g;
      content = content.replace(jpgToWebpRegex, (match, imageName, extension) => {
        const webpPath = `/assets/images/${imageName}.webp`;
        console.log(`   • ${match} → ${webpPath}`);
        hasChanges = true;
        return webpPath;
      });
      
      if (hasChanges) {
        await fs.promises.writeFile(eventsFile, content, 'utf8');
        console.log('✅ Updated image references in events.ts');
        hasAnyChanges = true;
      }
    } catch (error) {
      console.error('❌ Failed to update image references in events.ts:', error.message);
    }
  } else {
    console.log('📁 Events file not found, skipping');
  }
  
  // Update blog index file
  if (fs.existsSync(blogIndexFile)) {
    try {
      let content = await fs.promises.readFile(blogIndexFile, 'utf8');
      let hasChanges = false;
      
      // Replace PNG references in blog paths with WebP
      const blogPngToWebpRegex = /\/blog\/([^"']+)\.png/g;
      content = content.replace(blogPngToWebpRegex, (match, imagePath) => {
        const webpPath = `/blog/${imagePath}.webp`;
        console.log(`   • ${match} → ${webpPath}`);
        hasChanges = true;
        return webpPath;
      });
      
      // Replace JPG references in blog paths with WebP
      const blogJpgToWebpRegex = /\/blog\/([^"']+)\.(jpg|jpeg)/g;
      content = content.replace(blogJpgToWebpRegex, (match, imagePath, extension) => {
        const webpPath = `/blog/${imagePath}.webp`;
        console.log(`   • ${match} → ${webpPath}`);
        hasChanges = true;
        return webpPath;
      });
      
      if (hasChanges) {
        await fs.promises.writeFile(blogIndexFile, content, 'utf8');
        console.log('✅ Updated image references in post_index.ts');
        hasAnyChanges = true;
      }
    } catch (error) {
      console.error('❌ Failed to update image references in post_index.ts:', error.message);
    }
  } else {
    console.log('📁 Blog index file not found, skipping');
  }
  
  if (!hasAnyChanges) {
    console.log('✨ No image references needed updating');
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    await processImages();
    await updateImageReferences();
    console.log('\n🎉 Image conversion complete!');
  } catch (error) {
    console.error('❌ Image conversion failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { processImages, updateImageReferences };
