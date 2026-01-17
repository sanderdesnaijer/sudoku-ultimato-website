import { messages, DEFAULT_LANG } from "../../i18n";
import PrivacyPage from "../../components/PrivacyPage";
import type { Metadata } from "next";
import { WEBSITE_URL } from "../../constants";

export async function generateMetadata(): Promise<Metadata> {
  const t = messages[DEFAULT_LANG];
  return {
    metadataBase: new URL(WEBSITE_URL),
    title: `${t.privacyPage.title} | ${t.metadata.title}`,
    description: `${t.privacyPage.title} - ${t.metadata.description}. Learn how Sudoku Ultimato collects, uses, and protects your information.`,
    openGraph: {
      title: `${t.privacyPage.title} | ${t.metadata.title}`,
      description: `${t.privacyPage.title} - ${t.metadata.description}. Learn how Sudoku Ultimato collects, uses, and protects your information.`,
      url: "/privacy/",
      type: "website",
      images: [
        {
          url: `/AppStore/${DEFAULT_LANG.toUpperCase()}/store-image-1284.webp`,
          width: 1284,
          height: 2778,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.privacyPage.title} | ${t.metadata.title}`,
      description: `${t.privacyPage.title} - ${t.metadata.description}. Learn how Sudoku Ultimato collects, uses, and protects your information.`,
      images: [`/AppStore/${DEFAULT_LANG.toUpperCase()}/store-image-1284.webp`],
    },
    alternates: {
      canonical: `${WEBSITE_URL}/privacy/`,
      languages: {
        en: `${WEBSITE_URL}/privacy/`,
        nl: `${WEBSITE_URL}/nl/privacy/`,
        th: `${WEBSITE_URL}/th/privacy/`,
        "x-default": `${WEBSITE_URL}/privacy/`,
      },
    },
  };
}

export default function Privacy() {
  return <PrivacyPage lang={DEFAULT_LANG} />;
}
