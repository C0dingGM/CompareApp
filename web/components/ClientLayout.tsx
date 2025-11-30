'use client';

import { ReactNode, useState } from 'react';
import ConditionalBackground from '../components/ConditionalBackground';
import WishlistWidget from '../components/WishlistWidget';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [wishlistOpen, setWishlistOpen] = useState(false);

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ConditionalBackground onWishlistClick={() => setWishlistOpen(true)} />
      </div>

      {/* Page content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 py-4">
        {children}
      </main>

      {/* Wishlist Widget */}
      <WishlistWidget isOpen={wishlistOpen} onClose={() => setWishlistOpen(false)} />
    </>
  );
}
