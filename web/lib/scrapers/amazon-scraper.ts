import { BaseScraper, ScrapedProduct } from './base-scraper';
import { Page } from 'playwright';

export class AmazonScraper extends BaseScraper {
  getRetailerName(): string {
    return 'Amazon';
  }

  async scrapeProduct(url: string): Promise<ScrapedProduct | null> {
    let page: Page | null = null;
    
    try {
      page = await this.createPage();
      await this.navigateWithProtection(page, url);

      const title = await page.$eval('#productTitle', el => el.textContent?.trim() || '')
        .catch(() => '');
      
      if (!title) {
        console.log('Amazon: Could not find product title');
        return null;
      }

      let price: number | null = null;
      const priceSelectors = [
        '.a-price .a-offscreen',
        '#priceblock_ourprice',
        '#priceblock_dealprice',
        '.a-price-whole'
      ];

      for (const selector of priceSelectors) {
        try {
          const priceText = await page.$eval(selector, el => el.textContent?.trim() || '');
          if (priceText) {
            price = this.parsePrice(priceText);
            if (price) break;
          }
        } catch {}
      }

      if (!price) {
        console.log('Amazon: Could not find price');
        return null;
      }

      const imageUrl = await page.$eval('#landingImage', (el: any) => el.src)
        .catch(() => undefined);

      const inStock = await page.evaluate(() => {
        const text = document.body.textContent || '';
        return !text.includes('Currently unavailable') && 
               !text.includes('Out of Stock');
      });

      const asin = url.match(/\/dp\/([A-Z0-9]{10})/)?.[1];

      return {
        title,
        price,
        currency: 'USD',
        url,
        retailer: this.getRetailerName(),
        inStock,
        imageUrl,
        sku: asin,
        scrapedAt: new Date()
      };

    } catch (error) {
      console.error('Amazon scraper error:', error);
      return null;
    } finally {
      if (page) await page.close();
    }
  }
}
