import { NextRequest, NextResponse } from 'next/server';
import { DataAggregator } from '@/lib/api';

const aggregator = new DataAggregator({
  bestbuy: {
    apiKey: process.env.BESTBUY_API_KEY || ''
  },
  barcodeLookup: {
    apiKey: process.env.BARCODE_LOOKUP_API_KEY || ''
  }
});

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('q');
    const upc = searchParams.get('upc');

    if (!query && !upc) {
      return NextResponse.json(
        { error: 'Query (q) or UPC parameter is required' },
        { status: 400 }
      );
    }

    let results;
    
    if (upc) {
      results = await aggregator.lookupByUPC(upc);
    } else {
      results = await aggregator.searchAllSources(query!);
    }

    return NextResponse.json({
      success: true,
      data: results
    });

  } catch (error: any) {
    console.error('External data API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
