const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories to process
const directories = [
  'public',
  'public/modules',
  'public/canvas',
];

// Image sizes for responsive images
const sizes = [
  { width: 640, suffix: '-sm' },
  { width: 1024, suffix: '-md' },
  { width: 1920, suffix: '-lg' },
];

// Process images
async function optimizeImages() {
  try {
    for (const dir of directories) {
      const files = fs.readdirSync(dir);
      
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        // Skip directories and non-image files
        if (stat.isDirectory() || !isImageFile(file)) continue;
        
        // Skip already optimized images
        if (file.includes('-sm') || file.includes('-md') || file.includes('-lg')) continue;
        
        console.log(`Processing: ${filePath}`);
        
        // Get file info
        const { name, ext } = path.parse(file);
        
        // Convert to WebP and AVIF
        if (ext.toLowerCase() !== '.avif') {
          await sharp(filePath)
            .avif({ quality: 80 })
            .toFile(path.join(dir, `${name}.avif`));
          console.log(`Created AVIF: ${path.join(dir, `${name}.avif`)}`);
        }
        
        if (ext.toLowerCase() !== '.webp') {
          await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(path.join(dir, `${name}.webp`));
          console.log(`Created WebP: ${path.join(dir, `${name}.webp`)}`);
        }
        
        // Create responsive versions
        for (const size of sizes) {
          await sharp(filePath)
            .resize(size.width)
            .avif({ quality: 80 })
            .toFile(path.join(dir, `${name}${size.suffix}.avif`));
          console.log(`Created ${size.width}px AVIF: ${path.join(dir, `${name}${size.suffix}.avif`)}`);
          
          await sharp(filePath)
            .resize(size.width)
            .webp({ quality: 80 })
            .toFile(path.join(dir, `${name}${size.suffix}.webp`));
          console.log(`Created ${size.width}px WebP: ${path.join(dir, `${name}${size.suffix}.webp`)}`);
        }
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Check if file is an image
function isImageFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'].includes(ext);
}

// Run the optimization
optimizeImages();
