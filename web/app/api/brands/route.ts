import { NextRequest } from 'next/server';
import { getBrands, getCategories } from '../../../lib/mock';

export async function GET(_req: NextRequest) {
  const items = getBrands();
  const categories = getCategories();
  return new Response(JSON.stringify({ items, categories }), { headers: { 'content-type': 'application/json' } });
}
