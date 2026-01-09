import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kzyauvftvqfqhazpenos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6eWF1dmZ0dnFmcWhhenBlbm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNDg4NzEsImV4cCI6MjA3NDkyNDg3MX0.oq8p6WKir6UyxIbZgAVQ3S13ZM_666y3QnnyrpKGc6Y';

const supabase = createClient(supabaseUrl, supabaseKey);

async function findIssues() {
  console.log('\n🔍 Checking for duplicates and issues...\n');
  
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('brand', { ascending: true });
  
  if (!products) {
    console.log('❌ No products found');
    return;
  }
  
  // Find AirPods Pro duplicates
  const airpods = products.filter(p => p.title.includes('AirPods Pro'));
  console.log('🎧 AirPods Pro products found:');
  airpods.forEach(p => {
    console.log(`   ID: ${p.id} | Brand: ${p.brand} | Title: ${p.title}`);
  });
  
  // Find Helio SmartBulb
  const helio = products.filter(p => p.title.includes('Helio') || p.title.includes('Smart Bulb'));
  console.log('\n💡 Helio/Smart Bulb products:');
  helio.forEach(p => {
    console.log(`   ID: ${p.id} | Brand: ${p.brand} | Title: ${p.title}`);
  });
  
  // Check offers for Helio
  if (helio.length > 0) {
    for (const h of helio) {
      const { data: offers } = await supabase
        .from('offers')
        .select('*')
        .eq('product_id', h.id);
      console.log(`   → Offers for ID ${h.id}: ${offers?.length || 0}`);
    }
  }
  
  // List all unique product titles
  console.log('\n📊 All Products Summary:');
  const grouped = new Map<string, string[]>();
  products.forEach(p => {
    const title = p.title;
    if (!grouped.has(title)) {
      grouped.set(title, []);
    }
    grouped.get(title)!.push(p.id);
  });
  
  console.log('\nDuplicates (same title, multiple IDs):');
  grouped.forEach((ids, title) => {
    if (ids.length > 1) {
      console.log(`   "${title}": IDs [${ids.join(', ')}]`);
    }
  });
  
  console.log('\n💡 Recommendations:');
  console.log('   1. Keep prod-1 (has offers), delete 21, p1');
  console.log('   2. Add offers for Helio SmartBulb (ID 22)');
}

findIssues();
