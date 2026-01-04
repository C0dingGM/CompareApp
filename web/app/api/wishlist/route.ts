import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../lib/auth';
import { getUserWishlist, addToWishlist, getProductWithOffers } from '../../../lib/mock';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const wishlistItems = getUserWishlist(session.user.name);
  const items = wishlistItems.map(item => {
    const productData = getProductWithOffers(item.productId);
    
    // Get current price from offers first, then fall back to latest price history
    let currentPrice = productData?.offers[0]?.price || null;
    
    if (!currentPrice && productData?.price_history && productData.price_history.length > 0) {
      // Sort by timestamp descending to get the latest price
      const sortedHistory = [...productData.price_history].sort((a, b) => 
        new Date(b.ts).getTime() - new Date(a.ts).getTime()
      );
      currentPrice = sortedHistory[0].price;
    }
    
    return {
      ...item,
      product: productData?.product || null,
      currentPrice
    };
  });
  
  return NextResponse.json({ items });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  const body = await req.json();
  const { productId, targetPrice, targetDate } = body;
  
  if (!productId) {
    return NextResponse.json({ error: 'Product ID required' }, { status: 400 });
  }
  
  const item = addToWishlist(
    session.user.name,
    productId,
    targetPrice ? parseFloat(targetPrice) : undefined,
    targetDate
  );
  
  return NextResponse.json({ item });
}
