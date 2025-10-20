import { ReactNode } from 'react';
import Link from 'next/link';
import QueryProvider from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <Link href="/" style={{ fontWeight: 600, textDecoration: 'none', color: 'inherit' }}>CompareApp</Link>
            </header>
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
