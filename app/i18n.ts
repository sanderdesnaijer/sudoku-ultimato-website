import en from './locales/en';
import nl from './locales/nl';
import th from './locales/th';
import { Translations } from './locales/types';

export const SUPPORTED_LANGS = ['en', 'nl', 'th'] as const;
export const DEFAULT_LANG: Lang = 'en';
export type Lang = (typeof SUPPORTED_LANGS)[number];
export type { Translations };

export const messages: Record<Lang, Translations> = {
  en,
  nl,
  th
};

