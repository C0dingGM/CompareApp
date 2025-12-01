# Data Acquisition System Setup Guide

This guide explains how to set up and use the data acquisition system for CompareApp.

## Components

### 1. Web Scrapers
- **Amazon Scraper**: Scrapes product data from Amazon.com
- **Walmart Scraper**: Scrapes product data from Walmart.com
- **Base Scraper**: Abstract class for building additional scrapers

### 2. API Clients
- **Best Buy API**: Official API integration for Best Buy products
- **Barcode Lookup API**: UPC/barcode to product information
- **Data Aggregator**: Combines data from multiple sources

### 3. Job Queue System
- **BullMQ + Redis**: Distributed job queue for background scraping
- **Worker**: Processes scrape jobs asynchronously

## Setup Instructions

### 1. Install Playwright Browsers
```bash
cd web
npx playwright install chromium
```

### 2. Set Up Redis (Choose one option)

**Option A: Local Redis (Development)**
```bash
# macOS
brew install redis
brew services start redis

# Ubuntu/Debian
sudo apt-get install redis-server
sudo systemctl start redis
```

**Option B: Upstash (Production/Serverless)**
1. Sign up at https://upstash.com
2. Create a Redis database
3. Copy the connection URL to `.env.local`

### 3. Get API Keys

**Best Buy API (Free)**
1. Sign up at https://developer.bestbuy.com
2. Create an application
3. Copy API key to `.env.local`

**Barcode Lookup API (Free tier available)**
1. Sign up at https://www.barcodelookup.com/api
2. Get your API key
3. Copy to `.env.local`

### 4. Configure Environment Variables

Create `.env.local`:
```bash
cp .env.example .env.local
```

Update with your keys:
```
BESTBUY_API_KEY=your_actual_key
BARCODE_LOOKUP_API_KEY=your_actual_key
REDIS_URL=redis://localhost:6379  # or Upstash URL
```

## API Endpoints

### 1. Immediate Scrape (Synchronous)
```bash
POST /api/scrape
{
  "url": "https://www.amazon.com/dp/B08N5WRWNW"
}
```

### 2. Queue Scrape Job (Asynchronous)
```bash
POST /api/scrape/queue
{
  "url": "https://www.walmart.com/ip/...",
  "productId": "optional-product-id",
  "priority": 5
}
```

### 3. External Data Lookup
```bash
# Search by query
GET /api/external-data?q=iphone

# Search by UPC
GET /api/external-data?upc=885909950805
```

## Running the Worker

### Development
```bash
cd web
npx tsx lib/workers/scrape-worker.ts
```

### Production (Process Manager)
```bash
# Using PM2
npm install -g pm2
pm2 start lib/workers/scrape-worker.ts --name scrape-worker --interpreter tsx

# Or add to package.json scripts:
"worker": "tsx lib/workers/scrape-worker.ts"
```

## Usage Examples

### Scraping a Product URL
```typescript
import { scrapeProductUrl } from '@/lib/scrapers';

const result = await scrapeProductUrl('https://www.amazon.com/dp/B08N5WRWNW');
console.log(result);
// {
//   title: "Product Name",
//   price: 299.99,
//   currency: "USD",
//   retailer: "Amazon",
//   inStock: true,
//   ...
// }
```

### Adding to Job Queue
```typescript
import { addScrapeJob } from '@/lib/workers/scrape-queue';

const job = await addScrapeJob({
  url: 'https://www.walmart.com/ip/...',
  priority: 10
});

console.log('Job ID:', job.id);
```

### Using API Clients
```typescript
import { BestBuyAPI, BarcodeLookupAPI } from '@/lib/api';

const bestbuy = new BestBuyAPI(process.env.BESTBUY_API_KEY!);
const products = await bestbuy.searchProducts('laptop');

const barcode = new BarcodeLookupAPI(process.env.BARCODE_LOOKUP_API_KEY!);
const product = await barcode.lookupBarcode('885909950805');
```

## Architecture

```
User Request
    ↓
Next.js API Route
    ↓
    ├─→ Immediate Scrape (Playwright)
    │   └─→ Return data directly
    │
    └─→ Queue Job (BullMQ)
        └─→ Redis Queue
            └─→ Worker Process
                └─→ Scraper/API
                    └─→ Save to DB
```

## Adding New Scrapers

1. Create new scraper class extending `BaseScraper`
2. Implement `getRetailerName()` and `scrapeProduct()`
3. Add to `getScraperForUrl()` in `lib/scrapers/index.ts`

Example:
```typescript
import { BaseScraper, ScrapedProduct } from './base-scraper';

export class TargetScraper extends BaseScraper {
  getRetailerName(): string {
    return 'Target';
  }

  async scrapeProduct(url: string): Promise<ScrapedProduct | null> {
    // Implementation
  }
}
```

## Best Practices

1. **Rate Limiting**: Scrapers use delays to avoid overwhelming servers
2. **Rotating User Agents**: Reduces detection risk
3. **Error Handling**: All scrapers return null on failure
4. **Job Retries**: Failed jobs retry 3 times with exponential backoff
5. **Concurrency**: Worker processes 3 jobs simultaneously
6. **API First**: Use official APIs when available before scraping

## Troubleshooting

**Playwright issues:**
```bash
npx playwright install --with-deps chromium
```

**Redis connection errors:**
- Check Redis is running: `redis-cli ping`
- Verify REDIS_URL in `.env.local`

**API rate limits:**
- Best Buy: 5 requests/second, 50,000/day
- Barcode Lookup: Free tier has limits
- Use job queue for bulk operations

## Next Steps

1. Integrate with Supabase database to store scraped data
2. Add cron jobs for automatic price updates
3. Implement price history tracking
4. Add more retailer scrapers (Target, eBay, etc.)
5. Build Chrome extension for crowdsourced data
