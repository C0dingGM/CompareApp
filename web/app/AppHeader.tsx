"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../components/ThemeToggle';
import HeaderSearch from '../components/HeaderSearch';

export default function AppHeader() {
  const pathname = usePathname();
  if (pathname.startsWith('/product')) return null;
  return (
    <header className="sticky top-4 z-50 mb-6 grid grid-cols-[auto,1fr,auto] items-center rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/30">
      <Link href="/" className="px-4 py-3 text-2xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">CompareApp</Link>
      <nav className="flex items-center justify-center gap-2 px-2">
        <HeaderSearch />
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium border border-transparent hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors">Home</Link>
          <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium border border-transparent hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors">Products</Link>
          <a href="https://github.com/C0dingGM/CompareApp" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-md text-sm font-medium border border-transparent hover:bg-slate-900/5 dark:hover:bg-white/5 transition-colors">GitHub</a>
        </div>
      </nav>
      <div className="px-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
