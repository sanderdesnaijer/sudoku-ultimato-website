export const SUPPORTED_LANGS = ['en', 'nl', 'th'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export type Translations = {
  title: string;
  tagline: string;
  supportTitle: string;
  supportBody: string;
  cta: string;
  features: string;
};

export const messages: Record<Lang, Translations> = {
  en: {
    title: 'Ultimato Sudoku',
    tagline: 'The ultimate Sudoku without limits',
    supportTitle: 'Support',
    supportBody: 'Need help? Contact us at support@ultimatosudoku.com',
    cta: 'Download Now',
    features: 'Features',
  },
  nl: {
    title: 'Ultimato Sudoku',
    tagline: 'De ultieme Sudoku zonder grenzen',
    supportTitle: 'Ondersteuning',
    supportBody: 'Hulp nodig? Neem contact op via support@ultimatosudoku.com',
    cta: 'Download Nu',
    features: 'Functies',
  },
  th: {
    title: 'Ultimato Sudoku',
    tagline: 'ซูโดกุขั้นสุด แบบไร้ขีดจำกัด',
    supportTitle: 'ฝ่ายช่วยเหลือ',
    supportBody: 'หากต้องการความช่วยเหลือ ติดต่อเราได้ที่ support@ultimatosudoku.com',
    cta: 'ดาวน์โหลดเลย',
    features: 'ฟีเจอร์',
  },
};
