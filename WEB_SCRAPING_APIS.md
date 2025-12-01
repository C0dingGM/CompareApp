# Web Scraping & Data APIs - Quick Reference

## 🔌 APIs Actually Integrated (In Your Code)

### 1. **Best Buy API** 
**Official Product API**

- 📦 **What it does**: Search and retrieve electronics product data from Best Buy stores
- 💰 **Cost**: FREE (50,000 requests/day, 5 requests/second)
- 🔑 **Sign up**: https://developer.bestbuy.com
- 📊 **Data provided**:
  - Product name & description
  - Regular price & sale price
  - SKU & UPC codes
  - Stock availability (in-store & online)
  - Product images
  - Manufacturer info
- ✅ **Best for**: Electronics, appliances, tech products
- ⚡ **Speed**: Instant API responses
- 📍 **Your file**: `web/lib/api/bestbuy.ts`

**Example Response:**
```json
{
  "sku": 6428324,
  "name": "Apple - AirPods Pro",
  "salePrice": 249.99,
  "regularPrice": 249.99,
  "onSale": false,
  "url": "https://www.bestbuy.com/...",
  "image": "https://...",
  "manufacturer": "Apple",
  "upc": "190199246850",
  "onlineAvailability": true
}
```

---

### 2. **Barcode Lookup API**
**UPC/Barcode to Product Database**

- 📦 **What it does**: Convert UPC/EAN barcodes to product information
- 💰 **Cost**: FREE tier (100 requests/month), Paid: $10-50/month
- 🔑 **Sign up**: https://www.barcodelookup.com/api
- 📊 **Data provided**:
  - Product name & title
  - Brand & manufacturer
  - Category
  - Model & MPN
  - ASIN (Amazon ID)
  - Product images
  - Store listings with prices
- ✅ **Best for**: Barcode scanning apps, price lookup, product identification
- ⚡ **Speed**: Fast (cached database)
- 📍 **Your file**: `web/lib/api/barcode-lookup.ts`

**Example Response:**
```json
{
  "barcode_number": "012000161155",
  "product_name": "Coca-Cola Classic",
  "brand": "Coca-Cola",
  "manufacturer": "The Coca-Cola Company",
  "category": "Beverages > Soft Drinks",
  "images": ["https://..."],
  "stores": [
    {
      "name": "Walmart",
      "price": "$5.98",
      "link": "https://..."
    }
  ]
}
```

---

## 🤖 Web Scrapers (Not APIs - Direct Scraping)

### 3. **Playwright**
**Browser Automation Library**

- 📦 **What it does**: Controls real browsers (Chrome, Firefox, Safari) to scrape websites
- 💰 **Cost**: FREE (open source)
- 🔑 **Install**: `npm install playwright`
- 📊 **Capabilities**:
  - Load any website
  - Execute JavaScript
  - Handle dynamic content
  - Take screenshots
  - Interact with pages (click, scroll, type)
- ✅ **Best for**: Scraping JavaScript-heavy sites, SPAs, dynamic content
- ⚡ **Speed**: Slower (loads full browser)
- 📍 **Your files**: All scrapers use this (`web/lib/scrapers/*.ts`)

**Your Usage:**
```typescript
// Amazon Scraper
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://amazon.com/product');
const title = await page.$eval('#productTitle', el => el.textContent);
```

---

### 4. **Axios**
**HTTP Request Library**

- 📦 **What it does**: Makes HTTP requests to fetch web pages and API data
- 💰 **Cost**: FREE (open source)
- 🔑 **Install**: `npm install axios`
- 📊 **Capabilities**:
  - GET/POST requests
  - Custom headers
  - Timeout handling
  - Response parsing
- ✅ **Best for**: API calls, simple page fetching, robots.txt
- ⚡ **Speed**: Very fast (no browser needed)
- 📍 **Your usage**: API clients, robots.txt parser

**Your Usage:**
```typescript
// Fetching robots.txt
const response = await axios.get('https://example.com/robots.txt');
```

---

## 📊 Comparison Table

| API/Tool | Type | Cost | Speed | Best Use Case |
|----------|------|------|-------|---------------|
| **Best Buy API** | Official API | FREE | ⚡⚡⚡ Fast | Electronics data |
| **Barcode Lookup** | Database API | FREE tier | ⚡⚡⚡ Fast | UPC → Product info |
| **Playwright** | Browser automation | FREE | ⚡ Slower | Complex scraping |
| **Axios** | HTTP client | FREE | ⚡⚡⚡ Fast | Simple requests |

---

## 🎯 When to Use Each

### Use **Best Buy API** when:
- ✅ You need electronics product data
- ✅ You want instant, reliable data
- ✅ You need stock availability
- ✅ You want legal, official data

### Use **Barcode Lookup API** when:
- ✅ You have a UPC/barcode
- ✅ You need product identification
- ✅ You want cross-retailer pricing
- ✅ Building barcode scanner features

### Use **Playwright** when:
- ✅ No API exists for the retailer
- ✅ Website has dynamic JavaScript content
- ✅ You need to interact with pages
- ✅ APIs are too expensive/limited

### Use **Axios** when:
- ✅ Making API calls
- ✅ Fetching simple HTML pages
- ✅ Checking robots.txt
- ✅ Speed is critical

---

## 💡 Your Current Setup

```typescript
// Priority order for data acquisition:

1. Check Best Buy API first (if electronics)
   ↓ Fast, reliable, legal

2. Check Barcode Lookup (if have UPC)
   ↓ Fast product identification

3. Use web scraper as last resort
   ↓ Works but slower, needs anti-ban

4. Axios for supporting tasks
   ↓ Robots.txt, simple requests
```

---

## 🚀 Example Usage (Your Code)

### Best Buy API:
```typescript
import { BestBuyAPI } from '@/lib/api/bestbuy';

const bestbuy = new BestBuyAPI(process.env.BESTBUY_API_KEY!);
const products = await bestbuy.searchProducts('laptop');
// Returns: Array of product objects
```

### Barcode Lookup:
```typescript
import { BarcodeLookupAPI } from '@/lib/api/barcode-lookup';

const barcode = new BarcodeLookupAPI(process.env.BARCODE_LOOKUP_API_KEY!);
const product = await barcode.lookupBarcode('012000161155');
// Returns: Product details
```

### Playwright Scraper:
```typescript
import { scrapeProductUrl } from '@/lib/scrapers';

const product = await scrapeProductUrl('https://www.amazon.com/dp/B08N5WRWNW');
// Returns: Scraped product data
```

---

## 📈 Rate Limits & Quotas

| API | Free Tier Limit | Paid Options |
|-----|-----------------|--------------|
| **Best Buy** | 50,000/day, 5/sec | Free forever |
| **Barcode Lookup** | 100/month | $10-50/month |
| **Playwright** | Unlimited | N/A (self-hosted) |
| **Axios** | Unlimited | N/A (self-hosted) |

---

## ✨ Summary

You're using:
- **2 External APIs** (Best Buy, Barcode Lookup) - For reliable data
- **2 Libraries** (Playwright, Axios) - For scraping & requests

**All integrated and working in your system!** 🎉

See `API_SUMMARY.md` for more details.
