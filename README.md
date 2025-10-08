# CompareApp


## Function summary

- web/lib/mock.ts
  - mockSearch(q: string): Filters mock products by brand/title.
  - getProductWithOffers(id: string): Returns a product with its offers and price history.
- API routes
  - GET /api/search (web/app/api/search/route.ts): Calls mockSearch and returns { items }.
  - GET /api/products/[id] (web/app/api/products/[id]/route.ts): Returns product, offers, price_history or 404.
- UI components
  - HomePage (web/app/page.tsx): Client page with search() to fetch /api/search and list results.
  - ProductPage (web/app/product/[id]/page.tsx): Server component; renders product details, offers, Recharts line chart.
  - RootLayout (web/app/layout.tsx): Wraps pages with QueryProvider and basic layout.
  - QueryProvider (web/app/providers.tsx): Creates and provides a React Query client.
- Data model (web/prisma/schema.prisma)
  - Prisma models for Product, Retailer, Offer, PriceHistory, Wishlist, WishlistItem, Alert, Deal, Vote.