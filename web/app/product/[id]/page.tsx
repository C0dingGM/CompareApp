import ProductBackground from '../../../components/ProductBackground';
import { getProductWithOffers } from '../../../lib/mock';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data = getProductWithOffers(params.id);
  if (!data) return <div>Not found</div> as any;
  return (
    <div className="relative min-h-screen">
      <ProductBackground id={data.product.id} />
    </div>
  );
}
