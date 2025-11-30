export type Product = { id: string; upc?: string; brand: string; title: string; category?: string };

const products: Product[] = [
  { id: '1', brand: 'Acme', title: 'Acme Widget 3000', category: 'Gadgets' },
  { id: '2', brand: 'Zenith', title: 'Zenith Ultra Kettle', category: 'Kitchen' },
  { id: '3', brand: 'EcoCo', title: 'EcoCo Reusable Bottle', category: 'Outdoors' },
  { id: '4', brand: 'Acme', title: 'Acme Widget 2000', category: 'Gadgets' },
  { id: '5', brand: 'Zenith', title: 'Zenith Smart Toaster', category: 'Kitchen' },
  { id: '6', brand: 'EcoCo', title: 'EcoCo Bamboo Cutlery Set', category: 'Kitchen' },
  { id: '7', brand: 'Nimbus', title: 'Nimbus Noise-Cancelling Headphones', category: 'Electronics' },
  { id: '8', brand: 'Orbit', title: 'Orbit Fitness Band', category: 'Fitness' },
  { id: '9', brand: 'Pioneer', title: 'Pioneer Bluetooth Speaker', category: 'Electronics' },
  { id: '10', brand: 'Nova', title: 'Nova LED Desk Lamp', category: 'Home' },
  { id: '11', brand: 'Atlas', title: 'Atlas Hiking Backpack 40L', category: 'Outdoors' },
  { id: '12', brand: 'Vertex', title: 'Vertex Mechanical Keyboard', category: 'Electronics' },
  { id: '13', brand: 'Lumina', title: 'Lumina Solar Charger', category: 'Outdoors' },
  { id: '14', brand: 'Quanta', title: 'Quanta USB-C Hub 9-in-1', category: 'Electronics' },
  { id: '15', brand: 'Summit', title: 'Summit Insulated Mug', category: 'Kitchen' },
  { id: '16', brand: 'Terra', title: 'Terra Indoor Planter', category: 'Home' },
  { id: '17', brand: 'Volt', title: 'Volt Fast Charger 65W', category: 'Electronics' },
  { id: '18', brand: 'Breeze', title: 'Breeze Air Purifier', category: 'Home' },
  { id: '19', brand: 'Apex', title: 'Apex Gaming Mouse', category: 'Electronics' },
  { id: '20', brand: 'Polar', title: 'Polar Smart Thermostat', category: 'Home' },
  { id: '21', brand: 'Echo', title: 'Echo Wireless Earbuds', category: 'Electronics' },
  { id: '22', brand: 'Helio', title: 'Helio Smart Bulb', category: 'Home' },
  { id: '23', brand: 'Quantum', title: 'Quantum SSD 1TB', category: 'Electronics' },
  { id: '24', brand: 'Sierra', title: 'Sierra Trail Shoes', category: 'Outdoors' },
  { id: '25', brand: 'Aurora', title: 'Aurora Hair Dryer', category: 'Home' },
  { id: '26', brand: 'Zenith', title: 'Zenith Coffee Grinder', category: 'Kitchen' },
  { id: '27', brand: 'Acme', title: 'Acme Widget Mini', category: 'Gadgets' },
  { id: '28', brand: 'EcoCo', title: 'EcoCo Glass Food Containers', category: 'Kitchen' },
  { id: '29', brand: 'Nimbus', title: 'Nimbus Travel Router', category: 'Electronics' },
  { id: '30', brand: 'Orbit', title: 'Orbit Yoga Mat', category: 'Fitness' }
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

// Deterministic PRNG for stable SSR/CSR data
let __seed = 123456789;
const __rnd = () => { __seed = (1664525 * __seed + 1013904223) % 4294967296; return __seed / 4294967296; };

// Generate last 30 days of mock price history for Product 3 (EcoCo Reusable Bottle)
for (let i = 29; i >= 0; i--) {
  const base = 22.99; // starting baseline
  const drift = (29 - i) * -0.3; // slight downward trend over the month
  const noise = (__rnd() * 4 - 2); // random noise in [-2, 2] (deterministic)
  const price = +(base + drift + noise).toFixed(2);
  priceHistory.push({ product_id: '3', retailer: 'Amazon', price, ts: new Date(Date.now() - 864e5 * i).toISOString() });
}
export function getCategories() {
  return Array.from(new Set(products.map(p => p.category).filter(Boolean))).sort() as string[];
}



export function getBrands() {
  return Array.from(new Set(products.map(p => p.brand))).sort();
}

export function mockSearch(q: string, brand?: string, category?: string) {
  const qq = q.trim();
  if (qq.length < 1) return [];
  let list = products;
  if (brand) list = list.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  if (category) list = list.filter(p => (p.category || '').toLowerCase() === category.toLowerCase());
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

// Wishlist mock data
export type WishlistItem = {
  id: string;
  productId: string;
  targetPrice?: number;
  targetDate?: string;
  addedAt: string;
};

const wishlists = new Map<string, WishlistItem[]>();

export function getUserWishlist(userId: string): WishlistItem[] {
  return wishlists.get(userId) || [];
}

export function addToWishlist(userId: string, productId: string, targetPrice?: number, targetDate?: string): WishlistItem {
  const userWishlist = wishlists.get(userId) || [];
  const existing = userWishlist.find(item => item.productId === productId);
  if (existing) {
    existing.targetPrice = targetPrice;
    existing.targetDate = targetDate;
    return existing;
  }
  const newItem: WishlistItem = {
    id: `w${Date.now()}_${Math.random().toString(36).slice(2)}`,
    productId,
    targetPrice,
    targetDate,
    addedAt: new Date().toISOString()
  };
  userWishlist.push(newItem);
  wishlists.set(userId, userWishlist);
  return newItem;
}

export function removeFromWishlist(userId: string, itemId: string): boolean {
  const userWishlist = wishlists.get(userId) || [];
  const index = userWishlist.findIndex(item => item.id === itemId);
  if (index === -1) return false;
  userWishlist.splice(index, 1);
  wishlists.set(userId, userWishlist);
  return true;
}

export function updateWishlistItem(userId: string, itemId: string, targetPrice?: number, targetDate?: string): WishlistItem | null {
  const userWishlist = wishlists.get(userId) || [];
  const item = userWishlist.find(i => i.id === itemId);
  if (!item) return null;
  item.targetPrice = targetPrice;
  item.targetDate = targetDate;
  return item;
}

export function isInWishlist(userId: string, productId: string): boolean {
  const userWishlist = wishlists.get(userId) || [];
  return userWishlist.some(item => item.productId === productId);
}
