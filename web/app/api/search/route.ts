import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const brand = searchParams.get('brand') || undefined;
  const category = searchParams.get('category') || undefined;

  let query = supabase.from('products').select('*');

  // Filter by search query
  if (q) {
    query = query.or(`title.ilike.%${q}%,brand.ilike.%${q}%`);
  }

  // Filter by brand
  if (brand) {
    query = query.eq('brand', brand);
  }

  // Filter by category
  if (category) {
    query = query.eq('category', category);
  }

  const { data: items, error } = await query;

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'content-type': 'application/json' } 
    });
  }

  return new Response(JSON.stringify({ items: items || [] }), { 
    headers: { 'content-type': 'application/json' } 
  });
}
