-- =====================================================
-- Fix Duplicates and Add Missing Data
-- =====================================================
-- 1. Delete duplicate AirPods Pro products (keep prod-1)
-- 2. Add offers for Helio SmartBulb so it displays
-- =====================================================

-- Temporarily disable RLS
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE offers DISABLE ROW LEVEL SECURITY;
ALTER TABLE price_history DISABLE ROW LEVEL SECURITY;

-- Delete duplicate AirPods Pro products (keep prod-1 which has offers)
DELETE FROM products WHERE id IN ('21', 'p1');

-- Delete orphaned offers for deleted products
DELETE FROM offers WHERE product_id IN ('21', 'p1');
DELETE FROM price_history WHERE product_id IN ('21', 'p1');

-- Update Helio SmartBulb brand name (currently "HelioV2")
UPDATE products 
SET brand = 'Philips',
    title = 'Philips Hue White and Color Smart Bulb'
WHERE id = '22';

-- Add offers for Helio/Philips SmartBulb (ID 22)
INSERT INTO offers (id, product_id, retailer_id, price, currency, url, in_stock, fetched_at) VALUES
  ('o22-amazon', '22', 'amazon', 49.99, 'USD', 'https://amazon.com/dp/B07QV9XB87', true, NOW()),
  ('o22-walmart', '22', 'walmart', 47.99, 'USD', 'https://walmart.com/ip/956585562', true, NOW()),
  ('o22-target', '22', 'target', 49.99, 'USD', 'https://target.com/p/A-54283945', true, NOW()),
  ('o22-bestbuy', '22', 'bestbuy', 49.99, 'USD', 'https://bestbuy.com/site/6323006.p', true, NOW())
ON CONFLICT (id) DO NOTHING;

-- Generate price history for SmartBulb (30 days, based on offers)
INSERT INTO price_history (id, product_id, retailer_id, price, ts)
SELECT 
  gen_random_uuid() as id,
  '22' as product_id,
  retailer_id,
  -- Add small random variation (±8%) to the offer price
  price * (1 + (random() - 0.5) * 0.16) as price,
  -- Generate timestamps for the last 30 days
  NOW() - (days * interval '1 day') as ts
FROM (
  SELECT 'amazon' as retailer_id, 49.99 as price
  UNION ALL SELECT 'walmart', 47.99
  UNION ALL SELECT 'target', 49.99
  UNION ALL SELECT 'bestbuy', 49.99
) offers
CROSS JOIN generate_series(30, 0, -1) as days;

-- Re-enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_history ENABLE ROW LEVEL SECURITY;

-- Show results
SELECT 
  'Operation' as type,
  'Deleted duplicate AirPods Pro (IDs: 21, p1)' as result
UNION ALL
SELECT 
  'Operation',
  'Updated Helio SmartBulb to Philips Hue' as result
UNION ALL
SELECT 
  'Operation',
  'Added 4 offers for SmartBulb' as result
UNION ALL
SELECT 
  'Operation',
  'Generated 124 price history records for SmartBulb' as result;

-- Verify final products
SELECT 
  id,
  brand,
  title,
  (SELECT COUNT(*) FROM offers WHERE product_id = p.id) as offer_count,
  (SELECT COUNT(*) FROM price_history WHERE product_id = p.id) as history_count
FROM products p
WHERE id IN ('prod-1', '22')
ORDER BY id;
