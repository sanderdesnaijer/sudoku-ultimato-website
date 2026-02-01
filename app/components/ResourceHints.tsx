import { Lang } from '../i18n';

interface ResourceHintsProps {
  lang: Lang;
}

export default function ResourceHints({ lang }: ResourceHintsProps) {
  const langUpper = lang.toUpperCase();
  
  return (
    <>
      {/* Preload critical hero images for LCP optimization */}
      <link
        rel="preload"
        as="image"
        href={`/AppStore/${langUpper}/Classic-400w.webp`}
        type="image/webp"
        // Note: imagesrcset and imagesizes are valid HTML attributes for image preloading
        // but not in React types - using lowercase to work around TypeScript
        {...({
          imagesrcset: `/AppStore/${langUpper}/Classic-400w.webp 400w, /AppStore/${langUpper}/Classic-640w.webp 640w`,
          imagesizes: "(max-width: 640px) 216px, 250px"
        } as Record<string, string>)}
      />
      
      {/* Prefetch other critical hero images */}
      <link
        rel="prefetch"
        as="image"
        href={`/AppStore/${langUpper}/Killer-400w.webp`}
        type="image/webp"
      />
      <link
        rel="prefetch"
        as="image"
        href={`/AppStore/${langUpper}/16x16-400w.webp`}
        type="image/webp"
      />
    </>
  );
}
