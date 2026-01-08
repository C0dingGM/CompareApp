# 📊 How to Get Real Data for Your Mock Products

Your CompareApp currently has **30 mock products** with full price history and offers. Here's how to populate your Supabase database with real product data!

## 🎯 Current Status

✅ **Mock Data**: 30 products with complete price history (in `web/lib/mock.ts`)
❌ **Database**: Empty or has minimal data due to Row Level Security (RLS)

## 🚀 Quick Setup (3 Steps)

### Step 1: Disable RLS in Supabase

1. Go to your Supabase Dashboard:
   https://supabase.com/dashboard/project/kzyauvftvqfqhazpenos

2. Navigate to: **Authentication** → **Policies**

3. For each table (`products`, `offers`, `price_history`):
   - Click the table name
   - Toggle **"Enable RLS"** to **OFF**
   - Or create a policy: Name: "Allow all", Policy: `true`, Operations: ALL

### Step 2: Run SQL Script

1. In Supabase Dashboard, go to: **SQL Editor** → **New query**

2. Copy and paste the entire content of:
   ```
   web/scripts/populate-data.sql
   ```

3. Click **Run** (or press Cmd/Ctrl + Enter)

4. You should see:
   ```
   ✅ 10 products inserted
   ✅ 40 offers inserted
   ```

### Step 3: Verify

Test your API:
```bash
# Start your dev server
cd web
npm run dev

# In another terminal, test:
curl http://localhost:3000/api/products/p1

# Or open in browser:
open http://localhost:3000
```

## 📦 What Gets Populated

The SQL script adds **10 real products**:

| ID | Brand | Product | Category | Retailers |
|----|-------|---------|----------|-----------|
| p1 | Apple | AirPods Pro (2nd Gen) | Electronics | 4 retailers |
| p2 | Sony | WH-1000XM5 Headphones | Electronics | 4 retailers |
| p3 | Samsung | Galaxy Watch 6 | Electronics | 4 retailers |
| p4 | Ninja | Air Fryer Pro 4-in-1 | Kitchen | 4 retailers |
| p5 | Dyson | V15 Detect Vacuum | Home | 4 retailers |
| p6 | Fitbit | Charge 6 Tracker | Fitness | 4 retailers |
| p7 | Yeti | Rambler 20oz Tumbler | Outdoors | 4 retailers |
| p8 | Nintendo | Switch OLED Console | Electronics | 4 retailers |
| p9 | Anker | 737 Power Bank | Electronics | 4 retailers |
| p10 | Bose | QuietComfort Earbuds II | Electronics | 4 retailers |

Each product has:
- ✅ Real product names and brands
- ✅ Real UPC codes
- ✅ 4 price offers (Amazon, Walmart, Target, Best Buy)
- ✅ Current market prices
- ✅ Stock availability status
- ✅ Direct product URLs

## 🔧 Alternative: Use Service Role Key

If you have the Supabase Service Role Key:

1. Add to `web/.env.local`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your_service_key
   ```

2. Run:
   ```bash
   cd web
   npx tsx scripts/populate-real-data.ts
   ```

Find your service role key at:
https://supabase.com/dashboard/project/kzyauvftvqfqhazpenos/settings/api

(⚠️ Never commit this key to git!)

## 📝 Switching Between Mock and Real Data

Your app currently uses **mock data** by default (from `web/lib/mock.ts`).

### To use Database data:

1. Update your API routes to use Supabase instead of mock functions
2. Example in `web/app/api/products/[id]/route.ts`:
   ```typescript
   // Old: import { getProductWithOffers } from '@/lib/mock';
   // New: Import and use Supabase client
   
   const { data } = await supabase
     .from('products')
     .select('*, offers(*), price_history(*)')
     .eq('id', params.id)
     .single();
   ```

### Keep Mock Data for Development:

Mock data is perfect for:
- ✅ Fast development without API calls
- ✅ Demos without internet
- ✅ Testing UI without database
- ✅ Price history charts (30 days of data per product!)

## 🎓 For Your APCS Project

**Best approach:**
1. Keep mock data for demos (always works!)
2. Add database data to show integration skills
3. Explain in your presentation:
   - "I built the app with mock data first for rapid development"
   - "Then integrated a real database (Supabase)"
   - "This demonstrates separation of concerns and good architecture"

## 🆘 Troubleshooting

### Error: "Row violates RLS policy"
→ Disable RLS as shown in Step 1 above

### Error: "Cannot connect to Supabase"
→ Check your `.env.local` has:
```
NEXT_PUBLIC_SUPABASE_URL=https://kzyauvftvqfqhazpenos.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### No data showing in app
→ Your app might still be using mock data. Check which data source your API routes use.

## 📊 Next Steps

After populating:
1. ✅ Update API routes to use Supabase
2. ✅ Test all features work with real data
3. ✅ Add more products if needed (copy SQL pattern)
4. ✅ Set up automatic price updates (optional)

---

**Need help?** The SQL script is ready to run - just copy/paste into Supabase SQL Editor!
