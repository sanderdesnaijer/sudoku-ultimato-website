
import { messages, DEFAULT_LANG } from '../../i18n';
import SupportPage from '../../components/SupportPage';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = messages[DEFAULT_LANG];
  return {
    title: `${t.supportPage.title} - ${t.hero.title}`,
    description: t.supportPage.body,
    alternates: {
      canonical: 'https://sudokuultimato.metsander.com/support/',
      languages: {
        'en': 'https://sudokuultimato.metsander.com/support/',
        'nl': 'https://sudokuultimato.metsander.com/nl/support/',
        'th': 'https://sudokuultimato.metsander.com/th/support/',
        'x-default': 'https://sudokuultimato.metsander.com/support/',
      },
    },
  };
}

export default function Support() {
  return <SupportPage lang={DEFAULT_LANG} />;
}
