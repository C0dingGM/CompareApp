import { Browser, BrowserContext, Page } from 'playwright';
import { StealthBrowser } from './stealth-browser';
import { RateLimiter } from './rate-limiter';
import { HumanBehavior } from './human-behavior';
import { SessionManager } from './session-manager';
import { RobotsParser } from './robots-parser';

export interface ScrapedProduct {
  title: string;
  price: number;
  currency: string;
  url: string;
  retailer: string;
  inStock: boolean;
  imageUrl?: string;
  brand?: string;
  upc?: string;
  sku?: string;
  scrapedAt: Date;
}

export abstract class BaseScraper {
  protected browser: Browser | null = null;
  protected context: BrowserContext | null = null;
  protected stealthBrowser = new StealthBrowser();
  protected rateLimiter = new RateLimiter(3000, 7000); // 3-7 seconds
  protected humanBehavior = new HumanBehavior();
  protected sessionManager = new SessionManager();
  protected robotsParser = new RobotsParser();

  abstract getRetailerName(): string;
  abstract scrapeProduct(url: string): Promise<ScrapedProduct | null>;

  protected async initBrowser(): Promise<void> {
    if (!this.browser) {
      this.browser = await this.stealthBrowser.createStealthBrowser();
      this.context = await this.stealthBrowser.createStealthContext(this.browser);
      
      // Try to load existing session
      await this.sessionManager.loadCookies(this.context, this.getRetailerName());
    }
  }

  protected async createPage(): Promise<Page> {
    await this.initBrowser();
    const page = await this.context!.newPage();
    return page;
  }

  protected async closeBrowser(): Promise<void> {
    // Save session before closing
    if (this.context) {
      await this.sessionManager.saveCookies(this.context, this.getRetailerName());
    }
    
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
      this.context = null;
    }
  }

  protected async navigateWithProtection(page: Page, url: string): Promise<void> {
    // Check robots.txt
    const canScrape = await this.robotsParser.canScrape(url);
    if (!canScrape) {
      throw new Error(`Blocked by robots.txt: ${url}`);
    }

    // Get recommended crawl delay from robots.txt
    const crawlDelay = await this.robotsParser.getCrawlDelay(url);
    if (crawlDelay > 0) {
      console.log(`Respecting crawl-delay: ${crawlDelay}ms`);
      await this.delay(crawlDelay);
    }

    // Wait for rate limit
    await this.rateLimiter.waitForNextRequest();

    // Navigate to page
    await page.goto(url, { 
      waitUntil: 'domcontentloaded', 
      timeout: 30000 
    });

    // Simulate human behavior
    await this.humanBehavior.simulateHumanBrowsing(page);
  }

  protected parsePrice(priceText: string): number | null {
    const cleaned = priceText.replace(/[^0-9.,]/g, '');
    const normalized = cleaned.replace(/,/g, '.');
    const price = parseFloat(normalized);
    return isNaN(price) ? null : price;
  }

  protected delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
