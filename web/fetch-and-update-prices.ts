#!/usr/bin/env node

/**
 * Fetch real product data from APIs and update mock data
 */

import { BestBuyAPI, BarcodeLookupAPI, DataAggregator } from './lib/api/index';
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

async function fetchProductData() {
  console.log('\n🚀 Fetching product data from APIs...\n');

  const bestbuyKey = process.env.BESTBUY_API_KEY;
  const barcodeKey = process.env.BARCODE_LOOKUP_API_KEY;

  if (!bestbuyKey && !barcodeKey) {
    console.log('⚠️  No API keys found. Set BESTBUY_API_KEY or BARCODE_LOOKUP_API_KEY');
    console.log('Using sample data instead...\n');
    return generateSampleData();
  }

  const aggregator = new DataAggregator({
    bestbuy: bestbuyKey ? { apiKey: bestbuyKey } : undefined,
    barcodeLookup: barcodeKey ? { apiKey: barcodeKey } : undefined
  });

  const productQueries = [
    'headphones',
    'keyboard', 
    'mouse',
    'monitor',
    'laptop'
  ];

  const allProducts: any[] = [];
  const allPriceHistory: PriceDataPoint[] = [];

  for (const query of productQueries) {
    console.log(`Searching for: ${query}`);
    try {
      const results = await aggregator.searchAllSources(query);
      
      // Process Best Buy results
      if (results.bestbuy && results.bestbuy.length > 0) {
        const product = results.bestbuy[0];
        const productId = `bb-${product.sku}`;
        
        allProducts.push({
          id: productId,
          brand: product.manufacturer || 'Unknown',
          title: product.name,
          category: product.type || 'Electronics'
        });

        allPriceHistory.push({
          product_id: productId,
          retailer: 'Best Buy',
          price: product.salePrice || product.regularPrice,
          ts: new Date().toISOString()
        });

        console.log(`  ✅ Found: ${product.name} - $${product.salePrice || product.regularPrice}`);
      }

      // Process Barcode Lookup results
      if (results.barcodeLookup && results.barcodeLookup.length > 0) {
        const product = results.barcodeLookup[0];
        const productId = `bl-${product.barcode_number}`;
        
        allProducts.push({
          id: productId,
          brand: product.brand || 'Unknown',
          title: product.product_name,
          category: product.category || 'General'
        });

        // Add prices from stores
        if (product.stores && product.stores.length > 0) {
          product.stores.forEach(store => {
            const price = parseFloat(store.price || store.sale_price || '0');
            if (price > 0) {
              allPriceHistory.push({
                product_id: productId,
                retailer: store.name,
                price: price,
                ts: new Date().toISOString()
              });
            }
          });
          console.log(`  ✅ Found: ${product.product_name} from ${product.stores.length} stores`);
        }
      }

      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error: any) {
      console.log(`  ❌ Error searching ${query}:`, error.message);
    }
  }

  return { products: allProducts, priceHistory: allPriceHistory };
}

function generateSampleData() {
  console.log('📊 Generating sample data with current timestamp...\n');
  
  const now = new Date();
  const products = [
    { id: '1', brand: 'Acme', title: 'Acme Widget 3000', category: 'Gadgets' },
    { id: '2', brand: 'Zenith', title: 'Zenith Ultra Kettle', category: 'Kitchen' },
    { id: '3', brand: 'EcoCo', title: 'EcoCo Reusable Bottle', category: 'Outdoors' },
  ];

  const priceHistory: PriceDataPoint[] = [];
  
  // Generate 30 days of price history for each product
  for (const product of products) {
    const basePrice = 20 + Math.random() * 80;
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      // Add some price variation
      const variation = (Math.random() - 0.5) * 10;
      const trendDown = i * 0.2; // Slight downward trend
      const price = Math.max(10, basePrice + variation - trendDown);
      
      priceHistory.push({
        product_id: product.id,
        retailer: i % 2 === 0 ? 'Amazon' : 'Walmart',
        price: parseFloat(price.toFixed(2)),
        ts: date.toISOString()
      });
    }
    
    console.log(`  ✅ Generated history for: ${product.title}`);
  }

  return { products, priceHistory };
}

async function updateMockFile(products: any[], priceHistory: PriceDataPoint[]) {
  console.log('\n📝 Updating mock.ts file...\n');

  const mockPath = path.join(__dirname, 'lib', 'mock.ts');
  let content = fs.readFileSync(mockPath, 'utf-8');

  // Update price history section
  const historyCode = `const priceHistory = ${JSON.stringify(priceHistory, null, 2)};`;
  
  const historyStart = content.indexOf('const priceHistory = [');
  if (historyStart !== -1) {
    const historyEnd = content.indexOf('];', historyStart) + 2;
    content = content.substring(0, historyStart) + historyCode + content.substring(historyEnd);
  }

  fs.writeFileSync(mockPath, content, 'utf-8');
  console.log(`✅ Updated ${priceHistory.length} price data points`);
  console.log(`✅ Data timestamp: ${new Date().toLocaleString()}\n`);
}

async function main() {
  console.log('🎯 CompareApp Price Data Updater\n');
  console.log('='.repeat(60));

  try {
    const { products, priceHistory } = await fetchProductData();
    
    if (priceHistory.length > 0) {
      await updateMockFile(products, priceHistory);
      console.log('✨ Success! Price data updated.\n');
      console.log('📊 Summary:');
      console.log(`   • Products: ${products.length}`);
      console.log(`   • Price points: ${priceHistory.length}`);
      console.log(`   • Updated: ${new Date().toLocaleString()}\n`);
    } else {
      console.log('⚠️  No price data fetched. Mock file not updated.\n');
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);
