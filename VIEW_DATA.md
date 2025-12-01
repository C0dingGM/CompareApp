# Where to See Your Data

## 🎯 Visual Interface

I've created a beautiful test page where you can see data in real-time!

### Access it at:
```
http://localhost:3000/test-data
```

### Start the server:
```bash
cd web
npm run dev
```

Then open your browser to: **http://localhost:3000/test-data**

## What You'll See

### 📊 Interactive Test Page Features:

1. **Web Scraper Test Panel**
   - Input any URL
   - Click "Scrape URL" button
   - See results instantly with:
     - Product title
     - Price
     - Stock status
     - SKU/ASIN
     - Product images

2. **External API Test Panel**
   - Pre-configured search buttons (iPhone, MacBook, Laptop)
   - Shows results from Best Buy and Barcode Lookup
   - Formatted product cards with:
     - Product names
     - Prices
     - Sale indicators
     - SKUs and categories

3. **Results Display**
   - Beautiful cards for each product
   - Color-coded data (prices in green, sales in orange)
   - Expandable raw JSON view
   - Error messages if something goes wrong

4. **Setup Instructions**
   - Built-in guide showing what API keys you need
   - Links to documentation

## 🧪 Quick Test (Without API Keys)

Even without API keys, you can test the infrastructure:

1. Start server: `npm run dev`
2. Go to: http://localhost:3000/test-data
3. Enter URL: `https://example.com`
4. Click "Scrape URL"
5. You'll see an error "No scraper available" - **this proves the API is working!**

## 📡 With API Keys

Once you add API keys to `.env.local`:

1. Click "Search: iPhone" button
2. See real products from Best Buy instantly!
3. Full product data with prices, availability, etc.

## 🔍 Alternative Ways to View Data

### 1. Command Line Tests
```bash
cd web

# Test scraper
npx tsx test-simple-scrape.ts

# Full system test
npm run test:data
```

### 2. API Endpoints (curl)
```bash
# Test with curl
curl -X POST http://localhost:3000/api/scrape \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
  
# Test external APIs
curl "http://localhost:3000/api/external-data?q=iphone"
```

### 3. Browser DevTools
- Open http://localhost:3000/test-data
- Press F12 for DevTools
- Go to Network tab
- Click any button
- See the API responses

## 📁 Where Data is Stored (Future)

Currently, data is displayed but not saved. Next steps:

1. **Supabase Integration** - Save to database tables:
   - `products` table
   - `offers` table  
   - `price_history` table

2. **View in Supabase Dashboard**
   - Go to your Supabase project
   - Click "Table Editor"
   - See all scraped data

3. **Build Product Pages**
   - Display data on `/products`
   - Show price history charts
   - Compare across retailers

## 🚀 Next Steps

1. **See it now**: `npm run dev` → http://localhost:3000/test-data
2. **Add API keys** for real data (see QUICKSTART.md)
3. **Integrate with database** to persist data
4. **Build product comparison UI** to show side-by-side

The visual interface is ready to use right now! Just start the dev server.
