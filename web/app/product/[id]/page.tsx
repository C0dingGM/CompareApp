import Link from 'next/link';
import PriceChart from '../../../components/PriceChart';
import { getProductWithOffers } from '../../../lib/mock';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data = getProductWithOffers(params.id);
  if (!data) return <div>Not found</div> as any;
  return (
    <div className="space-y-4">
      <div>
        <Link href="/" className="text-slate-400 hover:text-slate-200">← Back to Home</Link>
      </div>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">{data.product.title}</h2>
      <p className="text-slate-400">Brand: {data.product.brand}</p>
      <div className="rounded-2xl border border-slate-800 p-4 bg-card/60 backdrop-blur">
        <h3 className="text-lg font-semibold mb-2">Current offers</h3>
        <ul className="space-y-2">
          {data.offers.map((o: any) => (
            <li key={o.id} className="text-sm"><a className="underline" href={o.url} target="_blank">{o.retailer}</a>: {o.currency} {o.price} {o.in_stock ? '' : '(OOS)'}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-800 p-4 bg-card/60 backdrop-blur">
        <h3 className="text-lg font-semibold mb-2">Price history</h3>
        <PriceChart data={data.price_history} />
      </div>
    </div>
  );
}
