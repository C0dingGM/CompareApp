"use client";
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [brand, setBrand] = useState('');

  // load brands
  useEffect(() => {
    fetch('/api/brands').then(r => r.json()).then(j => setBrands(j.items || [])).catch(() => {});
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
        const url = `/api/search?q=${encodeURIComponent(q)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}`;
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
    setLoading(true);
    const url = `/api/search?q=${encodeURIComponent(q)}${brand ? `&brand=${encodeURIComponent(brand)}` : ''}`;
    const res = await fetch(url);
    const json = await res.json();
    setResults(json.items);
    setSuggestions([]);
    setLoading(false);
  };

  return (
    <div>
      <h1 className="gradient-title" style={{ fontSize: 36, margin: '4px 0 8px' }}>CompareApp</h1>
      <p className="meta">Search products, compare prices, view history, add to wishlist.</p>
      <div style={{ margin: '16px 0 20px' }}>
        <a href="/products" className="button btn-primary">View all products</a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 640 }}>
        <form onSubmit={(e) => { e.preventDefault(); search(); }} style={{ position: 'relative', display: 'flex', gap: 8 }}>
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">All companies</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" />
          <button type="submit" onClick={search} disabled={loading || q.trim().length < 1} className="btn-primary">Search</button>
          {q.trim().length >= 1 && (
            <div className="popover" style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 6, maxHeight: 260, overflowY: 'auto', zIndex: 10 }}>
              {suggestions.length > 0 ? (
                suggestions.map((p) => (
                  <a key={p.id} href={`/product/${p.id}`}>
                    {p.title} — <span className="meta">{p.brand}</span>
                  </a>
                ))
              ) : (
                <div style={{ padding: 10, color: 'var(--muted)' }}>No results</div>
              )}
            </div>
          )}
        </form>
      </div>
      <div className="grid" style={{ marginTop: 16 }}>
        {results.map((p) => (
          <div key={p.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a href={`/product/${p.id}`}>{p.title}</a>
              <span className="badge">{p.brand}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
