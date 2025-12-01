import { Page } from 'playwright';

export class HumanBehavior {
  async randomScroll(page: Page) {
    const scrolls = Math.floor(Math.random() * 3) + 1;
    
    for (let i = 0; i < scrolls; i++) {
      const scrollAmount = Math.random() * 300 + 100;
      await page.evaluate((amount) => {
        window.scrollBy({
          top: amount,
          behavior: 'smooth'
        });
      }, scrollAmount);
      
      await this.randomDelay(500, 1500);
    }
  }

  async randomMouseMove(page: Page) {
    const x = Math.random() * 800 + 100;
    const y = Math.random() * 600 + 100;
    
    await page.mouse.move(x, y, {
      steps: Math.floor(Math.random() * 10) + 5
    });
  }

  async randomDelay(min = 1000, max = 3000): Promise<void> {
    const delay = Math.floor(Math.random() * (max - min) + min);
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  async simulateHumanBrowsing(page: Page) {
    await this.randomMouseMove(page);
    await this.randomDelay(500, 1000);
    await this.randomScroll(page);
    await this.randomDelay(1000, 2000);
  }

  async randomHover(page: Page, selector: string) {
    try {
      const element = await page.$(selector);
      if (element) {
        const box = await element.boundingBox();
        if (box) {
          await page.mouse.move(
            box.x + box.width / 2,
            box.y + box.height / 2,
            { steps: Math.floor(Math.random() * 5) + 3 }
          );
          await this.randomDelay(200, 500);
        }
      }
    } catch {
      // Element not found, skip
    }
  }
}
