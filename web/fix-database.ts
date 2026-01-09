import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  console.log('\n🔍 Checking database schema...\n');
  
  // Check existing products
  const { data: products } = await supabase
    .from('products')
    .select('id, brand, title')
    .limit(5);
  
  console.log('Current products:');
  products?.forEach(p => console.log(`   ${p.id}: ${p.brand} ${p.title}`));
  
  // Check existing offers
  const { data: offers } = await supabase
    .from('offers')
    .select('id, product_id, retailer_id, price')
    .limit(5);
  
  console.log('\nCurrent offers:');
  offers?.forEach(o => console.log(`   ${o.id}: product_id="${o.product_id}" retailer=${o.retailer_id} $${o.price}`));
  
  console.log('\n💡 Solution: Need to match existing ID format\n');
}

checkSchema();
