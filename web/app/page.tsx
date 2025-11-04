"use client";
import { useEffect, useState } from 'react';


export default function HomePage() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  // load brands + categories
  useEffect(() => {
    fetch('/api/brands').then(r => r.json()).then(j => { setBrands(j.items || []); setCategories(j.categories || []); }).catch(() => {});
  }, []);


  // read ?q= from URL on load to prefill and trigger search
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const initial = params.get('q');
      if (initial && initial.trim().length > 0) {
        setQ(initial);
        setTimeout(() => { search(); }, 0);
      }
    } catch {}
  }, []);

  // live suggestions as user types (debounced)
  useEffect(() => {
    if (!q || q.trim().length < 1) {
      setSuggestions([]);
      return;
    }
    const ac = new AbortController();
    const t = setTimeout(async () => {
      try {
        const url = `/api/search?q=${encodeURIComponent(q)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}${category ? `&category=${encodeURIComponent(category)}` : ''}`;
        const res = await fetch(url, { signal: ac.signal });
        const json = await res.json();
        setSuggestions(json.items);
      } catch {}
    }, 200);
    return () => {
      ac.abort();
      clearTimeout(t);
    };
  }, [q, brand]);

  const search = async () => {
    if (q.trim().length < 1) return;
    const url = `/products?q=${encodeURIComponent(q)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}${category ? `&category=${encodeURIComponent(category)}` : ''}`;
    window.location.href = url as any;
  };

  return (
    <div className="space-y-6">
      {/* Hero with centered title and search */}
      <section className="relative z-20 min-h-[calc(100vh-6rem)] flex items-center justify-center">
        <div className="w-full max-w-3xl text-center rounded-2xl p-8 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-emerald-500/10 border border-slate-800">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent animated-title glow-title tracking-tight">CompareApp</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">Search products, compare prices across retailers, and track price history. Clean, fast, and privacy-friendly.</p>
          <form onSubmit={(e) => { e.preventDefault(); search(); }} className="relative mx-auto flex items-center gap-2 max-w-2xl">
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-700 bg-transparent">
              <option value="">All companies</option>
              {brands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 rounded-xl border border-slate-700 bg-transparent">
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className="flex-1 px-3 py-2 rounded-xl border border-slate-700 bg-transparent" />
            <button type="submit" onClick={search} disabled={loading || q.trim().length < 1} className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors disabled:opacity-50">Search</button>
            {q.trim().length >= 1 && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-slate-800 bg-card/60 backdrop-blur p-1 max-h-72 overflow-y-auto shadow-xl text-left">
                {suggestions.length > 0 ? (
                  suggestions.map((p) => (
                    <a key={p.id} href={`/products?q=${encodeURIComponent(p.title)}${p.brand ? `&brand=${encodeURIComponent(p.brand)}` : ''}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">
                      {p.title} — <span className="text-slate-400">{p.brand}</span>
                    </a>
                  ))
                ) : (
                  <div className="px-3 py-2 text-slate-400">No results</div>
                )}
              </div>
            )}
          </form>
          <div className="mt-4">
            <a href="/products" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white transition-colors">View all products</a>
          </div>
        </div>
      </section>

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {results.map((p) => (
          <a key={p.id} href={`/product/${p.id}`} className="block rounded-2xl border border-slate-800 p-4 bg-card/60 backdrop-blur transition-transform hover:scale-[1.02]">
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
