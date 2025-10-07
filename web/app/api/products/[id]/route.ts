import { NextRequest } from 'next/server';
import { getProductWithOffers } from '../../../../lib/mock';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const data = getProductWithOffers(params.id);
  if (!data) return new Response('Not found', { status: 404 });
  return new Response(JSON.stringify(data), { headers: { 'content-type': 'application/json' } });
}
