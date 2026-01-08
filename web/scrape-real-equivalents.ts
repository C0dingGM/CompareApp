import { chromium } from 'playwright';

// Map mock products to real product searches
const productMappings = [
  { id: '7', mock: 'Nimbus Noise-Cancelling Headphones', search: 'Sony WH-1000XM5', category: 'Electronics' },
  { id: '8', mock: 'Orbit Fitness Band', search: 'Fitbit Charge 6', category: 'Fitness' },
  { id: '9', mock: 'Pioneer Bluetooth Speaker', search: 'JBL Flip 6', category: 'Electronics' },
  { id: '12', mock: 'Vertex Mechanical Keyboard', search: 'Logitech MX Keys', category: 'Electronics' },
  { id: '19', mock: 'Apex Gaming Mouse', search: 'Logitech G502', category: 'Electronics' },
  { id: '21', mock: 'Echo Wireless Earbuds', search: 'Apple AirPods Pro', category: 'Electronics' },
  { id: '23', mock: 'Quantum SSD 1TB', search: 'Samsung 980 PRO 1TB', category: 'Electronics' },
  { id: '30', mock: 'Orbit Yoga Mat', search: 'Manduka PRO Yoga Mat', category: 'Fitness' },
];

async function scrapeAmazon(searchTerm: string) {
  console.log(`\n🔍 Searching Amazon for: ${searchTerm}`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  });
  const page = await context.newPage();
  
  try {
    const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(searchTerm)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    // Wait a bit for content
    await page.waitForTimeout(2000);
    
    // Try to get first product
    const product = await page.evaluate(() => {
      const item = document.querySelector('[data-component-type="s-search-result"]');
      if (!item) return null;
      
      const titleEl = item.querySelector('h2 a span');
      const priceWhole = item.querySelector('.a-price-whole');
      const priceFraction = item.querySelector('.a-price-fraction');
      const link = item.querySelector('h2 a');
      
      return {
        title: titleEl?.textContent?.trim() || '',
        price: priceWhole && priceFraction ? 
          parseFloat(`${priceWhole.textContent}.${priceFraction.textContent}`) : null,
        url: link ? 'https://amazon.com' + link.getAttribute('href') : '',
      };
    });
    
    if (product && product.title) {
      console.log('✅ Found:', product.title);
      console.log('   Price: $' + product.price);
      return { retailer: 'Amazon', ...product };
    } else {
      console.log('❌ No product found');
      return null;
    }
    
  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    return null;
  } finally {
    await browser.close();
  }
}

async function scrapeBestBuy(searchTerm: string) {
  console.log(`\n🔍 Searching Best Buy for: ${searchTerm}`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
  });
  const page = await context.newPage();
  
  try {
    const searchUrl = `https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(searchTerm)}`;
    await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    await page.waitForTimeout(2000);
    
    const product = await page.evaluate(() => {
      const item = document.querySelector('.sku-item');
      if (!item) return null;
      
      const titleEl = item.querySelector('.sku-title a');
      const priceEl = item.querySelector('.priceView-customer-price span');
      
      return {
        title: titleEl?.textContent?.trim() || '',
        price: priceEl ? parseFloat(priceEl.textContent?.replace(/[^0-9.]/g, '') || '0') : null,
        url: titleEl ? 'https://www.bestbuy.com' + titleEl.getAttribute('href') : '',
      };
    });
    
    if (product && product.title) {
      console.log('✅ Found:', product.title);
      console.log('   Price: $' + product.price);
      return { retailer: 'Best Buy', ...product };
    } else {
      console.log('❌ No product found');
      return null;
    }
    
  } catch (error) {
    console.error('❌ Error:', (error as Error).message);
    return null;
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log('🚀 Starting web scraping for real product equivalents...\n');
  console.log('=' .repeat(70));
  
  const results: any[] = [];
  
  // Scrape a few products
  for (const mapping of productMappings.slice(0, 3)) {
    console.log(`\n📦 Mock Product #${mapping.id}: ${mapping.mock}`);
    console.log(`   Real Equivalent: ${mapping.search}`);
    console.log('-'.repeat(70));
    
    const amazonData = await scrapeAmazon(mapping.search);
    if (amazonData) {
      results.push({
        mockId: mapping.id,
        mockName: mapping.mock,
        realSearch: mapping.search,
        category: mapping.category,
        ...amazonData
      });
    }
    
    // Wait between requests
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const bestbuyData = await scrapeBestBuy(mapping.search);
    if (bestbuyData) {
      results.push({
        mockId: mapping.id,
        mockName: mapping.mock,
        realSearch: mapping.search,
        category: mapping.category,
        ...bestbuyData
      });
    }
    
    // Wait between products
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  
  console.log('\n' + '='.repeat(70));
  console.log('📊 SCRAPING RESULTS:\n');
  
  if (results.length > 0) {
    console.log(`✅ Successfully scraped ${results.length} product offers\n`);
    results.forEach(r => {
      console.log(`Mock #${r.mockId}: ${r.mockName}`);
      console.log(`  → ${r.retailer}: ${r.title}`);
      console.log(`  → Price: $${r.price}`);
      console.log(`  → URL: ${r.url.substring(0, 60)}...`);
      console.log();
    });
    
    // Save to file
    const fs = require('fs');
    fs.writeFileSync(
      'scraped-real-data.json',
      JSON.stringify(results, null, 2)
    );
    console.log('💾 Data saved to: scraped-real-data.json');
  } else {
    console.log('❌ No data scraped (websites may be blocking)');
    console.log('\n💡 Alternative: Use Best Buy API instead');
    console.log('   Sign up at: https://developer.bestbuy.com');
  }
  
  console.log('='.repeat(70));
}

main();
