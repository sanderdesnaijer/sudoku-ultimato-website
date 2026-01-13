import Script from 'next/script';

export default function PreconnectLinks() {
  // For static exports, we inject preconnect links via script
  // This runs synchronously before other resources load
  return (
    <Script
      id="preconnect-links"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const addPreconnect = (href, crossOrigin) => {
              if (document.querySelector('link[href="' + href + '"]')) return;
              const link = document.createElement('link');
              link.rel = 'preconnect';
              link.href = href;
              if (crossOrigin) link.crossOrigin = crossOrigin;
              document.head.appendChild(link);
            };
            addPreconnect('https://fonts.googleapis.com');
            addPreconnect('https://fonts.gstatic.com', 'anonymous');
            ${process.env.NEXT_PUBLIC_GA_ID ? "addPreconnect('https://www.googletagmanager.com');" : ''}
          })();
        `,
      }}
    />
  );
}
