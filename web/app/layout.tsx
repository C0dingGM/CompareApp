import { ReactNode } from 'react';
import Link from 'next/link';
// import QueryProvider from './providers';
import ConditionalBackground from '../components/ConditionalBackground';
import AppHeader from './AppHeader';
import AuthProviders from './auth-providers';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-slate-900 dark:bg-bg dark:text-slate-100 antialiased">
      <body className={`${inter.className} min-h-screen bg-hero [background-size:32px_32px,32px_32px,auto,auto,auto]`}>
        <ConditionalBackground />
        {/* Removed QueryProvider to avoid vendor chunk error */}
        <AuthProviders>
          <div className="relative z-10 max-w-5xl mx-auto px-4 py-4">
            <AppHeader />
            {children}
          </div>
        </AuthProviders>
        {/* /Removed QueryProvider */}
      </body>
    </html>
  );
}
