
import Link from 'next/link';
import { messages, type Lang, DEFAULT_LANG } from '../i18n';
import { SUPPORT_EMAIL } from '../constants';
import LanguageDropdownWrapper from './LanguageDropdownWrapper';

export default function SupportPage({ lang }: { lang: Lang }) {
  const t = messages[lang];

  const getLocalizedHomePath = () => {
    return lang === DEFAULT_LANG ? '/' : `/${lang}/`;
  };

  // BreadcrumbList structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://sudokuultimato.metsander.com${getLocalizedHomePath()}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t.supportPage.title,
        item: `https://sudokuultimato.metsander.com${lang === DEFAULT_LANG ? '' : '/' + lang}/support/`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white flex flex-col">
      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      
       <header className="py-6 px-6 border-b border-white/5 flex justify-between items-center">
         <div className="max-w-7xl">
            <Link href={getLocalizedHomePath()} className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                ← {t.hero.title}
            </Link>
         </div>
         <LanguageDropdownWrapper currentLang={lang} />
       </header>

      <main className="flex-grow flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 to-neutral-950/0">
        <div className="w-full max-w-lg">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {t.supportPage.title}
            </h1>
            <div className="bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <p className="text-neutral-300 mb-6 text-center leading-relaxed">
                    {t.supportPage.body.split(SUPPORT_EMAIL)[0]}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white hover:text-purple-400 underline underline-offset-4 decoration-white/20 hover:decoration-purple-400/50 transition-all font-medium">
                        {SUPPORT_EMAIL}
                    </a>
                    {t.supportPage.body.split(SUPPORT_EMAIL)[1]}
                </p>
                <div className="flex justify-center">
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-200 border border-white/5 hover:border-white/20">
                        📧 {SUPPORT_EMAIL}
                    </a>
                </div>

            </div>
        </div>
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center mt-12 bg-neutral-950">
        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <Link href={lang === DEFAULT_LANG ? '/support/' : `/${lang}/support/`} className="text-white transition-colors text-sm uppercase tracking-widest">{t.footer.support}</Link>
          <Link href={lang === DEFAULT_LANG ? '/privacy/' : `/${lang}/privacy/`} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.footer.privacy}</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.footer.contact}</a>
        </nav>
        <p className="text-neutral-400 text-xs">
            {t.footer.rights}
        </p>
      </footer>

    </div>
  );
}
