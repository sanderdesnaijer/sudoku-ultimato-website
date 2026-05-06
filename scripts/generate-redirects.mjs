/**
 * Generates static HTML redirect files for GitHub Pages.
 *
 * GitHub Pages doesn't support _redirects or .htaccess, so we create
 * HTML files with <meta http-equiv="refresh"> for 301-equivalent behavior.
 *
 * These ensure /en/ routes redirect to root (English is the default language).
 */

import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const OUT_DIR = join(process.cwd(), 'out');

const redirects = [
  { from: '/en/', to: '/' },
  { from: '/en/privacy/', to: '/privacy/' },
  { from: '/en/support/', to: '/support/' },
];

function buildRedirectHtml(targetUrl) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${targetUrl}">
  <link rel="canonical" href="https://sudokuultimato.metsander.com${targetUrl}">
  <title>Redirecting…</title>
</head>
<body>
  <p>Redirecting to <a href="${targetUrl}">${targetUrl}</a>…</p>
</body>
</html>`;
}

for (const { from, to } of redirects) {
  const filePath = join(OUT_DIR, from, 'index.html');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, buildRedirectHtml(to), 'utf-8');
  console.log(`  ${from} → ${to}`);
}

console.log(`Generated ${redirects.length} redirect(s).`);
