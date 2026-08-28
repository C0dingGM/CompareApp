import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

const uggProducts = [
  { id: '31', brand: 'UGG', title: 'UGG Classic Mini II Boots', category: 'Footwear', upc: '190108085686' },
  { id: '32', brand: 'UGG', title: 'UGG Tasman Slippers', category: 'Footwear', upc: '190108062113' },
  { id: '33', brand: 'UGG', title: 'UGG Classic Ultra Mini Boots', category: 'Footwear', upc: '194715078604' },
  { id: '34', brand: 'UGG', title: 'UGG Bailey Bow II Boots', category: 'Footwear', upc: '190108085747' },
  { id: '35', brand: 'UGG', title: 'UGG Neumel Chukka Boots', category: 'Footwear', upc: '190108085464' },
];

const uggOffers = [
  // UGG Classic Mini II Boots
  { id: 'o31-amazon', product_id: '31', retailer_id: 'amazon', price: 139.95, currency: 'USD', url: 'https://amazon.com/dp/B01N33Z9XT', in_stock: true },
  { id: 'o31-walmart', product_id: '31', retailer_id: 'walmart', price: 149.95, currency: 'USD', url: 'https://walmart.com/ip/ugg-classic-mini', in_stock: true },
  { id: 'o31-target', product_id: '31', retailer_id: 'target', price: 144.99, currency: 'USD', url: 'https://target.com/p/ugg-classic-mini', in_stock: true },
  
  // UGG Tasman Slippers
  { id: 'o32-amazon', product_id: '32', retailer_id: 'amazon', price: 89.95, currency: 'USD', url: 'https://amazon.com/dp/B000VFT8NS', in_stock: true },
  { id: 'o32-walmart', product_id: '32', retailer_id: 'walmart', price: 99.95, currency: 'USD', url: 'https://walmart.com/ip/ugg-tasman', in_stock: true },
  
  // UGG Classic Ultra Mini Boots
  { id: 'o33-amazon', product_id: '33', retailer_id: 'amazon', price: 119.95, currency: 'USD', url: 'https://amazon.com/dp/B08N63JDQP', in_stock: true },
  { id: 'o33-target', product_id: '33', retailer_id: 'target', price: 124.99, currency: 'USD', url: 'https://target.com/p/ugg-ultra-mini', in_stock: true },
  
  // UGG Bailey Bow II Boots
  { id: 'o34-walmart', product_id: '34', retailer_id: 'walmart', price: 169.95, currency: 'USD', url: 'https://walmart.com/ip/ugg-bailey-bow', in_stock: true },
  { id: 'o34-amazon', product_id: '34', retailer_id: 'amazon', price: 159.95, currency: 'USD', url: 'https://amazon.com/dp/B01N4BZ5FP', in_stock: false },
  
  // UGG Neumel Chukka Boots
  { id: 'o35-amazon', product_id: '35', retailer_id: 'amazon', price: 109.95, currency: 'USD', url: 'https://amazon.com/dp/B00HUUGB3I', in_stock: true },
  { id: 'o35-target', product_id: '35', retailer_id: 'target', price: 119.95, currency: 'USD', url: 'https://target.com/p/ugg-neumel', in_stock: true },
];

async function addUggShoes() {
  console.log('Adding UGG shoes offers and price history to database...');
  
  // Products already exist, skip them
  console.log('✓ Products already exist (IDs 31-35)');
  
  // Insert offers
  const { data: offersData, error: offersError } = await supabase
    .from('offers')
    .upsert(uggOffers, { onConflict: 'id' });
  
  if (offersError) {
    console.error('Error inserting offers:', offersError);
    return;
  }
  console.log(`✓ Added ${uggOffers.length} UGG offers`);
  
  // Generate price history (simplified - just adding current prices as history)
  const priceHistory = [];
  const dates = [
    '2025-11-10T04:27:00.000Z',
    '2025-11-20T04:27:00.000Z',
    '2025-11-25T04:27:00.000Z',
    '2025-12-01T04:27:00.000Z',
    '2025-12-10T04:27:00.000Z',
  ];
  
  uggOffers.forEach((offer, offerIdx) => {
    dates.forEach((date, idx) => {
      // Add some price variation
      const priceVariation = (Math.random() - 0.5) * 10;
      priceHistory.push({
        id: `ph-${offer.product_id}-${offer.retailer_id}-${idx}`,
        product_id: offer.product_id,
        retailer_id: offer.retailer_id,
        price: parseFloat((offer.price + priceVariation).toFixed(2)),
        ts: date,
      });
    });
  });
  
  const { error: historyError } = await supabase
    .from('price_history')
    .insert(priceHistory);
  
  if (historyError) {
    console.error('Error inserting price history:', historyError);
    return;
  }
  console.log(`✓ Added ${priceHistory.length} price history records`);
  
  console.log('\n✅ Successfully added UGG shoes data!');
  console.log('\nAdded products:');
  uggProducts.forEach(p => console.log(`  - ${p.title}`));
}

addUggShoes().catch(console.error);
