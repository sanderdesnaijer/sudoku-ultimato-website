import {
  SUPPORTED_LANGS,
  messages,
  type Lang,
  DEFAULT_LANG,
} from "../../../i18n";

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
    title: t.supportPage.title,
    description: t.supportPage.body,
    openGraph: {
      title: `${t.supportPage.title} | ${t.metadata.title}`,
      description: t.supportPage.body,
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
      title: `${t.supportPage.title} | ${t.metadata.title}`,
      description: t.supportPage.body,
      images: [`/AppStore/${lang.toUpperCase()}/store-image-1284.webp`],
    },
    alternates: {
      canonical: path,
      languages: {
        en: "/support/",
        nl: "/nl/support/",
        th: "/th/support/",
        "x-default": "/support/",
      },
    },
  };
}

export default async function Support({ params }: { params: Params }) {
  const { lang } = await params;
  return <SupportPage lang={lang} />;
}
