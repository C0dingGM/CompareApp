import { BaseScraper } from './base-scraper';
import { AmazonScraper } from './amazon-scraper';
import { WalmartScraper } from './walmart-scraper';

export { BaseScraper, AmazonScraper, WalmartScraper };
export type { ScrapedProduct } from './base-scraper';

export function getScraperForUrl(url: string): BaseScraper | null {
  const urlLower = url.toLowerCase();
  
  if (urlLower.includes('amazon.com')) {
    return new AmazonScraper();
  } else if (urlLower.includes('walmart.com')) {
    return new WalmartScraper();
  }
  
  return null;
}

export async function scrapeProductUrl(url: string) {
  const scraper = getScraperForUrl(url);
  if (!scraper) {
    throw new Error('No scraper available for this URL');
  }
  
  return await scraper.scrapeProduct(url);
}
