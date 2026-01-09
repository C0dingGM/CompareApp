# ✅ Database Population - Final Instructions

## Current Status

✅ **Offers Added**: 34 new price offers successfully inserted!
❌ **Products Blocked**: Row Level Security (RLS) preventing product updates

## Your Database Currently Has:

- **10 mock products** (IDs 1-10): Acme, Zenith, EcoCo brands
- **44 offers total**: Mix of old + 34 new real offers

## 🚀 How to Add Real Products (Choose One)

### Option 1: Run SQL Directly in Supabase (Recommended - 2 minutes)

1. **Open Supabase SQL Editor:**
   ```
   https://supabase.com/dashboard/project/kzyauvftvqfqhazpenos/sql/new
   ```

2. **Copy this SQL and paste it:**

```sql
-- Temporarily disable RLS
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
  
-- Insert/Update real products
INSERT INTO products (id, brand, title, category, upc) VALUES
  ('7', 'Sony', 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones', 'Electronics', '027242920425'),
  ('9', 'JBL', 'JBL Flip 6 Portable Bluetooth Speaker', 'Electronics', '050036379243'),
  ('12', 'Logitech', 'Logitech MX Keys Advanced Wireless Keyboard', 'Electronics', '097855153715'),
  ('19', 'Logitech', 'Logitech G502 HERO Gaming Mouse', 'Electronics', '097855148582'),
  ('21', 'Apple', 'Apple AirPods Pro (2nd Generation)', 'Electronics', '194253398707'),
  ('23', 'Samsung', 'Samsung 980 PRO 1TB PCIe 4.0 NVMe SSD', 'Electronics', '887276510736'),
  ('8', 'Fitbit', 'Fitbit Charge 6 Fitness Tracker', 'Fitness', '811138037499'),
  ('30', 'Manduka', 'Manduka PRO Yoga Mat 6mm', 'Fitness', '810006800026'),
  ('2', 'Cuisinart', 'Cuisinart Stainless Steel Electric Kettle', 'Kitchen', '086279093448'),
  ('3', 'Hydro Flask', 'Hydro Flask Standard Mouth Water Bottle 21oz', 'Outdoors', '194636646859')
ON CONFLICT (id) DO UPDATE SET
  brand = EXCLUDED.brand,
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  upc = EXCLUDED.upc;

-- Re-enable RLS (optional)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Show results
SELECT id, brand, title FROM products ORDER BY id::int LIMIT 15;
```

3. **Click "Run"** ▶️

**Done!** You now have 10 real products with 34 real price offers.

### Option 2: Disable RLS Permanently (Easier for development)

1. Go to Supabase Dashboard
2. Click **Authentication** → **Policies**
3. Find the `products` table
4. Toggle **"Enable RLS"** to **OFF**
5. Do the same for `offers` and `price_history` tables
6. Run the Node script again:
   ```bash
   cd web
   npx tsx scripts/populate-now.ts
   ```

### Option 3: Use the Full SQL Script (All 30 Products)

Use the complete script with all 30 real products:
```
web/scripts/populate-real-equivalents.sql
```

This has all 30 products mapped to real equivalents!

## 🎯 What You Currently Have

After running Option 1 above, you'll have:

| ID | Brand | Product | Price Range |
|----|-------|---------|-------------|
| 2 | Cuisinart | Electric Kettle | $59-70 |
| 3 | Hydro Flask | Water Bottle 21oz | $32-35 |
| 7 | Sony | WH-1000XM5 Headphones | $379-400 |
| 8 | Fitbit | Charge 6 Tracker | $159.95 |
| 9 | JBL | Flip 6 Speaker | $119-130 |
| 12 | Logitech | MX Keys Keyboard | $99-110 |
| 19 | Logitech | G502 Gaming Mouse | $44-50 |
| 21 | Apple | AirPods Pro (2nd Gen) | $244-250 |
| 23 | Samsung | 980 PRO 1TB SSD | $89-100 |
| 30 | Manduka | PRO Yoga Mat | $119-130 |

**Each with 4 retailers:** Amazon, Walmart, Target, Best Buy

## ✅ Verification

Test your data:
```bash
# Start dev server
cd web
npm run dev

# Test API (in another terminal)
curl http://localhost:3000/api/products/7

# Or open in browser
open http://localhost:3000/products
```

## 📊 Summary

✅ **What worked:**
- 34 price offers added successfully
- Database connection working
- API ready to use

❌ **What's blocked:**
- Product inserts (due to RLS)

🎯 **Solution:**
- Run the SQL directly in Supabase (bypasses RLS)
- Takes 2 minutes!

---

**Ready when you are!** Just copy/paste that SQL into Supabase SQL Editor.
