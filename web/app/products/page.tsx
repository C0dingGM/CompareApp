import Link from 'next/link';
import { getAllProducts } from '../../lib/mock';

export default async function ProductsPage() {
  const items = getAllProducts();
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <Link href="/">← Back to Home</Link>
      </div>
      <h2 className="gradient-title" style={{ marginTop: 0 }}>All products</h2>
      <div className="grid">
        {items.map((p) => (
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
