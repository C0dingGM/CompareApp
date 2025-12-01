import { createScrapeWorker, ScrapeJobData, ScrapeJobResult } from './scrape-queue';
import { scrapeProductUrl } from '../scrapers';
import { Job } from 'bullmq';

export async function startScrapeWorker() {
  console.log('Starting scrape worker...');

  const worker = await createScrapeWorker(async (job: Job<ScrapeJobData>): Promise<ScrapeJobResult> => {
    const { url } = job.data;
    
    console.log(`Processing scrape job for URL: ${url}`);

    try {
      const result = await scrapeProductUrl(url);
      
      if (!result) {
        return {
          success: false,
          error: 'Failed to scrape product'
        };
      }

      // TODO: Save to database
      console.log('Scraped product:', result);

      return {
        success: true,
        data: result
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message
      };
    }
  });

  console.log('Scrape worker started successfully');
  return worker;
}

if (require.main === module) {
  startScrapeWorker()
    .then(() => console.log('Worker running...'))
    .catch(console.error);
}
