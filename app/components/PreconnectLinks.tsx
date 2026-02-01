export default function PreconnectLinks() {
  // Preconnect to external domains for performance
  // Note: Google Fonts are loaded via next/font/google in layout files
  return (
    <>
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        </>
      )}
      
      {/* YouTube preconnects for video embeds - only DNS prefetch to reduce overhead */}
      <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
      <link rel="dns-prefetch" href="https://i.ytimg.com" />
      
      {/* Third-party badges - DNS prefetch only */}
      <link rel="dns-prefetch" href="https://api.producthunt.com" />
      <link rel="dns-prefetch" href="https://www.uneed.best" />
      
      {/* Google Fonts - already handled by next/font/google but add DNS prefetch as backup */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </>
  );
}
