import { Queue, Worker, Job } from 'bullmq';
import Redis from 'ioredis';

export interface ScrapeJobData {
  url: string;
  productId?: string;
  retailer?: string;
  priority?: number;
}

export interface ScrapeJobResult {
  success: boolean;
  data?: any;
  error?: string;
}

const connection = new Redis(
  process.env.REDIS_URL || 'redis://localhost:6379',
  {
    maxRetriesPerRequest: null
  }
);

export const scrapeQueue = new Queue<ScrapeJobData>('product-scraping', {
  connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 5000
    },
    removeOnComplete: {
      count: 100,
      age: 24 * 3600
    },
    removeOnFail: {
      count: 500
    }
  }
});

export async function addScrapeJob(data: ScrapeJobData): Promise<Job<ScrapeJobData>> {
  return await scrapeQueue.add('scrape-product', data, {
    priority: data.priority || 10
  });
}

export async function createScrapeWorker(
  processor: (job: Job<ScrapeJobData>) => Promise<ScrapeJobResult>
) {
  const worker = new Worker<ScrapeJobData, ScrapeJobResult>(
    'product-scraping',
    processor,
    {
      connection,
      concurrency: 3,
      limiter: {
        max: 10,
        duration: 60000
      }
    }
  );

  worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job ${job?.id} failed:`, err.message);
  });

  return worker;
}
