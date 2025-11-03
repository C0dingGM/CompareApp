import { NextRequest } from 'next/server';
import { mockSearch } from '../../../lib/mock';
import { getCategories } from '../../../lib/mock';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const brand = searchParams.get('brand') || undefined;
  const category = searchParams.get('category') || undefined;
  const items = mockSearch(q, brand, category);
  return new Response(JSON.stringify({ items }), { headers: { 'content-type': 'application/json' } });
}
