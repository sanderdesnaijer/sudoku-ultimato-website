export default function PreconnectLinks() {
  // Preconnect to external domains for performance
  // Note: Google Fonts are loaded via next/font/google in layout files
  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        </>
      )}
      {/* YouTube preconnects for video embeds */}
      <link rel="preconnect" href="https://www.youtube.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://i.ytimg.com" />
    </>
  );
}
