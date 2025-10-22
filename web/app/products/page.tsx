import Link from 'next/link';
import { getAllProducts } from '../../lib/mock';

export default async function ProductsPage() {
  const items = getAllProducts();
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <Link href="/">← Back to Home</Link>
      </div>
      <h2>All products</h2>
      <ul>
        {items.map((p) => (
          <li key={p.id}>
            <a href={`/product/${p.id}`}>{p.title}</a> — {p.brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
