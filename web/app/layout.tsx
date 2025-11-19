import { ReactNode } from 'react';
import ConditionalBackground from '../components/ConditionalBackground';
import AuthProviders from './auth-providers';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className="bg-white text-slate-900 dark:bg-bg dark:text-slate-100 antialiased"
    >
      <body
        className={`${inter.className} min-h-screen bg-hero [background-size:32px_32px,32px_32px,auto,auto,auto]`}
      >
        <AuthProviders>

          {/* Background */}
          <div className="absolute inset-0 z-0">
            <ConditionalBackground />
          </div>

          {/* Page content */}
          <main className="relative z-10 max-w-5xl mx-auto px-4 py-4">
            {children}
          </main>

        </AuthProviders>
      </body>
    </html>
  );
}
