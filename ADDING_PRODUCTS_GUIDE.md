# 📦 Ways to Add More Products to CompareApp

## Method 1: Run the Script Again (Easiest)

### Quick Add More Products
You can modify and re-run the script we just used:

```bash
cd web
npx tsx scripts/add-more-products.ts
```

**To add different products:**
1. Open `web/scripts/add-more-products.ts`
2. Change the product IDs (e.g., `prod-62`, `prod-63`, etc.)
3. Update product names, brands, categories, UPCs, and prices
4. Run the script again

**Example - Adding 5 more products:**
```typescript
const newProducts = [
  {
    id: 'prod-62',
    brand: 'Apple',
    title: 'MacBook Air M3',
    category: 'Electronics',
    upc: '195949110931'
  },
  {
    id: 'prod-63',
    brand: 'Samsung',
    title: 'Galaxy S24 Ultra',
    category: 'Electronics',
    upc: '887276792286'
  },
  // ... add more
];
```

---

## Method 2: Use Supabase SQL Editor (Direct Database)

### Add Products via SQL
1. Go to [Supabase Dashboard](https://supabase.com/dashboard/project/kzyauvftvqfqhazpenos/sql/new)
2. Run SQL commands:

```sql
-- Add a product
INSERT INTO products (id, brand, title, category, upc) VALUES
  ('prod-100', 'Sony', 'PlayStation 5', 'Electronics', '711719556534');

-- Add offers for that product
INSERT INTO offers (id, product_id, retailer_id, price, currency, in_stock, url, fetched_at) VALUES
  ('o-prod-100-amazon', 'prod-100', 'amazon', 499.99, 'USD', true, 'https://amazon.com', NOW()),
  ('o-prod-100-walmart', 'prod-100', 'walmart', 499.99, 'USD', true, 'https://walmart.com', NOW()),
  ('o-prod-100-target', 'prod-100', 'target', 499.99, 'USD', true, 'https://target.com', NOW()),
  ('o-prod-100-bestbuy', 'prod-100', 'bestbuy', 499.99, 'USD', true, 'https://bestbuy.com', NOW());
```

**Pros:**
- ✅ Direct control over data
- ✅ Can fix/update existing products easily
- ✅ Good for quick additions

**Cons:**
- ❌ No price history automatically generated
- ❌ More manual work

---

## Method 3: Create a Product Upload Form (Build a Feature)

### Add an Admin Panel
Create a new page in your app where you can add products through a UI:

**Create:** `web/app/admin/add-product/page.tsx`
```typescript
'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function AddProductPage() {
  const [product, setProduct] = useState({
    brand: '',
    title: '',
    category: 'Electronics',
    upc: '',
  });
  
  const [offers, setOffers] = useState([
    { retailer: 'amazon', price: '' },
    { retailer: 'walmart', price: '' },
    { retailer: 'target', price: '' },
    { retailer: 'bestbuy', price: '' },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    
    // Generate product ID
    const productId = `prod-${Date.now()}`;
    
    // Insert product
    const { error: productError } = await supabase
      .from('products')
      .insert([{ id: productId, ...product }]);
    
    if (productError) {
      alert('Error adding product: ' + productError.message);
      return;
    }
    
    // Insert offers
    const offersData = offers
      .filter(o => o.price)
      .map(o => ({
        id: `o-${productId}-${o.retailer}`,
        product_id: productId,
        retailer_id: o.retailer,
        price: parseFloat(o.price),
        currency: 'USD',
        in_stock: true,
        url: `https://${o.retailer}.com`,
        fetched_at: new Date().toISOString()
      }));
    
    const { error: offersError } = await supabase
      .from('offers')
      .insert(offersData);
    
    if (offersError) {
      alert('Error adding offers: ' + offersError.message);
      return;
    }
    
    alert('Product added successfully!');
    // Reset form
    setProduct({ brand: '', title: '', category: 'Electronics', upc: '' });
    setOffers([
      { retailer: 'amazon', price: '' },
      { retailer: 'walmart', price: '' },
      { retailer: 'target', price: '' },
      { retailer: 'bestbuy', price: '' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Brand</label>
          <input
            type="text"
            value={product.brand}
            onChange={(e) => setProduct({...product, brand: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Product Title</label>
          <input
            type="text"
            value={product.title}
            onChange={(e) => setProduct({...product, title: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={product.category}
            onChange={(e) => setProduct({...product, category: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="Electronics">Electronics</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Home">Home</option>
            <option value="Fitness">Fitness</option>
            <option value="Outdoors">Outdoors</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">UPC Code</label>
          <input
            type="text"
            value={product.upc}
            onChange={(e) => setProduct({...product, upc: e.target.value})}
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Optional"
          />
        </div>
        
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Prices at Retailers</h2>
          {offers.map((offer, idx) => (
            <div key={offer.retailer} className="flex items-center gap-4 mb-3">
              <span className="w-24 capitalize font-medium">{offer.retailer}</span>
              <input
                type="number"
                step="0.01"
                value={offer.price}
                onChange={(e) => {
                  const newOffers = [...offers];
                  newOffers[idx].price = e.target.value;
                  setOffers(newOffers);
                }}
                className="flex-1 px-4 py-2 border rounded-lg"
                placeholder="Price (e.g., 99.99)"
              />
            </div>
          ))}
        </div>
        
        <button
          type="submit"
          className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
```

**Access it at:** `http://localhost:3000/admin/add-product`

**Pros:**
- ✅ User-friendly interface
- ✅ No coding knowledge needed to add products
- ✅ Can be used by non-technical team members

---

## Method 4: Import from CSV File

### Bulk Import Many Products
Create a script to import products from a CSV file:

**Create:** `web/scripts/import-from-csv.ts`
```typescript
import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as csv from 'csv-parse/sync';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function importFromCSV(filePath: string) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const records = csv.parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });

  console.log(`📦 Importing ${records.length} products...\n`);

  for (const record of records) {
    const productId = `prod-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Insert product
    const { error: productError } = await supabase
      .from('products')
      .insert([{
        id: productId,
        brand: record.brand,
        title: record.title,
        category: record.category || 'Electronics',
        upc: record.upc || null
      }]);

    if (productError) {
      console.error(`❌ Error inserting ${record.title}:`, productError);
      continue;
    }

    // Insert offers
    const offers = [];
    if (record.amazon_price) offers.push({ retailer: 'amazon', price: parseFloat(record.amazon_price) });
    if (record.walmart_price) offers.push({ retailer: 'walmart', price: parseFloat(record.walmart_price) });
    if (record.target_price) offers.push({ retailer: 'target', price: parseFloat(record.target_price) });
    if (record.bestbuy_price) offers.push({ retailer: 'bestbuy', price: parseFloat(record.bestbuy_price) });

    const offersData = offers.map(o => ({
      id: `o-${productId}-${o.retailer}`,
      product_id: productId,
      retailer_id: o.retailer,
      price: o.price,
      currency: 'USD',
      in_stock: true,
      url: `https://${o.retailer}.com`,
      fetched_at: new Date().toISOString()
    }));

    const { error: offersError } = await supabase
      .from('offers')
      .insert(offersData);

    if (offersError) {
      console.error(`❌ Error inserting offers for ${record.title}:`, offersError);
    } else {
      console.log(`✅ Added: ${record.title}`);
    }
  }

  console.log('\n🎉 Import complete!');
}

// Run: npx tsx scripts/import-from-csv.ts products.csv
importFromCSV(process.argv[2] || 'products.csv');
```

**Create a CSV file:** `web/products.csv`
```csv
brand,title,category,upc,amazon_price,walmart_price,target_price,bestbuy_price
Apple,iPhone 15 Pro,Electronics,195949038914,999.99,999.99,999.99,999.99
Samsung,Galaxy Tab S9,Electronics,887276751801,799.99,789.99,799.99,799.99
Dyson,Air Purifier Cool,Home,885609024783,549.99,549.99,549.99,549.99
```

**Run:**
```bash
cd web
npx tsx scripts/import-from-csv.ts products.csv
```

**Pros:**
- ✅ Add hundreds of products at once
- ✅ Easy to prepare data in Excel/Google Sheets
- ✅ Good for bulk imports

---

## Method 5: Web Scraping (Advanced)

### Automatically Fetch Products from Retailers
Your app already has scraping infrastructure! You can enhance it:

**Update:** `web/scripts/scrape-products.ts`
```typescript
import { AmazonScraper } from '../lib/scrapers/amazon-scraper';

async function scrapeNewProducts() {
  const scraper = new AmazonScraper();
  
  // List of products to scrape
  const productUrls = [
    'https://amazon.com/dp/B0CHWRXH8B', // AirPods Pro
    'https://amazon.com/dp/B0C33MXXH1', // Sony Headphones
    // ... add more URLs
  ];
  
  for (const url of productUrls) {
    try {
      const productData = await scraper.scrapeProduct(url);
      // Insert into database
      // ... (similar to Method 1)
    } catch (error) {
      console.error(`Error scraping ${url}:`, error);
    }
  }
}
```

**Pros:**
- ✅ Automatically gets real prices
- ✅ Can update prices regularly
- ✅ No manual data entry

**Cons:**
- ❌ Complex to maintain
- ❌ May violate Terms of Service
- ❌ Websites change frequently

---

## Method 6: Use Product APIs (Recommended for Production)

### Integrate with Product Data APIs
Use real product APIs to get verified data:

**Popular APIs:**
- **Barcode Lookup API** (already in your code!)
- **Best Buy API** (free for developers)
- **Walmart Open API**
- **Target API**

**Example using Barcode Lookup:**
```typescript
async function addProductByUPC(upc: string) {
  const response = await fetch(
    `https://api.barcodelookup.com/v3/products?barcode=${upc}&key=${process.env.BARCODE_API_KEY}`
  );
  const data = await response.json();
  
  if (data.products && data.products.length > 0) {
    const product = data.products[0];
    // Insert into your database
    // ...
  }
}

// Add by UPC
addProductByUPC('811659036513'); // Razer Mouse
```

**Pros:**
- ✅ Legal and reliable
- ✅ Accurate product information
- ✅ Often includes images, descriptions, prices

**Cons:**
- ❌ May require paid API keys
- ❌ Rate limits on free tiers

---

## Quick Comparison

| Method | Speed | Ease | Best For |
|--------|-------|------|----------|
| Script | ⚡⚡⚡ Fast | Easy | Developers, bulk adding |
| SQL | ⚡⚡ Medium | Easy | Quick additions, fixes |
| Admin Form | ⚡ Slow | Very Easy | Non-technical users |
| CSV Import | ⚡⚡⚡ Fast | Medium | Bulk imports (100+) |
| Scraping | ⚡ Slow | Hard | Automation |
| APIs | ⚡⚡ Medium | Medium | Production apps |

---

## Recommended Approach

**For Your APCS Project:**
1. **Use Method 1 (Script)** - Add 10-20 more products easily
2. **Build Method 3 (Admin Form)** - Great feature to show in presentation
3. **Mention Method 6 (APIs)** - Shows you understand real-world implementation

**For Production:**
- Combine **Admin Form** (manual additions) + **APIs** (automated updates)

---

## Next Steps

Want me to help you:
- ✏️ Add 20 more specific products?
- 🎨 Build the admin form UI?
- 📊 Create a CSV import script?
- 🔌 Set up a product API integration?

Let me know which direction you'd like to go! 🚀
