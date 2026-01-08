-- =====================================================
-- Quick Data Population for CompareApp
-- =====================================================
-- Run this SQL in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/kzyauvftvqfqhazpenos/sql/new
-- =====================================================

-- First, temporarily disable RLS to allow inserts
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE offers DISABLE ROW LEVEL SECURITY;
ALTER TABLE price_history DISABLE ROW LEVEL SECURITY;

-- Insert 10 sample products
INSERT INTO products (id, brand, title, category, upc) VALUES
  ('p1', 'Apple', 'AirPods Pro (2nd Generation)', 'Electronics', '194253398707'),
  ('p2', 'Sony', 'WH-1000XM5 Wireless Headphones', 'Electronics', '027242920425'),
  ('p3', 'Samsung', 'Galaxy Watch 6', 'Electronics', '887276753591'),
  ('p4', 'Ninja', 'Air Fryer Pro 4-in-1', 'Kitchen', '622356570169'),
  ('p5', 'Dyson', 'V15 Detect Cordless Vacuum', 'Home', '885609024608'),
  ('p6', 'Fitbit', 'Charge 6 Fitness Tracker', 'Fitness', '811138037499'),
  ('p7', 'Yeti', 'Rambler 20 oz Tumbler', 'Outdoors', '888830050088'),
  ('p8', 'Nintendo', 'Switch OLED Console', 'Electronics', '045496882747'),
  ('p9', 'Anker', '737 Power Bank 24000mAh', 'Electronics', '194644115685'),
  ('p10', 'Bose', 'QuietComfort Earbuds II', 'Electronics', '017817831116')
ON CONFLICT (id) DO UPDATE SET
  brand = EXCLUDED.brand,
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  upc = EXCLUDED.upc;

-- Insert price offers for each product (4 retailers per product)
INSERT INTO offers (id, product_id, retailer_id, price, currency, url, in_stock, fetched_at) VALUES
  -- AirPods Pro
  ('o-p1-amazon', 'p1', 'amazon', 249.99, 'USD', 'https://amazon.com/dp/B0CHWRXH8B', true, NOW()),
  ('o-p1-walmart', 'p1', 'walmart', 244.99, 'USD', 'https://walmart.com/ip/5056388859', true, NOW()),
  ('o-p1-target', 'p1', 'target', 249.99, 'USD', 'https://target.com/p/A-87865026', true, NOW()),
  ('o-p1-bestbuy', 'p1', 'bestbuy', 249.99, 'USD', 'https://bestbuy.com/site/6447382.p', true, NOW()),
  
  -- Sony Headphones
  ('o-p2-amazon', 'p2', 'amazon', 399.99, 'USD', 'https://amazon.com/dp/B0C33MXXH1', true, NOW()),
  ('o-p2-walmart', 'p2', 'walmart', 379.99, 'USD', 'https://walmart.com/ip/2023751583', true, NOW()),
  ('o-p2-target', 'p2', 'target', 399.99, 'USD', 'https://target.com/p/A-87957848', true, NOW()),
  ('o-p2-bestbuy', 'p2', 'bestbuy', 399.99, 'USD', 'https://bestbuy.com/site/6535904.p', true, NOW()),
  
  -- Galaxy Watch 6
  ('o-p3-amazon', 'p3', 'amazon', 299.99, 'USD', 'https://amazon.com/dp/B0C5GD8SQW', true, NOW()),
  ('o-p3-walmart', 'p3', 'walmart', 289.99, 'USD', 'https://walmart.com/ip/5157193042', true, NOW()),
  ('o-p3-target', 'p3', 'target', 299.99, 'USD', 'https://target.com/p/A-89458237', true, NOW()),
  ('o-p3-bestbuy', 'p3', 'bestbuy', 299.99, 'USD', 'https://bestbuy.com/site/6546959.p', true, NOW()),
  
  -- Ninja Air Fryer
  ('o-p4-amazon', 'p4', 'amazon', 119.99, 'USD', 'https://amazon.com/dp/B07VWCX2LN', true, NOW()),
  ('o-p4-walmart', 'p4', 'walmart', 109.99, 'USD', 'https://walmart.com/ip/140233643', true, NOW()),
  ('o-p4-target', 'p4', 'target', 119.99, 'USD', 'https://target.com/p/A-76543002', true, NOW()),
  ('o-p4-bestbuy', 'p4', 'bestbuy', 119.99, 'USD', 'https://bestbuy.com/site/6416601.p', false, NOW()),
  
  -- Dyson Vacuum
  ('o-p5-amazon', 'p5', 'amazon', 649.99, 'USD', 'https://amazon.com/dp/B09787BM4Y', true, NOW()),
  ('o-p5-walmart', 'p5', 'walmart', 649.99, 'USD', 'https://walmart.com/ip/538484618', true, NOW()),
  ('o-p5-target', 'p5', 'target', 649.99, 'USD', 'https://target.com/p/A-85294810', false, NOW()),
  ('o-p5-bestbuy', 'p5', 'bestbuy', 649.99, 'USD', 'https://bestbuy.com/site/6477884.p', true, NOW()),
  
  -- Fitbit Charge 6
  ('o-p6-amazon', 'p6', 'amazon', 159.95, 'USD', 'https://amazon.com/dp/B0CCZ1SQ68', true, NOW()),
  ('o-p6-walmart', 'p6', 'walmart', 159.95, 'USD', 'https://walmart.com/ip/5353832684', true, NOW()),
  ('o-p6-target', 'p6', 'target', 159.95, 'USD', 'https://target.com/p/A-90168537', true, NOW()),
  ('o-p6-bestbuy', 'p6', 'bestbuy', 159.95, 'USD', 'https://bestbuy.com/site/6559428.p', true, NOW()),
  
  -- Yeti Tumbler
  ('o-p7-amazon', 'p7', 'amazon', 35.00, 'USD', 'https://amazon.com/dp/B073WJM89K', true, NOW()),
  ('o-p7-walmart', 'p7', 'walmart', 35.00, 'USD', 'https://walmart.com/ip/363006207', true, NOW()),
  ('o-p7-target', 'p7', 'target', 35.00, 'USD', 'https://target.com/p/A-53229858', true, NOW()),
  ('o-p7-bestbuy', 'p7', 'bestbuy', 35.00, 'USD', 'https://bestbuy.com/site/6343112.p', false, NOW()),
  
  -- Nintendo Switch OLED
  ('o-p8-amazon', 'p8', 'amazon', 349.99, 'USD', 'https://amazon.com/dp/B098RKWHHZ', true, NOW()),
  ('o-p8-walmart', 'p8', 'walmart', 349.00, 'USD', 'https://walmart.com/ip/606847127', true, NOW()),
  ('o-p8-target', 'p8', 'target', 349.99, 'USD', 'https://target.com/p/A-83887734', true, NOW()),
  ('o-p8-bestbuy', 'p8', 'bestbuy', 349.99, 'USD', 'https://bestbuy.com/site/6470924.p', true, NOW()),
  
  -- Anker Power Bank
  ('o-p9-amazon', 'p9', 'amazon', 149.99, 'USD', 'https://amazon.com/dp/B0BYP3N89N', true, NOW()),
  ('o-p9-walmart', 'p9', 'walmart', 139.99, 'USD', 'https://walmart.com/ip/1746851553', true, NOW()),
  ('o-p9-target', 'p9', 'target', 149.99, 'USD', 'https://target.com/p/A-88375429', true, NOW()),
  ('o-p9-bestbuy', 'p9', 'bestbuy', 149.99, 'USD', 'https://bestbuy.com/site/6533874.p', true, NOW()),
  
  -- Bose Earbuds
  ('o-p10-amazon', 'p10', 'amazon', 299.00, 'USD', 'https://amazon.com/dp/B0B4PS9RD1', true, NOW()),
  ('o-p10-walmart', 'p10', 'walmart', 299.00, 'USD', 'https://walmart.com/ip/1482887096', true, NOW()),
  ('o-p10-target', 'p10', 'target', 299.00, 'USD', 'https://target.com/p/A-87655012', true, NOW()),
  ('o-p10-bestbuy', 'p10', 'bestbuy', 299.00, 'USD', 'https://bestbuy.com/site/6512635.p', true, NOW())
ON CONFLICT (id) DO UPDATE SET
  price = EXCLUDED.price,
  url = EXCLUDED.url,
  in_stock = EXCLUDED.in_stock,
  fetched_at = EXCLUDED.fetched_at;

-- Re-enable RLS (optional - comment out if you want to keep it disabled)
-- ALTER TABLE products ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE price_history ENABLE ROW LEVEL SECURITY;

-- Show results
SELECT 
  'Products' as table_name, 
  COUNT(*) as count 
FROM products
UNION ALL
SELECT 
  'Offers' as table_name, 
  COUNT(*) as count 
FROM offers;
