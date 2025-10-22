import Link from 'next/link';
import { getAllProducts } from '../../lib/mock';

export default async function ProductsPage() {
  const items = getAllProducts();
  return (
    <div className="space-y-4">
      <div>
        <Link href="/" className="text-slate-400 hover:text-slate-200">← Back to Home</Link>
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">All products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="block rounded-2xl border border-slate-800 p-4 bg-card/60 backdrop-blur hover:scale-[1.01] transition-transform">
            <div className="flex items-center justify-between">
              <div className="font-medium">{p.title}</div>
              <span className="text-xs px-2 py-1 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-200">{p.brand}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
