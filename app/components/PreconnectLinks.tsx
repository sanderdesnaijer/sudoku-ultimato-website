export default function PreconnectLinks() {
  // Use actual link elements for preconnect - more efficient than script injection
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        </>
      )}
    </>
  );
}
