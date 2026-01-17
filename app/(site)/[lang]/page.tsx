import { SUPPORTED_LANGS, messages, type Lang, DEFAULT_LANG } from '../../i18n';

import type { Metadata } from 'next';

import HomePage from '../../components/HomePage';

export function generateStaticParams() {
  return SUPPORTED_LANGS.filter(l => l !== DEFAULT_LANG).map((lang) => ({ lang }));
}

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const t = messages[lang];
  return {
    title: {
      absolute: t.hero.title,
    },
    description: t.hero.subtitle,
    alternates: {
      canonical: `https://sudokuultimato.metsander.com/${lang === DEFAULT_LANG ? '' : lang + '/'}`,
      languages: {
        'en': 'https://sudokuultimato.metsander.com/',
        'nl': 'https://sudokuultimato.metsander.com/nl/',
        'th': 'https://sudokuultimato.metsander.com/th/',
        'x-default': 'https://sudokuultimato.metsander.com/',
      },
    },
  };
}

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  return <HomePage lang={lang} />;
}
