#!/usr/bin/env node

/**
 * Generate price history for all products
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PriceDataPoint {
  product_id: string;
  retailer: string;
  price: number;
  ts: string;
}

function generatePriceHistoryForProduct(productId: string, basePrice: number): PriceDataPoint[] {
  const now = new Date('2025-12-10T04:27:00.000Z'); // Current date
  const history: PriceDataPoint[] = [];
  const retailers = ['Amazon', 'Walmart', 'Target', 'Best Buy'];
  
  // Generate 30 days of price history
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Add some realistic price variation
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    
    // Price trends: slight downward trend with weekend dips
    const trendDown = i * 0.15; // Gradual price decrease over time
    const weekendDiscount = isWeekend ? basePrice * 0.05 : 0; // 5% off on weekends
    const randomVariation = (Math.random() - 0.5) * (basePrice * 0.1); // +/- 10% random
    
    let price = basePrice - trendDown - weekendDiscount + randomVariation;
    price = Math.max(basePrice * 0.7, Math.min(basePrice * 1.3, price)); // Keep within 70-130% of base
    
    // Alternate between retailers
    const retailer = retailers[i % retailers.length];
    
    history.push({
      product_id: productId,
      retailer,
      price: parseFloat(price.toFixed(2)),
      ts: date.toISOString()
    });
  }
  
  return history;
}

async function main() {
  console.log('🚀 Generating price history for all products...\n');
  
  // Product price ranges by category
  const productPrices: Record<string, number> = {
    '1': 45.99,   // Acme Widget 3000
    '2': 65.99,   // Zenith Ultra Kettle
    '3': 25.99,   // EcoCo Reusable Bottle
    '4': 39.99,   // Acme Widget 2000
    '5': 89.99,   // Zenith Smart Toaster
    '6': 32.99,   // EcoCo Bamboo Cutlery Set
    '7': 129.99,  // Nimbus Noise-Cancelling Headphones
    '8': 79.99,   // Orbit Fitness Band
    '9': 49.99,   // Pioneer Bluetooth Speaker
    '10': 34.99,  // Nova LED Desk Lamp
    '11': 119.99, // Atlas Hiking Backpack 40L
    '12': 149.99, // Vertex Mechanical Keyboard
    '13': 45.99,  // Lumina Solar Charger
    '14': 59.99,  // Quanta USB-C Hub 9-in-1
    '15': 29.99,  // Summit Insulated Mug
    '16': 42.99,  // Terra Indoor Planter
    '17': 54.99,  // Volt Fast Charger 65W
    '18': 199.99, // Breeze Air Purifier
    '19': 69.99,  // Apex Gaming Mouse
    '20': 179.99, // Polar Smart Thermostat
    '21': 89.99,  // Echo Wireless Earbuds
    '22': 24.99,  // Helio Smart Bulb
    '23': 159.99, // Quantum SSD 1TB
    '24': 109.99, // Sierra Trail Shoes
    '25': 79.99,  // Aurora Hair Dryer
    '26': 94.99,  // Zenith Coffee Grinder
    '27': 29.99,  // Acme Widget Mini
    '28': 39.99,  // EcoCo Glass Food Containers
    '29': 99.99,  // Nimbus Travel Router
    '30': 49.99,  // Orbit Yoga Mat
  };
  
  const allPriceHistory: PriceDataPoint[] = [];
  
  // Generate price history for all products
  for (const [productId, basePrice] of Object.entries(productPrices)) {
    console.log(`Generating history for Product ${productId} (base: $${basePrice})...`);
    const history = generatePriceHistoryForProduct(productId, basePrice);
    allPriceHistory.push(...history);
  }
  
  console.log(`\n✅ Generated ${allPriceHistory.length} price data points`);
  
  // Update mock.ts file
  console.log('\n📝 Updating mock.ts file...');
  
  const mockPath = path.join(__dirname, 'lib', 'mock.ts');
  let content = fs.readFileSync(mockPath, 'utf-8');
  
  // Replace price history section
  const historyCode = `const priceHistory = ${JSON.stringify(allPriceHistory, null, 2)};`;
  
  const historyStart = content.indexOf('const priceHistory = [');
  if (historyStart !== -1) {
    const historyEnd = content.indexOf('];', historyStart) + 2;
    content = content.substring(0, historyStart) + historyCode + content.substring(historyEnd);
  }
  
  fs.writeFileSync(mockPath, content, 'utf-8');
  
  console.log(`✅ Updated mock.ts with ${allPriceHistory.length} price points`);
  console.log(`\n📊 Summary:`);
  console.log(`   • Products: 30`);
  console.log(`   • Days of history: 31 per product`);
  console.log(`   • Total data points: ${allPriceHistory.length}`);
  console.log(`   • Date range: Nov 10 - Dec 10, 2025`);
  console.log(`\n✨ All products now have complete price history!`);
}

main().catch(console.error);
