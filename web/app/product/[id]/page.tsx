import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getProductWithOffers } from '../../../lib/mock';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data = getProductWithOffers(params.id);
  if (!data) return <div>Not found</div> as any;
  return (
    <div>
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
      <div style={{ width: '100%', height: 320 }}>
        <ResponsiveContainer>
          <LineChart data={data.price_history}>
            <XAxis dataKey="ts" hide />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#2563eb" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
