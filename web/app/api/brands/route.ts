import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(_req: NextRequest) {
  // Get unique brands
  const { data: products } = await supabase
    .from('products')
    .select('brand, category');

  const brands = [...new Set(products?.map(p => p.brand) || [])];
  const categories = [...new Set(products?.map(p => p.category).filter(Boolean) || [])];

  return new Response(JSON.stringify({ 
    items: brands, 
    categories 
  }), { 
    headers: { 'content-type': 'application/json' } 
  });
}
