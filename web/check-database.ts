import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkDatabase() {
  console.log('\n📊 Checking database contents...\n');
  
  // Check products
  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('*')
    .limit(10);
  
  if (prodError) {
    console.log('❌ Cannot read products:', prodError.message);
  } else {
    console.log(`✅ Products in database: ${products?.length || 0}`);
    products?.forEach(p => {
      console.log(`   - [${p.id}] ${p.brand} ${p.title?.substring(0, 40)}...`);
    });
  }
  
  // Check offers
  const { data: offers, error: offerError } = await supabase
    .from('offers')
    .select('*')
    .limit(10);
  
  if (offerError) {
    console.log('\n❌ Cannot read offers:', offerError.message);
  } else {
    console.log(`\n✅ Offers in database: ${offers?.length || 0}`);
    offers?.slice(0, 5).forEach(o => {
      console.log(`   - [${o.product_id}] ${o.retailer_id}: $${o.price}`);
    });
    if (offers && offers.length > 5) {
      console.log(`   ... and ${offers.length - 5} more`);
    }
  }
  
  console.log('\n');
}

checkDatabase();
