import Link from 'next/link';
import { getAllProducts, mockSearch, getProductWithOffers, Product } from '../../lib/mock';
import ProductsBackground from '../../components/ProductsBackground';

function Sparkline({ id }: { id: string }) {
  const data = getProductWithOffers(id)?.price_history || [];
  if (!data.length) return null as any;
  const points = [...data].sort((a,b) => +new Date(a.ts) - +new Date(b.ts)).slice(-12);
  const w = 200, h = 60, pad = 6;
  const xs = (i: number) => pad + (i * (w - pad*2)) / Math.max(1, points.length - 1);
  const prices = points.map(p => p.price);
  const min = Math.min(...prices), max = Math.max(...prices);
  const ys = (v: number) => {
    if (max === min) return h/2;
    return pad + (h - pad*2) - ((v - min) * (h - pad*2)) / (max - min);
  };
  const d = points.map((p, i) => `${i===0?'M':'L'}${xs(i)},${ys(p.price)}`).join(' ');
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="mt-3 block">
      <path d={d} fill="none" stroke="#22d3ee" strokeWidth="2" />
    </svg>
  ) as any;
}

export default async function ProductsPage({ searchParams }: { searchParams?: { q?: string; brand?: string; category?: string } }) {
  const q = searchParams?.q || '';
  const brand = searchParams?.brand || undefined;
  const category = searchParams?.category || undefined;
  const items: Product[] = q ? mockSearch(q, brand, category) : getAllProducts();
  const itemsForBg: Product[] = items.length ? items : getAllProducts();
  return (
    <div className="space-y-4">
      <ProductsBackground products={itemsForBg} />
      <div>
        <Link href="/" className="text-slate-400 hover:text-slate-200">← Back to Home</Link>
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">{q ? `Results for "${q}"` : 'All products'}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="block rounded-2xl border border-slate-800 p-4 bg-card/60 backdrop-blur hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <div className="font-medium">{p.title}</div>
              <span className="text-xs px-2 py-1 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200">{p.brand}</span>
            </div>
            <Sparkline id={p.id} />
          </a>
        ))}
      </div>
    </div>
  );
}
