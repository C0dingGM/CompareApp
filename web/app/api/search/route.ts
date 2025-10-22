import { NextRequest } from 'next/server';
import { mockSearch } from '../../../lib/mock';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const brand = searchParams.get('brand') || undefined;
  const items = mockSearch(q, brand);
  return new Response(JSON.stringify({ items }), { headers: { 'content-type': 'application/json' } });
}
