import { ReactNode } from 'react';
import Link from 'next/link';
import QueryProvider from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <Link href="/" style={{ fontWeight: 700, textDecoration: 'none', color: 'inherit', fontSize: 22 }} className="gradient-title">CompareApp</Link>
              <nav style={{ display: 'flex', gap: 8 }}>
                <a href="/" className="button">Home</a>
                <a href="/products" className="button">Products</a>
                <a href="https://github.com/C0dingGM/CompareApp" target="_blank" rel="noreferrer" className="button">GitHub</a>
              </nav>
            </header>
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
