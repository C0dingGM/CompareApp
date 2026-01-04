import ProductBackground from '../../../components/ProductBackground';

async function getProduct(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/products/${id}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);
  if (!data) return <div>Not found</div> as any;
  return (
    <div className="relative min-h-screen">
      <ProductBackground id={data.product.id} data={data} />
    </div>
  );
}
