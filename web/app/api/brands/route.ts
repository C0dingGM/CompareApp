import { NextRequest } from 'next/server';
import { getBrands } from '../../../lib/mock';

export async function GET(_req: NextRequest) {
  const items = getBrands();
  return new Response(JSON.stringify({ items }), { headers: { 'content-type': 'application/json' } });
}
