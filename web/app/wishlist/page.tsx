'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Heart, Trash2, Edit2, TrendingDown } from 'lucide-react';
import Link from 'next/link';

interface WishlistItem {
  id: string;
  productId: string;
  targetPrice?: number;
  targetDate?: string;
  addedAt: string;
  product: {
    id: string;
    brand: string;
    title: string;
  } | null;
  currentPrice: number | null;
}

export default function WishlistPage() {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [editTargetPrice, setEditTargetPrice] = useState('');
  const [editTargetDate, setEditTargetDate] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      fetchWishlist();
    } else if (status === 'unauthenticated') {
      setLoading(false);
    }
  }, [status]);

  const fetchWishlist = async () => {
    try {
      const response = await fetch('/api/wishlist');
      if (response.ok) {
        const data = await response.json();
        setItems(data.items);
      }
    } catch (error) {
      console.error('Failed to fetch wishlist:', error);
    } finally {
      setLoading(false);
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

  const handleEdit = (item: WishlistItem) => {
    setEditingItem(item.id);
    setEditTargetPrice(item.targetPrice?.toString() || '');
    setEditTargetDate(item.targetDate || '');
  };

  const handleSaveEdit = async (itemId: string) => {
    try {
      const response = await fetch(`/api/wishlist/${itemId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetPrice: editTargetPrice ? parseFloat(editTargetPrice) : undefined,
          targetDate: editTargetDate || undefined
        })
      });
      if (response.ok) {
        await fetchWishlist();
        setEditingItem(null);
      }
    } catch (error) {
      console.error('Failed to update item:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="w-16 h-16 text-pink-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sign in to view your wishlist</h2>
          <Link href="/signin" className="text-pink-600 hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-600 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-500 mb-4">Start adding products to track prices and deals</p>
            <Link href="/products" className="text-pink-600 hover:underline">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => {
              const isPriceTarget = item.targetPrice && item.currentPrice && item.currentPrice <= item.targetPrice;
              
              return (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {item.product ? (
                        <Link href={`/product/${item.product.id}`} className="group">
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">
                            {item.product.brand} - {item.product.title}
                          </h3>
                        </Link>
                      ) : (
                        <h3 className="text-lg font-semibold text-gray-400">Product not found</h3>
                      )}
                      
                      <div className="mt-2 space-y-2">
                        {item.currentPrice && (
                          <div className="text-xl font-bold text-gray-800">
                            ${item.currentPrice.toFixed(2)}
                          </div>
                        )}
                        
                        {editingItem === item.id ? (
                          <div className="space-y-2 mt-3">
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Target Price</label>
                              <input
                                type="number"
                                step="0.01"
                                value={editTargetPrice}
                                onChange={(e) => setEditTargetPrice(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-gray-600 mb-1">Target Date</label>
                              <input
                                type="date"
                                value={editTargetDate}
                                onChange={(e) => setEditTargetDate(e.target.value)}
                                className="px-3 py-1 border border-gray-300 rounded"
                              />
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleSaveEdit(item.id)}
                                className="px-3 py-1 bg-pink-600 text-white text-sm rounded hover:bg-pink-700"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingItem(null)}
                                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded hover:bg-gray-300"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            {item.targetPrice && (
                              <div className={`text-sm ${isPriceTarget ? 'text-green-600 font-semibold' : 'text-gray-600'}`}>
                                {isPriceTarget && <TrendingDown className="inline w-4 h-4 mr-1" />}
                                Target price: ${item.targetPrice.toFixed(2)}
                                {isPriceTarget && ' - Price target met! 🎉'}
                              </div>
                            )}
                            {item.targetDate && (
                              <div className="text-sm text-gray-600">
                                Target date: {new Date(item.targetDate).toLocaleDateString()}
                              </div>
                            )}
                            <div className="text-xs text-gray-400">
                              Added {new Date(item.addedAt).toLocaleDateString()}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-gray-600 hover:bg-gray-100 rounded"
                        title="Edit"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded"
                        title="Remove"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
