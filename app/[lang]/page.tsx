import Link from 'next/link';
import { SUPPORTED_LANGS, messages, type Lang } from '../i18n';
import type { Metadata } from 'next';
import LanguageDropdown from '../components/LanguageDropdown';

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const t = messages[lang];
  return {
    title: t.hero.title,
    description: t.hero.subtitle,
  };
}

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const t = messages[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-50">
         <LanguageDropdown currentLang={lang} />
      </nav>

      {/* Hero */}
      <header className="relative flex flex-col items-center justify-center py-24 px-6 sm:py-32 text-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-3xl opacity-50 rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 blur-3xl opacity-30 rounded-full" />
        </div>
        
        <h1 className="relative z-10 text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.hero.title}
        </h1>
        <p className="relative z-10 text-xl sm:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <button className="px-8 py-3 bg-white text-neutral-950 rounded-full font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 duration-200">
                {t.hero.cta}
            </button>
        </div>
        
        {/* Hero Images */}
        <div className="mt-10 sm:mt-16 relative z-10 w-full max-w-5xl mx-auto flex justify-center items-end animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 px-4 sm:px-0">
             <div className="flex w-full items-center justify-center -space-x-[1px]">
                  <img 
                    src={`/App Store /${lang.toUpperCase()} /Image_1.png`} 
                    alt="Sudoku Ultimato Gameplay" 
                    className="w-1/2 h-auto max-h-[400px] sm:max-h-[600px] object-contain object-right"
                  />
                  <img 
                    src={`/App Store /${lang.toUpperCase()} /Image_2.png`} 
                    alt="Sudoku Ultimato Features" 
                    className="w-1/2 h-auto max-h-[400px] sm:max-h-[600px] object-contain object-left"
                  />
             </div>
        </div>
      </header>

      {/* Intro: What is Sudoku Ultimato */}
      <section className="py-24 px-6 max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">{t.intro.title}</h2>
        <div className="space-y-6 text-lg text-neutral-400 leading-relaxed whitespace-pre-line">
           {t.intro.description}
        </div>
      </section>

      {/* Modes */}
      <section className="py-24 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {t.modes.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    title={t.modes.items.classic.title}
                    description={t.modes.items.classic.description}
                    icon="🎓"
                />
                <FeatureCard 
                    title={t.modes.items.killer.title}
                    description={t.modes.items.killer.description}
                    icon="⚔️"
                />
                <FeatureCard 
                    title={t.modes.items.sizes.title}
                    description={t.modes.items.sizes.description}
                    icon="📏"
                />
            </div>
        </div>
      </section>

      {/* Endless & Daily Grid */}
       <section className="py-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/5 hover:border-purple-500/20 transition-colors">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl mb-6 flex items-center justify-center text-2xl">♾️</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t.endless.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{t.endless.description}</p>
            </div>
             <div className="bg-neutral-900/50 p-10 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl mb-6 flex items-center justify-center text-2xl">📅</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t.daily.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{t.daily.description}</p>
            </div>
         </div>
      </section>

      {/* Themes & Visuals */}
      <section className="py-24 px-6 bg-neutral-900/30 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{t.themes.title}</h2>
            <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-2xl mx-auto">{t.themes.description}</p>
             <div className="flex justify-center gap-4">
                 <div className="w-16 h-16 rounded-full bg-neutral-100 shadow-lg border-2 border-transparent"></div>
                 <div className="w-16 h-16 rounded-full bg-neutral-800 shadow-lg border-2 border-white/20"></div>
                 <div className="w-16 h-16 rounded-full bg-neutral-950 shadow-lg border-2 border-purple-500"></div>
             </div>
         </div>
      </section>

      {/* Accessibility */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-neutral-900/50 rounded-[3rem] p-8 sm:p-16 border border-white/5 relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white text-center sm:text-left">{t.accessibility.title}</h2>
                <p className="text-lg text-neutral-400 mb-10 max-w-2xl text-center sm:text-left">{t.accessibility.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.accessibility.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            <span className="text-neutral-200 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-neutral-500 mt-10 text-sm font-medium">{t.accessibility.note}</p>
             </div>
        </div>
      </section>

      {/* Why Killer & No Ads */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 p-10 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10">
                 <h3 className="text-2xl font-bold mb-4 text-white">{t.whyKiller.title}</h3>
                 <p className="text-neutral-400 leading-relaxed whitespace-pre-line">{t.whyKiller.description}</p>
              </div>
              <div className="md:col-span-1 p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-white/10 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold mb-4 text-white">{t.noAds.title}</h3>
                 <p className="text-neutral-300 leading-relaxed">{t.noAds.description}</p>
              </div>
          </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">{t.faq.title}</h2>
        <div className="space-y-4">
            {t.faq.items.map((item, i) => (
                <details key={i} className="group bg-neutral-900/50 rounded-2xl border border-white/5 open:bg-neutral-900 transition-colors">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg text-neutral-200 group-hover:text-white transition-colors list-none">
                        {item.q}
                        <span className="bg-white/10 p-2 rounded-full group-open:rotate-180 transition-transform duration-300">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                             </svg>
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                        {item.a}
                    </div>
                </details>
            ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center mt-12 bg-neutral-950">
        <nav className="flex justify-center gap-8 mb-8 flex-wrap">
          <Link href={`/${lang}/support`} className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.footer.support}</Link>
          <span className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest cursor-pointer">{t.footer.privacy}</span>
          <a href="mailto:support@ultimatosudoku.com" className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest">{t.footer.contact}</a>
        </nav>
        <p className="text-neutral-600 text-xs">
            © 2026 Ultimato Sudoku. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-neutral-900/80 hover:-translate-y-1 shadow-xl backdrop-blur-sm h-full flex flex-col">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl mb-6 flex items-center justify-center text-3xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-neutral-200 group-hover:text-white transition-colors">{title}</h3>
            <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">{description}</p>
        </div>
    );
}
