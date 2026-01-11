'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en');
  }, [router]);

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 font-sans">
      <main className="text-center">
        <h1 className="text-3xl font-bold mb-4">Sudoku Ultimato</h1>
        <p className="text-neutral-500 mb-8">Redirecting to English version...</p>
        <Link href="/en" className="text-purple-400 hover:text-purple-300 underline">
          Click here if you are not redirected
        </Link>
      </main>
    </div>
  );
}
