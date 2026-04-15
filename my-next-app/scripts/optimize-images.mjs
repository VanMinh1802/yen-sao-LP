/**
 * Image Optimization Script
 * Recursively converts all images in public/images/ to WebP format.
 * 
 * Usage: node scripts/optimize-images.mjs
 */
import sharp from "sharp";
import { readdir, stat, mkdir, rename } from "fs/promises";
import { join, extname, basename, dirname, relative } from "path";

const IMAGES_DIR = join(import.meta.dirname, "..", "public", "images");
const BACKUP_DIR = join(import.meta.dirname, "..", "public", "_originals");
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

// Target max dimensions based on folder/usage context
const FOLDER_CONFIG = {
  hero: { width: 1920, quality: 82 },
  logo: { width: 400, quality: 85 },
  products: { width: 800, quality: 80 },
  timeline: { width: 600, quality: 78 },
  "why-us": { width: 600, quality: 78 },
};

const DEFAULT_CONFIG = { width: 800, quality: 80 };

async function getImageFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await getImageFiles(fullPath)));
    } else if (EXTENSIONS.has(extname(entry.name).toLowerCase())) {
      results.push(fullPath);
    }
  }
  return results;
}

async function optimizeImages() {
  const imageFiles = await getImageFiles(IMAGES_DIR);
  
  console.log(`\n🖼️  Found ${imageFiles.length} images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const filePath of imageFiles) {
    const file = basename(filePath);
    const nameWithoutExt = basename(file, extname(file));
    const relDir = relative(IMAGES_DIR, dirname(filePath));
    const folder = relDir.split(/[/\\]/)[0]; // e.g. "hero", "products"
    
    const outputPath = join(dirname(filePath), `${nameWithoutExt}.webp`);
    
    // Mirror folder structure in backup
    const backupFolder = join(BACKUP_DIR, relDir);
    await mkdir(backupFolder, { recursive: true });
    const backupPath = join(backupFolder, file);

    const config = FOLDER_CONFIG[folder] || DEFAULT_CONFIG;
    const originalSize = (await stat(filePath)).size;
    totalOriginal += originalSize;

    try {
      const metadata = await sharp(filePath).metadata();
      const isPortrait = (metadata.height || 0) > (metadata.width || 0);

      const resizeOptions = isPortrait
        ? { height: config.width, withoutEnlargement: true }
        : { width: config.width, withoutEnlargement: true };

      await sharp(filePath)
        .resize(resizeOptions)
        .webp({ quality: config.quality, effort: 6 })
        .toFile(outputPath);

      const newSize = (await stat(outputPath)).size;
      totalOptimized += newSize;

      const reduction = ((1 - newSize / originalSize) * 100).toFixed(1);
      const origMB = (originalSize / 1024 / 1024).toFixed(2);
      const newKB = (newSize / 1024).toFixed(0);
      const relPath = relative(IMAGES_DIR, filePath);

      console.log(
        `  ✅ ${relPath.padEnd(36)} ${origMB} MB → ${newKB} KB  (−${reduction}%)`
      );

      // Move original to backup
      await rename(filePath, backupPath);
    } catch (err) {
      console.error(`  ❌ ${file}: ${err.message}`);
    }
  }

  const totalOrigMB = (totalOriginal / 1024 / 1024).toFixed(2);
  const totalOptMB = (totalOptimized / 1024 / 1024).toFixed(2);
  const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

  console.log(`\n${"─".repeat(64)}`);
  console.log(`  📦 Total: ${totalOrigMB} MB → ${totalOptMB} MB  (−${totalReduction}%)`);
  console.log(`  📁 Originals backed up to: public/_originals/`);
  console.log(`  ⚠️  Update all image references (.jpg/.jpeg/.png → .webp)`);
  console.log(`${"─".repeat(64)}\n`);
}

optimizeImages().catch(console.error);
