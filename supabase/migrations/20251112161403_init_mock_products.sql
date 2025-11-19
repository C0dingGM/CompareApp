-- Create products table
create table if not exists public.products (
  id text primary key,
  upc text,
  brand text not null,
  title text not null,
  category text
);

-- Seed products from mock.ts
insert into public.products (id, brand, title, category) values
('1','Acme','Acme Widget 3000','Gadgets'),
('2','Zenith','Zenith Ultra Kettle','Kitchen'),
('3','EcoCo','EcoCo Reusable Bottle','Outdoors'),
('4','Acme','Acme Widget 2000','Gadgets'),
('5','Zenith','Zenith Smart Toaster','Kitchen'),
('6','EcoCo','EcoCo Bamboo Cutlery Set','Kitchen'),
('7','Nimbus','Nimbus Noise-Cancelling Headphones','Electronics'),
('8','Orbit','Orbit Fitness Band','Fitness'),
('9','Pioneer','Pioneer Bluetooth Speaker','Electronics'),
('10','Nova','Nova LED Desk Lamp','Home'),
('11','Atlas','Atlas Hiking Backpack 40L','Outdoors'),
('12','Vertex','Vertex Mechanical Keyboard','Electronics'),
('13','Lumina','Lumina Solar Charger','Outdoors'),
('14','Quanta','Quanta USB-C Hub 9-in-1','Electronics'),
('15','Summit','Summit Insulated Mug','Kitchen'),
('16','Terra','Terra Indoor Planter','Home'),
('17','Volt','Volt Fast Charger 65W','Electronics'),
('18','Breeze','Breeze Air Purifier','Home'),
('19','Apex','Apex Gaming Mouse','Electronics'),
('20','Polar','Polar Smart Thermostat','Home'),
('21','Echo','Echo Wireless Earbuds','Electronics'),
('22','Helio','Helio Smart Bulb','Home'),
('23','Quantum','Quantum SSD 1TB','Electronics'),
('24','Sierra','Sierra Trail Shoes','Outdoors'),
('25','Aurora','Aurora Hair Dryer','Home'),
('26','Zenith','Zenith Coffee Grinder','Kitchen'),
('27','Acme','Acme Widget Mini','Gadgets'),
('28','EcoCo','EcoCo Glass Food Containers','Kitchen'),
('29','Nimbus','Nimbus Travel Router','Electronics'),
('30','Orbit','Orbit Yoga Mat','Fitness')
ON CONFLICT (id) DO NOTHING;
