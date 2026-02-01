'use client';

import dynamic from 'next/dynamic';
import { type Lang } from '../i18n';

// Dynamically import LanguageDropdown to code-split it
// Using ssr: false ensures it only loads on the client
// Add a loading component to prevent layout shift
const LanguageDropdown = dynamic(() => import('./LanguageDropdown'), {
  ssr: false,
  loading: () => (
    <div className="w-10 h-10 rounded-full bg-neutral-800/50 animate-pulse" />
  ),
});

export default function LanguageDropdownWrapper({ currentLang }: { currentLang: Lang }) {
  return <LanguageDropdown currentLang={currentLang} />;
}
