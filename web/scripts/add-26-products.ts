import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const newProducts = [
  {
    id: 'prod-100',
    brand: 'Apple',
    title: 'iPhone 15 Pro Max 256GB',
    category: 'Electronics',
    upc: '195949038914'
  },
  {
    id: 'prod-101',
    brand: 'Samsung',
    title: 'Galaxy S24 Ultra 512GB',
    category: 'Electronics',
    upc: '887276792286'
  },
  {
    id: 'prod-102',
    brand: 'Apple',
    title: 'MacBook Pro 14-inch M3',
    category: 'Electronics',
    upc: '195949110931'
  },
  {
    id: 'prod-103',
    brand: 'Sony',
    title: 'PlayStation 5 Console',
    category: 'Electronics',
    upc: '711719556534'
  },
  {
    id: 'prod-104',
    brand: 'Microsoft',
    title: 'Xbox Series X Console',
    category: 'Electronics',
    upc: '889842640649'
  },
  {
    id: 'prod-105',
    brand: 'Nintendo',
    title: 'Switch OLED Mario Red Edition',
    category: 'Electronics',
    upc: '045496883294'
  },
  {
    id: 'prod-106',
    brand: 'LG',
    title: 'OLED C3 55-inch 4K TV',
    category: 'Electronics',
    upc: '195174049471'
  },
  {
    id: 'prod-107',
    brand: 'Samsung',
    title: '75-inch QLED 4K Smart TV',
    category: 'Electronics',
    upc: '887276727035'
  },
  {
    id: 'prod-108',
    brand: 'Bose',
    title: 'SoundLink Flex Bluetooth Speaker',
    category: 'Electronics',
    upc: '017817834704'
  },
  {
    id: 'prod-109',
    brand: 'JBL',
    title: 'Charge 5 Portable Speaker',
    category: 'Electronics',
    upc: '050036377348'
  },
  {
    id: 'prod-110',
    brand: 'Corsair',
    title: 'K70 RGB Mechanical Gaming Keyboard',
    category: 'Electronics',
    upc: '843591095112'
  },
  {
    id: 'prod-111',
    brand: 'Herman Miller',
    title: 'Aeron Ergonomic Office Chair',
    category: 'Home',
    upc: '735610207512'
  },
  {
    id: 'prod-112',
    brand: 'Shark',
    title: 'Navigator Lift-Away Vacuum',
    category: 'Home',
    upc: '622356570237'
  },
  {
    id: 'prod-113',
    brand: 'Bissell',
    title: 'CrossWave Pet Pro Wet Dry Vacuum',
    category: 'Home',
    upc: '011120236590'
  },
  {
    id: 'prod-114',
    brand: 'Cuisinart',
    title: 'Air Fryer Toaster Oven',
    category: 'Kitchen',
    upc: '086279134981'
  },
  {
    id: 'prod-115',
    brand: 'Keurig',
    title: 'K-Elite Single Serve Coffee Maker',
    category: 'Kitchen',
    upc: '611247373507'
  },
  {
    id: 'prod-116',
    brand: 'All-Clad',
    title: 'Stainless Steel Cookware Set 10-Piece',
    category: 'Kitchen',
    upc: '012664005033'
  },
  {
    id: 'prod-117',
    brand: 'Ninja',
    title: 'Foodi 13-in-1 Pressure Cooker',
    category: 'Kitchen',
    upc: '622356570251'
  },
  {
    id: 'prod-118',
    brand: 'Peloton',
    title: 'Bike+ Premium Indoor Cycling',
    category: 'Fitness',
    upc: '810087320027'
  },
  {
    id: 'prod-119',
    brand: 'Bowflex',
    title: 'SelectTech 552 Adjustable Dumbbells',
    category: 'Fitness',
    upc: '842937001052'
  },
  {
    id: 'prod-120',
    brand: 'NordicTrack',
    title: 'Commercial Treadmill 1750',
    category: 'Fitness',
    upc: '043619883695'
  },
  {
    id: 'prod-121',
    brand: 'Garmin',
    title: 'Forerunner 265 GPS Running Watch',
    category: 'Fitness',
    upc: '753759322939'
  },
  {
    id: 'prod-122',
    brand: 'Theragun',
    title: 'PRO Percussion Massage Gun',
    category: 'Fitness',
    upc: '850002478549'
  },
  {
    id: 'prod-123',
    brand: 'Yeti',
    title: 'Tundra 45 Hard Cooler',
    category: 'Outdoors',
    upc: '888830050095'
  },
  {
    id: 'prod-124',
    brand: 'The North Face',
    title: 'Borealis Backpack 28L',
    category: 'Outdoors',
    upc: '196573616479'
  },
  {
    id: 'prod-125',
    brand: 'Coleman',
    title: 'Sundome 6-Person Camping Tent',
    category: 'Outdoors',
    upc: '076501149081'
  },
];

const offers = [
  // iPhone 15 Pro Max
  { product_id: 'prod-100', retailer_id: 'amazon', price: 1199.99 },
  { product_id: 'prod-100', retailer_id: 'walmart', price: 1199.99 },
  { product_id: 'prod-100', retailer_id: 'bestbuy', price: 1199.99 },
  { product_id: 'prod-100', retailer_id: 'target', price: 1199.99 },
  
  // Galaxy S24 Ultra
  { product_id: 'prod-101', retailer_id: 'amazon', price: 1299.99 },
  { product_id: 'prod-101', retailer_id: 'walmart', price: 1299.99 },
  { product_id: 'prod-101', retailer_id: 'bestbuy', price: 1299.99 },
  { product_id: 'prod-101', retailer_id: 'target', price: 1299.99 },
  
  // MacBook Pro
  { product_id: 'prod-102', retailer_id: 'amazon', price: 1599.99 },
  { product_id: 'prod-102', retailer_id: 'walmart', price: 1599.99 },
  { product_id: 'prod-102', retailer_id: 'bestbuy', price: 1599.99 },
  { product_id: 'prod-102', retailer_id: 'target', price: 1649.99 },
  
  // PlayStation 5
  { product_id: 'prod-103', retailer_id: 'amazon', price: 499.99 },
  { product_id: 'prod-103', retailer_id: 'walmart', price: 499.99 },
  { product_id: 'prod-103', retailer_id: 'bestbuy', price: 499.99 },
  { product_id: 'prod-103', retailer_id: 'target', price: 499.99 },
  
  // Xbox Series X
  { product_id: 'prod-104', retailer_id: 'amazon', price: 499.99 },
  { product_id: 'prod-104', retailer_id: 'walmart', price: 499.99 },
  { product_id: 'prod-104', retailer_id: 'bestbuy', price: 499.99 },
  { product_id: 'prod-104', retailer_id: 'target', price: 499.99 },
  
  // Nintendo Switch OLED Mario
  { product_id: 'prod-105', retailer_id: 'amazon', price: 359.99 },
  { product_id: 'prod-105', retailer_id: 'walmart', price: 349.99 },
  { product_id: 'prod-105', retailer_id: 'bestbuy', price: 359.99 },
  { product_id: 'prod-105', retailer_id: 'target', price: 359.99 },
  
  // LG OLED TV
  { product_id: 'prod-106', retailer_id: 'amazon', price: 1399.99 },
  { product_id: 'prod-106', retailer_id: 'walmart', price: 1399.99 },
  { product_id: 'prod-106', retailer_id: 'bestbuy', price: 1399.99 },
  { product_id: 'prod-106', retailer_id: 'target', price: 1449.99 },
  
  // Samsung QLED TV
  { product_id: 'prod-107', retailer_id: 'amazon', price: 1799.99 },
  { product_id: 'prod-107', retailer_id: 'walmart', price: 1749.99 },
  { product_id: 'prod-107', retailer_id: 'bestbuy', price: 1799.99 },
  { product_id: 'prod-107', retailer_id: 'target', price: 1799.99 },
  
  // Bose SoundLink
  { product_id: 'prod-108', retailer_id: 'amazon', price: 149.99 },
  { product_id: 'prod-108', retailer_id: 'walmart', price: 149.99 },
  { product_id: 'prod-108', retailer_id: 'bestbuy', price: 149.99 },
  { product_id: 'prod-108', retailer_id: 'target', price: 149.99 },
  
  // JBL Charge 5
  { product_id: 'prod-109', retailer_id: 'amazon', price: 179.99 },
  { product_id: 'prod-109', retailer_id: 'walmart', price: 169.99 },
  { product_id: 'prod-109', retailer_id: 'bestbuy', price: 179.99 },
  { product_id: 'prod-109', retailer_id: 'target', price: 179.99 },
  
  // Corsair Keyboard
  { product_id: 'prod-110', retailer_id: 'amazon', price: 169.99 },
  { product_id: 'prod-110', retailer_id: 'walmart', price: 169.99 },
  { product_id: 'prod-110', retailer_id: 'bestbuy', price: 169.99 },
  { product_id: 'prod-110', retailer_id: 'target', price: 169.99 },
  
  // Herman Miller Chair
  { product_id: 'prod-111', retailer_id: 'amazon', price: 1595.00 },
  { product_id: 'prod-111', retailer_id: 'walmart', price: 1595.00 },
  { product_id: 'prod-111', retailer_id: 'bestbuy', price: 1595.00 },
  { product_id: 'prod-111', retailer_id: 'target', price: 1595.00 },
  
  // Shark Vacuum
  { product_id: 'prod-112', retailer_id: 'amazon', price: 199.99 },
  { product_id: 'prod-112', retailer_id: 'walmart', price: 189.99 },
  { product_id: 'prod-112', retailer_id: 'bestbuy', price: 199.99 },
  { product_id: 'prod-112', retailer_id: 'target', price: 199.99 },
  
  // Bissell CrossWave
  { product_id: 'prod-113', retailer_id: 'amazon', price: 329.99 },
  { product_id: 'prod-113', retailer_id: 'walmart', price: 319.99 },
  { product_id: 'prod-113', retailer_id: 'bestbuy', price: 329.99 },
  { product_id: 'prod-113', retailer_id: 'target', price: 329.99 },
  
  // Cuisinart Air Fryer
  { product_id: 'prod-114', retailer_id: 'amazon', price: 229.99 },
  { product_id: 'prod-114', retailer_id: 'walmart', price: 219.99 },
  { product_id: 'prod-114', retailer_id: 'bestbuy', price: 229.99 },
  { product_id: 'prod-114', retailer_id: 'target', price: 229.99 },
  
  // Keurig Coffee Maker
  { product_id: 'prod-115', retailer_id: 'amazon', price: 169.99 },
  { product_id: 'prod-115', retailer_id: 'walmart', price: 159.99 },
  { product_id: 'prod-115', retailer_id: 'bestbuy', price: 169.99 },
  { product_id: 'prod-115', retailer_id: 'target', price: 169.99 },
  
  // All-Clad Cookware
  { product_id: 'prod-116', retailer_id: 'amazon', price: 599.99 },
  { product_id: 'prod-116', retailer_id: 'walmart', price: 599.99 },
  { product_id: 'prod-116', retailer_id: 'bestbuy', price: 599.99 },
  { product_id: 'prod-116', retailer_id: 'target', price: 599.99 },
  
  // Ninja Foodi
  { product_id: 'prod-117', retailer_id: 'amazon', price: 279.99 },
  { product_id: 'prod-117', retailer_id: 'walmart', price: 269.99 },
  { product_id: 'prod-117', retailer_id: 'bestbuy', price: 279.99 },
  { product_id: 'prod-117', retailer_id: 'target', price: 279.99 },
  
  // Peloton Bike
  { product_id: 'prod-118', retailer_id: 'amazon', price: 2495.00 },
  { product_id: 'prod-118', retailer_id: 'walmart', price: 2495.00 },
  { product_id: 'prod-118', retailer_id: 'bestbuy', price: 2495.00 },
  { product_id: 'prod-118', retailer_id: 'target', price: 2495.00 },
  
  // Bowflex Dumbbells
  { product_id: 'prod-119', retailer_id: 'amazon', price: 399.99 },
  { product_id: 'prod-119', retailer_id: 'walmart', price: 399.99 },
  { product_id: 'prod-119', retailer_id: 'bestbuy', price: 399.99 },
  { product_id: 'prod-119', retailer_id: 'target', price: 399.99 },
  
  // NordicTrack Treadmill
  { product_id: 'prod-120', retailer_id: 'amazon', price: 1799.99 },
  { product_id: 'prod-120', retailer_id: 'walmart', price: 1799.99 },
  { product_id: 'prod-120', retailer_id: 'bestbuy', price: 1799.99 },
  { product_id: 'prod-120', retailer_id: 'target', price: 1799.99 },
  
  // Garmin Watch
  { product_id: 'prod-121', retailer_id: 'amazon', price: 449.99 },
  { product_id: 'prod-121', retailer_id: 'walmart', price: 449.99 },
  { product_id: 'prod-121', retailer_id: 'bestbuy', price: 449.99 },
  { product_id: 'prod-121', retailer_id: 'target', price: 449.99 },
  
  // Theragun
  { product_id: 'prod-122', retailer_id: 'amazon', price: 599.00 },
  { product_id: 'prod-122', retailer_id: 'walmart', price: 599.00 },
  { product_id: 'prod-122', retailer_id: 'bestbuy', price: 599.00 },
  { product_id: 'prod-122', retailer_id: 'target', price: 599.00 },
  
  // Yeti Cooler
  { product_id: 'prod-123', retailer_id: 'amazon', price: 325.00 },
  { product_id: 'prod-123', retailer_id: 'walmart', price: 325.00 },
  { product_id: 'prod-123', retailer_id: 'bestbuy', price: 325.00 },
  { product_id: 'prod-123', retailer_id: 'target', price: 325.00 },
  
  // North Face Backpack
  { product_id: 'prod-124', retailer_id: 'amazon', price: 99.00 },
  { product_id: 'prod-124', retailer_id: 'walmart', price: 99.00 },
  { product_id: 'prod-124', retailer_id: 'bestbuy', price: 99.00 },
  { product_id: 'prod-124', retailer_id: 'target', price: 99.00 },
  
  // Coleman Tent
  { product_id: 'prod-125', retailer_id: 'amazon', price: 129.99 },
  { product_id: 'prod-125', retailer_id: 'walmart', price: 119.99 },
  { product_id: 'prod-125', retailer_id: 'bestbuy', price: 129.99 },
  { product_id: 'prod-125', retailer_id: 'target', price: 129.99 },
];

async function addProducts() {
  console.log('🚀 Adding 26 new products...\n');
  
  // Insert products
  const { data: productsData, error: productsError } = await supabase
    .from('products')
    .insert(newProducts)
    .select();
  
  if (productsError) {
    console.error('❌ Error inserting products:', productsError);
    return;
  }
  
  console.log(`✅ Added ${productsData?.length || 0} products\n`);
  
  // Insert offers
  const offersWithIds = offers.map((offer) => ({
    id: `o-${offer.product_id}-${offer.retailer_id}`,
    ...offer,
    currency: 'USD',
    in_stock: true,
    url: `https://${offer.retailer_id}.com`,
    fetched_at: new Date().toISOString()
  }));
  
  const { data: offersData, error: offersError } = await supabase
    .from('offers')
    .insert(offersWithIds)
    .select();
  
  if (offersError) {
    console.error('❌ Error inserting offers:', offersError);
    return;
  }
  
  console.log(`✅ Added ${offersData?.length || 0} offers\n`);
  
  // Generate price history for the past 30 days
  console.log('📊 Generating price history...\n');
  
  const priceHistory = [];
  const now = Date.now();
  
  for (const offer of offers) {
    // Generate 30 days of price history
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now - i * 24 * 60 * 60 * 1000);
      // Add small random variation (±5%)
      const variation = (Math.random() - 0.5) * 0.1;
      const price = offer.price * (1 + variation);
      
      priceHistory.push({
        id: `ph-${offer.product_id}-${offer.retailer_id}-${i}`,
        product_id: offer.product_id,
        retailer_id: offer.retailer_id,
        price: Math.round(price * 100) / 100,
        ts: date.toISOString()
      });
    }
  }
  
  const { data: historyData, error: historyError } = await supabase
    .from('price_history')
    .insert(priceHistory)
    .select();
  
  if (historyError) {
    console.error('❌ Error inserting price history:', historyError);
    return;
  }
  
  console.log(`✅ Added ${historyData?.length || 0} price history entries\n`);
  
  console.log('🎉 All done! Added:');
  console.log(`   - ${productsData?.length || 0} products`);
  console.log(`   - ${offersData?.length || 0} offers`);
  console.log(`   - ${historyData?.length || 0} price history entries`);
  console.log('\n📦 Product Categories:');
  console.log('   - Electronics: iPhone, Samsung, MacBook, PS5, Xbox, TVs, Speakers');
  console.log('   - Kitchen: Cuisinart, Keurig, All-Clad, Ninja');
  console.log('   - Home: Herman Miller, Shark, Bissell');
  console.log('   - Fitness: Peloton, Bowflex, NordicTrack, Garmin, Theragun');
  console.log('   - Outdoors: Yeti, North Face, Coleman');
}

addProducts().catch(console.error);
