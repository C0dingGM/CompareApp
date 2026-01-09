import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProducts() {
  console.log('\n📊 Checking all products in database...\n');
  
  const { data: products, error } = await supabase
    .from('products')
    .select('id, brand, title')
    .order('id');
  
  if (error) {
    console.log('❌ Error:', error.message);
    return;
  }
  
  console.log(`Total products: ${products?.length || 0}\n`);
  
  const realProducts = products?.filter(p => 
    ['Sony', 'Apple', 'JBL', 'Logitech', 'Samsung', 'Fitbit', 'Manduka', 'Cuisinart', 'Hydro Flask'].includes(p.brand)
  ) || [];
  
  const mockProducts = products?.filter(p => 
    ['Acme', 'Zenith', 'EcoCo', 'Nimbus', 'Orbit', 'Pioneer', 'Nova', 'Atlas', 'Vertex', 'Lumina', 'Quanta', 'Summit', 'Terra', 'Volt', 'Breeze', 'Apex', 'Polar', 'Echo', 'Helio', 'Quantum', 'Sierra', 'Aurora'].includes(p.brand)
  ) || [];
  
  console.log('✅ REAL Products (keep these):');
  realProducts.forEach(p => console.log(`   [${p.id}] ${p.brand} - ${p.title.substring(0, 50)}...`));
  
  console.log('\n❌ MOCK Products (should remove):');
  mockProducts.forEach(p => console.log(`   [${p.id}] ${p.brand} - ${p.title.substring(0, 50)}...`));
  
  const mockIds = mockProducts.map(p => p.id);
  console.log('\n🔍 Mock IDs to delete:', mockIds.join(', '));
}

checkProducts();
