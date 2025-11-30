import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import { removeFromWishlist, updateWishlistItem } from '../../../../lib/mock';

export async function DELETE(req: NextRequest, { params }: { params: { itemId: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const success = removeFromWishlist(session.user.name, params.itemId);
  
  if (!success) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }
  
  return NextResponse.json({ success: true });
}

export async function PATCH(req: NextRequest, { params }: { params: { itemId: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const body = await req.json();
  const { targetPrice, targetDate } = body;
  
  const item = updateWishlistItem(
    session.user.name,
    params.itemId,
    targetPrice ? parseFloat(targetPrice) : undefined,
    targetDate
  );
  
  if (!item) {
    return NextResponse.json({ error: 'Item not found' }, { status: 404 });
  }
  
  return NextResponse.json({ item });
}
