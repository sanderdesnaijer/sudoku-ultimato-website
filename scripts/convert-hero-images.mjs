import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, '..');
const sourceDir = path.join(rootDir, 'Sudoku App Store (1)');
const publicDir = path.join(rootDir, 'public', 'AppStore');

// Languages to process (new languages only)
const languages = ['DE', 'ES', 'FR', 'IT', 'PT'];

// Image mappings: source file -> output files with sizes
const imageConfigs = {
  'Left.png': [
    { output: 'Killer.webp', width: 863 },
    { output: 'Killer-400w.webp', width: 400 },
    { output: 'Killer-640w.webp', width: 640 },
  ],
  'Center.png': [
    { output: 'Classic.webp', width: 863 },
    { output: 'Classic-400w.webp', width: 400 },
    { output: 'Classic-640w.webp', width: 640 },
  ],
  'Right.png': [
    { output: '16x16.webp', width: 863 },
    { output: '16x16-400w.webp', width: 400 },
    { output: '16x16-640w.webp', width: 640 },
  ],
};

async function convertImage(inputPath, outputPath, width) {
  try {
    await sharp(inputPath)
      .resize(width, null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ Created: ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error creating ${outputPath}: ${error.message}`);
  }
}

async function processLanguage(lang) {
  const inputDir = path.join(sourceDir, lang);
  const outputDir = path.join(publicDir, lang);
  
  console.log(`\nProcessing ${lang}...`);
  console.log(`Input: ${inputDir}`);
  console.log(`Output: ${outputDir}`);
  
  // Check if input directory exists
  if (!fs.existsSync(inputDir)) {
    console.error(`✗ Input directory not found: ${inputDir}`);
    return;
  }
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Process each source image
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
}

async function main() {
  console.log('Converting hero images for new languages...');
  console.log('Languages:', languages.join(', '));
  console.log('Source folder:', sourceDir);
  
  for (const lang of languages) {
    await processLanguage(lang);
  }
  
  console.log('\n✓ Done!');
}

main().catch(console.error);
