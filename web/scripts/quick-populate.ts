import { createClient } from '@supabase/supabase-js';

// Hardcode the credentials for this script
const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample products - just 5 to test
const products = [
  { id: 'p1', brand: 'Apple', title: 'AirPods Pro (2nd Generation)', category: 'Electronics' },
  { id: 'p2', brand: 'Sony', title: 'WH-1000XM5 Wireless Headphones', category: 'Electronics' },
  { id: 'p3', brand: 'Samsung', title: 'Galaxy Watch 6', category: 'Electronics' },
  { id: 'p4', brand: 'Ninja', title: 'Air Fryer Pro 4-in-1', category: 'Kitchen' },
  { id: 'p5', brand: 'Dyson', title: 'V15 Detect Cordless Vacuum', category: 'Home' },
];

const prices: Record<string, number> = {
  p1: 249.99,
  p2: 399.99,
  p3: 299.99,
  p4: 119.99,
  p5: 649.99,
};

async function populate() {
  console.log('\n🚀 Quick Database Population Test\n');
  
  // First, check if we can read
  console.log('1️⃣ Testing READ access...');
  const { data: existing, error: readError } = await supabase
    .from('products')
    .select('*')
    .limit(1);
  
  if (readError) {
    console.error('❌ Cannot read from database:', readError.message);
    console.log('\n📝 Action needed:');
    console.log('   Go to Supabase Dashboard:');
    console.log('   https://supabase.com/dashboard/project/kzyauvftvqfqhazpenos');
    console.log('   → Authentication → Policies → products table');
    console.log('   → Create policy: "Allow all" with: true (for all operations)');
    return;
  }
  
  console.log('✅ Read access OK!');
  console.log(`   Current products in DB: ${existing?.length || 0}`);
  
  // Try to insert one product
  console.log('\n2️⃣ Testing INSERT access...');
  const testProduct = products[0];
  const { error: insertError } = await supabase
    .from('products')
    .upsert([testProduct], { onConflict: 'id' });
  
  if (insertError) {
    console.error('❌ Cannot insert into database:', insertError.message);
    console.log('\n📝 This is likely due to Row Level Security (RLS)');
    console.log('   Solution: Disable RLS for the products table in Supabase Dashboard');
    console.log('   OR create an INSERT policy that allows anonymous users');
    return;
  }
  
  console.log('✅ Insert access OK!');
  
  // Insert all products
  console.log('\n3️⃣ Inserting all test products...');
  const { error: bulkError } = await supabase
    .from('products')
    .upsert(products, { onConflict: 'id' });
  
  if (bulkError) {
    console.error('❌ Error inserting products:', bulkError.message);
    return;
  }
  
  console.log(`✅ Inserted ${products.length} products`);
  
  // Create offers for each product
  console.log('\n4️⃣ Creating price offers...');
  const offers = products.flatMap(product => {
    const basePrice = prices[product.id];
    return ['Amazon', 'Walmart', 'Target', 'Best Buy'].map(retailer => ({
      id: `offer-${product.id}-${retailer.toLowerCase()}`,
      product_id: product.id,
      retailer_id: retailer.toLowerCase(),
      price: +(basePrice * (1 + Math.random() * 0.1 - 0.05)).toFixed(2),
      currency: 'USD',
      url: `https://${retailer.toLowerCase()}.com/product/${product.id}`,
      in_stock: Math.random() > 0.1,
      fetched_at: new Date().toISOString(),
    }));
  });
  
  const { error: offersError } = await supabase
    .from('offers')
    .upsert(offers, { onConflict: 'id' });
  
  if (offersError) {
    console.error('❌ Error inserting offers:', offersError.message);
  } else {
    console.log(`✅ Inserted ${offers.length} price offers`);
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✅ Database populated successfully!');
  console.log('\n📊 Summary:');
  console.log(`   Products: ${products.length}`);
  console.log(`   Offers: ${offers.length}`);
  console.log('\n🌐 View your data:');
  console.log('   http://localhost:3000');
  console.log('='.repeat(60) + '\n');
}

populate().catch(console.error);
