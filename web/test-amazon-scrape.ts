import { scrapeProductUrl } from './lib/scrapers/index';

async function testAmazonScraper() {
  console.log('\n🛒 Testing Amazon Scraper...\n');
  
  // Example Amazon product URL - AirPods Pro
  const testUrl = 'https://www.amazon.com/dp/B0CHWRXH8B';
  
  console.log('🔍 Scraping:', testUrl);
  console.log('⏳ Please wait (this may take 10-20 seconds)...\n');
  
  try {
    const result = await scrapeProductUrl(testUrl);
    
    if (result) {
      console.log('✅ SUCCESS! Product scraped:\n');
      console.log('📦 Title:', result.title);
      console.log('💰 Price:', `$${result.price} ${result.currency}`);
      console.log('🏪 Retailer:', result.retailer);
      console.log('📦 In Stock:', result.inStock ? 'Yes' : 'No');
      console.log('🔑 SKU/ASIN:', result.sku || 'N/A');
      console.log('🖼️  Image:', result.imageUrl ? 'Yes' : 'No');
      console.log('📅 Scraped at:', result.scrapedAt);
      console.log('\n🎉 Web scraping is FULLY WORKING!\n');
    } else {
      console.log('❌ No data returned. This could mean:');
      console.log('   - Amazon blocked the request');
      console.log('   - Product page structure changed');
      console.log('   - Network issue');
    }
    
  } catch (error: any) {
    console.error('❌ Error:', error.message);
  }
}

testAmazonScraper();
