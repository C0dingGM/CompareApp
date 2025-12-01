import { BaseScraper, ScrapedProduct } from './base-scraper';
import { Page } from 'playwright';

export class WalmartScraper extends BaseScraper {
  getRetailerName(): string {
    return 'Walmart';
  }

  async scrapeProduct(url: string): Promise<ScrapedProduct | null> {
    let page: Page | null = null;
    
    try {
      page = await this.createPage();
      await this.navigateWithProtection(page, url);

      const title = await page.$eval('h1[itemprop="name"]', el => el.textContent?.trim() || '')
        .catch(() => '');
      
      if (!title) {
        console.log('Walmart: Could not find product title');
        return null;
      }

      let price: number | null = null;
      const priceSelectors = [
        '[itemprop="price"]',
        'span[data-automation-id="product-price"]',
        '.price-characteristic'
      ];

      for (const selector of priceSelectors) {
        try {
          const priceText = await page.$eval(selector, el => {
            return el.textContent?.trim() || el.getAttribute('content') || '';
          });
          if (priceText) {
            price = this.parsePrice(priceText);
            if (price) break;
          }
        } catch {}
      }

      if (!price) {
        console.log('Walmart: Could not find price');
        return null;
      }

      const imageUrl = await page.$eval('img[data-testid="hero-image-container"]', (el: any) => el.src)
        .catch(() => undefined);

      const inStock = await page.evaluate(() => {
        const text = document.body.textContent || '';
        return !text.includes('Out of stock') && 
               !text.includes('Not available');
      });

      const itemId = url.match(/\/ip\/[^\/]+\/(\d+)/)?.[1];

      return {
        title,
        price,
        currency: 'USD',
        url,
        retailer: this.getRetailerName(),
        inStock,
        imageUrl,
        sku: itemId,
        scrapedAt: new Date()
      };

    } catch (error) {
      console.error('Walmart scraper error:', error);
      return null;
    } finally {
      if (page) await page.close();
    }
  }
}
