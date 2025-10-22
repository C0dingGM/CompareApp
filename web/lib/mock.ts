export type Product = { id: string; upc?: string; brand: string; title: string };
const products: Product[] = [
  { id: '1', brand: 'Acme', title: 'Acme Widget 3000' },
  { id: '2', brand: 'Zenith', title: 'Zenith Ultra Kettle' },
  { id: '3', brand: 'EcoCo', title: 'EcoCo Reusable Bottle' },
  { id: '4', brand: 'Acme', title: 'Acme Widget 2000' },
  { id: '5', brand: 'Zenith', title: 'Zenith Smart Toaster' },
  { id: '6', brand: 'EcoCo', title: 'EcoCo Bamboo Cutlery Set' },
  { id: '7', brand: 'Nimbus', title: 'Nimbus Noise-Cancelling Headphones' },
  { id: '8', brand: 'Orbit', title: 'Orbit Fitness Band' },
  { id: '9', brand: 'Pioneer', title: 'Pioneer Bluetooth Speaker' },
  { id: '10', brand: 'Nova', title: 'Nova LED Desk Lamp' },
  { id: '11', brand: 'Atlas', title: 'Atlas Hiking Backpack 40L' },
  { id: '12', brand: 'Vertex', title: 'Vertex Mechanical Keyboard' },
  { id: '13', brand: 'Lumina', title: 'Lumina Solar Charger' },
  { id: '14', brand: 'Quanta', title: 'Quanta USB-C Hub 9-in-1' },
  { id: '15', brand: 'Summit', title: 'Summit Insulated Mug' },
  { id: '16', brand: 'Terra', title: 'Terra Indoor Planter' },
  { id: '17', brand: 'Volt', title: 'Volt Fast Charger 65W' },
  { id: '18', brand: 'Breeze', title: 'Breeze Air Purifier' },
  { id: '19', brand: 'Apex', title: 'Apex Gaming Mouse' },
  { id: '20', brand: 'Polar', title: 'Polar Smart Thermostat' },
  { id: '21', brand: 'Echo', title: 'Echo Wireless Earbuds' },
  { id: '22', brand: 'Helio', title: 'Helio Smart Bulb' },
  { id: '23', brand: 'Quantum', title: 'Quantum SSD 1TB' },
  { id: '24', brand: 'Sierra', title: 'Sierra Trail Shoes' },
  { id: '25', brand: 'Aurora', title: 'Aurora Hair Dryer' },
  { id: '26', brand: 'Zenith', title: 'Zenith Coffee Grinder' },
  { id: '27', brand: 'Acme', title: 'Acme Widget Mini' },
  { id: '28', brand: 'EcoCo', title: 'EcoCo Glass Food Containers' },
  { id: '29', brand: 'Nimbus', title: 'Nimbus Travel Router' },
  { id: '30', brand: 'Orbit', title: 'Orbit Yoga Mat' }
];

const offers = [
  { id: 'o1', product_id: '1', retailer: 'Amazon', price: 49.99, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o2', product_id: '1', retailer: 'Walmart', price: 47.49, currency: 'USD', url: 'https://walmart.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o3', product_id: '2', retailer: 'Target', price: 29.0, currency: 'USD', url: 'https://target.com', in_stock: false, fetched_at: Date.now() }
];

const priceHistory = [
  // Product 1 (Acme Widget 3000)
  { product_id: '1', retailer: 'Amazon', price: 69.99, ts: new Date(Date.now() - 864e5 * 14).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 64.99, ts: new Date(Date.now() - 864e5 * 10).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 59.99, ts: new Date(Date.now() - 864e5 * 7).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 54.99, ts: new Date(Date.now() - 864e5 * 5).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 52.49, ts: new Date(Date.now() - 864e5 * 3).toISOString() },
  { product_id: '1', retailer: 'Amazon', price: 49.99, ts: new Date().toISOString() },
  // Product 2 (Zenith Ultra Kettle)
  { product_id: '2', retailer: 'Target', price: 39.99, ts: new Date(Date.now() - 864e5 * 14).toISOString() },
  { product_id: '2', retailer: 'Target', price: 36.99, ts: new Date(Date.now() - 864e5 * 10).toISOString() },
  { product_id: '2', retailer: 'Target', price: 34.99, ts: new Date(Date.now() - 864e5 * 7).toISOString() },
  { product_id: '2', retailer: 'Target', price: 33.49, ts: new Date(Date.now() - 864e5 * 3).toISOString() },
  { product_id: '2', retailer: 'Target', price: 29.99, ts: new Date().toISOString() },
];

export function getBrands() {
  return Array.from(new Set(products.map(p => p.brand))).sort();
}

export function mockSearch(q: string, brand?: string) {
  const qq = q.trim();
  if (qq.length < 1) return [];
  let list = products;
  if (brand) list = list.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  return list.filter(p => (p.title + ' ' + p.brand).toLowerCase().includes(qq.toLowerCase()));
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


export function getAllProducts() {
  return products;
}
