import en from './locales/en';
import nl from './locales/nl';
import th from './locales/th';
import de from './locales/de';
import es from './locales/es';
import fr from './locales/fr';
import pt from './locales/pt';
import it from './locales/it';
import { Translations } from './locales/types';

export const SUPPORTED_LANGS = ['en', 'nl', 'th', 'de', 'es', 'fr', 'pt', 'it'] as const;
export const DEFAULT_LANG: Lang = 'en';
export type Lang = (typeof SUPPORTED_LANGS)[number];
export type { Translations };

export const messages: Record<Lang, Translations> = {
  en,
  nl,
  th,
  de,
  es,
  fr,
  pt,
  it
};

