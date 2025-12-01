import { BestBuyAPI } from './bestbuy';
import { BarcodeLookupAPI } from './barcode-lookup';

export { BestBuyAPI, BarcodeLookupAPI };
export type { BestBuyProduct } from './bestbuy';
export type { BarcodeProduct } from './barcode-lookup';

export interface DataSourceConfig {
  bestbuy?: {
    apiKey: string;
  };
  barcodeLookup?: {
    apiKey: string;
  };
}

export class DataAggregator {
  private bestbuy?: BestBuyAPI;
  private barcodeLookup?: BarcodeLookupAPI;

  constructor(config: DataSourceConfig) {
    if (config.bestbuy?.apiKey) {
      this.bestbuy = new BestBuyAPI(config.bestbuy.apiKey);
    }
    if (config.barcodeLookup?.apiKey) {
      this.barcodeLookup = new BarcodeLookupAPI(config.barcodeLookup.apiKey);
    }
  }

  async searchAllSources(query: string) {
    const results = await Promise.allSettled([
      this.bestbuy?.searchProducts(query),
      this.barcodeLookup?.searchProducts(query)
    ]);

    return {
      bestbuy: results[0].status === 'fulfilled' ? results[0].value : [],
      barcodeLookup: results[1].status === 'fulfilled' ? results[1].value : []
    };
  }

  async lookupByUPC(upc: string) {
    const results = await Promise.allSettled([
      this.bestbuy?.getProductByUPC(upc),
      this.barcodeLookup?.lookupBarcode(upc)
    ]);

    return {
      bestbuy: results[0].status === 'fulfilled' ? results[0].value : [],
      barcodeLookup: results[1].status === 'fulfilled' ? results[1].value : null
    };
  }
}
