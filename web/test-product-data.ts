import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testProductData() {
  console.log('\n🔍 Testing product data for charts...\n');
  
  // Get first product
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .limit(3);
  
  if (!products || products.length === 0) {
    console.log('❌ No products found');
    return;
  }
  
  for (const product of products) {
    console.log(`\n📦 Product: ${product.brand} - ${product.title}`);
    console.log(`   ID: ${product.id}`);
    
    // Check offers
    const { data: offers } = await supabase
      .from('offers')
      .select('*')
      .eq('product_id', product.id);
    
    console.log(`   Offers: ${offers?.length || 0}`);
    if (offers && offers.length > 0) {
      offers.forEach(o => console.log(`     - ${o.retailer_id}: $${o.price}`));
    }
    
    // Check price history
    const { data: history } = await supabase
      .from('price_history')
      .select('*')
      .eq('product_id', product.id)
      .order('ts', { ascending: true });
    
    console.log(`   Price History: ${history?.length || 0} records`);
    if (!history || history.length === 0) {
      console.log('     ⚠️  NO PRICE HISTORY - This is why chart is empty!');
    } else {
      console.log(`     First: ${history[0].ts} - $${history[0].price}`);
      console.log(`     Last: ${history[history.length - 1].ts} - $${history[history.length - 1].price}`);
    }
  }
  
  console.log('\n💡 SOLUTION:');
  console.log('   Products need price history data for charts to show.');
  console.log('   If price_history is empty, charts will be blank.\n');
}

testProductData();
