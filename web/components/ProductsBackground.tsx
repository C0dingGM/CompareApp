import { getProductWithOffers, Product } from "../lib/mock";

export default function ProductsBackground({ products }: { products: Product[] }) {
  const items = products.slice(0, 6).map((p) => {
    const data = getProductWithOffers(p.id)!;
    const hist = [...data.price_history].sort((a, b) => +new Date(a.ts) - +new Date(b.ts));
    const current = hist.length ? hist[hist.length - 1].price : (data.offers[0]?.price ?? 0);
    return { id: p.id, title: p.title, current, hist };
  });

  const W = 1440, H = 900;
  const cols = 3, cardW = 420, cardH = 160, gapX = 60, gapY = 40;
  const startX = 60, startY = 260;

  const pathFor = (prices: number[]) => {
    const w = cardW - 40, h = 60, pad = 0;
    const min = Math.min(...prices), max = Math.max(...prices);
    const xs = (i: number) => (i * (w - pad)) / Math.max(1, prices.length - 1);
    const ys = (v: number) => {
      if (max === min) return h / 2;
      return (h) - ((v - min) * (h)) / (max - min);
    };
    return prices.map((v, i) => `${i === 0 ? "M" : "L"}${xs(i)},${ys(v)}`).join(" ");
  };

  return (
    <div className="fixed inset-0 z-30 pointer-events-none">
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full h-full">
        {/* subtle gradient */}
        <defs>
          <linearGradient id="pb-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width={W} height={H} fill="url(#pb-grad)" />

        {items.map((it, idx) => {
          const r = Math.floor(idx / cols);
          const c = idx % cols;
          const x = startX + c * (cardW + gapX);
          const y = startY + r * (cardH + gapY);
          const prices = it.hist.map(h => h.price);
          const d = prices.length ? pathFor(prices) : "";
          return (
            <g key={it.id} transform={`translate(${x} ${y})`} opacity="0.9">
              <rect x="0" y="0" rx="16" ry="16" width={cardW} height={cardH} fill="rgba(2,6,23,0.6)" stroke="rgba(148,163,184,0.25)" />
              <text x="16" y="32" fontSize="16" fill="#e5e7eb">{it.title}</text>
              <text x="16" y="58" fontSize="14" fill="#93c5fd">${'{'}it.current.toFixed(2){'}'}</text>
              <g transform="translate(16 80)">
                <rect x="0" y="0" width={cardW-32} height="60" fill="rgba(255,255,255,0.02)" stroke="rgba(148,163,184,0.15)" />
                {d && (
                  <path d={d} fill="none" stroke="#22d3ee" strokeWidth="2" />
                )}
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
