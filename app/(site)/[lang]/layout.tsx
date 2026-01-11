import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { Lang, messages } from "../../i18n";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = messages[lang as Lang] || messages['en'];
  
  return {
    metadataBase: new URL('https://sudokuultimato.metsander.com'),
    title: {
      template: `%s | ${t.metadata.title}`,
      default: t.metadata.title,
    },
    description: t.metadata.description,
    keywords: ["Sudoku", "Sudoku Ultimato", "Killer Sudoku", "Endless Puzzles", "Brain Game", "Advanced Sudoku"],
    authors: [{ name: "Sander de Snaijer", url: "https://metsander.com" }],
    creator: "Sander de Snaijer",
    publisher: "Sander de Snaijer",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `/${lang}/`,
      siteName: t.metadata.title,
      locale: lang === 'nl' ? 'nl_NL' : lang === 'th' ? 'th_TH' : 'en_US',
      type: 'website',
      images: [
        {
          url: `/AppStore/${lang.toUpperCase()}/StoreImage.png`,
          width: 1284,
          height: 2778,
          alt: t.hero.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metadata.title,
      description: t.metadata.description,
      creator: '@sanderts',
      images: [`/AppStore/${lang.toUpperCase()}/StoreImage.png`],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: t.metadata.title,
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png' },
      ],
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: `/${lang}/`,
      languages: {
        'en': '/en/',
        'nl': '/nl/',
        'th': '/th/',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
