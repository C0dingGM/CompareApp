import fs from 'fs/promises';
import path from 'path';
import { BrowserContext } from 'playwright';

export class SessionManager {
  private cookiesDir = './data/sessions';
  private sessionsPath = './data/sessions/cookies.json';

  async ensureDirectory() {
    try {
      await fs.mkdir(this.cookiesDir, { recursive: true });
    } catch {
      // Directory exists
    }
  }

  async saveCookies(context: BrowserContext, sessionId = 'default') {
    await this.ensureDirectory();
    
    const cookies = await context.cookies();
    const sessionPath = path.join(this.cookiesDir, `${sessionId}.json`);
    
    await fs.writeFile(sessionPath, JSON.stringify({
      cookies,
      timestamp: Date.now(),
      userAgent: await context.pages()[0]?.evaluate(() => navigator.userAgent)
    }, null, 2));
    
    console.log(`Session saved: ${sessionId}`);
  }

  async loadCookies(context: BrowserContext, sessionId = 'default'): Promise<boolean> {
    await this.ensureDirectory();
    
    try {
      const sessionPath = path.join(this.cookiesDir, `${sessionId}.json`);
      const data = JSON.parse(await fs.readFile(sessionPath, 'utf-8'));
      
      // Check if session is less than 24 hours old
      const ageHours = (Date.now() - data.timestamp) / (1000 * 60 * 60);
      if (ageHours > 24) {
        console.log(`Session expired: ${sessionId}`);
        return false;
      }
      
      await context.addCookies(data.cookies);
      console.log(`Session loaded: ${sessionId}`);
      return true;
    } catch {
      console.log(`No session found: ${sessionId}`);
      return false;
    }
  }

  async clearSession(sessionId = 'default') {
    try {
      const sessionPath = path.join(this.cookiesDir, `${sessionId}.json`);
      await fs.unlink(sessionPath);
      console.log(`Session cleared: ${sessionId}`);
    } catch {
      // Session doesn't exist
    }
  }

  async listSessions(): Promise<string[]> {
    await this.ensureDirectory();
    
    try {
      const files = await fs.readdir(this.cookiesDir);
      return files
        .filter(f => f.endsWith('.json'))
        .map(f => f.replace('.json', ''));
    } catch {
      return [];
    }
  }
}
