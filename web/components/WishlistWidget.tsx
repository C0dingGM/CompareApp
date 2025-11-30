'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Heart, X, Trash2 } from 'lucide-react';

interface WishlistItem {
  id: string;
  productId: string;
  targetPrice?: number;
  addedAt: string;
  product: {
    id: string;
    brand: string;
    title: string;
  } | null;
  currentPrice: number | null;
}

interface WishlistWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WishlistWidget({ isOpen, onClose }: WishlistWidgetProps) {
  const { data: session } = useSession();
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [position, setPosition] = useState({ x: window.innerWidth - 420, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (session && isOpen) {
      fetchWishlist();
    }
  }, [session, isOpen]);

  const fetchWishlist = async () => {
    try {
      const response = await fetch('/api/wishlist');
      if (response.ok) {
        const data = await response.json();
        setItems(data.items);
      }
    } catch (error) {
      console.error('Failed to fetch wishlist:', error);
    }
  };

  const handleDelete = async (itemId: string) => {
    try {
      const response = await fetch(`/api/wishlist/${itemId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setItems(items.filter(item => item.id !== itemId));
      }
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: 400,
        maxHeight: 500,
        zIndex: 1000
      }}
      className="bg-slate-900/95 backdrop-blur border border-slate-700 rounded-lg shadow-2xl overflow-hidden"
    >
      <div
        onMouseDown={handleMouseDown}
        className="px-4 py-3 bg-pink-600 cursor-move flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 fill-white" />
          <h3 className="font-semibold text-white">My Wishlist</h3>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:bg-pink-700 rounded p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 overflow-y-auto" style={{ maxHeight: 420 }}>
        {!session ? (
          <div className="text-center py-8 text-slate-400">
            Sign in to view your wishlist
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-8 text-slate-400">
            Your wishlist is empty
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="bg-slate-800/50 rounded-lg p-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    {item.product ? (
                      <a href={`/product/${item.product.id}`} className="hover:text-pink-400">
                        <div className="font-medium text-sm text-white truncate">
                          {item.product.brand}
                        </div>
                        <div className="text-xs text-slate-300 truncate">
                          {item.product.title}
                        </div>
                      </a>
                    ) : (
                      <div className="text-xs text-slate-500">Product not found</div>
                    )}
                    {item.currentPrice && (
                      <div className="text-sm font-bold text-emerald-400 mt-1">
                        ${item.currentPrice.toFixed(2)}
                      </div>
                    )}
                    {item.targetPrice && (
                      <div className="text-xs text-slate-400 mt-1">
                        Target: ${item.targetPrice.toFixed(2)}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-400 hover:bg-red-900/20 rounded p-1"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
