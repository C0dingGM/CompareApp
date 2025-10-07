export type Product = { id: string; upc?: string; brand: string; title: string };
const products: Product[] = [
  { id: '1', brand: 'Acme', title: 'Acme Widget 3000' },
  { id: '2', brand: 'Zenith', title: 'Zenith Ultra Kettle' },
  { id: '3', brand: 'EcoCo', title: 'EcoCo Reusable Bottle' }
];

const offers = [
  { id: 'o1', product_id: '1', retailer: 'Amazon', price: 49.99, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o2', product_id: '1', retailer: 'Walmart', price: 47.49, currency: 'USD', url: 'https://walmart.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o3', product_id: '2', retailer: 'Target', price: 29.0, currency: 'USD', url: 'https://target.com', in_stock: false, fetched_at: Date.now() }
];

const priceHistory = [
  { product_id: '1', retailer: 'Amazon', price: 59.99, ts: new Date(Date.now() - 864e5 * 7).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 54.99, ts: new Date(Date.now() - 864e5 * 5).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 49.99, ts: new Date().toISOString() },
];

export function mockSearch(q: string) {
  return products.filter(p => (p.title + ' ' + p.brand).toLowerCase().includes(q.toLowerCase()));
}

export function getProductWithOffers(id: string) {
  const product = products.find(p => p.id === id);
  if (!product) return null;
  return {
    product,
    offers: offers.filter(o => o.product_id === id),
    price_history: priceHistory.filter(p => p.product_id === id)
  };
}
