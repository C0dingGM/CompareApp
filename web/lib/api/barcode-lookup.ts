import axios from 'axios';

export interface BarcodeProduct {
  barcode_number: string;
  barcode_type: string;
  barcode_formats: string;
  product_name: string;
  category: string;
  manufacturer: string;
  brand: string;
  model: string;
  mpn: string;
  asin: string;
  title: string;
  description: string;
  images: string[];
  stores: Array<{
    name: string;
    country: string;
    currency: string;
    currency_symbol: string;
    price: string;
    sale_price: string;
    link: string;
  }>;
}

export class BarcodeLookupAPI {
  private apiKey: string;
  private baseUrl = 'https://api.barcodelookup.com/v3';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async lookupBarcode(barcode: string): Promise<BarcodeProduct | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/products`, {
        params: {
          barcode,
          key: this.apiKey
        }
      });

      const products = response.data.products;
      return products && products.length > 0 ? products[0] : null;
    } catch (error) {
      console.error('Barcode Lookup API error:', error);
      return null;
    }
  }

  async searchProducts(query: string): Promise<BarcodeProduct[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/products`, {
        params: {
          search: query,
          key: this.apiKey
        }
      });

      return response.data.products || [];
    } catch (error) {
      console.error('Barcode Lookup API error:', error);
      return [];
    }
  }
}
