import axios from 'axios';

export class RobotsParser {
  private cache = new Map<string, { content: string; timestamp: number }>();
  private cacheExpiry = 24 * 60 * 60 * 1000; // 24 hours

  async canScrape(url: string, userAgent = '*'): Promise<boolean> {
    try {
      const urlObj = new URL(url);
      const domain = urlObj.origin;
      const pathname = urlObj.pathname;

      const robotsTxt = await this.getRobotsTxt(domain);
      
      if (!robotsTxt) {
        // No robots.txt found, assume allowed
        return true;
      }

      const rules = this.parseRobotsTxt(robotsTxt, userAgent);
      
      // Check if path is disallowed
      for (const disallowedPath of rules.disallow) {
        if (this.pathMatches(pathname, disallowedPath)) {
          console.log(`Blocked by robots.txt: ${pathname}`);
          return false;
        }
      }

      // Check if path is explicitly allowed
      for (const allowedPath of rules.allow) {
        if (this.pathMatches(pathname, allowedPath)) {
          return true;
        }
      }

      return true;
    } catch (error) {
      console.error('Error checking robots.txt:', error);
      // On error, be conservative and allow
      return true;
    }
  }

  async getCrawlDelay(url: string, userAgent = '*'): Promise<number> {
    try {
      const domain = new URL(url).origin;
      const robotsTxt = await this.getRobotsTxt(domain);
      
      if (!robotsTxt) return 0;

      const rules = this.parseRobotsTxt(robotsTxt, userAgent);
      return rules.crawlDelay;
    } catch {
      return 0;
    }
  }

  private async getRobotsTxt(domain: string): Promise<string | null> {
    const cached = this.cache.get(domain);
    
    if (cached && Date.now() - cached.timestamp < this.cacheExpiry) {
      return cached.content;
    }

    try {
      const robotsUrl = `${domain}/robots.txt`;
      const response = await axios.get(robotsUrl, {
        timeout: 5000,
        headers: {
          'User-Agent': 'CompareApp-Bot/1.0'
        }
      });

      this.cache.set(domain, {
        content: response.data,
        timestamp: Date.now()
      });

      return response.data;
    } catch {
      return null;
    }
  }

  private parseRobotsTxt(robotsTxt: string, userAgent: string): {
    disallow: string[];
    allow: string[];
    crawlDelay: number;
  } {
    const lines = robotsTxt.split('\n');
    const rules = {
      disallow: [] as string[],
      allow: [] as string[],
      crawlDelay: 0
    };

    let isRelevantSection = false;

    for (let line of lines) {
      line = line.trim();
      
      // Skip comments and empty lines
      if (line.startsWith('#') || !line) continue;

      const [key, ...valueParts] = line.split(':');
      const value = valueParts.join(':').trim();

      if (key.toLowerCase() === 'user-agent') {
        isRelevantSection = value === '*' || value.toLowerCase() === userAgent.toLowerCase();
      } else if (isRelevantSection) {
        if (key.toLowerCase() === 'disallow' && value) {
          rules.disallow.push(value);
        } else if (key.toLowerCase() === 'allow' && value) {
          rules.allow.push(value);
        } else if (key.toLowerCase() === 'crawl-delay') {
          rules.crawlDelay = parseInt(value) * 1000; // Convert to ms
        }
      }
    }

    return rules;
  }

  private pathMatches(pathname: string, pattern: string): boolean {
    if (pattern === '/') return true;
    
    // Simple wildcard matching
    const regexPattern = pattern
      .replace(/\*/g, '.*')
      .replace(/\?/g, '.');
    
    const regex = new RegExp(`^${regexPattern}`);
    return regex.test(pathname);
  }
}
