"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AddToWishlistButton from "./AddToWishlistButton";

type ProductData = {
  product: { id: string; title: string; brand: string };
  offers: Array<{ price: number; retailer_id: string }>;
  price_history: Array<{ price: number; ts: string; retailer_id: string }>;
};

export default function ProductBackground({ id, data }: { id: string; data?: ProductData }) {
  const router = useRouter();
  
  // Use provided data or return null
  if (!data) return null as any;
  
  const hist = [...data.price_history].sort((a, b) => +new Date(a.ts) - +new Date(b.ts));
  const prices = hist.map((h) => h.price);
  const current = prices.length ? prices[prices.length - 1] : (data.offers[0]?.price ?? 0);

  const cardW = 900, cardH = 340;
  const statsW = 300;
  const chartW = cardW - statsW - 32, chartH = 200;
  const leftPad = 36, rightPad = 8;
  const topPad = 12, bottomPad = 18;
  const plotW = Math.max(1, chartW - leftPad - rightPad);
  const plotH = Math.max(1, chartH - topPad - bottomPad);
  const low = prices.length ? Math.min(...prices) : current;
  const high = prices.length ? Math.max(...prices) : current;
  const pathFor = (arr: number[]) => {
    if (!arr.length) return "";
    const min = Math.min(...arr), max = Math.max(...arr);
    const xs = (i: number) => leftPad + (i * (plotW)) / Math.max(1, arr.length - 1);
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

  const [hoverX, setHoverX] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const chartRef = useRef<SVGGElement | null>(null);
  const [homeHover, setHomeHover] = useState(false);

  const handleMove = (e: React.PointerEvent<SVGGElement>) => {
    if (!chartRef.current || !hist.length) return;
    const svg = chartRef.current.ownerSVGElement!;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const ctm = chartRef.current.getScreenCTM();
    if (!ctm) return;
    const local = pt.matrixTransform(ctm.inverse());
    const x = Math.max(leftPad, Math.min(leftPad + plotW, local.x));
    setHoverX(x);
    const t = (x - leftPad) / Math.max(1, plotW);
    const i = Math.round(t * (hist.length - 1));
    setHoverIdx(i);
  };

  const handleLeave = () => { setHoverX(null); setHoverIdx(null); };
  const d = pathFor(prices);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="ab-grad" x1="0" y="0" x2="1" y2="1">
            <stop className="pb-grad-1" offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
            <stop className="pb-grad-2" offset="100%" stopColor="#8b5cf6" stopOpacity="0.18" />
          </linearGradient>
          <filter id="ab-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="ab-soft" x="-20%" y="-20%" width="140%" height="140%">
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

        <rect x="0" y="0" width="1440" height="900" fill="url(#ab-grad)" />

        {/* global top-right Home button */}
        <foreignObject x={1440 - 120 - 16} y={16} width={120} height={36} style={{ pointerEvents: 'auto' }}>
          <button
            onMouseEnter={() => setHomeHover(true)}
            onMouseLeave={() => setHomeHover(false)}
            onClick={() => router.push('/')}
            style={{
              width: 110,
              height: 30,
              borderRadius: 8,
              border: '1px solid rgba(148,163,184,0.3)',
              background: homeHover ? 'rgba(99,102,241,0.25)' : 'rgba(15,23,42,0.6)',
              color: '#e5e7eb',
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: homeHover ? '0 0 12px rgba(99,102,241,0.35)' : 'none',
              transform: homeHover ? 'translateY(-1px)' : 'translateY(0)',
              transition: 'all 200ms ease'
            }}
          >
            ← Home
          </button>
        </foreignObject>

        {/* animated cloud layers (CSS-driven) */}
        <g filter="url(#ab-blur)" opacity="0.5">
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

        {/* distant city skyline */}
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
          <g className="ab-twinkles">
            {Array.from({ length: 24 }).map((_, i) => {
              const x = 40 + ((i * 55) % 1360);
              const y = 8 + ((i * 19) % 140);
              const s = 1 + (i % 2);
              return <rect key={i} x={x} y={y} width={s} height={s} fill="#fde68a" opacity="0.5" className={`tw-${i % 7}`} />;
            })}
          </g>
        </g>

        {/* foreground skyline */}
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
          <g className="ab-twinkles">
            {Array.from({ length: 28 }).map((_, i) => {
              const x = 60 + ((i * 46) % 1360);
              const y = 10 + ((i * 23) % 140);
              const d2 = 2 + (i % 3);
              return <rect key={i} x={x} y={y} width={d2} height={d2} fill="#fbbf24" opacity="0.6" className={`tw-${i % 7}`} />;
            })}
          </g>
          <g filter="url(#ab-soft)">
            <rect x="300" y="120" rx="4" ry="4" width="60" height="16" fill="#22d3ee" opacity="0.7" />
            <rect x="740" y="90" rx="4" ry="4" width="70" height="16" fill="#a78bfa" opacity="0.7" />
            <rect x="1120" y="110" rx="4" ry="4" width="58" height="16" fill="#34d399" opacity="0.7" />
          </g>
        </g>

        {/* animated dashed lines */}
        <g strokeWidth="2" fill="none" opacity="0.6">
          <path className="dash-blue" d="M220 640 C 420 560, 720 720, 960 660" stroke="#22d3ee" />
          <path className="dash-violet" d="M420 680 C 600 620, 820 600, 1200 640" stroke="#a78bfa" />
          <path className="dash-green" d="M140 700 C 360 640, 540 760, 820 720" stroke="#34d399" />
        </g>

        {/* Wishlist button above product panel */}
        <foreignObject x={(1440 - cardW) / 2} y={(900 - cardH) / 2 - 60} width="220" height="50" style={{ pointerEvents: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AddToWishlistButton productId={id} />
          </div>
        </foreignObject>

        {/* product panel (centered) */}
        <g transform={`translate(${(1440 - cardW) / 2} ${(900 - cardH) / 2})`}>
          <rect x="0" y="0" width={cardW} height={cardH} rx="16" ry="16" fill="rgba(2,6,23,0.55)" stroke="rgba(148,163,184,0.25)" />

          <text x="20" y="44" fontSize="24" fill="#e5e7eb">{data.product.title}</text>
          <text x="20" y="70" fontSize="14" fill="#a5b4fc">Brand: {data.product.brand}</text>

          <g ref={chartRef as any} transform={`translate(${16} ${92})`} onPointerMove={handleMove} onPointerLeave={handleLeave} style={{ pointerEvents: 'auto' }}>
            <rect x="0" y="0" width={chartW} height={chartH} fill="rgba(255,255,255,0.02)" stroke="rgba(148,163,184,0.15)" />
            {/* axes (with left padding so y-axis sits inside panel) */}
            <line x1={leftPad} y1={topPad + plotH} x2={leftPad + plotW} y2={topPad + plotH} stroke="rgba(148,163,184,0.35)" />
            <line x1={leftPad} y1={topPad} x2={leftPad} y2={topPad + plotH} stroke="rgba(148,163,184,0.35)" />
            {/* y ticks */}
            {Array.from({ length: 4 }).map((_, i) => {
              const t = i / 4;
              const y = topPad + t * plotH;
              const val = high - t * (high - low);
              return (
                <g key={`yt-${i}`}>
                  <line x1={leftPad - 4} y1={y} x2={leftPad} y2={y} stroke="rgba(148,163,184,0.35)" />
                  <text x={leftPad - 8} y={y + 4} fontSize="10" fill="#94a3b8" textAnchor="end">{val.toFixed(0)}</text>
                </g>
              );
            })}
            {/* x ticks */}
            {(() => {
              const n = Math.max(1, Math.min(4, (hist?.length || 0) - 1));
              return Array.from({ length: n + 1 }).map((_, i) => {
                const t = i / n;
                const x = leftPad + t * plotW; // unchanged
                const idx = Math.max(0, Math.min((hist?.length || 1) - 1, Math.round(t * ((hist?.length || 1) - 1))));
                const d = hist[idx]?.ts ? new Date(hist[idx].ts) : null;
                const label = d ? `${d.getUTCMonth()+1}/${d.getUTCDate()}` : '';
                return (
                  <g key={`xt-${i}`}>
                    <line x1={x} y1={chartH} x2={x} y2={chartH + 4} stroke="rgba(148,163,184,0.35)" />
                    <text x={x} y={chartH + 16} fontSize="10" fill="#94a3b8" textAnchor="middle">{label}</text>
                  </g>
                );
              });
            })()}
            {d && <path d={d} fill="none" stroke="#22d3ee" strokeWidth="2" />}
            {/* hover crosshair + tooltip */}
            {hoverX != null && hoverIdx != null && hist[hoverIdx] && (
              <g>
                <line x1={hoverX} y1={topPad} x2={hoverX} y2={topPad + plotH} stroke="#22d3ee" opacity="0.6" />
                {(() => {
                  const p = hist[hoverIdx];
                  const min = Math.min(...prices), max = Math.max(...prices);
                  const y = max === min ? topPad + plotH / 2 : topPad + (plotH - ((p.price - min) * plotH) / (max - min));
                  const boxW = 110, boxH = 34;
                  const bx = Math.min(Math.max(16, hoverX - boxW / 2), leftPad + plotW - boxW - 8);
                  const by = Math.max(topPad + 4, y - boxH - 8);
                  const date = new Date(p.ts);
                  return (
                    <g transform={`translate(${bx} ${by})`}>
                      <rect x={0} y={0} width={boxW} height={boxH} rx={6} ry={6} fill="rgba(2,6,23,0.9)" stroke="rgba(148,163,184,0.3)" />
                      <text x={8} y={14} fontSize={10} fill="#94a3b8">{`${date.getUTCMonth()+1}/${date.getUTCDate()}`}</text>
                      <text x={8} y={26} fontSize={12} fill="#e5e7eb">{'$' + p.price.toFixed(2)}</text>
                    </g>
                  );
                })()}
              </g>
            )}
          </g>

          {/* right column with product stats */}
          <g transform={`translate(${cardW - statsW} ${24})`}>
            <rect x="0" y="0" width={statsW - 32} height="252" rx="12" ry="12" fill="rgba(255,255,255,0.03)" stroke="rgba(148,163,184,0.15)" />
            <text x="16" y="28" fontSize="14" fill="#94a3b8">Current price</text>
            <text x="16" y="50" fontSize="22" fontWeight="700" fill="#22d3ee">{'$' + current.toFixed(2)}</text>

            <text x="16" y="86" fontSize="14" fill="#94a3b8">24h change</text>
            <text x="16" y="108" fontSize="16" fill={change24 == null ? "#94a3b8" : change24 >= 0 ? "#34d399" : "#f43f5e"}>
              {change24 == null ? "—" : `${change24 >= 0 ? "+" : ""}${change24.toFixed(1)}%`}
            </text>

            <text x="140" y="86" fontSize="14" fill="#94a3b8">7d change</text>
            <text x="140" y="108" fontSize="16" fill={change7 == null ? "#94a3b8" : change7 >= 0 ? "#34d399" : "#f43f5e"}>
              {change7 == null ? "—" : `${change7 >= 0 ? "+" : ""}${change7.toFixed(1)}%`}
            </text>

            <text x="16" y="144" fontSize="14" fill="#94a3b8">Low</text>
            <text x="16" y="166" fontSize="16" fill="#e5e7eb">{'$' + low.toFixed(2)}</text>

            <text x="140" y="144" fontSize="14" fill="#94a3b8">High</text>
            <text x="140" y="166" fontSize="16" fill="#e5e7eb">{'$' + high.toFixed(2)}</text>

            <text x="16" y="202" fontSize="14" fill="#94a3b8">Retailers</text>
            <text x="16" y="224" fontSize="16" fill="#e5e7eb">{data.offers.length}</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
