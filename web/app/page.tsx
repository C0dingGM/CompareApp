"use client";
import { useState } from 'react';

export default function HomePage() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

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
      <div style={{ display: 'flex', gap: 8 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" />
        <button onClick={search} disabled={loading}>Search</button>
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
