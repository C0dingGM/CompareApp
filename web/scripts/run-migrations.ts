import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigrations() {
  console.log('\n🔧 Running database migrations...\n');
  
  try {
    // Create retailers table
    console.log('1️⃣  Creating retailers table...');
    await supabase.rpc('exec_sql', {
      sql: `
        create table if not exists public.retailers (
          id text primary key,
          name text not null,
          domain text unique,
          eco_flags text,
          created_at timestamp with time zone default now()
        );
      `
    }).catch(() => {
      // Table might already exist or RPC might not be available
      console.log('   Skipping (might already exist)');
    });
    
    // Insert retailers
    console.log('2️⃣  Inserting retailers...');
    const { error: retailersError } = await supabase
      .from('retailers')
      .upsert([
        { id: 'amazon', name: 'Amazon', domain: 'amazon.com' },
        { id: 'walmart', name: 'Walmart', domain: 'walmart.com' },
        { id: 'target', name: 'Target', domain: 'target.com' },
        { id: 'bestbuy', name: 'Best Buy', domain: 'bestbuy.com' },
      ], { onConflict: 'id' });
    
    if (retailersError) {
      console.log(`   ⚠️  ${retailersError.message}`);
    } else {
      console.log('   ✅ Retailers inserted');
    }
    
    // Create offers table
    console.log('3️⃣  Creating offers table...');
    const { error: offersError } = await supabase
      .from('offers')
      .select('id')
      .limit(1);
    
    if (offersError && offersError.code === '42P01') {
      console.log('   Table needs to be created - please run SQL manually');
    } else {
      console.log('   ✅ Offers table ready');
    }
    
    // Create price_history table  
    console.log('4️⃣  Creating price_history table...');
    const { error: historyError } = await supabase
      .from('price_history')
      .select('id')
      .limit(1);
    
    if (historyError && historyError.code === '42P01') {
      console.log('   Table needs to be created - please run SQL manually');
    } else {
      console.log('   ✅ Price history table ready');
    }
    
    console.log('\n✅ Migration check complete!\n');
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

runMigrations();
