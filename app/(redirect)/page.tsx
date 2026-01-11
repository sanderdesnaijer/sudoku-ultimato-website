import { messages, DEFAULT_LANG } from '../i18n';
import HomePage from '../components/HomePage';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = messages[DEFAULT_LANG];
  return {
    metadataBase: new URL('https://sudokuultimato.metsander.com'),
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: '/',
      siteName: t.metadata.title,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `/AppStore/${DEFAULT_LANG.toUpperCase()}/StoreImage.png`,
          width: 1284,
          height: 2778,
          alt: t.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metadata.title,
      description: t.metadata.description,
      images: [`/AppStore/${DEFAULT_LANG.toUpperCase()}/StoreImage.png`],
    },
    alternates: {
      canonical: '/',
      languages: {
        'en': '/',
        'nl': '/nl/',
        'th': '/th/',
        'x-default': '/',
      },
    },
  };
}

export default function RootPage() {
  return <HomePage lang={DEFAULT_LANG} />;
}
