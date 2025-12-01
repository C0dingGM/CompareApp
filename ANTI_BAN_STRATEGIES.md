# Anti-Ban Strategies for Web Scraping

## 🛡️ How to Avoid IP Bans

### Current Implementation (Basic Protection)

Your scrapers already include some protection:

✅ **User-Agent Rotation** - Random browser signatures
✅ **Delays Between Requests** - 2-second pauses
✅ **Headless Browser** - Looks more like real browsing
✅ **Error Handling** - Graceful failures

**Location**: `web/lib/scrapers/base-scraper.ts`

---

## 🚀 Anti-Ban Techniques (Ordered by Effectiveness)

### 1. **Use Official APIs First** ⭐⭐⭐⭐⭐
**Best solution - No ban risk!**

```typescript
// Instead of scraping Amazon:
✅ Use: Best Buy API (free, 50k/day)
✅ Use: Walmart Open API
✅ Use: eBay API
✅ Use: Target RedSky API

// Only scrape when APIs don't exist
```

**Implementation**: Already done! See `web/lib/api/`

---

### 2. **Rotating Residential Proxies** ⭐⭐⭐⭐⭐
**Most effective for large-scale scraping**

#### Services:
- **Bright Data** (formerly Luminati) - Industry leader
- **SmartProxy** - Good balance of cost/quality
- **Oxylabs** - Premium option
- **ScraperAPI** - Handles rotation automatically

#### Implementation:

```typescript
// web/lib/scrapers/proxy-manager.ts
import { chromium } from 'playwright';

export class ProxyManager {
  private proxies: string[];
  private currentIndex = 0;

  constructor(proxyList: string[]) {
    // Format: "http://user:pass@proxy.com:port"
    this.proxies = proxyList;
  }

  getNextProxy(): string {
    const proxy = this.proxies[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.proxies.length;
    return proxy;
  }

  async createBrowserWithProxy() {
    const proxy = this.getNextProxy();
    const [protocol, rest] = proxy.split('://');
    const [auth, server] = rest.split('@');
    const [username, password] = auth.split(':');
    const [host, port] = server.split(':');

    return await chromium.launch({
      headless: true,
      proxy: {
        server: `${protocol}://${host}:${port}`,
        username,
        password
      }
    });
  }
}

// Usage in scraper:
const proxyManager = new ProxyManager([
  'http://user:pass@proxy1.com:8080',
  'http://user:pass@proxy2.com:8080',
  'http://user:pass@proxy3.com:8080'
]);

const browser = await proxyManager.createBrowserWithProxy();
```

**Cost**: $75-$500/month depending on traffic

---

### 3. **Request Rate Limiting** ⭐⭐⭐⭐
**Essential for any scraping**

```typescript
// web/lib/scrapers/rate-limiter.ts
export class RateLimiter {
  private lastRequest = 0;
  private minDelay: number;
  private maxDelay: number;

  constructor(minDelayMs = 2000, maxDelayMs = 5000) {
    this.minDelay = minDelayMs;
    this.maxDelay = maxDelayMs;
  }

  async waitForNextRequest() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequest;
    const randomDelay = Math.floor(
      Math.random() * (this.maxDelay - this.minDelay) + this.minDelay
    );

    if (timeSinceLastRequest < randomDelay) {
      await this.delay(randomDelay - timeSinceLastRequest);
    }

    this.lastRequest = Date.now();
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage:
const rateLimiter = new RateLimiter(3000, 7000); // 3-7 seconds
await rateLimiter.waitForNextRequest();
await page.goto(url);
```

---

### 4. **Browser Fingerprinting Protection** ⭐⭐⭐⭐

```typescript
// web/lib/scrapers/stealth-browser.ts
import { chromium } from 'playwright';

export async function createStealthBrowser() {
  const browser = await chromium.launch({
    headless: true,
    args: [
      '--disable-blink-features=AutomationControlled',
      '--disable-dev-shm-usage',
      '--disable-web-security',
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
    locale: 'en-US',
    timezoneId: 'America/New_York',
    geolocation: { latitude: 40.7128, longitude: -74.0060 },
    permissions: ['geolocation']
  });

  // Remove webdriver flag
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', {
      get: () => false
    });
  });

  return context;
}
```

---

### 5. **Session Management & Cookies** ⭐⭐⭐

```typescript
// web/lib/scrapers/session-manager.ts
import fs from 'fs/promises';

export class SessionManager {
  private cookiesPath = './data/cookies.json';

  async saveCookies(context: any) {
    const cookies = await context.cookies();
    await fs.writeFile(this.cookiesPath, JSON.stringify(cookies));
  }

  async loadCookies(context: any) {
    try {
      const cookies = JSON.parse(await fs.readFile(this.cookiesPath, 'utf-8'));
      await context.addCookies(cookies);
    } catch {
      // No cookies to load
    }
  }
}

// Usage: Reuse sessions to appear as returning user
const sessionManager = new SessionManager();
await sessionManager.loadCookies(context);
// ... scrape ...
await sessionManager.saveCookies(context);
```

---

### 6. **Human-Like Behavior** ⭐⭐⭐

```typescript
// web/lib/scrapers/human-behavior.ts
export class HumanBehavior {
  async randomScroll(page: any) {
    const scrolls = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < scrolls; i++) {
      await page.evaluate(() => {
        window.scrollBy(0, Math.random() * 300 + 100);
      });
      await this.randomDelay(500, 1500);
    }
  }

  async randomMouseMove(page: any) {
    await page.mouse.move(
      Math.random() * 800,
      Math.random() * 600
    );
  }

  async randomDelay(min = 1000, max = 3000) {
    const delay = Math.floor(Math.random() * (max - min) + min);
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  async simulateHumanBrowsing(page: any) {
    await this.randomMouseMove(page);
    await this.randomDelay(500, 1000);
    await this.randomScroll(page);
    await this.randomDelay(1000, 2000);
  }
}

// Usage:
const human = new HumanBehavior();
await page.goto(url);
await human.simulateHumanBrowsing(page);
```

---

### 7. **Distributed Scraping (Multiple IPs)** ⭐⭐⭐⭐

```typescript
// web/lib/scrapers/distributed-scraper.ts
export class DistributedScraper {
  private workers: string[]; // List of worker server IPs

  constructor(workerUrls: string[]) {
    this.workers = workerUrls;
  }

  async distributeScraping(urls: string[]) {
    const chunks = this.chunkArray(urls, this.workers.length);
    
    const results = await Promise.all(
      chunks.map((chunk, i) => 
        this.scrapeOnWorker(this.workers[i], chunk)
      )
    );

    return results.flat();
  }

  private chunkArray(array: any[], size: number) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  private async scrapeOnWorker(workerUrl: string, urls: string[]) {
    // Send scraping job to remote worker
    const response = await fetch(`${workerUrl}/scrape`, {
      method: 'POST',
      body: JSON.stringify({ urls })
    });
    return response.json();
  }
}
```

---

### 8. **Respect robots.txt** ⭐⭐⭐

```typescript
// web/lib/scrapers/robots-parser.ts
import axios from 'axios';

export class RobotsParser {
  private cache = new Map<string, any>();

  async canScrape(url: string, userAgent = '*'): Promise<boolean> {
    const domain = new URL(url).origin;
    const robotsUrl = `${domain}/robots.txt`;

    if (!this.cache.has(domain)) {
      try {
        const response = await axios.get(robotsUrl);
        this.cache.set(domain, response.data);
      } catch {
        return true; // No robots.txt, assume allowed
      }
    }

    const robots = this.cache.get(domain);
    const pathname = new URL(url).pathname;
    
    // Simple parser - check for disallowed paths
    const lines = robots.split('\n');
    for (const line of lines) {
      if (line.toLowerCase().startsWith('disallow:')) {
        const path = line.split(':')[1].trim();
        if (pathname.startsWith(path)) {
          return false;
        }
      }
    }

    return true;
  }
}
```

---

## 📋 Recommended Implementation Strategy

### Phase 1: MVP (What you have now)
```
✅ User-agent rotation
✅ Basic delays
✅ Headless browser
✅ Use official APIs when possible
```

### Phase 2: Scale to 100s of products/day
```
+ Rate limiting (3-7 second delays)
+ Session management
+ Respect robots.txt
+ Better error handling & retries
```

### Phase 3: Scale to 1000s of products/day
```
+ Rotating proxies (Bright Data/SmartProxy)
+ Browser fingerprinting protection
+ Human-like behavior simulation
+ Distributed scraping across multiple IPs
```

### Phase 4: Enterprise scale
```
+ Premium residential proxies
+ CAPTCHA solving services
+ Multiple browser profiles
+ IP reputation monitoring
+ Automatic ban detection & recovery
```

---

## 💰 Cost Breakdown

| Scale | Daily Scrapes | Solution | Monthly Cost |
|-------|---------------|----------|--------------|
| **Small** | <100 | Current setup + rate limiting | $0 |
| **Medium** | 100-1,000 | + Rotating proxies (basic) | $75-150 |
| **Large** | 1,000-10,000 | + Premium proxies + CAPTCHA | $300-500 |
| **Enterprise** | 10,000+ | Dedicated infrastructure | $1,000+ |

---

## 🎯 Best Practices

1. **Always prefer official APIs** - Zero ban risk
2. **Start slow** - Test with low volume first
3. **Monitor for blocks** - Track error rates
4. **Rotate everything** - IPs, user agents, request patterns
5. **Be respectful** - Don't overwhelm servers
6. **Cache aggressively** - Don't re-scrape same data
7. **Use job queues** - Spread requests over time
8. **Have backups** - Multiple proxy providers

---

## 🚨 What NOT to Do

❌ Scrape same IP repeatedly (instant ban)
❌ Ignore rate limits (triggers alarms)
❌ Use datacenter IPs (easily detected)
❌ Scrape during peak hours (more scrutiny)
❌ Ignore robots.txt (legal issues)
❌ Scrape protected/auth pages (violations)

---

## 🔧 Quick Implementation

I can add these for you:

1. **Proxy rotation** (needs proxy service account)
2. **Advanced rate limiting** (ready to implement)
3. **Human behavior simulation** (ready to implement)
4. **Session management** (ready to implement)

Which would you like me to add first?

---

## 📚 Resources

- **Proxy Services**: Bright Data, SmartProxy, Oxylabs
- **CAPTCHA Solving**: 2Captcha, Anti-Captcha
- **Tools**: Playwright, Puppeteer Stealth
- **Monitoring**: Sentry for error tracking

**Bottom line**: For MVP, use APIs. For scale, add proxies + rate limiting. 🎯
