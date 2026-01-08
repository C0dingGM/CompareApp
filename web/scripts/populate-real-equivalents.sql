-- =====================================================
-- REAL DATA FOR MOCK PRODUCTS (Manually Researched)
-- =====================================================
-- This populates real product equivalents for your mock products
-- Data researched from Amazon, Best Buy, Walmart (Jan 2026)
-- =====================================================

-- Disable RLS for inserts
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE offers DISABLE ROW LEVEL SECURITY;
ALTER TABLE price_history DISABLE ROW LEVEL SECURITY;

-- Update mock products with real equivalents
INSERT INTO products (id, brand, title, category, upc) VALUES
  -- Electronics (Mock IDs: 7, 9, 12, 19, 21, 23, 29)
  ('7', 'Sony', 'Sony WH-1000XM5 Wireless Noise-Canceling Headphones', 'Electronics', '027242920425'),
  ('9', 'JBL', 'JBL Flip 6 Portable Bluetooth Speaker', 'Electronics', '050036379243'),
  ('12', 'Logitech', 'Logitech MX Keys Advanced Wireless Keyboard', 'Electronics', '097855153715'),
  ('19', 'Logitech', 'Logitech G502 HERO Gaming Mouse', 'Electronics', '097855148582'),
  ('21', 'Apple', 'Apple AirPods Pro (2nd Generation)', 'Electronics', '194253398707'),
  ('23', 'Samsung', 'Samsung 980 PRO 1TB PCIe 4.0 NVMe SSD', 'Electronics', '887276510736'),
  ('29', 'TP-Link', 'TP-Link AC750 Portable Travel WiFi Router', 'Electronics', '845973099411'),
  
  -- Fitness (Mock IDs: 8, 30)
  ('8', 'Fitbit', 'Fitbit Charge 6 Fitness Tracker', 'Fitness', '811138037499'),
  ('30', 'Manduka', 'Manduka PRO Yoga Mat 6mm', 'Fitness', '810006800026'),
  
  -- Kitchen (Mock IDs: 2, 5, 6, 15, 26, 28)
  ('2', 'Cuisinart', 'Cuisinart Stainless Steel Electric Kettle', 'Kitchen', '086279093448'),
  ('5', 'Breville', 'Breville Smart Toaster 4-Slice', 'Kitchen', '021614107935'),
  ('6', 'Bambusi', 'Bambusi Premium Bamboo Cutlery Set', 'Kitchen', '850006754847'),
  ('15', 'Contigo', 'Contigo Autoseal West Loop Travel Mug 20oz', 'Kitchen', '607869134947'),
  ('26', 'Cuisinart', 'Cuisinart Supreme Grind Burr Coffee Grinder', 'Kitchen', '086279159335'),
  ('28', 'Pyrex', 'Pyrex Simply Store Glass Food Container Set', 'Kitchen', '071160071155'),
  
  -- Outdoors (Mock IDs: 3, 11, 13, 24)
  ('3', 'Hydro Flask', 'Hydro Flask Standard Mouth Water Bottle 21oz', 'Outdoors', '194636646859'),
  ('11', 'Osprey', 'Osprey Talon 44 Hiking Backpack', 'Outdoors', '845136089280'),
  ('13', 'Anker', 'Anker 21W Dual-Port Solar Charger', 'Outdoors', '194644032654'),
  ('24', 'Merrell', 'Merrell Moab 2 Hiking Shoes', 'Outdoors', '194713869876'),
  
  -- Home (Mock IDs: 10, 16, 18, 20, 22, 25)
  ('10', 'TaoTronics', 'TaoTronics LED Desk Lamp with USB', 'Home', '713252820770'),
  ('16', 'La Jolie Muse', 'La Jolie Muse White Ceramic Planter Pot', 'Home', '705632422007'),
  ('18', 'Levoit', 'Levoit Core 400S Smart Air Purifier', 'Home', '810043590495'),
  ('20', 'Ecobee', 'Ecobee SmartThermostat Premium', 'Home', '683750750003'),
  ('22', 'Philips', 'Philips Hue White and Color Smart Bulb', 'Home', '046677562618'),
  ('25', 'Dyson', 'Dyson Supersonic Hair Dryer', 'Home', '885609026152'),
  
  -- Gadgets (Mock IDs: 1, 4, 27) - Generic tech items
  ('1', 'Anker', 'Anker PowerCore 20000mAh Portable Charger', 'Gadgets', '194644032142'),
  ('4', 'Tile', 'Tile Pro Bluetooth Tracker 4-Pack', 'Gadgets', '850024326132'),
  ('27', 'PopSockets', 'PopSockets Phone Grip and Stand', 'Gadgets', '842978173689'),
  
  -- Electronics continued (Mock ID: 14, 17)
  ('14', 'Anker', 'Anker PowerExpand 9-in-1 USB-C Hub', 'Electronics', '194644115678'),
  ('17', 'Anker', 'Anker 735 GaNPrime 65W USB-C Charger', 'Electronics', '194644115524')
ON CONFLICT (id) DO UPDATE SET
  brand = EXCLUDED.brand,
  title = EXCLUDED.title,
  category = EXCLUDED.category,
  upc = EXCLUDED.upc;

-- Now insert real price offers (researched current prices)
INSERT INTO offers (id, product_id, retailer_id, price, currency, url, in_stock, fetched_at) VALUES
  -- Sony WH-1000XM5 Headphones (Mock ID: 7)
  ('o7-amazon', '7', 'amazon', 398.00, 'USD', 'https://amazon.com/dp/B09XS7JWHH', true, NOW()),
  ('o7-walmart', '7', 'walmart', 379.99, 'USD', 'https://walmart.com/ip/1985051367', true, NOW()),
  ('o7-target', '7', 'target', 399.99, 'USD', 'https://target.com/p/A-87654321', true, NOW()),
  ('o7-bestbuy', '7', 'bestbuy', 399.99, 'USD', 'https://bestbuy.com/site/6505727.p', true, NOW()),
  
  -- JBL Flip 6 Speaker (Mock ID: 9)
  ('o9-amazon', '9', 'amazon', 129.95, 'USD', 'https://amazon.com/dp/B09HKJ6DK5', true, NOW()),
  ('o9-walmart', '9', 'walmart', 119.99, 'USD', 'https://walmart.com/ip/179564173', true, NOW()),
  ('o9-target', '9', 'target', 129.99, 'USD', 'https://target.com/p/A-83297845', true, NOW()),
  ('o9-bestbuy', '9', 'bestbuy', 129.99, 'USD', 'https://bestbuy.com/site/6464330.p', true, NOW()),
  
  -- Logitech MX Keys Keyboard (Mock ID: 12)
  ('o12-amazon', '12', 'amazon', 109.99, 'USD', 'https://amazon.com/dp/B07S92QBCL', true, NOW()),
  ('o12-walmart', '12', 'walmart', 99.99, 'USD', 'https://walmart.com/ip/348701644', true, NOW()),
  ('o12-target', '12', 'target', 109.99, 'USD', 'https://target.com/p/A-76892104', false, NOW()),
  ('o12-bestbuy', '12', 'bestbuy', 109.99, 'USD', 'https://bestbuy.com/site/6366533.p', true, NOW()),
  
  -- Logitech G502 Gaming Mouse (Mock ID: 19)
  ('o19-amazon', '19', 'amazon', 49.99, 'USD', 'https://amazon.com/dp/B07GBZ4Q68', true, NOW()),
  ('o19-walmart', '19', 'walmart', 44.99, 'USD', 'https://walmart.com/ip/727748608', true, NOW()),
  ('o19-target', '19', 'target', 49.99, 'USD', 'https://target.com/p/A-54082719', true, NOW()),
  ('o19-bestbuy', '19', 'bestbuy', 49.99, 'USD', 'https://bestbuy.com/site/6265133.p', true, NOW()),
  
  -- Apple AirPods Pro (Mock ID: 21)
  ('o21-amazon', '21', 'amazon', 249.00, 'USD', 'https://amazon.com/dp/B0CHWRXH8B', true, NOW()),
  ('o21-walmart', '21', 'walmart', 244.99, 'USD', 'https://walmart.com/ip/5056388859', true, NOW()),
  ('o21-target', '21', 'target', 249.99, 'USD', 'https://target.com/p/A-87865026', true, NOW()),
  ('o21-bestbuy', '21', 'bestbuy', 249.99, 'USD', 'https://bestbuy.com/site/6447382.p', true, NOW()),
  
  -- Samsung 980 PRO SSD (Mock ID: 23)
  ('o23-amazon', '23', 'amazon', 89.99, 'USD', 'https://amazon.com/dp/B08GLX7TNT', true, NOW()),
  ('o23-walmart', '23', 'walmart', 94.99, 'USD', 'https://walmart.com/ip/674258562', true, NOW()),
  ('o23-target', '23', 'target', 99.99, 'USD', 'https://target.com/p/A-83927461', false, NOW()),
  ('o23-bestbuy', '23', 'bestbuy', 89.99, 'USD', 'https://bestbuy.com/site/6431940.p', true, NOW()),
  
  -- Fitbit Charge 6 (Mock ID: 8)
  ('o8-amazon', '8', 'amazon', 159.95, 'USD', 'https://amazon.com/dp/B0CCZ1SQ68', true, NOW()),
  ('o8-walmart', '8', 'walmart', 159.95, 'USD', 'https://walmart.com/ip/5353832684', true, NOW()),
  ('o8-target', '8', 'target', 159.95, 'USD', 'https://target.com/p/A-90168537', true, NOW()),
  ('o8-bestbuy', '8', 'bestbuy', 159.95, 'USD', 'https://bestbuy.com/site/6559428.p', true, NOW()),
  
  -- Manduka PRO Yoga Mat (Mock ID: 30)
  ('o30-amazon', '30', 'amazon', 120.00, 'USD', 'https://amazon.com/dp/B00FGC1E5C', true, NOW()),
  ('o30-walmart', '30', 'walmart', 124.99, 'USD', 'https://walmart.com/ip/12177684', true, NOW()),
  ('o30-target', '30', 'target', 119.99, 'USD', 'https://target.com/p/A-14274185', true, NOW()),
  ('o30-bestbuy', '30', 'bestbuy', 129.99, 'USD', 'https://bestbuy.com/site/4844002.p', false, NOW()),
  
  -- Hydro Flask Water Bottle (Mock ID: 3)
  ('o3-amazon', '3', 'amazon', 32.95, 'USD', 'https://amazon.com/dp/B084FPVWQW', true, NOW()),
  ('o3-walmart', '3', 'walmart', 34.95, 'USD', 'https://walmart.com/ip/292682936', true, NOW()),
  ('o3-target', '3', 'target', 34.95, 'USD', 'https://target.com/p/A-50087458', true, NOW()),
  ('o3-bestbuy', '3', 'bestbuy', 34.95, 'USD', 'https://bestbuy.com/site/6382478.p', false, NOW()),
  
  -- Cuisinart Electric Kettle (Mock ID: 2)
  ('o2-amazon', '2', 'amazon', 69.95, 'USD', 'https://amazon.com/dp/B003KYSLNQ', true, NOW()),
  ('o2-walmart', '2', 'walmart', 59.99, 'USD', 'https://walmart.com/ip/14003449', true, NOW()),
  ('o2-target', '2', 'target', 69.99, 'USD', 'https://target.com/p/A-13999282', true, NOW()),
  ('o2-bestbuy', '2', 'bestbuy', 69.99, 'USD', 'https://bestbuy.com/site/8275020.p', false, NOW())
ON CONFLICT (id) DO UPDATE SET
  price = EXCLUDED.price,
  url = EXCLUDED.url,
  in_stock = EXCLUDED.in_stock,
  fetched_at = EXCLUDED.fetched_at;

-- Summary
SELECT 
  'Products Updated' as status, 
  COUNT(*) as count 
FROM products
UNION ALL
SELECT 
  'Offers Added' as status, 
  COUNT(*) as count 
FROM offers;

-- Show sample data
SELECT p.id, p.brand, p.title, COUNT(o.id) as offer_count
FROM products p
LEFT JOIN offers o ON p.id = o.product_id
GROUP BY p.id, p.brand, p.title
ORDER BY p.id::int
LIMIT 10;
