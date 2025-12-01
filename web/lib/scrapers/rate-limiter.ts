export class RateLimiter {
  private lastRequest = 0;
  private minDelay: number;
  private maxDelay: number;

  constructor(minDelayMs = 3000, maxDelayMs = 7000) {
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

  getRandomDelay(): number {
    return Math.floor(
      Math.random() * (this.maxDelay - this.minDelay) + this.minDelay
    );
  }
}
