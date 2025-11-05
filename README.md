# CompareApp

A minimal price comparison demo built with Next.js (App Router) and TypeScript. Search products, filter by brand/category, view current offers, and explore simple price history charts using mock data.

## Current functionality
- Home (/) with animated SVG background and inline search UI (brand/category filters, live suggestions).
- Products (/products) lists results or all products with tiny sparkline charts.
- Product detail (/product/[id]) shows brand, current offers (links), and a Recharts line chart of price history.
- Header search bar (desktop) navigates to /products?q=.

## API routes (mock)
- GET /api/search → { items } filtered by q, brand, category (web/app/api/search/route.ts).
- GET /api/products/[id] → product, offers, price_history or 404 (web/app/api/products/[id]/route.ts).
- GET /api/brands → { items: brands, categories } for filters (web/app/api/brands/route.ts).

## Data (mock)
- web/lib/mock.ts provides:
  - products, offers, priceHistory arrays
  - mockSearch(q, brand?, category?)
  - getProductWithOffers(id)
  - getAllProducts(), getBrands(), getCategories()
- Prisma schema (web/prisma/schema.prisma) outlines a future real DB model but is not used at runtime.

## Run locally
- cd web && npm install
- npm run dev (starts Next on http://localhost:3000 using dev-watch.mjs)
- npm run build && npm start for production build

## Tech
- Next.js 14 App Router, React 18, TypeScript, Tailwind CSS
- Recharts for price chart
- Simple SVG backgrounds (AnimatedBackground, ProductBackground, ProductsBackground)

## License
MIT