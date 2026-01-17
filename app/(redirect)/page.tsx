import { messages, DEFAULT_LANG } from "../i18n";
import HomePage from "../components/HomePage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = messages[DEFAULT_LANG];
  return {
    metadataBase: new URL("https://sudokuultimato.metsander.com"),
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: "/",
      siteName: t.metadata.title,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `/AppStore/${DEFAULT_LANG.toUpperCase()}/og-image-clean.jpg`,
          width: 1200,
          height: 630,
          alt: t.hero.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.title,
      description: t.metadata.description,
      images: [`/AppStore/${DEFAULT_LANG.toUpperCase()}/og-image-clean.jpg`],
    },
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        nl: "/nl/",
        th: "/th/",
        "x-default": "/",
      },
    },
  };
}

export default function RootPage() {
  return <HomePage lang={DEFAULT_LANG} />;
}
