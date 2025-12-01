import { chromium } from 'playwright';

async function test() {
  console.log('\n🧪 Testing Playwright Scraper...\n');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('https://example.com');
  const title = await page.title();
  const h1 = await page.$eval('h1', el => el.textContent);
  
  console.log('✅ SUCCESS! Scraper is working!\n');
  console.log('📄 Page title:', title);
  console.log('📝 H1 text:', h1);
  
  await browser.close();
  
  console.log('\n🎉 Your data acquisition system is WORKING!\n');
}

test().catch(console.error);
