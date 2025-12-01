# Quick Start Guide: Data Acquisition System

## Installation

1. **Install dependencies:**
```bash
cd web
npm install
```

2. **Install Playwright browser:**
```bash
npm run setup:playwright
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your API keys:
- Get Best Buy API key: https://developer.bestbuy.com
- Get Barcode Lookup API key: https://www.barcodelookup.com/api
- Set up Redis (see options below)

## Redis Setup Options

### Option 1: Local Redis (Easiest for development)
```bash
# macOS
brew install redis
brew services start redis

# The default REDIS_URL in .env.local will work
```

### Option 2: Upstash (Free serverless Redis)
1. Sign up at https://upstash.com
2. Create a Redis database
3. Copy the connection URL to `.env.local`

## Testing the System

```bash
npm run test:data
```

This will test:
- Web scrapers (Amazon, Walmart)
- Best Buy API
- Barcode Lookup API
- Data aggregator

## Usage

### 1. Start the development server
```bash
npm run dev
```

### 2. Use the APIs

**Scrape a product immediately:**
```bash
curl -X POST http://localhost:3000/api/scrape \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.amazon.com/dp/B08N5WRWNW"}'
```

**Queue a scrape job:**
```bash
curl -X POST http://localhost:3000/api/scrape/queue \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.walmart.com/ip/520468661"}'
```

**Search external APIs:**
```bash
curl http://localhost:3000/api/external-data?q=iphone
```

### 3. Run the background worker (in a separate terminal)
```bash
npm run worker
```

## What You Built

✅ **Web Scrapers**: Amazon, Walmart (easy to add more)  
✅ **API Integrations**: Best Buy, Barcode Lookup  
✅ **Job Queue**: BullMQ + Redis for background processing  
✅ **API Routes**: REST endpoints for scraping and data lookup  
✅ **Worker Process**: Handles queued scraping jobs  

## Next Steps

1. **Add database integration** to store scraped data
2. **Schedule recurring price updates** with cron jobs
3. **Build price history tracking**
4. **Add more retailer scrapers** (Target, eBay, etc.)
5. **Create Chrome extension** for crowdsourced data

See `DATA_ACQUISITION.md` for detailed documentation.
