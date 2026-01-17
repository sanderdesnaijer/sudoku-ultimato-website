"use client";

import Script from "next/script";

export default function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  return (
    <Script
      id="google-analytics-delayed"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
          // Delay GA loading until after page is fully interactive
          if (typeof requestIdleCallback === 'function') {
            requestIdleCallback(function() {
              loadGA();
            }, { timeout: 3000 });
          } else {
            setTimeout(loadGA, 2000);
          }
          
          function loadGA() {
            var s = document.createElement('script');
            s.src = 'https://www.googletagmanager.com/gtag/js?id=${ga_id}';
            s.async = true;
            document.head.appendChild(s);
            
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          }
        `,
      }}
    />
  );
}
