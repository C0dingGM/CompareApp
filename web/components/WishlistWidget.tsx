'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Trash2 } from 'lucide-react';

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
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wishlist-widget-position');
      if (saved) {
        return JSON.parse(saved);
      }
      return { x: window.innerWidth - 420, y: 100 };
    }
    return { x: 100, y: 100 };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

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
      const newPosition = {
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      };
      setPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    localStorage.setItem('wishlist-widget-position', JSON.stringify(position));
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

  if (!isOpen || !mounted) {
    return null;
  }

  const widgetContent = (
    <div
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '400px',
        maxHeight: '500px',
        zIndex: 9999,
        background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(14, 165, 233, 0.1) 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        borderRadius: '32px',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform'
      }}
      className="backdrop-blur-xl border border-slate-700/50 overflow-hidden"
    >
      <div
        onMouseDown={handleMouseDown}
        className="px-4 py-3 cursor-move flex items-center justify-between relative"
        style={{
          background: 'linear-gradient(90deg, rgba(236, 72, 153, 0.95) 0%, rgba(219, 39, 119, 0.95) 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          borderTopLeftRadius: '32px',
          borderTopRightRadius: '32px'
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-white hover:bg-pink-700/50 rounded"
          style={{ padding: '2px' }}
        >
          <X className="w-2.5 h-2.5" />
        </button>
        <div className="flex items-center gap-2 w-full justify-center">
          <h3 className="font-semibold text-white">My Wishlist</h3>
        </div>
      </div>

      <div className="p-4 overflow-y-auto" style={{ 
        maxHeight: 420,
        background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
        borderBottomLeftRadius: '32px',
        borderBottomRightRadius: '32px'
      }}>
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
              <div key={item.id} className="bg-slate-800/50 rounded-2xl p-3">
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

  return createPortal(widgetContent, document.body);
}
