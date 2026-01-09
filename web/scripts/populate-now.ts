import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

const realProducts = [
  // Electronics
  { id: '7', brand: 'Sony', title: 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones', category: 'Electronics', upc: '027242920425' },
  { id: '9', brand: 'JBL', title: 'JBL Flip 6 Portable Bluetooth Speaker', category: 'Electronics', upc: '050036379243' },
  { id: '12', brand: 'Logitech', title: 'Logitech MX Keys Advanced Wireless Keyboard', category: 'Electronics', upc: '097855153715' },
  { id: '19', brand: 'Logitech', title: 'Logitech G502 HERO Gaming Mouse', category: 'Electronics', upc: '097855148582' },
  { id: '21', brand: 'Apple', title: 'Apple AirPods Pro (2nd Generation)', category: 'Electronics', upc: '194253398707' },
  { id: '23', brand: 'Samsung', title: 'Samsung 980 PRO 1TB PCIe 4.0 NVMe SSD', category: 'Electronics', upc: '887276510736' },
  
  // Fitness
  { id: '8', brand: 'Fitbit', title: 'Fitbit Charge 6 Fitness Tracker', category: 'Fitness', upc: '811138037499' },
  { id: '30', brand: 'Manduka', title: 'Manduka PRO Yoga Mat 6mm', category: 'Fitness', upc: '810006800026' },
  
  // Kitchen
  { id: '2', brand: 'Cuisinart', title: 'Cuisinart Stainless Steel Electric Kettle', category: 'Kitchen', upc: '086279093448' },
  
  // Outdoors
  { id: '3', brand: 'Hydro Flask', title: 'Hydro Flask Standard Mouth Water Bottle 21oz', category: 'Outdoors', upc: '194636646859' },
];

const offers = [
  // Sony WH-1000XM5
  { id: 'o7-amazon', product_id: '7', retailer_id: 'amazon', price: 398.00, currency: 'USD', url: 'https://amazon.com/dp/B09XS7JWHH', in_stock: true },
  { id: 'o7-walmart', product_id: '7', retailer_id: 'walmart', price: 379.99, currency: 'USD', url: 'https://walmart.com/ip/1985051367', in_stock: true },
  { id: 'o7-target', product_id: '7', retailer_id: 'target', price: 399.99, currency: 'USD', url: 'https://target.com/p/A-87654321', in_stock: true },
  { id: 'o7-bestbuy', product_id: '7', retailer_id: 'bestbuy', price: 399.99, currency: 'USD', url: 'https://bestbuy.com/site/6505727.p', in_stock: true },
  
  // JBL Flip 6
  { id: 'o9-amazon', product_id: '9', retailer_id: 'amazon', price: 129.95, currency: 'USD', url: 'https://amazon.com/dp/B09HKJ6DK5', in_stock: true },
  { id: 'o9-walmart', product_id: '9', retailer_id: 'walmart', price: 119.99, currency: 'USD', url: 'https://walmart.com/ip/179564173', in_stock: true },
  { id: 'o9-target', product_id: '9', retailer_id: 'target', price: 129.99, currency: 'USD', url: 'https://target.com/p/A-83297845', in_stock: true },
  { id: 'o9-bestbuy', product_id: '9', retailer_id: 'bestbuy', price: 129.99, currency: 'USD', url: 'https://bestbuy.com/site/6464330.p', in_stock: true },
  
  // Logitech MX Keys
  { id: 'o12-amazon', product_id: '12', retailer_id: 'amazon', price: 109.99, currency: 'USD', url: 'https://amazon.com/dp/B07S92QBCL', in_stock: true },
  { id: 'o12-walmart', product_id: '12', retailer_id: 'walmart', price: 99.99, currency: 'USD', url: 'https://walmart.com/ip/348701644', in_stock: true },
  { id: 'o12-target', product_id: '12', retailer_id: 'target', price: 109.99, currency: 'USD', url: 'https://target.com/p/A-76892104', in_stock: false },
  { id: 'o12-bestbuy', product_id: '12', retailer_id: 'bestbuy', price: 109.99, currency: 'USD', url: 'https://bestbuy.com/site/6366533.p', in_stock: true },
  
  // Logitech G502
  { id: 'o19-amazon', product_id: '19', retailer_id: 'amazon', price: 49.99, currency: 'USD', url: 'https://amazon.com/dp/B07GBZ4Q68', in_stock: true },
  { id: 'o19-walmart', product_id: '19', retailer_id: 'walmart', price: 44.99, currency: 'USD', url: 'https://walmart.com/ip/727748608', in_stock: true },
  { id: 'o19-target', product_id: '19', retailer_id: 'target', price: 49.99, currency: 'USD', url: 'https://target.com/p/A-54082719', in_stock: true },
  { id: 'o19-bestbuy', product_id: '19', retailer_id: 'bestbuy', price: 49.99, currency: 'USD', url: 'https://bestbuy.com/site/6265133.p', in_stock: true },
  
  // Apple AirPods Pro
  { id: 'o21-amazon', product_id: '21', retailer_id: 'amazon', price: 249.00, currency: 'USD', url: 'https://amazon.com/dp/B0CHWRXH8B', in_stock: true },
  { id: 'o21-walmart', product_id: '21', retailer_id: 'walmart', price: 244.99, currency: 'USD', url: 'https://walmart.com/ip/5056388859', in_stock: true },
  { id: 'o21-target', product_id: '21', retailer_id: 'target', price: 249.99, currency: 'USD', url: 'https://target.com/p/A-87865026', in_stock: true },
  { id: 'o21-bestbuy', product_id: '21', retailer_id: 'bestbuy', price: 249.99, currency: 'USD', url: 'https://bestbuy.com/site/6447382.p', in_stock: true },
  
  // Samsung SSD
  { id: 'o23-amazon', product_id: '23', retailer_id: 'amazon', price: 89.99, currency: 'USD', url: 'https://amazon.com/dp/B08GLX7TNT', in_stock: true },
  { id: 'o23-walmart', product_id: '23', retailer_id: 'walmart', price: 94.99, currency: 'USD', url: 'https://walmart.com/ip/674258562', in_stock: true },
  { id: 'o23-target', product_id: '23', retailer_id: 'target', price: 99.99, currency: 'USD', url: 'https://target.com/p/A-83927461', in_stock: false },
  { id: 'o23-bestbuy', product_id: '23', retailer_id: 'bestbuy', price: 89.99, currency: 'USD', url: 'https://bestbuy.com/site/6431940.p', in_stock: true },
  
  // Fitbit Charge 6
  { id: 'o8-amazon', product_id: '8', retailer_id: 'amazon', price: 159.95, currency: 'USD', url: 'https://amazon.com/dp/B0CCZ1SQ68', in_stock: true },
  { id: 'o8-walmart', product_id: '8', retailer_id: 'walmart', price: 159.95, currency: 'USD', url: 'https://walmart.com/ip/5353832684', in_stock: true },
  { id: 'o8-target', product_id: '8', retailer_id: 'target', price: 159.95, currency: 'USD', url: 'https://target.com/p/A-90168537', in_stock: true },
  { id: 'o8-bestbuy', product_id: '8', retailer_id: 'bestbuy', price: 159.95, currency: 'USD', url: 'https://bestbuy.com/site/6559428.p', in_stock: true },
  
  // Manduka Yoga Mat
  { id: 'o30-amazon', product_id: '30', retailer_id: 'amazon', price: 120.00, currency: 'USD', url: 'https://amazon.com/dp/B00FGC1E5C', in_stock: true },
  { id: 'o30-walmart', product_id: '30', retailer_id: 'walmart', price: 124.99, currency: 'USD', url: 'https://walmart.com/ip/12177684', in_stock: true },
  
  // Cuisinart Kettle
  { id: 'o2-amazon', product_id: '2', retailer_id: 'amazon', price: 69.95, currency: 'USD', url: 'https://amazon.com/dp/B003KYSLNQ', in_stock: true },
  { id: 'o2-walmart', product_id: '2', retailer_id: 'walmart', price: 59.99, currency: 'USD', url: 'https://walmart.com/ip/14003449', in_stock: true },
  
  // Hydro Flask
  { id: 'o3-amazon', product_id: '3', retailer_id: 'amazon', price: 32.95, currency: 'USD', url: 'https://amazon.com/dp/B084FPVWQW', in_stock: true },
  { id: 'o3-walmart', product_id: '3', retailer_id: 'walmart', price: 34.95, currency: 'USD', url: 'https://walmart.com/ip/292682936', in_stock: true },
];

async function populateDatabase() {
  console.log('\n🚀 Populating Supabase with real product data...\n');
  console.log('='.repeat(70));
  
  let successCount = 0;
  let errorCount = 0;
  
  // Insert products one by one (to handle RLS)
  console.log('\n📦 Inserting products...\n');
  for (const product of realProducts) {
    const { data, error } = await supabase
      .from('products')
      .upsert([product], { onConflict: 'id' })
      .select();
    
    if (error) {
      console.log(`❌ Error inserting ${product.brand} ${product.title}`);
      console.log(`   Error: ${error.message}`);
      errorCount++;
    } else {
      console.log(`✅ ${product.brand} ${product.title.substring(0, 40)}...`);
      successCount++;
    }
  }
  
  console.log(`\n📊 Products: ${successCount} success, ${errorCount} errors`);
  
  // Insert offers
  console.log('\n💰 Inserting price offers...\n');
  successCount = 0;
  errorCount = 0;
  
  for (const offer of offers) {
    const offerData = {
      ...offer,
      fetched_at: new Date().toISOString()
    };
    
    const { data, error } = await supabase
      .from('offers')
      .upsert([offerData], { onConflict: 'id' })
      .select();
    
    if (error) {
      console.log(`❌ Error inserting offer ${offer.id}`);
      errorCount++;
    } else {
      successCount++;
      if (successCount % 4 === 0) {
        console.log(`✅ Inserted ${successCount} offers...`);
      }
    }
  }
  
  console.log(`\n📊 Offers: ${successCount} success, ${errorCount} errors`);
  
  // Summary
  console.log('\n' + '='.repeat(70));
  if (errorCount > 0) {
    console.log('\n⚠️  PARTIAL SUCCESS\n');
    console.log('Some data was inserted, but there were errors.');
    console.log('This is likely due to Row Level Security (RLS).\n');
    console.log('To fix:');
    console.log('1. Go to Supabase Dashboard');
    console.log('2. Authentication → Policies');
    console.log('3. Disable RLS or create policies for products/offers tables');
  } else {
    console.log('\n✅ SUCCESS!\n');
    console.log(`Inserted ${realProducts.length} products and ${offers.length} offers!`);
    console.log('\nYou can now view your data at:');
    console.log('http://localhost:3000');
  }
  console.log('='.repeat(70) + '\n');
}

populateDatabase().catch(console.error);
