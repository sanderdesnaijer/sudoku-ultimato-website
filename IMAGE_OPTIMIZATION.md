# Image Optimization Guide

## Current Issue
The `StoreImage.png` files are 2.6MB each but are displayed at only 555x600px, causing significant performance issues.

## Recommended Solutions

### 1. Convert to Modern Formats (WebP/AVIF)
Convert PNG images to WebP or AVIF format for better compression:
- WebP: ~70-80% smaller than PNG
- AVIF: ~50% smaller than WebP

### 2. Create Responsive Image Sizes
Create multiple sizes of the image:
- Mobile (640px width): ~200-300KB
- Tablet (1024px width): ~400-500KB  
- Desktop (1284px width): ~600-800KB

### 3. Implementation Steps

#### Option A: Manual Conversion (Recommended for static export)
1. Use tools like:
   - `sharp` CLI: `npx sharp-cli --input StoreImage.png --output StoreImage.webp --format webp --quality 80`
   - Online tools: Squoosh.app, CloudConvert
   - ImageMagick: `convert StoreImage.png -quality 85 StoreImage.webp`

2. Create responsive sizes:
   ```bash
   # Mobile (640px width, maintain aspect ratio)
   convert StoreImage.png -resize 640x StoreImage-640w.webp
   
   # Tablet (1024px width)
   convert StoreImage.png -resize 1024x StoreImage-1024w.webp
   
   # Desktop (1284px width - original)
   convert StoreImage.png -resize 1284x StoreImage-1284w.webp
   ```

3. Update `HomePage.tsx` to use responsive images:
   ```tsx
   <picture>
     <source srcSet={`/AppStore/${lang.toUpperCase()}/StoreImage-640w.webp 640w, /AppStore/${lang.toUpperCase()}/StoreImage-1024w.webp 1024w, /AppStore/${lang.toUpperCase()}/StoreImage-1284w.webp 1284w`} type="image/webp" />
     <img 
       src={`/AppStore/${lang.toUpperCase()}/StoreImage.png`} 
       alt={t.hero.imageAlt}
       width={1284}
       height={2778}
       loading="eager"
       fetchPriority="high"
       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 600px"
       className="w-full h-auto max-h-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
     />
   </picture>
   ```

#### Option B: Use Next.js Image Component (Requires removing `unoptimized: true`)
If you can enable Next.js image optimization:
1. Remove `unoptimized: true` from `next.config.ts`
2. Use Next.js `Image` component with automatic optimization
3. Next.js will generate WebP/AVIF and responsive sizes automatically

### 4. Expected Savings
- Current: 2,638 KiB per image
- After optimization: ~200-600 KiB per image (depending on size)
- **Estimated savings: 2,000-2,400 KiB per page load**

### 5. Files to Update
- `/public/AppStore/EN/StoreImage.png` → Create WebP versions
- `/public/AppStore/NL/StoreImage.png` → Create WebP versions  
- `/public/AppStore/TH/StoreImage.png` → Create WebP versions
- Update `app/components/HomePage.tsx` to use responsive images
