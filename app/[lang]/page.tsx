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
    title: t.title,
    description: t.tagline,
  };
}

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;
  const t = messages[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white">
      {/* Hero */}
      <header className="relative flex flex-col items-center justify-center py-20 px-6 sm:py-32 text-center overflow-hidden">
        <nav className="absolute top-6 right-6 z-50">
           <LanguageDropdown currentLang={lang} />
        </nav>
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-3xl opacity-50 rounded-full mix-blend-screen" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 blur-3xl opacity-30 rounded-full" />
        </div>
        
        <h1 className="relative z-10 text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {t.title}
        </h1>
        <p className="relative z-10 text-xl sm:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
          {t.tagline}
        </p>
        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <button className="px-8 py-3 bg-white text-neutral-950 rounded-full font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                {t.cta}
            </button>
        </div>
      </header>

      {/* Features Showcase */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            {t.features}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
                title={lang === 'th' ? 'ไม่มีโฆษณา' : lang === 'nl' ? 'Geen Advertenties' : 'No Ads'}
                description={lang === 'th' ? 'เล่นอย่างต่อเนื่องโดยไม่มีการหยุดชะงัก' : lang === 'nl' ? 'Speel ononderbroken zonder storingen.' : 'Play uninterrupted without any distractions.'}
                icon="🚫"
            />
             <FeatureCard 
                title={lang === 'th' ? 'โหมดมืด' : lang === 'nl' ? 'Donkere Modus' : 'Dark Mode'}
                description={lang === 'th' ? 'ถนอมสายตาด้วยธีมสีเข้มที่สวยงาม' : lang === 'nl' ? 'Rustig voor de ogen met een prachtig donker thema.' : 'Easy on the eyes with a beautiful dark theme.'}
                icon="🌙"
            />
             <FeatureCard 
                title={lang === 'th' ? 'แบบออฟไลน์' : lang === 'nl' ? 'Offline Spelen' : 'Offline Play'}
                description={lang === 'th' ? 'สนุกได้ทุกที่ ทุกเวลา แม้ไม่มีอินเทอร์เน็ต' : lang === 'nl' ? 'Geniet overal en altijd, zelfs zonder internet.' : 'Enjoy anywhere, anytime, even without internet.'}
                icon="✈️"
            />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center mt-20">
        <nav>
          <Link 
            href={`/${lang}/support`} 
            className="text-neutral-500 hover:text-white transition-colors text-sm uppercase tracking-widest"
          >
            {t.supportTitle}
          </Link>
        </nav>
        <p className="text-neutral-600 text-xs mt-8">
            © 2026 Ultimato Sudoku. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="group p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:bg-neutral-900/80 hover:-translate-y-1 shadow-xl backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl mb-6 flex items-center justify-center text-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-neutral-200 group-hover:text-white transition-colors">{title}</h3>
            <p className="text-neutral-400 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors">{description}</p>
        </div>
    );
}
