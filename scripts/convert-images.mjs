import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const iosDir = path.join(rootDir, 'ios');
const publicDir = path.join(rootDir, 'public', 'AppStore');

// Languages to process
const languages = ['de', 'es', 'fr', 'it', 'pt'];

// Image mappings: source file -> output files with sizes
const imageConfigs = {
  // Classic mode images
  'game_classic.png': [
    { output: 'Classic.webp', width: 863 },
    { output: 'Classic-400w.webp', width: 400 },
    { output: 'Classic-640w.webp', width: 640 },
    { output: 'game_classic.webp', width: null }, // Full size
  ],
  // Killer mode images
  'game_killer.png': [
    { output: 'Killer.webp', width: 863 },
    { output: 'Killer-400w.webp', width: 400 },
    { output: 'Killer-640w.webp', width: 640 },
    { output: 'game_killer.webp', width: null }, // Full size
  ],
  // 16x16 mode images
  'game_16x16.png': [
    { output: '16x16.webp', width: 863 },
    { output: '16x16-400w.webp', width: 400 },
    { output: '16x16-640w.webp', width: 640 },
    { output: 'game_16x16.webp', width: null }, // Full size
  ],
  // 4x4 game
  'game_4x4.png': [
    { output: 'game_4x4.webp', width: null },
  ],
  // Dark mode game
  'game_dark.png': [
    { output: 'game_dark.webp', width: null },
  ],
  // Landscape game
  'game_landscape.png': [
    { output: 'game_landscape.webp', width: null },
  ],
  // Theme menu
  'game_theme_menu.png': [
    { output: 'game_theme_menu.webp', width: null },
  ],
  // Main menu
  'main_menu.png': [
    { output: 'main_menu.webp', width: null },
  ],
  // Mode selection
  'mode.png': [
    { output: 'mode.webp', width: null },
  ],
  // Calendar/daily
  'calendar.png': [
    { output: 'calendar.webp', width: null },
  ],
  // Progress
  'progress.png': [
    { output: 'progress.webp', width: null },
  ],
  // Stats
  'stats.png': [
    { output: 'stats.webp', width: null },
  ],
};

// OG images need jpg output
const ogImageConfigs = {
  'main_menu.png': [
    { output: 'og-image.jpg', width: 1200, height: 630 },
    { output: 'og-image-clean.jpg', width: 1200, height: 630 },
  ],
};

async function convertImage(inputPath, outputPath, width, height = null, format = 'webp') {
  try {
    let pipeline = sharp(inputPath);
    
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }
    
    if (format === 'webp') {
      pipeline = pipeline.webp({ quality: 85 });
    } else if (format === 'jpg' || format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality: 90 });
    }
    
    await pipeline.toFile(outputPath);
    console.log(`✓ Created: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error creating ${outputPath}: ${error.message}`);
  }
}

async function createOGImage(inputPath, outputPath, width, height) {
  try {
    // For OG images, we want to center crop to specific dimensions
    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'top',
      })
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    console.log(`✓ Created: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error creating ${outputPath}: ${error.message}`);
  }
}

async function processLanguage(lang) {
  const langUpper = lang.toUpperCase();
  const inputDir = path.join(iosDir, lang, 'iPhone_16');
  const outputDir = path.join(publicDir, langUpper);
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`\nProcessing ${langUpper}...`);
  console.log(`Input: ${inputDir}`);
  console.log(`Output: ${outputDir}`);
  
  // Check if input directory exists
  if (!fs.existsSync(inputDir)) {
    console.error(`✗ Input directory not found: ${inputDir}`);
    return;
  }
  
  // Store images (main hero image) - use main_menu.png
  const storeImageConfigs = [
    { output: 'store-image-400.webp', width: 400 },
    { output: 'store-image-560.webp', width: 560 },
    { output: 'store-image-640.webp', width: 640 },
    { output: 'store-image-1024.webp', width: 1024 },
    { output: 'store-image-1284.webp', width: 1284 },
  ];
  
  // Process store images from main_menu.png
  const mainMenuPath = path.join(inputDir, 'main_menu.png');
  if (fs.existsSync(mainMenuPath)) {
    for (const config of storeImageConfigs) {
      const outputPath = path.join(outputDir, config.output);
      await convertImage(mainMenuPath, outputPath, config.width);
    }
  }
  
  // Process webp images
  for (const [sourceFile, configs] of Object.entries(imageConfigs)) {
    const inputPath = path.join(inputDir, sourceFile);
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`  ⚠ Source not found: ${sourceFile}`);
      continue;
    }
    
    for (const config of configs) {
      const outputPath = path.join(outputDir, config.output);
      await convertImage(inputPath, outputPath, config.width);
    }
  }
  
  // Process OG images
  for (const [sourceFile, configs] of Object.entries(ogImageConfigs)) {
    const inputPath = path.join(inputDir, sourceFile);
    
    if (!fs.existsSync(inputPath)) {
      console.warn(`  ⚠ Source not found for OG: ${sourceFile}`);
      continue;
    }
    
    for (const config of configs) {
      const outputPath = path.join(outputDir, config.output);
      await createOGImage(inputPath, outputPath, config.width, config.height);
    }
  }
}

async function main() {
  console.log('Converting images for new languages...');
  console.log('Languages:', languages.join(', '));
  
  for (const lang of languages) {
    await processLanguage(lang);
  }
  
  console.log('\n✓ Done!');
}

main().catch(console.error);
