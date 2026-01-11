export type Translations = {
  common: {
    selectLanguage: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaApple: string;
    ctaGoogle: string;
    availableSoon: string;
    image1Alt: string;
    image1Title: string;
    image2Alt: string;
    image2Title: string;
  };
  intro: {
    title: string;
    description: string;
  };
  modes: {
    title: string;
    items: {
      classic: { title: string; description: string };
      killer: { title: string; description: string };
      sizes: { title: string; description: string };
    };
  };
  endless: {
    title: string;
    description: string;
  };
  themes: {
    title: string;
    description: string;
  };
  accessibility: {
    title: string;
    description: string;
    items: string[];
    note: string;
  };
  daily: {
    title: string;
    description: string;
  };
  noAds: {
    title: string;
    description: string;
  };
  whyKiller: {
    title: string;
    description: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    support: string;
    privacy: string;
    contact: string;
    rights: string;
  };
  supportPage: {
    title: string;
    body: string;
  };
};

