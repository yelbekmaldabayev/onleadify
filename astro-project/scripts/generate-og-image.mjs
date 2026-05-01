import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

// Create a static OG image (without animations, optimized for social sharing)
const ogImageSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#7877c6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5b5a9e;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="logo-gradient" x1="80" y1="252" x2="320" y2="378" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff"/>
      <stop offset="1" stop-color="#e4e4e7"/>
    </linearGradient>
    <linearGradient id="logo-gradient-2" x1="20" y1="315" x2="380" y2="315" gradientUnits="userSpaceOnUse">
      <stop stop-color="#a78bfa"/>
      <stop offset="0.5" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#7c3aed"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  
  <!-- Grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(120, 119, 198, 0.1)" stroke-width="1"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#grid)"/>
  
  <!-- Glow effect behind logo -->
  <ellipse cx="200" cy="315" rx="100" ry="100" fill="#7877c6" opacity="0.15"/>
  
  <!-- Static Logo orbits -->
  <ellipse cx="200" cy="315" rx="105" ry="37.5" stroke="url(#logo-gradient)" stroke-width="15" fill="none" transform="rotate(60 200 315)"/>
  <ellipse cx="200" cy="315" rx="120" ry="45" stroke="url(#logo-gradient-2)" stroke-width="18.75" fill="none" transform="rotate(-30 200 315)"/>
  
  <!-- Main text -->
  <text x="380" y="280" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="white">
    Onleadify
  </text>
  
  <!-- Subtitle -->
  <text x="380" y="340" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="rgba(255, 255, 255, 0.8)">
    Веб-студия и AI-автоматизация
  </text>
  
  <!-- Description -->
  <text x="380" y="400" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="rgba(255, 255, 255, 0.6)">
    Создаём системы, которые приводят клиентов
  </text>
  
  <!-- Bottom accent line -->
  <rect x="380" y="440" width="600" height="4" fill="url(#accentGradient)" rx="2"/>
  
  <!-- Website URL -->
  <text x="380" y="520" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="rgba(255, 255, 255, 0.5)">
    onleadify.com
  </text>
</svg>`;

async function generateImages() {
  try {
    // Generate OG image PNG
    await sharp(Buffer.from(ogImageSvg))
      .png({ quality: 90 })
      .toFile(join(publicDir, 'og-image.png'));
    console.log('✓ Generated og-image.png (1200x630)');

    // Generate favicon.ico from existing favicon.svg
    const faviconSvg = readFileSync(join(publicDir, 'favicon.svg'));
    
    // Create 32x32 PNG for favicon
    const favicon32 = await sharp(faviconSvg)
      .resize(32, 32)
      .png()
      .toBuffer();
    
    // Create 16x16 PNG for favicon
    const favicon16 = await sharp(faviconSvg)
      .resize(16, 16)
      .png()
      .toBuffer();
    
    // Save as PNG (browsers accept PNG as favicon too)
    await sharp(faviconSvg)
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, 'favicon-32.png'));
    
    await sharp(faviconSvg)
      .resize(16, 16)
      .png()
      .toFile(join(publicDir, 'favicon-16.png'));
    
    console.log('✓ Generated favicon PNGs');

    // Generate apple-touch-icon PNG
    const appleTouchSvg = readFileSync(join(publicDir, 'apple-touch-icon.svg'));
    await sharp(appleTouchSvg)
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png (180x180)');

    // Generate 192x192 and 512x512 PNGs for PWA
    const favicon192Svg = readFileSync(join(publicDir, 'favicon-192.svg'));
    await sharp(favicon192Svg)
      .resize(192, 192)
      .png()
      .toFile(join(publicDir, 'favicon-192.png'));
    console.log('✓ Generated favicon-192.png');

    const favicon512Svg = readFileSync(join(publicDir, 'favicon-512.svg'));
    await sharp(favicon512Svg)
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, 'favicon-512.png'));
    console.log('✓ Generated favicon-512.png');

    console.log('\n✅ All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

generateImages();
