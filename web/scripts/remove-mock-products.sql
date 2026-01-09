-- =====================================================
-- Remove Mock Products - Keep Only Real Data
-- =====================================================
-- This removes the 19 mock products (Acme, Zenith, EcoCo, etc.)
-- Keeps 29 real products from Sony, Apple, Logitech, etc.
-- =====================================================

-- Temporarily disable RLS
ALTER TABLE products DISABLE ROW LEVEL SECURITY;
ALTER TABLE offers DISABLE ROW LEVEL SECURITY;

-- Delete mock products (IDs with fictional brands)
DELETE FROM products WHERE id IN (
  '1',   -- Acme Widget 3000
  '4',   -- Acme Widget 2000
  '5',   -- Zenith Smart Toaster
  '6',   -- EcoCo Bamboo Cutlery Set
  '10',  -- Nova LED Desk Lamp
  '11',  -- Atlas Hiking Backpack
  '13',  -- Lumina Solar Charger
  '14',  -- Quanta USB-C Hub
  '15',  -- Summit Insulated Mug
  '16',  -- Terra Indoor Planter
  '17',  -- Volt Fast Charger
  '18',  -- Breeze Air Purifier
  '20',  -- Polar Smart Thermostat
  '24',  -- Sierra Trail Shoes
  '25',  -- Aurora Hair Dryer
  '26',  -- Zenith Coffee Grinder
  '27',  -- Acme Widget Mini
  '28',  -- EcoCo Glass Food Containers
  '29'   -- Nimbus Travel Router
);

-- Delete orphaned offers for deleted products
DELETE FROM offers WHERE product_id IN (
  '1', '4', '5', '6', '10', '11', '13', '14', '15', '16', 
  '17', '18', '20', '24', '25', '26', '27', '28', '29'
);

-- Re-enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;

-- Show remaining products (all real brands now!)
SELECT 
  id, 
  brand, 
  LEFT(title, 50) as title,
  category
FROM products 
ORDER BY brand, id
LIMIT 30;

-- Summary
SELECT 
  'Products Remaining' as status,
  COUNT(*) as count
FROM products
UNION ALL
SELECT 
  'Offers Remaining' as status,
  COUNT(*) as count
FROM offers;
