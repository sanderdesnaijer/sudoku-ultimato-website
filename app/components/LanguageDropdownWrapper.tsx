'use client';

import dynamic from 'next/dynamic';
import { type Lang } from '../i18n';

// Dynamically import LanguageDropdown to code-split it
// Using ssr: false ensures it only loads on the client
const LanguageDropdown = dynamic(() => import('./LanguageDropdown'), {
  ssr: false,
});

export default function LanguageDropdownWrapper({ currentLang }: { currentLang: Lang }) {
  return <LanguageDropdown currentLang={currentLang} />;
}
