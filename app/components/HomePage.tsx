import Link from "next/link";
import { messages, type Lang, DEFAULT_LANG } from "../i18n";
import { SUPPORT_EMAIL } from "../constants";
import LanguageDropdownWrapper from "./LanguageDropdownWrapper";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = messages[lang];

  // Helper to get image path
  const getImagePath = (size: "400" | "560" | "640" | "1024" | "1284") => {
    return `/AppStore/${lang.toUpperCase()}/store-image-${size}.webp`;
  };

  const getLocalizedPath = (path: string) => {
    if (lang === DEFAULT_LANG) return path.startsWith("/") ? path : `/${path}`;
    return `/${lang}${path.startsWith("/") ? path : `/${path}`}`;
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Sudoku Ultimato",
    description: t.hero.subtitle,
    applicationCategory: "GameApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    url: "https://apps.apple.com/us/app/sudoku-ultimato/id6755356402",
    author: {
      "@type": "Person",
      name: "Sander de Snaijer",
      url: "https://metsander.com",
    },
    publisher: {
      "@type": "Organization",
      name: "metSander",
    },
    image: getImagePath("1284"),
    screenshot: [
      `/AppStore/${lang.toUpperCase()}/store-image-1284.webp`,
      `/AppStore/${lang.toUpperCase()}/game_classic.webp`,
      `/AppStore/${lang.toUpperCase()}/game_killer.webp`,
      `/AppStore/${lang.toUpperCase()}/game_16x16.webp`,
    ],
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sudoku Ultimato",
    url: "https://sudokuultimato.metsander.com",
    description: t.hero.subtitle,
    inLanguage: lang,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://apps.apple.com/us/app/sudoku-ultimato/id6755356402",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "metSander",
    url: "https://metsander.com",
    logo: "https://sudokuultimato.metsander.com/apple-touch-icon.png",
    contactPoint: {
      "@type": "ContactPoint",
      email: SUPPORT_EMAIL,
      contactType: "Customer Support",
    },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-50">
        <LanguageDropdownWrapper currentLang={lang} />
      </nav>

      <main>
        {/* Hero */}
        <header className="relative flex flex-col items-center justify-center py-24 px-6 sm:py-32 text-center overflow-hidden">
          {/* Background Gradient - CSS-only approach to prevent CLS */}
          <div className="hero-gradient-bg" aria-hidden="true" />

          <h1 className="relative z-10 text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {t.hero.title}
          </h1>
          <p className="relative z-10 text-xl sm:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            {/* Apple Store Button (Enabled) */}
            <a
              href="https://apps.apple.com/us/app/sudoku-ultimato/id6755356402"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border border-purple-500/50 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95"
            >
              <svg
                viewBox="0 0 384 512"
                width="20"
                height="20"
                className="fill-current"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-18.1-81.9-18.1-41.9 0-80.8 23.9-102.2 61.9-43.2 76.2-11.1 190.1 30.6 250.4 20.4 29.4 44.9 62.5 76.7 62.5 31.8 0 43.1-19.1 81.3-19.1 38.2 0 49.5 19.1 81.3 19.1 31.8 0 54.4-29.4 74.8-58.8 23.5-33.6 33.1-66.3 33.3-68.1-.8-.4-64-24.5-64.2-96.2zm-46.3-162.2c16-19.6 26.6-46.7 23.6-74.1-23.3 1-51.4 15.5-68.1 34.9-14.9 17.5-27.9 44.9-24.4 71.3 26 2.1 52.9-13 68.9-32.1z" />
              </svg>
              {t.hero.ctaApple}
            </a>

            {/* Google Play Store Button (Disabled with visible badge) */}
            <div className="relative group">
              <button
                disabled
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-white/5 text-white/40 border border-white/10 rounded-full font-semibold cursor-not-allowed transition-all relative"
              >
                <svg
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                  className="fill-current"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 58.9-34.1c18-10.3 28.5-25.9 28.5-40.4s-10.5-30.1-28.5-40.4zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                </svg>
                <span className="flex items-center gap-2">
                  {t.hero.ctaGoogle}
                  <span className="inline-block px-2 py-0.5 bg-neutral-700/80 text-neutral-300 text-[10px] rounded-full uppercase tracking-wider font-bold border border-white/10">
                    {t.hero.availableSoon}
                  </span>
                </span>
              </button>
              {/* Tooltip for desktop hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-neutral-800 text-neutral-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap border border-white/10 shadow-xl translate-y-2 group-hover:translate-y-0 hidden sm:block">
                {t.hero.availableSoon}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
              </div>
            </div>
          </div>

          {/* Hero Image - Three phone mockups */}
          <div
            className="mt-10 sm:mt-16 relative z-10 w-full max-w-6xl mx-auto flex justify-center items-end gap-2 sm:gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 px-4 sm:px-6"
            style={{ minHeight: "400px" }}
          >
            {/* Left phone - Killer Sudoku */}
            <div className="flex-[1.1] transform rotate-[-8deg] translate-y-12 sm:translate-y-16 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
              <picture>
                <source
                  srcSet={`/AppStore/${lang.toUpperCase()}/Killer-400w.webp 400w, /AppStore/${lang.toUpperCase()}/Killer-640w.webp 640w, /AppStore/${lang.toUpperCase()}/Killer.webp 863w`}
                  type="image/webp"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px"
                />
                <img
                  src={`/AppStore/${lang.toUpperCase()}/Killer.webp`}
                  alt={t.hero.killerImageAlt}
                  title={t.hero.killerImageTitle}
                  width={393}
                  height={852}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  style={{ aspectRatio: "393/852" }}
                />
              </picture>
            </div>

            {/* Center phone - Classic Sudoku (main focus) */}
            <div className="flex-[1.2] z-10 transform hover:scale-105 transition-all duration-300">
              <picture>
                <source
                  srcSet={`/AppStore/${lang.toUpperCase()}/Classic-400w.webp 400w, /AppStore/${lang.toUpperCase()}/Classic-640w.webp 640w, /AppStore/${lang.toUpperCase()}/Classic.webp 863w`}
                  type="image/webp"
                  sizes="(max-width: 640px) 40vw, (max-width: 1024px) 30vw, 250px"
                />
                <img
                  src={`/AppStore/${lang.toUpperCase()}/Classic.webp`}
                  alt={t.hero.classicImageAlt}
                  title={t.hero.classicImageTitle}
                  width={393}
                  height={852}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
                  style={{ aspectRatio: "393/852" }}
                />
              </picture>
            </div>

            {/* Right phone - 16x16 Sudoku */}
            <div className="flex-[1.1] transform rotate-[8deg] translate-y-12 sm:translate-y-16 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300">
              <picture>
                <source
                  srcSet={`/AppStore/${lang.toUpperCase()}/16x16-400w.webp 400w, /AppStore/${lang.toUpperCase()}/16x16-640w.webp 640w, /AppStore/${lang.toUpperCase()}/16x16.webp 863w`}
                  type="image/webp"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 200px"
                />
                <img
                  src={`/AppStore/${lang.toUpperCase()}/16x16.webp`}
                  alt={t.hero.largeImageAlt}
                  title={t.hero.largeImageTitle}
                  width={393}
                  height={852}
                  loading="eager"
                  decoding="async"
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  style={{ aspectRatio: "393/852" }}
                />
              </picture>
            </div>
          </div>

          {/* Product Hunt Badge */}
          <div className="mt-20 sm:mt-24 flex justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <a
              href="https://www.producthunt.com/products/sudoku-ultimato?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-sudoku-ultimato"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                alt="Sudoku Ultimato - A calm Sudoku playground with Killer and big grids | Product Hunt"
                width={250}
                height={54}
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1064088&theme=light&t=1768723421839"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </header>

        {/* Intro: What is Sudoku Ultimato */}
        <section className="py-16 px-6 max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            {t.intro.title}
          </h2>
          <div className="space-y-6 text-lg text-neutral-400 leading-relaxed whitespace-pre-line">
            {t.intro.description}
          </div>
        </section>

        {/* Modes */}
        <section className="py-16 px-6 bg-neutral-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              {t.modes.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title={t.modes.items.classic.title}
                description={t.modes.items.classic.description}
                imagePath={`/AppStore/${lang.toUpperCase()}/game_classic.webp`}
              />
              <FeatureCard
                title={t.modes.items.killer.title}
                description={t.modes.items.killer.description}
                imagePath={`/AppStore/${lang.toUpperCase()}/game_killer.webp`}
              />
              <FeatureCard
                title={t.modes.items.sizes.title}
                description={t.modes.items.sizes.description}
                imagePath={`/AppStore/${lang.toUpperCase()}/game_16x16.webp`}
              />
            </div>
          </div>
        </section>

        {/* Endless & Daily Grid */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-neutral-900/50 p-10 py-4 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-colors">
              <div className="w-full aspect-square bg-purple-500/20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={`/AppStore/${lang.toUpperCase()}/mode.webp`}
                  alt={t.endless.title}
                  title={t.endless.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t.endless.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {t.endless.description}
              </p>
            </div>
            <div className="bg-neutral-900/50 p-10 py-4 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors">
              <div className="w-full aspect-square bg-blue-500/20 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={`/AppStore/${lang.toUpperCase()}/calendar.webp`}
                  alt={t.daily.title}
                  title={t.daily.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t.daily.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {t.daily.description}
              </p>
            </div>
          </div>
        </section>

        {/* Themes & Visuals */}
        <section className="py-16 px-6 bg-neutral-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {t.themes.title}
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t.themes.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={`/AppStore/${lang.toUpperCase()}/game_dark.webp`}
                  alt={t.themes.title}
                  title={t.themes.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={`/AppStore/${lang.toUpperCase()}/game_theme_menu.webp`}
                  alt={t.themes.title}
                  title={t.themes.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Progress & Statistics */}
        <section className="py-16 px-6 bg-neutral-900/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              {t.progress.title}
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t.progress.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={`/AppStore/${lang.toUpperCase()}/progress.webp`}
                  alt={t.progress.title}
                  title={t.progress.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={`/AppStore/${lang.toUpperCase()}/stats.webp`}
                  alt={t.progress.title}
                  title={t.progress.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="bg-neutral-900/50 rounded-[3rem] p-8 sm:p-16 border border-white/5 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center sm:text-left">
                {t.accessibility.title}
              </h2>
              <p className="text-lg text-neutral-400 mb-10 max-w-2xl text-center sm:text-left">
                {t.accessibility.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.accessibility.items.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    <span className="text-neutral-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-neutral-400 mt-10 text-sm font-medium">
                {t.accessibility.note}
              </p>
            </div>
          </div>
        </section>

        {/* Why Killer & No Ads */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t.whyKiller.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed whitespace-pre-line">
                {t.whyKiller.description}
              </p>
            </div>
            <div className="md:col-span-1 p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {t.noAds.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {t.noAds.description}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            {t.faq.title}
          </h2>
          <div className="space-y-4">
            {t.faq.items.map((item: { q: string; a: string }, i: number) => (
              <details
                key={i}
                className="group bg-neutral-900/50 rounded-2xl border border-white/5 open:bg-neutral-900 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-200 group-hover:text-white transition-colors list-none">
                  {item.q}
                  <span className="bg-white/10 p-2 rounded-full group-open:rotate-180 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-neutral-400 leading-relaxed whitespace-pre-line">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center mt-12 bg-neutral-950">
        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <Link
            href={getLocalizedPath("/support/")}
            className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {t.footer.support}
          </Link>
          <Link
            href={getLocalizedPath("/privacy/")}
            className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {t.footer.privacy}
          </Link>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {t.footer.contact}
          </a>
        </nav>
        <p className="text-neutral-400 text-xs">{t.footer.rights}</p>
        <a
          href="https://www.sanderdesnaijer.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-neutral-500 text-xs mt-4 hover:text-neutral-300 transition-colors"
        >
          <img
            src="/logo-scc.svg"
            alt="SCC de Snaijer"
            width={20}
            height={20}
            className="opacity-50 group-hover:opacity-75 transition-opacity"
          />
          {t.footer.developer}
        </a>
      </footer>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  imagePath,
}: {
  title: string;
  description: string;
  imagePath: string;
}) {
  return (
    <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-neutral-900/80 hover:-translate-y-1 shadow-xl backdrop-blur-sm h-full flex flex-col">
      <div className="w-full aspect-square bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl mb-6 flex items-center justify-center shadow-inner border border-white/5 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
        <img
          src={imagePath}
          alt={title}
          title={title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-neutral-200 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
        {description}
      </p>
    </div>
  );
}
