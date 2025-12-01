import axios from 'axios';

export interface BestBuyProduct {
  sku: number;
  name: string;
  type: string;
  regularPrice: number;
  salePrice: number;
  onSale: boolean;
  url: string;
  image: string;
  manufacturer: string;
  upc: string;
  inStoreAvailability: boolean;
  onlineAvailability: boolean;
}

export class BestBuyAPI {
  private apiKey: string;
  private baseUrl = 'https://api.bestbuy.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async searchProducts(query: string, pageSize = 10): Promise<BestBuyProduct[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/products(search=${encodeURIComponent(query)})`, {
        params: {
          apiKey: this.apiKey,
          format: 'json',
          pageSize,
          show: 'sku,name,type,regularPrice,salePrice,onSale,url,image,manufacturer,upc,inStoreAvailability,onlineAvailability'
        }
      });

      return response.data.products || [];
    } catch (error) {
      console.error('Best Buy API error:', error);
      return [];
    }
  }

  async getProductBySKU(sku: string): Promise<BestBuyProduct | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/products/${sku}.json`, {
        params: {
          apiKey: this.apiKey,
          show: 'sku,name,type,regularPrice,salePrice,onSale,url,image,manufacturer,upc,inStoreAvailability,onlineAvailability'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Best Buy API error:', error);
      return null;
    }
  }

  async getProductByUPC(upc: string): Promise<BestBuyProduct[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/products(upc=${upc})`, {
        params: {
          apiKey: this.apiKey,
          format: 'json',
          show: 'sku,name,type,regularPrice,salePrice,onSale,url,image,manufacturer,upc,inStoreAvailability,onlineAvailability'
        }
      });

      return response.data.products || [];
    } catch (error) {
      console.error('Best Buy API error:', error);
      return [];
    }
  }
}
