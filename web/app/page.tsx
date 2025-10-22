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
      <h1>CompareApp</h1>
      <p>Search products, compare prices, view history, add to wishlist.</p>
      <div style={{ margin: '12px 0' }}>
        <a href="/products"><button>View all products</button></a>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 520 }}>
        <form onSubmit={(e) => { e.preventDefault(); search(); }} style={{ position: 'relative', display: 'flex', gap: 8 }}>
          <select value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="">All companies</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" />
          <button type="submit" onClick={search} disabled={loading || q.trim().length < 1}>Search</button>
          {q.trim().length >= 1 && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, border: '1px solid #ddd', borderRadius: 4, background: '#fff', maxHeight: 240, overflowY: 'auto', zIndex: 10 }}>
              {suggestions.length > 0 ? (
                suggestions.map((p) => (
                  <a key={p.id} href={`/product/${p.id}`} style={{ display: 'block', padding: 8, borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
                    {p.title} — {p.brand}
                  </a>
                ))
              ) : (
                <div style={{ padding: 8, color: '#666' }}>No results</div>
              )}
            </div>
          )}
        </form>
      </div>
      <ul>
        {results.map((p) => (
          <li key={p.id}>
            <a href={`/product/${p.id}`}>{p.title}</a> — {p.brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
