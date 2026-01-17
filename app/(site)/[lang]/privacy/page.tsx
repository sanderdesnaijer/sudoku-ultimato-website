import {
  SUPPORTED_LANGS,
  messages,
  type Lang,
  DEFAULT_LANG,
} from "../../../i18n";
import type { Metadata } from "next";
import PrivacyPage from "../../../components/PrivacyPage";
import { WEBSITE_URL } from "../../../constants";

export function generateStaticParams() {
  return SUPPORTED_LANGS.filter((l) => l !== DEFAULT_LANG).map((lang) => ({
    lang,
  }));
}

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = messages[lang];
  const isDefault = lang === DEFAULT_LANG;
  const path = isDefault ? "/privacy/" : `/${lang}/privacy/`;

  return {
    metadataBase: new URL(WEBSITE_URL),
    title: `${t.privacyPage.title} | ${t.metadata.title}`,
    description: `${t.privacyPage.title} - ${t.metadata.description}. Learn how Sudoku Ultimato collects, uses, and protects your information.`,
    openGraph: {
      title: `${t.privacyPage.title} | ${t.metadata.title}`,
      description: `${t.privacyPage.title} - ${t.metadata.description}. Learn how Sudoku Ultimato collects, uses, and protects your information.`,
      url: path,
      type: "website",
      images: [
        {
          url: `/AppStore/${lang.toUpperCase()}/store-image-1284.webp`,
          width: 1284,
          height: 2778,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.privacyPage.title} | ${t.metadata.title}`,
      description: `${t.privacyPage.title} - ${t.metadata.description}. Learn how Sudoku Ultimato collects, uses, and protects your information.`,
      images: [`/AppStore/${lang.toUpperCase()}/store-image-1284.webp`],
    },
    alternates: {
      canonical: `${WEBSITE_URL}${path}`,
      languages: {
        en: `${WEBSITE_URL}/privacy/`,
        nl: `${WEBSITE_URL}/nl/privacy/`,
        th: `${WEBSITE_URL}/th/privacy/`,
        "x-default": `${WEBSITE_URL}/privacy/`,
      },
    },
  };
}

export default async function Privacy({ params }: { params: Params }) {
  const { lang } = await params;
  return <PrivacyPage lang={lang} />;
}
