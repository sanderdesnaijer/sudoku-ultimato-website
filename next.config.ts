import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Optimize bundle size and code splitting
  experimental: {
    optimizePackageImports: ['next'],
  },
  // Compiler optimizations - remove console.log in production and enable minification
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Note: For static exports, cache headers must be configured at the server/CDN level.
  // Recommended cache headers:
  // - Static assets (JS, CSS, fonts, images): Cache-Control: public, max-age=31536000, immutable
  // - HTML files: Cache-Control: public, max-age=0, must-revalidate
  // This can be configured via:
  // - .htaccess (Apache)
  // - _headers (Netlify)
  // - vercel.json (Vercel)
  // - CDN configuration (Cloudflare, etc.)
};

export default nextConfig;
