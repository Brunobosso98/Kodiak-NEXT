const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Run Next.js build with bundle analyzer
async function analyzeBundles() {
  try {
    console.log('Building Next.js application with bundle analyzer...');
    
    // Set environment variables for bundle analyzer
    process.env.ANALYZE = 'true';
    
    // Run Next.js build
    execSync('next build', { stdio: 'inherit' });
    
    console.log('Bundle analysis complete!');
  } catch (error) {
    console.error('Error analyzing bundles:', error);
  }
}

// Run the analysis
analyzeBundles();
