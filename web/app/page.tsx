"use client";
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);

  // live suggestions as user types (debounced)
  useEffect(() => {
    if (!q) {
      setSuggestions([]);
      return;
    }
    const ac = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, { signal: ac.signal });
        const json = await res.json();
        setSuggestions(json.items);
      } catch {}
    }, 200);
    return () => {
      ac.abort();
      clearTimeout(t);
    };
  }, [q]);

  const search = async () => {
    setLoading(true);
    const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
    const json = await res.json();
    setResults(json.items);
    setLoading(false);
  };

  return (
    <div>
      <h1>CompareApp</h1>
      <p>Search products, compare prices, view history, add to wishlist.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 520 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" />
          <button onClick={search} disabled={loading}>Search</button>
        </div>
        {q && suggestions.length > 0 && (
          <div style={{ border: '1px solid #ddd', borderRadius: 4, background: '#fff', maxHeight: 240, overflowY: 'auto' }}>
            {suggestions.map((p) => (
              <a key={p.id} href={`/product/${p.id}`} style={{ display: 'block', padding: 8, borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
                {p.title} — {p.brand}
              </a>
            ))}
          </div>
        )}
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
