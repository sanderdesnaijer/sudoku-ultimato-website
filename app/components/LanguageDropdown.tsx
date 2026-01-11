'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SUPPORTED_LANGS, type Lang } from '../i18n';

const FLAGS: Record<Lang, string> = {
  en: '🇺🇸',
  nl: '🇳🇱',
  th: '🇹🇭',
};

const LABELS: Record<Lang, string> = {
  en: 'English',
  nl: 'Nederlands',
  th: 'ไทย',
};

export default function LanguageDropdown({ currentLang }: { currentLang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to replace language slug in URL
  const getPathForLang = (lang: Lang) => {
    if (!pathname) return `/${lang}`;
    const segments = pathname.split('/');
    // segments[0] is empty, segments[1] is lang
    segments[1] = lang;
    return segments.join('/');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/5 transition-all text-sm font-medium text-white"
        aria-label="Select Language"
      >
        <span>{FLAGS[currentLang]}</span>
        <span className="hidden sm:inline">{LABELS[currentLang]}</span>
        <span className={`text-xs ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="absolute right-0 mt-2 w-40 py-2 bg-neutral-900 border border-white/10 rounded-xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200">
            {SUPPORTED_LANGS.map((lang) => (
              <Link
                key={lang}
                href={getPathForLang(lang)}
                className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                  lang === currentLang 
                    ? 'bg-purple-500/10 text-purple-400' 
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">{FLAGS[lang]}</span>
                <span>{LABELS[lang]}</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
