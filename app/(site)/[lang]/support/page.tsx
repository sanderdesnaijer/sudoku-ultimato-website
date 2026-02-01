import {
  SUPPORTED_LANGS,
  messages,
  type Lang,
  DEFAULT_LANG,
} from "../../../i18n";
import { WEBSITE_URL } from "../../../constants";
import type { Metadata } from "next";
import SupportPage from "../../../components/SupportPage";

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
  const path = isDefault ? "/support/" : `/${lang}/support/`;

  return {
    metadataBase: new URL(WEBSITE_URL),
    title: t.supportPage.title,
    description: t.supportPage.body,
    openGraph: {
      title: `${t.supportPage.title} | ${t.metadata.title}`,
      description: t.supportPage.body,
      url: path,
      type: "website",
      images: [
        {
          url: `/AppStore/${lang.toUpperCase()}/og-image-clean.jpg`,
          width: 1200,
          height: 630,
          alt: t.hero.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.supportPage.title} | ${t.metadata.title}`,
      description: t.supportPage.body,
      images: [`/AppStore/${lang.toUpperCase()}/og-image-clean.jpg`],
    },
    alternates: {
      canonical: `${WEBSITE_URL}${path}`,
      languages: {
        en: `${WEBSITE_URL}/support/`,
        nl: `${WEBSITE_URL}/nl/support/`,
        th: `${WEBSITE_URL}/th/support/`,
        "x-default": `${WEBSITE_URL}/support/`,
      },
    },
  };
}

export default async function Support({ params }: { params: Params }) {
  const { lang } = await params;
  return <SupportPage lang={lang} />;
}
