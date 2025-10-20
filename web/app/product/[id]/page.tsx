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
      <h2>{data.product.title}</h2>
      <p>Brand: {data.product.brand}</p>
      <h3>Current offers</h3>
      <ul>
        {data.offers.map((o: any) => (
          <li key={o.id}><a href={o.url} target="_blank">{o.retailer}</a>: {o.currency} {o.price} {o.in_stock ? '' : '(OOS)'}
          </li>
        ))}
      </ul>
      <h3>Price history</h3>
      <PriceChart data={data.price_history} />
    </div>
  );
}
