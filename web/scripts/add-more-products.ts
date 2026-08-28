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
    id: 'prod-41',
    brand: 'Dell',
    title: 'Dell XPS 13 Laptop',
    category: 'Electronics',
    upc: '884116406839'
  },
  {
    id: 'prod-42',
    brand: 'Canon',
    title: 'Canon EOS R50 Mirrorless Camera',
    category: 'Electronics',
    upc: '013803359511'
  },
  {
    id: 'prod-43',
    brand: 'Instant Pot',
    title: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    category: 'Kitchen',
    upc: '810007710754'
  },
  {
    id: 'prod-44',
    brand: 'KitchenAid',
    title: 'KitchenAid Artisan Stand Mixer 5-Quart',
    category: 'Kitchen',
    upc: '883049519432'
  },
  {
    id: 'prod-45',
    brand: 'Breville',
    title: 'Breville Barista Express Espresso Machine',
    category: 'Kitchen',
    upc: '021614058325'
  },
  {
    id: 'prod-46',
    brand: 'Nespresso',
    title: 'Nespresso Vertuo Next Coffee Maker',
    category: 'Kitchen',
    upc: '010942231837'
  },
  {
    id: 'prod-47',
    brand: 'Ninja',
    title: 'Ninja Professional Blender 1000W',
    category: 'Kitchen',
    upc: '622356540452'
  },
  {
    id: 'prod-48',
    brand: 'GoPro',
    title: 'GoPro HERO12 Black Action Camera',
    category: 'Electronics',
    upc: '818279035056'
  },
  {
    id: 'prod-49',
    brand: 'Roku',
    title: 'Roku Streaming Stick 4K',
    category: 'Electronics',
    upc: '816293014039'
  },
  {
    id: 'prod-50',
    brand: 'Amazon',
    title: 'Echo Dot 5th Gen Smart Speaker',
    category: 'Electronics',
    upc: '840268976996'
  },
  {
    id: 'prod-51',
    brand: 'Ring',
    title: 'Ring Video Doorbell Pro 2',
    category: 'Electronics',
    upc: '840080580197'
  },
  {
    id: 'prod-52',
    brand: 'Philips',
    title: 'Philips Hue White and Color Starter Kit',
    category: 'Home',
    upc: '046677558659'
  },
  {
    id: 'prod-53',
    brand: 'iRobot',
    title: 'Roomba j7+ Robot Vacuum',
    category: 'Home',
    upc: '885155024794'
  },
  {
    id: 'prod-54',
    brand: 'Anova',
    title: 'Anova Precision Cooker Nano',
    category: 'Kitchen',
    upc: '856069007110'
  },
  {
    id: 'prod-55',
    brand: 'Vitamix',
    title: 'Vitamix E310 Explorian Blender',
    category: 'Kitchen',
    upc: '703113648540'
  },
  {
    id: 'prod-56',
    brand: 'Beats',
    title: 'Beats Studio Buds True Wireless Earbuds',
    category: 'Electronics',
    upc: '194252405062'
  },
  {
    id: 'prod-57',
    brand: 'Microsoft',
    title: 'Microsoft Surface Pro 9',
    category: 'Electronics',
    upc: '889842908282'
  },
  {
    id: 'prod-58',
    brand: 'Lenovo',
    title: 'Lenovo IdeaPad Gaming 3 Laptop',
    category: 'Electronics',
    upc: '196800820143'
  },
  {
    id: 'prod-59',
    brand: 'ASUS',
    title: 'ASUS ROG Strix Gaming Monitor 27"',
    category: 'Electronics',
    upc: '195553144285'
  },
  {
    id: 'prod-60',
    brand: 'Razer',
    title: 'Razer DeathAdder V3 Gaming Mouse',
    category: 'Electronics',
    upc: '811659036513'
  },
  {
    id: 'prod-61',
    brand: 'SteelSeries',
    title: 'SteelSeries Arctis Nova Pro Wireless Headset',
    category: 'Electronics',
    upc: '810037920522'
  }
];

const offers = [
  // Dell XPS 13
  { product_id: 'prod-41', retailer_id: 'amazon', price: 899.99 },
  { product_id: 'prod-41', retailer_id: 'walmart', price: 899.99 },
  { product_id: 'prod-41', retailer_id: 'bestbuy', price: 899.99 },
  { product_id: 'prod-41', retailer_id: 'target', price: 949.99 },
  
  // Canon EOS R50
  { product_id: 'prod-42', retailer_id: 'amazon', price: 679.99 },
  { product_id: 'prod-42', retailer_id: 'bestbuy', price: 699.99 },
  { product_id: 'prod-42', retailer_id: 'walmart', price: 679.99 },
  { product_id: 'prod-42', retailer_id: 'target', price: 699.99 },
  
  // Instant Pot
  { product_id: 'prod-43', retailer_id: 'amazon', price: 79.99 },
  { product_id: 'prod-43', retailer_id: 'walmart', price: 74.99 },
  { product_id: 'prod-43', retailer_id: 'target', price: 79.99 },
  { product_id: 'prod-43', retailer_id: 'bestbuy', price: 79.99 },
  
  // KitchenAid Mixer
  { product_id: 'prod-44', retailer_id: 'amazon', price: 349.99 },
  { product_id: 'prod-44', retailer_id: 'walmart', price: 329.99 },
  { product_id: 'prod-44', retailer_id: 'target', price: 349.99 },
  { product_id: 'prod-44', retailer_id: 'bestbuy', price: 349.99 },
  
  // Breville Espresso
  { product_id: 'prod-45', retailer_id: 'amazon', price: 699.95 },
  { product_id: 'prod-45', retailer_id: 'walmart', price: 699.95 },
  { product_id: 'prod-45', retailer_id: 'target', price: 699.95 },
  { product_id: 'prod-45', retailer_id: 'bestbuy', price: 699.95 },
  
  // Nespresso
  { product_id: 'prod-46', retailer_id: 'amazon', price: 159.99 },
  { product_id: 'prod-46', retailer_id: 'walmart', price: 159.99 },
  { product_id: 'prod-46', retailer_id: 'target', price: 159.99 },
  { product_id: 'prod-46', retailer_id: 'bestbuy', price: 159.99 },
  
  // Ninja Blender
  { product_id: 'prod-47', retailer_id: 'amazon', price: 89.99 },
  { product_id: 'prod-47', retailer_id: 'walmart', price: 84.99 },
  { product_id: 'prod-47', retailer_id: 'target', price: 89.99 },
  { product_id: 'prod-47', retailer_id: 'bestbuy', price: 89.99 },
  
  // GoPro
  { product_id: 'prod-48', retailer_id: 'amazon', price: 399.99 },
  { product_id: 'prod-48', retailer_id: 'walmart', price: 399.99 },
  { product_id: 'prod-48', retailer_id: 'target', price: 399.99 },
  { product_id: 'prod-48', retailer_id: 'bestbuy', price: 399.99 },
  
  // Roku Stick
  { product_id: 'prod-49', retailer_id: 'amazon', price: 49.99 },
  { product_id: 'prod-49', retailer_id: 'walmart', price: 44.99 },
  { product_id: 'prod-49', retailer_id: 'target', price: 49.99 },
  { product_id: 'prod-49', retailer_id: 'bestbuy', price: 49.99 },
  
  // Echo Dot
  { product_id: 'prod-50', retailer_id: 'amazon', price: 49.99 },
  { product_id: 'prod-50', retailer_id: 'walmart', price: 49.99 },
  { product_id: 'prod-50', retailer_id: 'target', price: 49.99 },
  { product_id: 'prod-50', retailer_id: 'bestbuy', price: 49.99 },
  
  // Ring Doorbell
  { product_id: 'prod-51', retailer_id: 'amazon', price: 249.99 },
  { product_id: 'prod-51', retailer_id: 'walmart', price: 249.99 },
  { product_id: 'prod-51', retailer_id: 'target', price: 249.99 },
  { product_id: 'prod-51', retailer_id: 'bestbuy', price: 249.99 },
  
  // Philips Hue
  { product_id: 'prod-52', retailer_id: 'amazon', price: 199.99 },
  { product_id: 'prod-52', retailer_id: 'walmart', price: 199.99 },
  { product_id: 'prod-52', retailer_id: 'target', price: 199.99 },
  { product_id: 'prod-52', retailer_id: 'bestbuy', price: 199.99 },
  
  // Roomba
  { product_id: 'prod-53', retailer_id: 'amazon', price: 799.99 },
  { product_id: 'prod-53', retailer_id: 'walmart', price: 799.99 },
  { product_id: 'prod-53', retailer_id: 'target', price: 799.99 },
  { product_id: 'prod-53', retailer_id: 'bestbuy', price: 799.99 },
  
  // Anova
  { product_id: 'prod-54', retailer_id: 'amazon', price: 99.99 },
  { product_id: 'prod-54', retailer_id: 'walmart', price: 99.99 },
  { product_id: 'prod-54', retailer_id: 'target', price: 99.99 },
  { product_id: 'prod-54', retailer_id: 'bestbuy', price: 99.99 },
  
  // Vitamix
  { product_id: 'prod-55', retailer_id: 'amazon', price: 349.95 },
  { product_id: 'prod-55', retailer_id: 'walmart', price: 349.95 },
  { product_id: 'prod-55', retailer_id: 'target', price: 349.95 },
  { product_id: 'prod-55', retailer_id: 'bestbuy', price: 349.95 },
  
  // Beats Buds
  { product_id: 'prod-56', retailer_id: 'amazon', price: 149.95 },
  { product_id: 'prod-56', retailer_id: 'walmart', price: 149.95 },
  { product_id: 'prod-56', retailer_id: 'target', price: 149.95 },
  { product_id: 'prod-56', retailer_id: 'bestbuy', price: 149.95 },
  
  // Surface Pro
  { product_id: 'prod-57', retailer_id: 'amazon', price: 999.99 },
  { product_id: 'prod-57', retailer_id: 'walmart', price: 999.99 },
  { product_id: 'prod-57', retailer_id: 'target', price: 999.99 },
  { product_id: 'prod-57', retailer_id: 'bestbuy', price: 999.99 },
  
  // Lenovo Gaming
  { product_id: 'prod-58', retailer_id: 'amazon', price: 799.99 },
  { product_id: 'prod-58', retailer_id: 'walmart', price: 779.99 },
  { product_id: 'prod-58', retailer_id: 'target', price: 799.99 },
  { product_id: 'prod-58', retailer_id: 'bestbuy', price: 799.99 },
  
  // ASUS Monitor
  { product_id: 'prod-59', retailer_id: 'amazon', price: 329.99 },
  { product_id: 'prod-59', retailer_id: 'walmart', price: 329.99 },
  { product_id: 'prod-59', retailer_id: 'target', price: 329.99 },
  { product_id: 'prod-59', retailer_id: 'bestbuy', price: 329.99 },
  
  // Razer Mouse
  { product_id: 'prod-60', retailer_id: 'amazon', price: 69.99 },
  { product_id: 'prod-60', retailer_id: 'walmart', price: 69.99 },
  { product_id: 'prod-60', retailer_id: 'target', price: 69.99 },
  { product_id: 'prod-60', retailer_id: 'bestbuy', price: 69.99 },
  
  // SteelSeries Headset
  { product_id: 'prod-61', retailer_id: 'amazon', price: 349.99 },
  { product_id: 'prod-61', retailer_id: 'walmart', price: 349.99 },
  { product_id: 'prod-61', retailer_id: 'target', price: 349.99 },
  { product_id: 'prod-61', retailer_id: 'bestbuy', price: 349.99 },
];

async function addProducts() {
  console.log('🚀 Adding new products...\n');
  
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
  const offersWithIds = offers.map((offer, idx) => ({
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
}

addProducts().catch(console.error);
