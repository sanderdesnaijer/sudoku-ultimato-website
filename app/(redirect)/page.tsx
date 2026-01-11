import { messages, DEFAULT_LANG } from '../i18n';
import HomePage from '../components/HomePage';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = messages[DEFAULT_LANG];
  return {
    title: t.hero.title,
    description: t.hero.subtitle,
    alternates: {
      canonical: 'https://sudokuultimato.metsander.com/',
      languages: {
        'en': 'https://sudokuultimato.metsander.com/',
        'nl': 'https://sudokuultimato.metsander.com/nl/',
        'th': 'https://sudokuultimato.metsander.com/th/',
        'x-default': 'https://sudokuultimato.metsander.com/',
      },
    },
  };
}

export default function RootPage() {
  return <HomePage lang={DEFAULT_LANG} />;
}
