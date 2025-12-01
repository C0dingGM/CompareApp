'use client';

import { useState } from 'react';

export default function DataTestPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const testScraper = async () => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || 'Failed to scrape');
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const testExternalAPI = async (query: string) => {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`/api/external-data?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      
      if (!response.ok) {
        setError(data.error || 'Failed to fetch');
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">📊 Data Acquisition Test</h1>
        <p className="text-slate-300 mb-8">Test your scrapers and API integrations</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Scraper Test */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">🔍 Web Scraper Test</h2>
            <p className="text-slate-300 mb-4 text-sm">
              Try URLs from Amazon or Walmart (or test with example.com)
            </p>
            
            <div className="space-y-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.amazon.com/dp/..."
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              
              <button
                onClick={testScraper}
                disabled={loading || !url}
                className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 text-white font-semibold rounded-lg transition"
              >
                {loading ? 'Scraping...' : 'Scrape URL'}
              </button>

              <div className="space-y-2">
                <p className="text-slate-400 text-xs">Quick test URLs:</p>
                <button
                  onClick={() => setUrl('https://example.com')}
                  className="text-xs px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-300 rounded"
                >
                  example.com (test infrastructure)
                </button>
              </div>
            </div>
          </div>

          {/* API Test */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">📡 External API Test</h2>
            <p className="text-slate-300 mb-4 text-sm">
              Search Best Buy and Barcode Lookup APIs
            </p>
            
            <div className="space-y-3">
              <button
                onClick={() => testExternalAPI('iphone')}
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold rounded-lg transition"
              >
                Search: iPhone
              </button>
              
              <button
                onClick={() => testExternalAPI('macbook')}
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold rounded-lg transition"
              >
                Search: MacBook
              </button>
              
              <button
                onClick={() => testExternalAPI('laptop')}
                disabled={loading}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-semibold rounded-lg transition"
              >
                Search: Laptop
              </button>
            </div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <p className="text-red-200 font-semibold">❌ Error</p>
            <p className="text-red-300 text-sm mt-1">{error}</p>
          </div>
        )}

        {/* Results Display */}
        {result && (
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">✅ Results</h3>
            
            {result.data && (
              <div className="space-y-4">
                {/* Scraper Result */}
                {result.data.title && (
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-2">{result.data.title}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400">Price</p>
                        <p className="text-white font-semibold">
                          {result.data.currency} ${result.data.price}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400">Retailer</p>
                        <p className="text-white">{result.data.retailer}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Stock</p>
                        <p className={result.data.inStock ? 'text-green-400' : 'text-red-400'}>
                          {result.data.inStock ? 'In Stock' : 'Out of Stock'}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-400">SKU</p>
                        <p className="text-white">{result.data.sku || 'N/A'}</p>
                      </div>
                    </div>
                    {result.data.imageUrl && (
                      <img 
                        src={result.data.imageUrl} 
                        alt={result.data.title}
                        className="mt-4 max-w-xs rounded-lg"
                      />
                    )}
                  </div>
                )}

                {/* API Results */}
                {result.data.bestbuy && result.data.bestbuy.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-blue-300 mb-2">
                      Best Buy Results ({result.data.bestbuy.length})
                    </h4>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {result.data.bestbuy.slice(0, 5).map((item: any, i: number) => (
                        <div key={i} className="bg-white/5 rounded p-3 border border-white/10">
                          <p className="text-white font-semibold text-sm">{item.name}</p>
                          <div className="flex gap-4 mt-1 text-xs">
                            <span className="text-green-400">${item.salePrice}</span>
                            {item.onSale && <span className="text-orange-400">ON SALE</span>}
                            <span className="text-slate-400">SKU: {item.sku}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {result.data.barcodeLookup && result.data.barcodeLookup.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300 mb-2">
                      Barcode Lookup Results ({result.data.barcodeLookup.length})
                    </h4>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {result.data.barcodeLookup.slice(0, 5).map((item: any, i: number) => (
                        <div key={i} className="bg-white/5 rounded p-3 border border-white/10">
                          <p className="text-white font-semibold text-sm">{item.product_name}</p>
                          <div className="flex gap-4 mt-1 text-xs">
                            <span className="text-slate-400">Brand: {item.brand}</span>
                            <span className="text-slate-400">Category: {item.category}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Raw JSON */}
            <details className="mt-4">
              <summary className="text-slate-300 cursor-pointer hover:text-white">
                Show Raw JSON
              </summary>
              <pre className="mt-2 p-4 bg-black/30 rounded text-xs text-slate-300 overflow-x-auto">
                {JSON.stringify(result, null, 2)}
              </pre>
            </details>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-200 mb-2">📝 Setup Instructions</h3>
          <div className="text-yellow-100 text-sm space-y-2">
            <p><strong>To see real data:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Get free API keys from Best Buy and Barcode Lookup</li>
              <li>Add them to <code className="bg-black/30 px-2 py-1 rounded">.env.local</code></li>
              <li>Restart the dev server</li>
              <li>Click the API test buttons above</li>
            </ol>
            <p className="mt-4 text-xs text-yellow-200/80">
              See <code>QUICKSTART.md</code> and <code>DATA_ACQUISITION.md</code> for details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
