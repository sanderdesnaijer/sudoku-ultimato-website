import { SUPPORTED_LANGS, messages, type Lang, DEFAULT_LANG } from '../../../i18n';
import { SUPPORT_EMAIL } from '../../../constants';
import Link from 'next/link';

import type { Metadata } from 'next';
import LanguageDropdown from '../../../components/LanguageDropdown';

import SupportPage from '../../../components/SupportPage';

export function generateStaticParams() {
  return SUPPORTED_LANGS.filter(l => l !== DEFAULT_LANG).map((lang) => ({ lang }));
}

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const t = messages[lang];
  return {
    title: t.supportPage.title,
    description: t.supportPage.body,
    alternates: {
      canonical: `https://sudokuultimato.metsander.com/${lang === DEFAULT_LANG ? '' : lang + '/'}support/`,
      languages: {
        'en': 'https://sudokuultimato.metsander.com/support/',
        'nl': 'https://sudokuultimato.metsander.com/nl/support/',
        'th': 'https://sudokuultimato.metsander.com/th/support/',
        'x-default': 'https://sudokuultimato.metsander.com/support/',
      },
    },
  };
}

export default async function Support({ params }: { params: Params }) {
  const { lang } = await params;
  return <SupportPage lang={lang} />;
}
