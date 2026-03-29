/**
 * PWA Icon Generator Script
 * Run with: node scripts/generate-pwa-icons.mjs
 * 
 * Generates placeholder PWA icons with the Arabic letter أ (Alif)
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = join(__dirname, '..', 'public', 'icons');

// Icon sizes for PWA
const SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

// Create SVG icon with Arabic letter
function createIconSVG(size) {
  const fontSize = Math.round(size * 0.55);
  const yOffset = Math.round(size * 0.68);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.15)}" fill="url(#grad)"/>
  <text x="50%" y="${yOffset}" 
        font-family="'Amiri', 'Traditional Arabic', serif" 
        font-size="${fontSize}px" 
        fill="white" 
        text-anchor="middle" 
        font-weight="bold">أ</text>
</svg>`;
}

// Ensure icons directory exists
if (!existsSync(ICONS_DIR)) {
  mkdirSync(ICONS_DIR, { recursive: true });
}

// Generate icons
console.log('Generating PWA icons...\n');

SIZES.forEach(size => {
  const svg = createIconSVG(size);
  const filename = `icon-${size}.svg`;
  const filepath = join(ICONS_DIR, filename);
  
  writeFileSync(filepath, svg, 'utf8');
  console.log(`✓ Generated ${filename}`);
});

console.log('\n✅ PWA icons generated successfully!');
console.log('\nNote: These are SVG placeholders. For production, convert to PNG using:');
console.log('  - sharp, inkscape, or an online converter');
console.log('  - Or use a service like realfavicongenerator.net');
