-- =====================================================
-- CORRECT SQL - Updates Existing Products with Real Data
-- =====================================================
-- Your products have IDs: "1", "2", "3", etc.
-- This updates them with real product information
-- =====================================================

-- Temporarily disable RLS
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- Update existing products with real equivalents
UPDATE products SET 
  brand = 'Cuisinart',
  title = 'Cuisinart Stainless Steel Electric Kettle',
  category = 'Kitchen',
  upc = '086279093448'
WHERE id = '2';

UPDATE products SET 
  brand = 'Hydro Flask',
  title = 'Hydro Flask Standard Mouth Water Bottle 21oz',
  category = 'Outdoors',
  upc = '194636646859'
WHERE id = '3';

UPDATE products SET 
  brand = 'Sony',
  title = 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones',
  category = 'Electronics',
  upc = '027242920425'
WHERE id = '7';

UPDATE products SET 
  brand = 'Fitbit',
  title = 'Fitbit Charge 6 Fitness Tracker',
  category = 'Fitness',
  upc = '811138037499'
WHERE id = '8';

UPDATE products SET 
  brand = 'JBL',
  title = 'JBL Flip 6 Portable Bluetooth Speaker',
  category = 'Electronics',
  upc = '050036379243'
WHERE id = '9';

UPDATE products SET 
  brand = 'Logitech',
  title = 'Logitech MX Keys Advanced Wireless Keyboard',
  category = 'Electronics',
  upc = '097855153715'
WHERE id = '12';

UPDATE products SET 
  brand = 'Logitech',
  title = 'Logitech G502 HERO Gaming Mouse',
  category = 'Electronics',
  upc = '097855148582'
WHERE id = '19';

UPDATE products SET 
  brand = 'Apple',
  title = 'Apple AirPods Pro (2nd Generation)',
  category = 'Electronics',
  upc = '194253398707'
WHERE id = '21';

UPDATE products SET 
  brand = 'Samsung',
  title = 'Samsung 980 PRO 1TB PCIe 4.0 NVMe SSD',
  category = 'Electronics',
  upc = '887276510736'
WHERE id = '23';

UPDATE products SET 
  brand = 'Manduka',
  title = 'Manduka PRO Yoga Mat 6mm',
  category = 'Fitness',
  upc = '810006800026'
WHERE id = '30';

-- Re-enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Show updated products
SELECT id, brand, title, category 
FROM products 
WHERE id IN ('2', '3', '7', '8', '9', '12', '19', '21', '23', '30')
ORDER BY id::int;
