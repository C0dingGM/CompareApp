import { ReactNode } from 'react';
import Link from 'next/link';
import QueryProvider from './providers';
import ThemeToggle from '../components/ThemeToggle';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-slate-900 dark:bg-bg dark:text-slate-100">
      <body className={`${inter.className} min-h-screen bg-hero`}> 
        <QueryProvider>
          <div className="max-w-5xl mx-auto px-4 py-4">
            <header className="flex items-center justify-between mb-6">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">CompareApp</Link>
              <nav className="flex items-center gap-2">
                <a href="/" className="px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors">Home</a>
                <a href="/products" className="px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors">Products</a>
                <a href="https://github.com/C0dingGM/CompareApp" target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors">GitHub</a>
                {/* ThemeToggle */}
              </nav>
            </header>
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
