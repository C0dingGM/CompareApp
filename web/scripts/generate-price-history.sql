-- =====================================================
-- Generate Price History for Products Without History
-- =====================================================
-- This creates 30 days of price history for products
-- that have offers but no price history data
-- =====================================================

-- Temporarily disable RLS
ALTER TABLE price_history DISABLE ROW LEVEL SECURITY;

-- Insert synthetic price history for products without history
-- Based on their current offer prices
INSERT INTO price_history (id, product_id, retailer_id, price, ts)
SELECT 
  gen_random_uuid() as id,
  o.product_id,
  o.retailer_id,
  -- Add small random variation (±8%) to the offer price
  o.price * (1 + (random() - 0.5) * 0.16) as price,
  -- Generate timestamps for the last 30 days
  NOW() - (generate_series(30, 0, -1) * interval '1 day') as ts
FROM offers o
WHERE o.product_id NOT IN (
  SELECT DISTINCT product_id FROM price_history
)
AND o.product_id IN (
  SELECT id FROM products WHERE id IN ('2', '3', '7', '8', '9', '12', '19', '21', '23', '30')
);

-- Re-enable RLS
ALTER TABLE price_history ENABLE ROW LEVEL SECURITY;

-- Show products now with price history
SELECT 
  p.id,
  p.brand,
  LEFT(p.title, 40) as title,
  COUNT(DISTINCT ph.id) as history_count,
  COUNT(DISTINCT o.id) as offers_count
FROM products p
LEFT JOIN price_history ph ON p.id = ph.product_id
LEFT JOIN offers o ON p.id = o.product_id
WHERE p.id IN ('2', '3', '7', '8', '9', '12', '19', '21', '23', '30')
GROUP BY p.id, p.brand, p.title
ORDER BY p.brand, p.id;
