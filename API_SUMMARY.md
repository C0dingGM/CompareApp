# API Summary - What You're Using

## 🔌 External APIs Integrated

### 1. **Best Buy API** (Optional - Free)
- **What it does**: Search electronics products from Best Buy
- **Data provided**: Product name, prices, SKU, availability, images
- **Cost**: FREE (up to 50,000 requests/day)
- **Rate limit**: 5 requests per second
- **Sign up**: https://developer.bestbuy.com
- **Required**: No (gracefully handles missing key)

**Your implementation**: `web/lib/api/bestbuy.ts`

### 2. **Barcode Lookup API** (Optional - Free tier)
- **What it does**: Convert UPC/barcode to product information
- **Data provided**: Product name, brand, category, manufacturer, images
- **Cost**: FREE tier available (100 requests/month), paid plans from $10/month
- **Sign up**: https://www.barcodelookup.com/api
- **Required**: No (gracefully handles missing key)

**Your implementation**: `web/lib/api/barcode-lookup.ts`

## 🌐 Internal APIs (Your Next.js Routes)

### 1. **POST /api/scrape**
- **What it does**: Immediately scrape a product URL
- **Input**: `{"url": "https://..."}`
- **Output**: Product data (title, price, retailer, stock, etc.)
- **Uses**: Playwright web scraper
- **File**: `web/app/api/scrape/route.ts`

### 2. **POST /api/scrape/queue**
- **What it does**: Queue a scraping job for background processing
- **Input**: `{"url": "https://...", "priority": 10}`
- **Output**: Job ID
- **Uses**: BullMQ + Redis
- **File**: `web/app/api/scrape/queue/route.ts`

### 3. **GET /api/external-data**
- **What it does**: Search multiple external APIs at once
- **Input**: `?q=search_term` or `?upc=123456`
- **Output**: Combined results from Best Buy + Barcode Lookup
- **Uses**: DataAggregator class
- **File**: `web/app/api/external-data/route.ts`

## 🤖 Web Scrapers (No External API)

### 1. **Amazon Scraper**
- **What it does**: Scrapes product pages from Amazon.com
- **Technology**: Playwright (headless Chromium)
- **No API key needed**: Uses web scraping
- **Limitations**: Anti-bot protection, may need proxies at scale
- **File**: `web/lib/scrapers/amazon-scraper.ts`

### 2. **Walmart Scraper**
- **What it does**: Scrapes product pages from Walmart.com
- **Technology**: Playwright (headless Chromium)
- **No API key needed**: Uses web scraping
- **Limitations**: Anti-bot protection, may need proxies at scale
- **File**: `web/lib/scrapers/walmart-scraper.ts`

## 📊 API Usage Summary

| API/Service | Status | Cost | API Key Required? | What You Get |
|-------------|--------|------|-------------------|--------------|
| **Best Buy API** | ✅ Integrated | Free | Optional | Electronics pricing & availability |
| **Barcode Lookup** | ✅ Integrated | Free tier | Optional | Product info from UPC codes |
| **Amazon Scraper** | ✅ Integrated | Free | No | Product data from Amazon |
| **Walmart Scraper** | ✅ Integrated | Free | No | Product data from Walmart |
| **Your Next.js APIs** | ✅ Integrated | Free | No | Internal endpoints |
| **Redis** | ⏳ Setup needed | Free (local) | No | Job queue for background tasks |

## 🔑 Which APIs Need Keys?

**Currently NONE are required!** The system works without any API keys:

- ✅ **Scrapers work** without keys (Amazon, Walmart)
- ✅ **APIs gracefully degrade** if keys missing (returns empty arrays)
- ✅ **All infrastructure works** without external services

**To get REAL external data**, add keys to `.env.local`:
```bash
BESTBUY_API_KEY=your_key_here
BARCODE_LOOKUP_API_KEY=your_key_here
```

## 🎯 Recommended Setup

### For MVP/Testing:
```bash
# Just use the scrapers - no API keys needed!
npm run dev
# Visit http://localhost:3000/test-data
# Test with example.com or any URL
```

### For Production/Real Data:
1. **Get Best Buy API key** (free, instant approval)
   - Reliable product data
   - No anti-bot issues
   - 50k requests/day free

2. **Optional: Barcode Lookup** (if you need UPC functionality)
   - Free tier: 100 requests/month
   - Useful for barcode scanning features

3. **Optional: Proxy Service** (for large-scale scraping)
   - Bright Data or ScraperAPI
   - Only needed if scraping thousands of products daily

## 🚀 What's Actually Running

**Right now, your system uses:**
1. ✅ Playwright (local browser automation)
2. ✅ Next.js API routes (your own server)
3. ⏳ BullMQ + Redis (when you set up Redis)
4. 📦 Optional: Best Buy + Barcode Lookup (when keys added)

**No external dependencies required to start!**

## 💡 Current State

```
✅ Scrapers: Working (no keys needed)
✅ Internal APIs: Working (no keys needed)
⚠️  External APIs: Ready but need keys for data
⏳ Redis Queue: Needs local Redis or Upstash
```

**Bottom line**: You're using **zero paid external APIs**. Everything is either free or self-hosted! 🎉
