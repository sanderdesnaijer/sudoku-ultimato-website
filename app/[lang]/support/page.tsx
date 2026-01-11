import { SUPPORTED_LANGS, messages, type Lang } from '../../i18n';
import Link from 'next/link';
import type { Metadata } from 'next';
import LanguageDropdown from '../../components/LanguageDropdown';

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

type Params = Promise<{ lang: Lang }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang } = await params;
  const t = messages[lang];
  return {
    title: `${t.supportTitle} - ${t.title}`,
    description: t.supportBody,
  };
}

export default async function Support({ params }: { params: Params }) {
  const { lang } = await params;
  const t = messages[lang];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-purple-500 selection:text-white flex flex-col">
       <header className="py-6 px-6 border-b border-white/5 flex justify-between items-center">
         <div className="max-w-7xl">
            <Link href={`/${lang}`} className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                ← {t.title}
            </Link>
         </div>
         <LanguageDropdown currentLang={lang} />
       </header>

      <main className="flex-grow flex items-center justify-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 to-neutral-950/0">
        <div className="w-full max-w-lg">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {t.supportTitle}
            </h1>
            <div className="bg-neutral-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                <p className="text-neutral-300 mb-6 text-center leading-relaxed">
                    {t.supportBody}
                </p>
                <div className="flex justify-center">
                    <a href="mailto:support@ultimatosudoku.com" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all duration-200 border border-white/5 hover:border-white/20">
                        📧 support@ultimatosudoku.com
                    </a>
                </div>
            </div>
        </div>
      </main>
      
      <footer className="py-8 text-center text-neutral-600 text-sm">
        © 2026 Ultimato Sudoku
      </footer>
    </div>
  );
}
