import { NextRequest, NextResponse } from 'next/server';
import { scrapeProductUrl } from '@/lib/scrapers';

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    const result = await scrapeProductUrl(url);

    if (!result) {
      return NextResponse.json(
        { error: 'Failed to scrape product from this URL' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error: any) {
    console.error('Scrape API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
