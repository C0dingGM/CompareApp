import Link from 'next/link';
import PriceChart from '../../../components/PriceChart';
import { getProductWithOffers } from '../../../lib/mock';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data = getProductWithOffers(params.id);
  if (!data) return <div>Not found</div> as any;
  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <Link href="/">← Back to Home</Link>
      </div>
      <h2 className="gradient-title">{data.product.title}</h2>
      <p className="meta">Brand: {data.product.brand}</p>
      <div className="card" style={{ margin: '12px 0' }}>
        <h3 style={{ marginTop: 0 }}>Current offers</h3>
        <ul className="ul">
          {data.offers.map((o: any) => (
            <li className="li" key={o.id}><a href={o.url} target="_blank">{o.retailer}</a>: {o.currency} {o.price} {o.in_stock ? '' : '(OOS)'}
            </li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Price history</h3>
        <PriceChart data={data.price_history} />
      </div>
    </div>
  );
}
