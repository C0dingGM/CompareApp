#!/usr/bin/env node

/**
 * Test script for data acquisition system
 * Tests scrapers, APIs, and job queue
 */

import { scrapeProductUrl } from './lib/scrapers/index';
import { BestBuyAPI, BarcodeLookupAPI, DataAggregator } from './lib/api/index';

async function testScrapers() {
  console.log('\n🔍 Testing Web Scrapers...\n');

  const testUrls = [
    'https://www.amazon.com/dp/B08N5WRWNW', // Example Amazon URL
    'https://www.walmart.com/ip/Apple-AirPods-Pro/520468661' // Example Walmart URL
  ];

  for (const url of testUrls) {
    try {
      console.log(`Scraping: ${url}`);
      const result = await scrapeProductUrl(url);
      
      if (result) {
        console.log('✅ Success:', {
          title: result.title.substring(0, 50) + '...',
          price: result.price,
          retailer: result.retailer,
          inStock: result.inStock
        });
      } else {
        console.log('❌ Failed to scrape');
      }
    } catch (error: any) {
      console.log('❌ Error:', error.message);
    }
    console.log('---');
  }
}

async function testAPIs() {
  console.log('\n📡 Testing External APIs...\n');

  const bestbuyKey = process.env.BESTBUY_API_KEY;
  const barcodeKey = process.env.BARCODE_LOOKUP_API_KEY;

  if (bestbuyKey) {
    console.log('Testing Best Buy API...');
    try {
      const bestbuy = new BestBuyAPI(bestbuyKey);
      const results = await bestbuy.searchProducts('iphone');
      console.log(`✅ Found ${results.length} products from Best Buy`);
      if (results.length > 0) {
        console.log('Sample:', {
          name: results[0].name,
          price: results[0].salePrice,
          sku: results[0].sku
        });
      }
    } catch (error: any) {
      console.log('❌ Best Buy API Error:', error.message);
    }
  } else {
    console.log('⚠️  BESTBUY_API_KEY not set, skipping');
  }

  console.log('---');

  if (barcodeKey) {
    console.log('Testing Barcode Lookup API...');
    try {
      const barcode = new BarcodeLookupAPI(barcodeKey);
      const result = await barcode.lookupBarcode('885909950805'); // Example UPC
      if (result) {
        console.log('✅ Found product:', {
          name: result.product_name,
          brand: result.brand,
          category: result.category
        });
      } else {
        console.log('❌ No product found');
      }
    } catch (error: any) {
      console.log('❌ Barcode API Error:', error.message);
    }
  } else {
    console.log('⚠️  BARCODE_LOOKUP_API_KEY not set, skipping');
  }
}

async function testAggregator() {
  console.log('\n🔄 Testing Data Aggregator...\n');

  const aggregator = new DataAggregator({
    bestbuy: {
      apiKey: process.env.BESTBUY_API_KEY || ''
    },
    barcodeLookup: {
      apiKey: process.env.BARCODE_LOOKUP_API_KEY || ''
    }
  });

  try {
    const results = await aggregator.searchAllSources('macbook');
    console.log('✅ Aggregated results:');
    console.log(`  - Best Buy: ${results.bestbuy?.length || 0} products`);
    console.log(`  - Barcode Lookup: ${results.barcodeLookup?.length || 0} products`);
  } catch (error: any) {
    console.log('❌ Aggregator Error:', error.message);
  }
}

async function main() {
  console.log('🚀 CompareApp Data Acquisition System Test\n');
  console.log('='.repeat(50));

  // Check environment
  console.log('\n📋 Environment Check:');
  console.log('  BESTBUY_API_KEY:', process.env.BESTBUY_API_KEY ? '✅ Set' : '❌ Not set');
  console.log('  BARCODE_LOOKUP_API_KEY:', process.env.BARCODE_LOOKUP_API_KEY ? '✅ Set' : '❌ Not set');
  console.log('  REDIS_URL:', process.env.REDIS_URL || 'redis://localhost:6379');

  // Run tests
  await testScrapers();
  await testAPIs();
  await testAggregator();

  console.log('\n' + '='.repeat(50));
  console.log('✨ Tests completed!\n');
}

main().catch(console.error);
