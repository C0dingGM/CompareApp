import { ReactNode } from 'react';
import AuthProviders from './auth-providers';
import ClientLayout from '../components/ClientLayout';

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
          <ClientLayout>
            {children}
          </ClientLayout>
        </AuthProviders>
      </body>
    </html>
  );
}
