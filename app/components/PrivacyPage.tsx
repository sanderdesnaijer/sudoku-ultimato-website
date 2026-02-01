
import Link from 'next/link';
import { messages, type Lang, DEFAULT_LANG } from '../i18n';
import { SUPPORT_EMAIL } from '../constants';
import LanguageDropdownWrapper from './LanguageDropdownWrapper';

export default function PrivacyPage({ lang }: { lang: Lang }) {
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
        name: t.privacyPage.title,
        item: `https://sudokuultimato.metsander.com${lang === DEFAULT_LANG ? '' : '/' + lang}/privacy/`,
      },
    ],
  };

  // Convert email addresses to clickable mailto links
  const renderContentWithEmailLinks = (content: string) => {
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const parts = content.split(emailRegex);
    
    return parts.map((part, index) => {
      // Check if this part is an email address
      const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/i.test(part);
      if (isEmail) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            className="text-purple-400 hover:text-purple-300 underline transition-colors"
          >
            {part}
          </a>
        );
      }
      return <span key={index}>{part}</span>;
    });
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

      <main className="flex-grow p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/10 to-neutral-950/0">
        <div className="max-w-3xl mx-auto py-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {t.privacyPage.title}
            </h1>
            <p className="text-neutral-400 mb-12 font-medium italic">
                {t.privacyPage.lastUpdated}
            </p>

            <div className="space-y-12">
                {t.privacyPage.sections.map((section, index) => (
                    <section key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 50}ms` }}>
                        {section.title && (
                            <h2 className="text-2xl font-bold mb-4 text-white">
                                {section.title}
                            </h2>
                        )}
                        {Array.isArray(section.content) ? (
                            <ul className="space-y-3">
                                {section.content.map((item, i) => (
                                    <li key={i} className="flex gap-3 text-neutral-400 leading-relaxed">
                                        <span className="text-purple-500/60">•</span>
                                        <span>{renderContentWithEmailLinks(item)}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-neutral-400 leading-relaxed whitespace-pre-line">
                                {renderContentWithEmailLinks(section.content)}
                            </p>
                        )}
                    </section>
                ))}
            </div>
            
            <footer className="mt-20 py-12 border-t border-white/5 text-center">
                <nav className="flex justify-center gap-8 mb-8 flex-wrap">
                    <Link href={lang === DEFAULT_LANG ? '/support/' : `/${lang}/support/`} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.footer.support}</Link>
                    <Link href={lang === DEFAULT_LANG ? '/privacy/' : `/${lang}/privacy/`} className="text-white transition-colors text-sm uppercase tracking-widest">{t.footer.privacy}</Link>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.footer.contact}</a>
                </nav>
                <p className="text-neutral-400 text-xs">
                    {t.footer.rights}
                </p>
            </footer>
        </div>
      </main>

    </div>
  );
}
