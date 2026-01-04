import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  // Get product
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single();

  if (productError || !product) {
    return new Response('Not found', { status: 404 });
  }

  // Get offers
  const { data: offers } = await supabase
    .from('offers')
    .select('*')
    .eq('product_id', params.id);

  // Get price history
  const { data: price_history } = await supabase
    .from('price_history')
    .select('*')
    .eq('product_id', params.id)
    .order('ts', { ascending: true });

  return new Response(JSON.stringify({ 
    product, 
    offers: offers || [], 
    price_history: price_history || [] 
  }), { 
    headers: { 'content-type': 'application/json' } 
  });
}
