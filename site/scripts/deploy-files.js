#!/usr/bin/env node

/**
 * Deployment script to copy files from deployment_files to output directories
 * This script is OS/shell agnostic and handles file copying for static site deployment
 * Copies to both ../docs (for manual deployment) and ./out (for GitHub Actions)
 */

const fs = require('fs');
const path = require('path');

// Get the directory paths
const deploymentFilesDir = path.join(__dirname, '..', 'deployment_files');
const docsDir = path.join(__dirname, '..', '..', 'docs');
const outDir = path.join(__dirname, '..', 'out');

// Ensure output directories exist
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Function to copy a file
function copyFile(sourcePath, destPath) {
  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied: ${path.relative(process.cwd(), sourcePath)} → ${path.relative(process.cwd(), destPath)}`);
  } catch (error) {
    console.error(`✗ Failed to copy ${sourcePath}:`, error.message);
    process.exit(1);
  }
}

// Function to copy directory recursively
function copyDirectory(sourceDir, destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const items = fs.readdirSync(sourceDir);
  
  for (const item of items) {
    const sourcePath = path.join(sourceDir, item);
    const destPath = path.join(destDir, item);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  }
}

// Main execution
console.log('🚀 Starting deployment file copy...');
console.log(`📁 Source: ${deploymentFilesDir}`);

// Check if deployment_files directory exists
if (!fs.existsSync(deploymentFilesDir)) {
  console.error(`✗ Deployment files directory not found: ${deploymentFilesDir}`);
  process.exit(1);
}

// Copy all files from deployment_files to both output directories
try {
  // Copy to docs directory (for manual deployment)
  if (fs.existsSync(docsDir)) {
    console.log(`📁 Copying to: ${docsDir}`);
    copyDirectory(deploymentFilesDir, docsDir);
  } else {
    console.log(`⚠️  Skipping docs directory (does not exist): ${docsDir}`);
  }

  // Copy to out directory (for GitHub Actions - CRITICAL)
  if (fs.existsSync(outDir)) {
    console.log(`📁 Copying to: ${outDir}`);
    copyDirectory(deploymentFilesDir, outDir);
    
    // Ensure .nojekyll exists (critical for GitHub Pages)
    const nojekyllPath = path.join(outDir, '.nojekyll');
    if (!fs.existsSync(nojekyllPath)) {
      console.log(`⚠️  .nojekyll not found, creating it...`);
      fs.writeFileSync(nojekyllPath, '');
      console.log(`✓ Created .nojekyll file`);
    } else {
      console.log(`✓ .nojekyll file verified`);
    }
    
    console.log(`✅ Deployment files copied to out directory (required for GitHub Pages)`);
  } else {
    console.error(`✗ ERROR: out directory does not exist: ${outDir}`);
    console.error(`   This is required for GitHub Pages deployment!`);
    console.error(`   Make sure 'next build' completed successfully before this script runs.`);
    process.exit(1);
  }

  console.log('✅ Deployment files copied successfully!');
  process.exit(0);  
} catch (error) {
  console.error('✗ Error during deployment file copy:', error.message);
  console.error(error.stack);
  process.exit(1);
}