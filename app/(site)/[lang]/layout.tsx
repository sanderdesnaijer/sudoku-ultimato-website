import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import { Lang, messages } from "../../i18n";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import PreconnectLinks from "@/app/components/PreconnectLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
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
    keywords: [
      "Sudoku", 
      "Sudoku Ultimato", 
      "Killer Sudoku", 
      "Endless Puzzles", 
      "Brain Game", 
      "Advanced Sudoku", 
      "Sudoku App", 
      "Classic Sudoku", 
      "16x16 Sudoku", 
      "Daily Sudoku", 
      "Sudoku iOS", 
      "Free Sudoku", 
      "Logic Puzzle", 
      "Sudoku Game",
      "Mobile Sudoku",
      "Sudoku No Ads",
      "Sudoku Variants",
    ],
    authors: [{ name: "Sander de Snaijer", url: "https://metsander.com" }],
    creator: "Sander de Snaijer",
    publisher: "Sander de Snaijer",
    applicationName: "Sudoku Ultimato",
    category: "Puzzle",
    classification: "Games",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      url: `/${lang === 'en' ? '' : lang + '/'}`,
      siteName: "Sudoku Ultimato",
      locale: lang === 'nl' ? 'nl_NL' : lang === 'th' ? 'th_TH' : 'en_US',
      type: 'website',
      images: [
        {
          url: `/AppStore/${lang.toUpperCase()}/og-image-clean.jpg`,
          width: 1200,
          height: 630,
          alt: t.hero.imageAlt,
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.metadata.title,
      description: t.metadata.description,
      creator: '@sanderts',
      images: [`/AppStore/${lang.toUpperCase()}/og-image-clean.jpg`],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: t.metadata.title,
    },
    appLinks: {
      ios: {
        url: 'https://apps.apple.com/us/app/sudoku-ultimato/id6755356402',
        app_store_id: '6755356402',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
    alternates: {
      canonical: `https://sudokuultimato.metsander.com/${lang === 'en' ? '' : lang + '/'}`,
      languages: {
        'en': 'https://sudokuultimato.metsander.com/',
        'nl': 'https://sudokuultimato.metsander.com/nl/',
        'th': 'https://sudokuultimato.metsander.com/th/',
        'x-default': 'https://sudokuultimato.metsander.com/',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    other: {
      'dns-prefetch': 'https://fonts.googleapis.com https://fonts.gstatic.com https://www.googletagmanager.com',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'theme-color': '#0a0a0a',
      'color-scheme': 'dark light',
      'rating': 'general',
      'distribution': 'global',
      'revisit-after': '7 days',
      'language': lang,
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
        <PreconnectLinks />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
