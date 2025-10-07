import '../styles/globals.css';
import { ReactNode } from 'react';
import QueryProvider from './providers';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <div style={{ maxWidth: 960, margin: '0 auto', padding: 16 }}>
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
