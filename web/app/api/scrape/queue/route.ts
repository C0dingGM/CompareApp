import { NextRequest, NextResponse } from 'next/server';
import { addScrapeJob } from '@/lib/workers/scrape-queue';

export async function POST(req: NextRequest) {
  try {
    const { url, productId, priority } = await req.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    const job = await addScrapeJob({
      url,
      productId,
      priority: priority || 10
    });

    return NextResponse.json({
      success: true,
      jobId: job.id,
      message: 'Scrape job queued successfully'
    });

  } catch (error: any) {
    console.error('Queue scrape API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
