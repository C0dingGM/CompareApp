"use client";
import { useRouter } from "next/navigation";
import { getProductWithOffers } from "../lib/mock";

export default function ProductCard({ id }: { id: string }) {
  const router = useRouter();
  const data = getProductWithOffers(id);
  if (!data) return null;
  
  const hist = [...data.price_history].sort((a, b) => +new Date(a.ts) - +new Date(b.ts));
  const prices = hist.map((h) => h.price);
  const current = prices.length ? prices[prices.length - 1] : (data.offers[0]?.price ?? 0);
  
  const cardW = 320, cardH = 380;
  const chartW = cardW - 32, chartH = 160;
  const leftPad = 28, rightPad = 8;
  const topPad = 12, bottomPad = 18;
  const plotW = Math.max(1, chartW - leftPad - rightPad);
  const plotH = Math.max(1, chartH - topPad - bottomPad);
  const low = prices.length ? Math.min(...prices) : current;
  const high = prices.length ? Math.max(...prices) : current;
  
  const pathFor = (arr: number[]) => {
    if (!arr.length) return "";
    const min = Math.min(...arr), max = Math.max(...arr);
    const xs = (i: number) => leftPad + (i * plotW) / Math.max(1, arr.length - 1);
    const ys = (v: number) => (max === min ? topPad + plotH / 2 : topPad + (plotH - ((v - min) * plotH) / (max - min)));
    return arr.map((v, i) => `${i === 0 ? "M" : "L"}${xs(i)},${ys(v)}`).join(" ");
  };

  // compute changes
  const lastTs = hist.length ? +new Date(hist[hist.length - 1].ts) : 0;
  const idxAtDelta = (days: number) => {
    if (hist.length < 2) return null;
    const target = lastTs - days * 864e5;
    let found: number | null = null;
    for (let i = hist.length - 2; i >= 0; i--) {
      const t = +new Date(hist[i].ts);
      if (t <= target) { found = i; break; }
    }
    if (found == null) found = 0;
    return found;
  };
  const pct = (past: number | null) => past && past !== 0 ? ((current - past) / past) * 100 : null;
  const i24 = idxAtDelta(1);
  const i7 = idxAtDelta(7);
  const change24 = i24 != null ? pct(hist[i24].price) : null;
  const change7 = i7 != null ? pct(hist[i7].price) : null;
  
  const d = pathFor(prices);

  return (
    <div 
      onClick={() => router.push(`/product/${id}`)}
      className="cursor-pointer group"
    >
      <svg viewBox={`0 0 ${cardW} ${cardH}`} className="w-full h-auto transition-transform group-hover:scale-[1.02]">
        <defs>
          <linearGradient id={`grad-${id}`} x1="0" y="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        
        {/* Card background */}
        <rect x="0" y="0" width={cardW} height={cardH} rx="16" ry="16" 
          fill="rgba(2,6,23,0.6)" 
          stroke="rgba(148,163,184,0.25)" 
          className="group-hover:stroke-cyan-400/50 transition-colors"
        />
        
        {/* Product title */}
        <text x="16" y="32" fontSize="16" fontWeight="600" fill="#e5e7eb">
          {data.product.title.length > 30 ? data.product.title.substring(0, 30) + '...' : data.product.title}
        </text>
        
        {/* Brand */}
        <text x="16" y="52" fontSize="12" fill="#a5b4fc">{data.product.brand}</text>
        
        {/* Chart */}
        <g transform="translate(16, 70)">
          <rect x="0" y="0" width={chartW} height={chartH} 
            fill="rgba(255,255,255,0.02)" 
            stroke="rgba(148,163,184,0.15)" 
          />
          
          {/* Y axis */}
          <line x1={leftPad} y1={topPad} x2={leftPad} y2={topPad + plotH} 
            stroke="rgba(148,163,184,0.35)" 
          />
          
          {/* X axis */}
          <line x1={leftPad} y1={topPad + plotH} x2={leftPad + plotW} y2={topPad + plotH} 
            stroke="rgba(148,163,184,0.35)" 
          />
          
          {/* Y ticks */}
          {Array.from({ length: 3 }).map((_, i) => {
            const t = i / 2;
            const y = topPad + t * plotH;
            const val = high - t * (high - low);
            return (
              <g key={`yt-${i}`}>
                <line x1={leftPad - 4} y1={y} x2={leftPad} y2={y} stroke="rgba(148,163,184,0.35)" />
                <text x={leftPad - 8} y={y + 4} fontSize="8" fill="#94a3b8" textAnchor="end">
                  {val.toFixed(0)}
                </text>
              </g>
            );
          })}
          
          {/* Price line */}
          {d && <path d={d} fill="none" stroke="#22d3ee" strokeWidth="2" />}
        </g>
        
        {/* Stats section */}
        <g transform="translate(16, 240)">
          <rect x="0" y="0" width={cardW - 32} height="110" rx="8" ry="8" 
            fill="rgba(255,255,255,0.03)" 
            stroke="rgba(148,163,184,0.15)" 
          />
          
          {/* Current price */}
          <text x="12" y="22" fontSize="10" fill="#94a3b8">Current price</text>
          <text x="12" y="40" fontSize="16" fontWeight="700" fill="#22d3ee">
            {'$' + current.toFixed(2)}
          </text>
          
          {/* 24h change */}
          <text x="12" y="64" fontSize="9" fill="#94a3b8">24h</text>
          <text x="12" y="80" fontSize="12" 
            fill={change24 == null ? "#94a3b8" : change24 >= 0 ? "#34d399" : "#f43f5e"}>
            {change24 == null ? "—" : `${change24 >= 0 ? "+" : ""}${change24.toFixed(1)}%`}
          </text>
          
          {/* 7d change */}
          <text x="100" y="64" fontSize="9" fill="#94a3b8">7d</text>
          <text x="100" y="80" fontSize="12" 
            fill={change7 == null ? "#94a3b8" : change7 >= 0 ? "#34d399" : "#f43f5e"}>
            {change7 == null ? "—" : `${change7 >= 0 ? "+" : ""}${change7.toFixed(1)}%`}
          </text>
          
          {/* Low/High */}
          <text x="180" y="64" fontSize="9" fill="#94a3b8">Range</text>
          <text x="180" y="80" fontSize="10" fill="#e5e7eb">
            {'$' + low.toFixed(0) + ' - $' + high.toFixed(0)}
          </text>
        </g>
      </svg>
    </div>
  );
}
