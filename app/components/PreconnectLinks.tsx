import Script from 'next/script';

export default function PreconnectLinks() {
  // For static exports with App Router, we use a script that runs beforeInteractive
  // This injects preconnect links synchronously before other resources load
  // This is more efficient than waiting for React to hydrate
  return (
    <Script
      id="preconnect-links"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(){var d=document;var l=d.createElement('link');l.rel='preconnect';l.href='https://fonts.googleapis.com';d.head.appendChild(l);var l2=d.createElement('link');l2.rel='preconnect';l2.href='https://fonts.gstatic.com';l2.crossOrigin='anonymous';d.head.appendChild(l2);${process.env.NEXT_PUBLIC_GA_ID ? "var l3=d.createElement('link');l3.rel='preconnect';l3.href='https://www.googletagmanager.com';d.head.appendChild(l3);" : ''}})();
        `.trim(),
      }}
    />
  );
}
