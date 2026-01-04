'use client';

import { useState, useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';
import { useSession } from 'next-auth/react';

interface AddToWishlistButtonProps {
  productId: string;
  initialInWishlist?: boolean;
}

export default function AddToWishlistButton({ productId, initialInWishlist = false }: AddToWishlistButtonProps) {
  const { data: session } = useSession();
  const [inWishlist, setInWishlist] = useState(initialInWishlist);
  const [wishlistItemId, setWishlistItemId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  // Simplified: no modal, only heart color change
  const [targetPrice] = useState('');
  const [targetDate] = useState('');
  const hasCheckedRef = useRef(false);

  // Debug logging
  console.log(`🔍 Button render - productId: ${productId}, inWishlist: ${inWishlist}, loading: ${loading}, session:`, session ? '✅ Signed in' : '❌ Not signed in');

  // Check if product is in wishlist on mount
  useEffect(() => {
    if (session && !hasCheckedRef.current) {
      checkWishlistStatus();
      hasCheckedRef.current = true;
    }
  }, [session, productId]);

  const checkWishlistStatus = async () => {
    try {
      const response = await fetch(`/api/wishlist/status?productId=${productId}`);
      if (response.ok) {
        const data = await response.json();
        setInWishlist(data.inWishlist);
      }
    } catch (error) {
      console.error('Failed to check wishlist status:', error);
    }
  };

  const handleClick = async () => {
    if (!session) {
      alert('Please sign in to use wishlist');
      return;
    }
    if (loading) return;
    setLoading(true);
    if (!inWishlist) {
      // Optimistic add: flip immediately
      setInWishlist(true);
      try {
        const res = await fetch('/api/wishlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId })
        });
        if (!res.ok) {
          // revert on failure
          setInWishlist(false);
        }
      } catch (e) { console.error(e); setInWishlist(false); }
    } else {
      // Remove
      try {
        const listRes = await fetch('/api/wishlist');
        if (listRes.ok) {
          const data = await listRes.json();
            const item = data.items.find((i: any) => i.productId === productId);
            if (item) {
              await fetch(`/api/wishlist/${item.id}`, { method: 'DELETE' });
              setInWishlist(false);
            }
        }
      } catch (e) { console.error(e); }
    }
    setLoading(false);
  };

  const handleRemove = async () => {
    setLoading(true);
    try {
      // First get the wishlist to find the item ID
      const listResponse = await fetch('/api/wishlist');
      if (listResponse.ok) {
        const listData = await listResponse.json();
        const item = listData.items.find((i: any) => i.productId === productId);
        
        if (item) {
          const deleteResponse = await fetch(`/api/wishlist/${item.id}`, {
            method: 'DELETE'
          });
          
          if (deleteResponse.ok) {
            setInWishlist(false);
            setWishlistItemId(null);
          }
        }
      }
    } catch (error) {
      console.error('Failed to remove from wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmAdd = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          targetPrice: targetPrice ? parseFloat(targetPrice) : undefined,
          targetDate: targetDate || undefined
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Added to wishlist successfully:', data);
        setInWishlist(true);
        setWishlistItemId(data.item.id);
        setShowModal(false);
        setTargetPrice('');
        setTargetDate('');
        // Force a small delay to ensure state update is visible
        setTimeout(() => {
          console.log('✅ Button should now show "In Wishlist" with pink heart');
        }, 100);
      } else {
        console.error('❌ Failed to add to wishlist:', response.status);
        alert('Failed to add to wishlist. Please try again.');
      }
    } catch (error) {
      console.error('Failed to add to wishlist:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors w-[170px] justify-center ${
        inWishlist 
          ? 'border-pink-400 bg-pink-50 text-pink-600' 
          : 'border-slate-300 bg-white text-slate-700 hover:bg-pink-50'
      } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      title={inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      <Heart
        className="w-5 h-5 transition-colors"
        color={inWishlist ? '#db2777' : '#64748b'}
        fill={inWishlist ? '#db2777' : 'none'}
        strokeWidth={2}
      />
      <span>{inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>
    </button>
  );
}
