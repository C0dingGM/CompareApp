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
  { id: '30', brand: 'Orbit', title: 'Orbit Yoga Mat', category: 'Fitness' },
  { id: '31', brand: 'UGG', title: 'UGG Classic Mini II Boots', category: 'Footwear' },
  { id: '32', brand: 'UGG', title: 'UGG Tasman Slippers', category: 'Footwear' },
  { id: '33', brand: 'UGG', title: 'UGG Classic Ultra Mini Boots', category: 'Footwear' },
  { id: '34', brand: 'UGG', title: 'UGG Bailey Bow II Boots', category: 'Footwear' },
  { id: '35', brand: 'UGG', title: 'UGG Neumel Chukka Boots', category: 'Footwear' }
];

const offers = [
  { id: 'o1', product_id: '1', retailer: 'Amazon', price: 49.99, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o2', product_id: '1', retailer: 'Walmart', price: 47.49, currency: 'USD', url: 'https://walmart.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o3', product_id: '2', retailer: 'Target', price: 29.0, currency: 'USD', url: 'https://target.com', in_stock: false, fetched_at: Date.now() },
  { id: 'o31', product_id: '31', retailer: 'Amazon', price: 139.95, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o32', product_id: '31', retailer: 'Nordstrom', price: 149.95, currency: 'USD', url: 'https://nordstrom.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o33', product_id: '31', retailer: 'Zappos', price: 144.99, currency: 'USD', url: 'https://zappos.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o34', product_id: '32', retailer: 'Amazon', price: 89.95, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o35', product_id: '32', retailer: 'Nordstrom', price: 99.95, currency: 'USD', url: 'https://nordstrom.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o36', product_id: '33', retailer: 'Amazon', price: 119.95, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o37', product_id: '33', retailer: 'Zappos', price: 124.99, currency: 'USD', url: 'https://zappos.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o38', product_id: '34', retailer: 'Nordstrom', price: 169.95, currency: 'USD', url: 'https://nordstrom.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o39', product_id: '34', retailer: 'Amazon', price: 159.95, currency: 'USD', url: 'https://amazon.com', in_stock: false, fetched_at: Date.now() },
  { id: 'o40', product_id: '35', retailer: 'Amazon', price: 109.95, currency: 'USD', url: 'https://amazon.com', in_stock: true, fetched_at: Date.now() },
  { id: 'o41', product_id: '35', retailer: 'Zappos', price: 119.95, currency: 'USD', url: 'https://zappos.com', in_stock: true, fetched_at: Date.now() }
];

const priceHistory = [
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 37.17,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 43.04,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 40.92,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 42.78,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 39.89,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 43.2,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 38.75,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 39.76,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 44.71,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 43.82,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 44.6,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 44.56,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 42.87,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 42.46,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 39.74,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 43.11,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 42.39,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 43.68,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 44.71,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 43.13,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 41.83,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 40.34,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 42.87,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 46.78,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 45.49,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 47.47,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 45.57,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Best Buy",
    "price": 45.51,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Target",
    "price": 43.43,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Walmart",
    "price": 48.04,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "1",
    "retailer": "Amazon",
    "price": 46.71,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 55.17,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 60.27,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 63.04,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 61.79,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 60.42,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 62.09,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 57.81,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 56.06,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 61.96,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 65.88,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 60.92,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 66.34,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 61.87,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 60.45,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 58.28,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 66.49,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 61.96,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 67.22,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 66.61,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 66.72,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 61.13,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 64.26,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 61.94,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 63.89,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 65.68,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 67.57,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 62.1,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Best Buy",
    "price": 59.12,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Target",
    "price": 60.43,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Walmart",
    "price": 67.36,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "2",
    "retailer": "Amazon",
    "price": 66.6,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 20.02,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 22.69,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 23.07,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 21.64,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 21.84,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 21.32,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 20.41,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 20.58,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 22.13,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 23.19,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 24.15,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 24.33,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 24.14,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 22.52,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 23.37,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 24.16,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 23.7,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 22.88,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 25.07,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 24.51,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 23.27,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 24.59,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 23.61,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 24.34,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 25.68,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 24.18,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 24.56,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Best Buy",
    "price": 24.84,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Target",
    "price": 23.2,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Walmart",
    "price": 27.13,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "3",
    "retailer": "Amazon",
    "price": 24.7,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 32.08,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 35.55,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 34.26,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 36.37,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 36.85,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 36.16,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 35.02,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 33.75,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 37.84,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 37.77,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 36.47,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 36.53,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 37.71,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 34.66,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 34.75,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 38.29,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 37.67,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 39.77,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 37.71,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 40.32,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 37.2,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 35.53,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 39.48,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 37.17,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 38.41,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 38.54,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 40.86,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Best Buy",
    "price": 36.2,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Target",
    "price": 36.93,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Walmart",
    "price": 41.38,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "4",
    "retailer": "Amazon",
    "price": 38.74,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 80.39,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 84.4,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 86.84,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 82.89,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 82.35,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 86.14,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 77.76,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 85.03,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 85.19,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 89.22,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 88.34,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 83.54,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 84.99,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 83.56,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 81.02,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 92.23,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 84.54,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 91.11,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 88.15,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 85.21,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 82.52,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 81.3,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 93.24,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 85.74,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 93.06,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 86.36,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 85.68,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Best Buy",
    "price": 81.26,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Target",
    "price": 88.84,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Walmart",
    "price": 91.74,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "5",
    "retailer": "Amazon",
    "price": 87.3,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 27.67,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 28,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 29.07,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 29.97,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 28.89,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 30.57,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 28.4,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 28.24,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 30.68,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 28.33,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 28.65,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 30.01,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 29.87,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 30.04,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 28.34,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 32.13,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 30,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 32.58,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 32,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 31.34,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 30.86,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 29.15,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 32.32,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 30.68,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 32.36,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 30.67,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 33.09,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Best Buy",
    "price": 32.1,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Target",
    "price": 32.61,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Walmart",
    "price": 31.46,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "6",
    "retailer": "Amazon",
    "price": 31.62,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 124.15,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 130.77,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 129.32,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 126.41,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 121.59,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 129.94,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 126.07,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 113.58,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 121.09,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 121.21,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 124.78,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 132.96,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 130.47,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 124.36,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 115.93,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 132.71,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 128.19,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 128.89,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 123.37,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 125.29,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 126.23,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 118.12,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 122.5,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 123.2,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 132.02,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 130.27,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 134.23,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Best Buy",
    "price": 126.55,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Target",
    "price": 122.08,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Walmart",
    "price": 133.48,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "7",
    "retailer": "Amazon",
    "price": 123.68,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 75.17,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 78.72,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 74.31,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 72.72,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 79.87,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 76.6,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 75.29,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 73.39,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 80.42,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 77.76,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 73.85,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 77.42,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 79.66,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 70.58,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 76.16,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 75.03,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 75.62,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 74.44,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 76.64,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 81.75,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 77.54,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 74.12,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 77.14,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 80.37,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 78.1,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 78.67,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 79.63,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Best Buy",
    "price": 76.86,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Target",
    "price": 72.84,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Walmart",
    "price": 81.62,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "8",
    "retailer": "Amazon",
    "price": 76.98,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 44.18,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 44.94,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 47.99,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 45.75,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 48.14,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 46.14,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 44.11,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 42.81,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 48.36,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 47.68,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 46.45,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 45.41,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 45.5,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 45.29,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 46.19,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 49.65,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 50.14,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 45.65,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 49.14,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 47.05,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 46.65,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 46.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 50.96,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 47.6,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 50.04,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 48.8,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 47.71,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Best Buy",
    "price": 45.18,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Target",
    "price": 47.59,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Walmart",
    "price": 52.04,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "9",
    "retailer": "Amazon",
    "price": 51.6,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 29.63,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 31.51,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 30.71,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 31.49,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 29.88,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 30.34,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 29.2,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 28.38,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 31.58,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 32.44,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 30.46,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 31.29,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 33.07,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 31.88,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 30.88,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 31.83,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 32.34,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 33.92,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 31.93,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 32.59,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 31.72,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 32.62,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 33.66,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 33.18,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 32.45,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 33.7,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 35.6,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Best Buy",
    "price": 33.13,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Target",
    "price": 34.15,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Walmart",
    "price": 35.81,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "10",
    "retailer": "Amazon",
    "price": 33.99,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 106.89,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 119.14,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 116.34,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 113.03,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 112.27,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 110.93,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 110.86,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 115.55,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 111.53,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 116.84,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 116.79,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 112.73,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 118.99,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 112.2,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 108.4,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 114,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 122.46,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 119.36,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 118.19,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 113.22,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 115.32,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 111.22,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 116.67,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 121.91,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 123.14,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 118.28,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 114.94,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Best Buy",
    "price": 112.21,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Target",
    "price": 115.47,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Walmart",
    "price": 114.51,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "11",
    "retailer": "Amazon",
    "price": 114.98,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 141.81,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 139.4,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 138.36,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 146.3,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 145.84,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 145.65,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 138.36,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 145.32,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 153.87,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 151.05,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 152.38,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 153.44,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 143.9,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 141.27,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 133.11,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 141.75,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 143.49,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 154.06,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 151.02,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 153.37,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 146.53,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 148.37,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 150.6,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 143.64,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 152.47,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 148.19,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 142.25,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Best Buy",
    "price": 148.18,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Target",
    "price": 139.74,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Walmart",
    "price": 156.29,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "12",
    "retailer": "Amazon",
    "price": 146.78,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 37.26,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 42.22,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 42.94,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 42.67,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 41.7,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 44.27,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 39.9,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 38.3,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 44.2,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 44.54,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 45.02,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 44.39,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 41.71,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 41.79,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 39.01,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 43.77,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 44.85,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 45.8,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 44.09,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 43.41,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 41.32,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 41.8,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 42.77,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 43.19,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 45.98,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 43.36,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 43.55,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Best Buy",
    "price": 43.13,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Target",
    "price": 42.33,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Walmart",
    "price": 46.63,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "13",
    "retailer": "Amazon",
    "price": 45.34,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 51.46,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 52.8,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 53.76,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 56.84,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 56.32,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 58.72,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 53.48,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 54.96,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 54.24,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 54.89,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 58.66,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 59.76,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 55.35,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 54.64,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 57.5,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 59.67,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 58.39,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 55.89,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 57.76,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 60.62,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 54.87,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 56.69,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 60.26,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 60.58,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 58.99,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 57.69,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 61.15,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Best Buy",
    "price": 54.89,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Target",
    "price": 57.66,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Walmart",
    "price": 56.94,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "14",
    "retailer": "Amazon",
    "price": 57,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 23.83,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 27.05,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 24.9,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 25.84,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 26.34,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 25.05,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 25.66,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 24.86,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 25.48,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 26.39,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 26.46,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 28.03,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 26.67,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 26.35,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 26.11,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 27.02,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 27.59,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 27,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 28.22,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 27.67,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 27.59,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 27.52,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 30.24,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 28.35,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 28.42,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 28.42,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 30.69,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Best Buy",
    "price": 27.12,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Target",
    "price": 28.59,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Walmart",
    "price": 31.33,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "15",
    "retailer": "Amazon",
    "price": 29.81,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 36.47,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 40.62,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 37.61,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 40.9,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 37.95,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 40.51,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 36.71,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 38.12,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 40.47,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 40.13,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 39.36,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 39.17,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 38.91,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 40.43,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 37.63,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 41.89,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 40.69,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 40.54,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 41.31,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 39.59,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 41.22,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 37.71,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 43.7,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 43.99,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 43.84,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 42.4,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 42.64,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Best Buy",
    "price": 38.62,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Target",
    "price": 39.52,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Walmart",
    "price": 41.61,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "16",
    "retailer": "Amazon",
    "price": 41.72,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 48.39,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 49.07,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 51.71,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 53.43,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 48.53,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 52.14,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 48.62,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 48.22,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 49.87,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 52.84,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 51.53,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 51.13,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 51.06,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 47.42,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 47.73,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 55.41,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 50.52,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 52.87,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 53.76,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 52.36,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 51.29,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 52.15,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 54.98,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 52.31,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 55.24,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 55.59,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 55.5,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Best Buy",
    "price": 50.3,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Target",
    "price": 54.11,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Walmart",
    "price": 55.93,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "17",
    "retailer": "Amazon",
    "price": 55.66,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 192.79,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 197.31,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 204.94,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 190.61,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 201.74,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 203.2,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 183.82,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 190.35,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 196.51,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 187.38,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 201.29,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 202.3,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 193.92,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 194.49,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 192.98,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 193.06,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 196.21,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 197.34,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 190.02,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 200.24,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 180.11,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 193.34,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 205.9,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 194.11,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 203.21,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 192.26,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 202.13,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Best Buy",
    "price": 183.16,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Target",
    "price": 186.55,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Walmart",
    "price": 200.3,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "18",
    "retailer": "Amazon",
    "price": 196.03,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 63.67,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 62.76,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 62.87,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 65.42,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 65.87,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 69.69,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 59.44,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 61.04,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 67.21,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 69.48,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 68.47,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 67.47,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 65.34,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 63.67,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 64.71,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 70.91,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 68.93,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 66.05,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 69.65,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 64.87,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 67.1,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 67.5,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 66.01,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 70.9,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 66.31,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 71.69,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 66.26,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Best Buy",
    "price": 68.5,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Target",
    "price": 63.32,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Walmart",
    "price": 69.05,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "19",
    "retailer": "Amazon",
    "price": 70.57,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 159.86,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 174.51,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 173.33,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 172.71,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 182.97,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 177.28,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 162.25,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 172.72,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 172,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 185.03,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 179.24,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 169.25,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 174.07,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 171.58,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 165.12,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 178.15,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 172.76,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 184.12,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 182.17,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 179.22,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 172.57,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 164.02,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 177.4,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 176.67,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 172.93,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 178.5,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 172.93,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Best Buy",
    "price": 178.8,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Target",
    "price": 165.45,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Walmart",
    "price": 171.51,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "20",
    "retailer": "Amazon",
    "price": 186.79,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 79.67,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 81.69,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 82.83,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 87.67,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 83.96,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 90.52,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 80.81,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 85.25,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 88.86,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 87.19,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 91.29,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 84.39,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 90.01,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 80.42,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 86.69,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 84.36,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 87.64,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 86.99,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 85.6,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 85.4,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 81.09,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 83,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 89.35,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 88.65,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 86.3,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 84.74,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 88.36,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Best Buy",
    "price": 81.45,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Target",
    "price": 82.11,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Walmart",
    "price": 92,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "21",
    "retailer": "Amazon",
    "price": 91.51,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 20.39,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 20.42,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 21.13,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 20.59,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 21.2,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 21.64,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 19.92,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 19.74,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 22.29,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 22.98,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 22.4,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 20.91,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 22.58,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 19.96,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 20.52,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 23.76,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 22.89,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 22.59,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 23.45,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 23.4,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 22.52,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 22.48,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 22.57,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 23.6,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 24.78,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 23.55,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 25.39,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Best Buy",
    "price": 23.29,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Target",
    "price": 24.07,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Walmart",
    "price": 24.37,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "22",
    "retailer": "Amazon",
    "price": 23.82,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 141.5,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 161.47,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 155.23,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 150.34,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 149.29,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 148.34,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 141.25,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 145.83,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 156.92,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 154.91,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 153.88,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 163.32,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 163.92,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 148.87,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 141.75,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 151.62,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 157.39,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 161.68,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 163.57,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 165.05,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 151.32,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 153.17,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 160.95,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 156.08,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 160.83,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 154.55,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 161.66,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Best Buy",
    "price": 149.93,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Target",
    "price": 143.84,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Walmart",
    "price": 156.03,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "23",
    "retailer": "Amazon",
    "price": 159.66,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 105.09,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 105.48,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 101.06,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 106.71,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 110.87,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 104.34,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 105.82,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 102.26,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 111.08,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 107.61,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 109.79,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 110.41,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 111.43,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 103.6,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 102.72,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 107.79,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 110.65,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 104.03,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 109.27,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 113.43,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 108.02,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 105.13,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 109.81,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 106.87,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 108.94,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 114.47,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 112.98,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Best Buy",
    "price": 107.03,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Target",
    "price": 100.15,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Walmart",
    "price": 106.1,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "24",
    "retailer": "Amazon",
    "price": 114.24,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 73.17,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 73.37,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 78.26,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 76.94,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 76.33,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 77.74,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 69.07,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 75.82,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 78.07,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 78.82,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 74.53,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 79.17,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 76.84,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 70.74,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 77.2,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 81.29,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 75.92,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 79.75,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 81.07,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 81.81,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 72.4,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 76.62,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 80.39,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 81.64,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 79.26,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 78.28,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 82.54,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Best Buy",
    "price": 73.89,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Target",
    "price": 75.69,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Walmart",
    "price": 82.03,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "25",
    "retailer": "Amazon",
    "price": 76.44,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 84.55,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 93.88,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 93.26,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 91.1,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 95.72,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 87.48,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 82.52,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 85.71,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 87.67,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 91.66,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 93.34,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 95.92,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 88,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 85.41,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 84.89,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 90.45,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 92.51,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 97,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 94.69,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 90.01,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 89.59,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 85.43,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 97.43,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 91.3,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 91.36,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 90.47,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 91.07,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Best Buy",
    "price": 87.04,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Target",
    "price": 86.07,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Walmart",
    "price": 96.52,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "26",
    "retailer": "Amazon",
    "price": 90.96,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 22.5,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 25.65,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 26.38,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 25.54,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 26.9,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 27.6,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 25.88,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 26.04,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 25.84,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 26.99,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 25.83,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 27.32,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 28.36,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 24.95,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 27.58,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 28.05,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 27.83,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 28.22,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 28.63,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 26.95,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 28.46,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 27.46,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 29.53,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 28.17,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 28.03,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 28.41,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 28.19,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Best Buy",
    "price": 27.83,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Target",
    "price": 28.62,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Walmart",
    "price": 29.82,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "27",
    "retailer": "Amazon",
    "price": 29.74,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 32.01,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 34.37,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 35.83,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 36.76,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 36.06,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 38.08,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 33.93,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 34.93,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 38.2,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 37.69,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 36.98,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 35.97,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 37.11,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 34.13,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 37.12,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 39.64,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 39.32,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 37.65,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 37.86,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 36.92,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 37.68,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 38.52,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 39,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 40.94,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 39.96,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 39.01,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 41.2,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Best Buy",
    "price": 38.85,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Target",
    "price": 38.26,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Walmart",
    "price": 39.4,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "28",
    "retailer": "Amazon",
    "price": 40.46,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 87.62,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 91.93,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 92.52,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 100.51,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 100.99,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 95.53,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 87.49,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 89.18,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 101.25,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 94.04,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 101.91,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 94.29,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 94.79,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 92.15,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 88.66,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 96.96,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 101.43,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 94.41,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 99.6,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 94.32,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 90,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 95.79,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 102.76,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 94.76,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 101.14,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 94.61,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 96.16,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Best Buy",
    "price": 96.6,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Target",
    "price": 96.66,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Walmart",
    "price": 101.7,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "29",
    "retailer": "Amazon",
    "price": 104.07,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 41.51,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 47.44,
    "ts": "2025-11-11T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 47.66,
    "ts": "2025-11-12T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 47.77,
    "ts": "2025-11-13T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 46.64,
    "ts": "2025-11-14T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 47.99,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 42.55,
    "ts": "2025-11-16T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 44.73,
    "ts": "2025-11-17T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 46.95,
    "ts": "2025-11-18T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 45.49,
    "ts": "2025-11-19T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 44.82,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 44.72,
    "ts": "2025-11-21T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 48.76,
    "ts": "2025-11-22T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 44.01,
    "ts": "2025-11-23T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 47.13,
    "ts": "2025-11-24T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 50.16,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 45.71,
    "ts": "2025-11-26T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 45.65,
    "ts": "2025-11-27T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 45.76,
    "ts": "2025-11-28T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 47.17,
    "ts": "2025-11-29T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 44.75,
    "ts": "2025-11-30T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 47.02,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 50.28,
    "ts": "2025-12-02T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 51.38,
    "ts": "2025-12-03T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 46.63,
    "ts": "2025-12-04T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 50.24,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 51.19,
    "ts": "2025-12-06T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Best Buy",
    "price": 46.11,
    "ts": "2025-12-07T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Target",
    "price": 48.55,
    "ts": "2025-12-08T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Walmart",
    "price": 52.26,
    "ts": "2025-12-09T04:27:00.000Z"
  },
  {
    "product_id": "30",
    "retailer": "Amazon",
    "price": 48.16,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 140.17,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 149.99,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 144.32,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 138.47,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 149.95,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 145.89,
    "ts": "2025-11-15T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 142.29,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 149.95,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 147.15,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 135.99,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 142.49,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 139.99,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 139.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 149.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 144.99,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 138.75,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 149.95,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 143.89,
    "ts": "2025-12-05T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Amazon",
    "price": 141.22,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Nordstrom",
    "price": 149.95,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "31",
    "retailer": "Zappos",
    "price": 145.49,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Amazon",
    "price": 91.47,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Nordstrom",
    "price": 99.95,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Amazon",
    "price": 88.99,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Nordstrom",
    "price": 99.95,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Amazon",
    "price": 87.50,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Nordstrom",
    "price": 94.95,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Amazon",
    "price": 89.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Nordstrom",
    "price": 99.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Amazon",
    "price": 90.75,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "32",
    "retailer": "Nordstrom",
    "price": 99.95,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Amazon",
    "price": 122.47,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Zappos",
    "price": 124.99,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Amazon",
    "price": 118.99,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Zappos",
    "price": 124.99,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Amazon",
    "price": 115.95,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Zappos",
    "price": 119.99,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Amazon",
    "price": 119.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Zappos",
    "price": 124.99,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Amazon",
    "price": 121.25,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "33",
    "retailer": "Zappos",
    "price": 124.99,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Amazon",
    "price": 162.47,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Nordstrom",
    "price": 169.95,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Amazon",
    "price": 158.99,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Nordstrom",
    "price": 169.95,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Amazon",
    "price": 155.95,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Nordstrom",
    "price": 164.95,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Amazon",
    "price": 159.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Nordstrom",
    "price": 169.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Amazon",
    "price": 161.25,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "34",
    "retailer": "Nordstrom",
    "price": 169.95,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Amazon",
    "price": 112.47,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Zappos",
    "price": 119.95,
    "ts": "2025-11-10T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Amazon",
    "price": 108.99,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Zappos",
    "price": 119.95,
    "ts": "2025-11-20T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Amazon",
    "price": 105.95,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Zappos",
    "price": 114.95,
    "ts": "2025-11-25T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Amazon",
    "price": 109.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Zappos",
    "price": 119.95,
    "ts": "2025-12-01T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Amazon",
    "price": 111.25,
    "ts": "2025-12-10T04:27:00.000Z"
  },
  {
    "product_id": "35",
    "retailer": "Zappos",
    "price": 119.95,
    "ts": "2025-12-10T04:27:00.000Z"
  }
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
