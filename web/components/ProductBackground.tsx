import { getProductWithOffers } from "../lib/mock";

export default function ProductBackground({ id }: { id: string }) {
  const data = getProductWithOffers(id);
  if (!data) return null as any;
  const hist = [...data.price_history].sort((a, b) => +new Date(a.ts) - +new Date(b.ts));
  const prices = hist.map((h) => h.price);
  const current = prices.length ? prices[prices.length - 1] : (data.offers[0]?.price ?? 0);

  const cardW = 900, cardH = 220;
  const chartW = cardW - 32, chartH = 100;
  const pathFor = (arr: number[]) => {
    if (!arr.length) return "";
    const min = Math.min(...arr), max = Math.max(...arr);
    const xs = (i: number) => (i * (chartW - 0)) / Math.max(1, arr.length - 1);
    const ys = (v: number) => (max === min ? chartH / 2 : chartH - ((v - min) * chartH) / (max - min));
    return arr.map((v, i) => `${i === 0 ? "M" : "L"}${xs(i)},${ys(v)}`).join(" ");
  };
  const d = pathFor(prices);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="ab-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
          </linearGradient>
          <filter id="ab-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="20" />
          </filter>
          <filter id="ab-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        <rect x="0" y="0" width="1440" height="900" fill="url(#ab-grad)" />

        <g filter="url(#ab-blur)" opacity="0.35">
          <g transform="translate(-200,80)">
            <animateTransform attributeName="transform" type="translate" values="0,0; 80,0; 0,0" dur="45s" repeatCount="indefinite" additive="sum" />
            <circle cx="200" cy="80" r="80" fill="#94a3b8" />
            <circle cx="270" cy="90" r="60" fill="#94a3b8" />
            <circle cx="140" cy="100" r="50" fill="#94a3b8" />
          </g>
          <g transform="translate(1000,140) scale(1.2)">
            <animateTransform attributeName="transform" type="translate" values="-40,0; 40,0; -40,0" dur="60s" repeatCount="indefinite" additive="sum" />
            <circle cx="200" cy="80" r="70" fill="#94a3b8" />
            <circle cx="260" cy="90" r="50" fill="#94a3b8" />
            <circle cx="140" cy="100" r="45" fill="#94a3b8" />
          </g>
          <g transform="translate(300,200) scale(0.9)">
            <animateTransform attributeName="transform" type="translate" values="-30,0; 30,0; -30,0" dur="55s" repeatCount="indefinite" additive="sum" />
            <circle cx="200" cy="80" r="60" fill="#94a3b8" />
            <circle cx="260" cy="90" r="45" fill="#94a3b8" />
            <circle cx="140" cy="100" r="40" fill="#94a3b8" />
          </g>
        </g>

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

        <g stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.5">
          <path className="ab-line" d="M220 640 C 420 560, 720 720, 960 660">
            <animate attributeName="stroke-dashoffset" values="0;-2000" dur="8s" repeatCount="indefinite" />
          </path>
          <path className="ab-line" d="M420 680 C 600 620, 820 600, 1200 640" stroke="#a78bfa">
            <animate attributeName="stroke-dashoffset" values="0;-2000" dur="10s" repeatCount="indefinite" />
          </path>
          <path className="ab-line" d="M140 700 C 360 640, 540 760, 820 720" stroke="#34d399">
            <animate attributeName="stroke-dashoffset" values="0;-2000" dur="12s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Product panel in place of search */}
        <g transform={`translate(${270} ${320})`}>
          <rect x="0" y="0" width={cardW} height={cardH} rx="16" ry="16" fill="rgba(2,6,23,0.55)" stroke="rgba(148,163,184,0.25)" />
          <text x="20" y="44" fontSize="24" fill="#e5e7eb">{data.product.title}</text>
          <text x="20" y="72" fontSize="16" fill="#93c5fd">${'{'}current.toFixed(2){'}'}</text>
          <g transform={`translate(${16} ${96})`}>
            <rect x="0" y="0" width={chartW} height={chartH} fill="rgba(255,255,255,0.02)" stroke="rgba(148,163,184,0.15)" />
            {d && <path d={d} fill="none" stroke="#22d3ee" strokeWidth="2" />}
          </g>
        </g>
      </svg>
    </div>
  );
}
