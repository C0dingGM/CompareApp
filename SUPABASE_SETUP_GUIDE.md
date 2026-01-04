# Setting Up Real Data in Supabase - Step by Step Guide

## 🎯 Overview
We're going to add REAL product data (Apple AirPods, Sony Headphones, etc.) to your Supabase database.

## Step 1: Create Database Tables

1. **Go to Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Login with your account
   - Select your project: `kzyauvftvqfqhazpenos`

2. **Open SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click "+ New Query"

3. **Run this SQL** (copy and paste all of it):

```sql
-- Create retailers table
CREATE TABLE IF NOT EXISTS public.retailers (
  id text PRIMARY KEY,
  name text NOT NULL,
  domain text UNIQUE,
  eco_flags text,
  created_at timestamp with time zone DEFAULT now()
);

-- Create offers table  
CREATE TABLE IF NOT EXISTS public.offers (
  id text PRIMARY KEY,
  product_id text NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  retailer_id text NOT NULL REFERENCES public.retailers(id) ON DELETE CASCADE,
  price numeric(10,2) NOT NULL,
  currency text NOT NULL DEFAULT 'USD',
  url text NOT NULL,
  in_stock boolean NOT NULL DEFAULT true,
  fetched_at timestamp with time zone DEFAULT now()
);

-- Create price_history table
CREATE TABLE IF NOT EXISTS public.price_history (
  id text PRIMARY KEY,
  product_id text NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  retailer_id text NOT NULL REFERENCES public.retailers(id) ON DELETE CASCADE,
  price numeric(10,2) NOT NULL,
  ts timestamp with time zone DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_offers_product_id ON public.offers(product_id);
CREATE INDEX IF NOT EXISTS idx_offers_retailer_id ON public.offers(retailer_id);
CREATE INDEX IF NOT EXISTS idx_price_history_product_id ON public.price_history(product_id);
CREATE INDEX IF NOT EXISTS idx_price_history_ts ON public.price_history(ts);
CREATE INDEX IF NOT EXISTS idx_products_brand ON public.products(brand);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);

-- Insert retailers
INSERT INTO public.retailers (id, name, domain) VALUES
  ('amazon', 'Amazon', 'amazon.com'),
  ('walmart', 'Walmart', 'walmart.com'),
  ('target', 'Target', 'target.com'),
  ('bestbuy', 'Best Buy', 'bestbuy.com')
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE public.retailers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.price_history ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY IF NOT EXISTS "Allow public read access on retailers"
  ON public.retailers FOR SELECT
  USING (true);

CREATE POLICY IF NOT EXISTS "Allow public read access on offers"
  ON public.offers FOR SELECT
  USING (true);

CREATE POLICY IF NOT EXISTS "Allow public read access on price_history"
  ON public.price_history FOR SELECT
  USING (true);
```

4. **Click "Run"** button (or press Ctrl/Cmd + Enter)
5. **Verify Success** - you should see "Success. No rows returned"

## Step 2: Populate with Real Data

Now run the population script from your terminal:

```bash
cd web
npx tsx scripts/populate-real-data.ts
```

**What this does:**
- Inserts 20 REAL products (Apple AirPods, Sony Headphones, Nintendo Switch, etc.)
- Generates 80 price offers across 4 retailers
- Creates 2,480 price history data points (31 days × 4 retailers × 20 products)

**Expected output:**
```
🚀 Starting database population with REAL data...

📦 Inserting products...
✅ Inserted 20 products

💰 Generating and inserting price offers...
✅ Inserted 80 price offers

📊 Generating and inserting price history...
   Inserted batch 1/5
   Inserted batch 2/5
   ...
✅ Inserted 2480 price history records

🎉 DATABASE POPULATED SUCCESSFULLY!
```

## Step 3: Update Your App to Use Supabase Data

Update the API routes to fetch from Supabase instead of mock data:

**File: `web/app/api/search/route.ts`**

Currently uses: `mockSearch()` from `lib/mock.ts`
Need to change to: Query Supabase database

I can help you update these files - just let me know after Step 2 completes!

## Step 4: Test Your App

```bash
cd web
npm run dev
```

Visit http://localhost:3000 and you should see:
- ✅ Real product names (Apple AirPods, Sony Headphones, etc.)
- ✅ Real prices from multiple retailers
- ✅ Price history charts with 30 days of data

## 🆘 Troubleshooting

### If SQL fails with "relation already exists"
- That's OK! It means the table is already created
- Continue to Step 2

### If populate script fails with "permission denied"
You need to:
1. Go to Supabase Dashboard
2. Settings → API
3. Copy the "service_role" key (not anon key)
4. Add to `.env.local`:
   ```
   SUPABASE_SERVICE_KEY=your_service_role_key
   ```
5. Update the populate script to use service key

### If you see "table does not exist" errors
- Re-run Step 1 SQL
- Make sure you're logged into the correct Supabase project

## 📊 Real Products Being Added

Your database will have these real products:

**Electronics:**
- Apple AirPods Pro (2nd Generation) - $249.99
- Sony WH-1000XM5 Wireless Headphones - $399.99
- Samsung Galaxy Watch 6 - $299.99
- Apple iPad Air 10.9-inch - $599.99
- Nintendo Switch OLED Console - $349.99
- PlayStation DualSense Controller - $69.99

**Kitchen:**
- Ninja Air Fryer Pro 4-in-1 - $119.99
- Keurig K-Elite Coffee Maker - $169.99
- Instant Pot Duo Plus 6 Quart - $99.99

**Home:**
- Dyson V15 Detect Cordless Vacuum - $649.99
- iRobot Roomba j7+ Robot Vacuum - $799.99

**Fitness:**
- Fitbit Charge 6 - $159.99
- Apple Watch Series 9 - $399.99
- Garmin Forerunner 265 - $449.99

And more!

## ✅ Next Steps After Setup

Once data is in Supabase, I'll help you:
1. Update API routes to query Supabase
2. Add product search functionality
3. Implement price comparison features
4. Set up price history charts

---

**Ready to proceed? Run Step 1 in Supabase Dashboard!**
