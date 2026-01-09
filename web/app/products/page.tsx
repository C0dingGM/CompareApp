'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import ProductCard from '../../components/ProductCard';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Product = {
  id: string;
  brand: string;
  title: string;
  category?: string;
  upc?: string;
};

export default function ProductsPage({ searchParams }: { searchParams?: { q?: string; brand?: string; category?: string } }) {
  const router = useRouter();
  const q = searchParams?.q || '';
  const brand = searchParams?.brand || undefined;
  const category = searchParams?.category || undefined;
  
  const [allItems, setAllItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch products from database
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      let query = supabase.from('products').select('*');
      
      if (q) {
        query = query.or(`title.ilike.%${q}%,brand.ilike.%${q}%`);
      }
      if (brand) {
        query = query.eq('brand', brand);
      }
      if (category) {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query;
      
      if (!error && data) {
        setAllItems(data);
      }
      setLoading(false);
    }
    
    fetchProducts();
  }, [q, brand, category]);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // 2 rows x 3 columns
  const totalPages = Math.ceil(allItems.length / itemsPerPage);
  
  // Get items for current page
  const startIdx = currentPage * itemsPerPage;
  const items = allItems.slice(startIdx, startIdx + itemsPerPage);
  
  // Layout configuration - more spread out
  const cardsPerRow = 3;
  const cardWidth = 320;
  const cardHeight = 380;
  const gapX = 60;
  const gapY = 60;
  const startX = 120;
  const startY = 130;
  
  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  return (
    <div className="fixed inset-0 overflow-hidden">
      <svg viewBox="0 0 1440 900" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="page-grad" x1="0" y="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
          </linearGradient>
          <filter id="page-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="page-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <style>{`
            @keyframes cloudDriftA { 0% { transform: translate(-200px,80px); } 50% { transform: translate(-150px,90px); } 100% { transform: translate(-200px,80px); } }
            @keyframes cloudDriftB { 0% { transform: translate(1000px,140px) scale(1.2); } 50% { transform: translate(1035px,150px) scale(1.22); } 100% { transform: translate(1000px,140px) scale(1.2); } }
            @keyframes cloudDriftC { 0% { transform: translate(300px,200px) scale(0.9); } 50% { transform: translate(270px,215px) scale(0.92); } 100% { transform: translate(300px,200px) scale(0.9); } }
            .cloud-a { animation: cloudDriftA 18s ease-in-out infinite; }
            .cloud-b { animation: cloudDriftB 26s ease-in-out infinite; }
            .cloud-c { animation: cloudDriftC 22s ease-in-out infinite; }
            @keyframes dashMoveBlue { to { stroke-dashoffset: -900; } }
            @keyframes dashMoveViolet { to { stroke-dashoffset: -900; } }
            @keyframes dashMoveGreen { to { stroke-dashoffset: -900; } }
            .dash-blue { stroke-dasharray: 16 11; animation: dashMoveBlue 14s linear infinite; }
            .dash-violet { stroke-dasharray: 16 11; animation: dashMoveViolet 18s linear infinite; }
            .dash-green { stroke-dasharray: 16 11; animation: dashMoveGreen 22s linear infinite; }
          `}</style>
        </defs>
        
        <rect x="0" y="0" width="1440" height="900" fill="url(#page-grad)" />
        
        {/* Animated cloud layers */}
        <g filter="url(#page-blur)" opacity="0.5">
          <g className="cloud cloud-a" transform="translate(-200,80)">
            <circle cx="200" cy="80" r="80" fill="#94a3b8" />
            <circle cx="270" cy="90" r="60" fill="#94a3b8" />
            <circle cx="140" cy="100" r="50" fill="#94a3b8" />
          </g>
          <g className="cloud cloud-b" transform="translate(1000,140) scale(1.2)">
            <circle cx="200" cy="80" r="70" fill="#94a3b8" />
            <circle cx="260" cy="90" r="50" fill="#94a3b8" />
            <circle cx="140" cy="100" r="45" fill="#94a3b8" />
          </g>
          <g className="cloud cloud-c" transform="translate(300,200) scale(0.9)">
            <circle cx="200" cy="80" r="60" fill="#94a3b8" />
            <circle cx="260" cy="90" r="45" fill="#94a3b8" />
            <circle cx="140" cy="100" r="40" fill="#94a3b8" />
          </g>
        </g>
        
        {/* Distant city skyline */}
        <g transform="translate(0,600)" opacity="0.25">
          <g fill="#0a1220">
            <rect x="30" y="20" width="50" height="140" />
            <rect x="110" y="0" width="70" height="160" />
            <rect x="200" y="35" width="90" height="125" />
            <rect x="320" y="10" width="60" height="150" />
            <rect x="410" y="25" width="80" height="135" />
            <rect x="520" y="0" width="70" height="165" />
            <rect x="620" y="40" width="90" height="120" />
            <rect x="730" y="10" width="70" height="150" />
            <rect x="820" y="30" width="100" height="130" />
            <rect x="940" y="0" width="65" height="165" />
            <rect x="1020" y="45" width="85" height="120" />
            <rect x="1120" y="20" width="70" height="145" />
            <rect x="1210" y="35" width="90" height="130" />
            <rect x="1320" y="5" width="60" height="160" />
          </g>
        </g>
        
        {/* Foreground skyline */}
        <g transform="translate(0,620)" opacity="0.9">
          <rect x="0" y="80" width="1440" height="200" fill="#0b1220" />
          <g fill="#0f172a">
            <rect x="40" y="0" width="70" height="160" />
            <rect x="140" y="40" width="90" height="120" />
            <rect x="270" y="10" width="110" height="150" />
            <rect x="420" y="30" width="80" height="130" />
            <rect x="540" y="0" width="70" height="165" />
            <rect x="650" y="50" width="100" height="115" />
            <rect x="790" y="10" width="90" height="155" />
            <rect x="910" y="35" width="110" height="130" />
            <rect x="1060" y="0" width="85" height="165" />
            <rect x="1180" y="45" width="95" height="120" />
            <rect x="1300" y="20" width="70" height="145" />
          </g>
          <g filter="url(#page-soft)">
            <rect x="300" y="120" rx="4" ry="4" width="60" height="16" fill="#22d3ee" opacity="0.7" />
            <rect x="740" y="90" rx="4" ry="4" width="70" height="16" fill="#a78bfa" opacity="0.7" />
            <rect x="1120" y="110" rx="4" ry="4" width="58" height="16" fill="#34d399" opacity="0.7" />
          </g>
        </g>
        
        {/* Animated dashed lines */}
        <g strokeWidth="2" fill="none" opacity="0.6">
          <path className="dash-blue" d="M220 640 C 420 560, 720 720, 960 660" stroke="#22d3ee" />
          <path className="dash-violet" d="M420 680 C 600 620, 820 600, 1200 640" stroke="#a78bfa" />
          <path className="dash-green" d="M140 700 C 360 640, 540 760, 820 720" stroke="#34d399" />
        </g>

        {/* Header with Back button and Title */}
        <foreignObject x="16" y="16" width="400" height="100" style={{ pointerEvents: 'auto' }}>
          <div className="flex flex-col">
            <button 
              onClick={() => router.push('/')}
              className="text-slate-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-2 text-sm bg-transparent border-none cursor-pointer"
            >
              <span>←</span> Back to Home
            </button>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              {q ? `Results for "${q}"` : 'All Products'}
            </h1>
          </div>
        </foreignObject>

        {/* Pagination info */}
        {totalPages > 1 && (
          <foreignObject x="1240" y="140" width="180" height="60" style={{ pointerEvents: 'auto' }}>
            <div className="text-slate-400 text-sm">
              <div className="font-semibold text-cyan-400">
                Page {currentPage + 1} / {totalPages}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {startIdx + 1}-{Math.min(startIdx + itemsPerPage, allItems.length)} of {allItems.length}
              </div>
            </div>
          </foreignObject>
        )}

        {/* Product cards embedded in SVG */}
        {items.map((p, idx) => {
          const col = idx % cardsPerRow;
          const row = Math.floor(idx / cardsPerRow);
          const x = startX + col * (cardWidth + gapX);
          const y = startY + row * (cardHeight + gapY);
          
          return (
            <foreignObject 
              key={p.id} 
              x={x} 
              y={y} 
              width={cardWidth} 
              height={cardHeight}
              style={{ pointerEvents: 'auto' }}
            >
              <ProductCard id={p.id} />
            </foreignObject>
          );
        })}

        {/* Pagination controls */}
        {totalPages > 1 && (
          <foreignObject x="1220" y="220" width="200" height="600" style={{ pointerEvents: 'auto' }}>
            <div className="flex flex-col items-stretch gap-3">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  currentPage === 0
                    ? 'border-slate-700 bg-slate-800/30 text-slate-600 cursor-not-allowed'
                    : 'border-cyan-400/50 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400'
                }`}
              >
                ↑ Previous
              </button>
              
              <div className="flex flex-col gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx)}
                    className={`py-2 rounded-lg text-sm font-medium transition-all ${
                      idx === currentPage
                        ? 'bg-cyan-500 text-white border border-cyan-400'
                        : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:bg-slate-700/50 hover:text-cyan-400'
                    }`}
                  >
                    Page {idx + 1}
                  </button>
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                  currentPage === totalPages - 1
                    ? 'border-slate-700 bg-slate-800/30 text-slate-600 cursor-not-allowed'
                    : 'border-cyan-400/50 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400'
                }`}
              >
                Next ↓
              </button>
            </div>
          </foreignObject>
        )}

        {/* Loading message */}
        {loading && (
          <foreignObject x="420" y="300" width="600" height="200" style={{ pointerEvents: 'auto' }}>
            <div className="text-center py-16 text-slate-400">
              <p className="text-xl">Loading products...</p>
            </div>
          </foreignObject>
        )}

        {/* No results message */}
        {!loading && allItems.length === 0 && (
          <foreignObject x="420" y="300" width="600" height="200" style={{ pointerEvents: 'auto' }}>
            <div className="text-center py-16 text-slate-400">
              <p className="text-xl">No products found</p>
              <Link href="/products" className="text-cyan-400 hover:underline mt-4 inline-block">
                View all products
              </Link>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}
