# PRD.md

# Product Requirements Document (PRD)  
**Project:** Interactive Price Comparison App  
**Prepared for:** Development team (using Claude Code & supporting tools)  
**Version:** 1.0  
**Date:** 2025-10-01  

---

## 1. Overview  
We are building a next-generation **price comparison application** that combines live price tracking, historical price graphs, and crowdsourced deals. The goal is to differentiate from typical comparison apps by providing **community-driven insights**, **eco/local filters**, and **data-rich decision support** (price history, alerts, alternatives).  

The app will be available as:  
- **Web application** (Next.js React frontend)  
- **Mobile experience** (via responsive web; React Native later phase)  
- **Chrome Extension** (quick comparisons & wishlist integration)  

---

## 2. Key Features  

### Core Features  
1. Live price tracking across multiple retailers  
2. Price history graphs (trend analysis)  
3. Target price/date alerts  
4. Wishlist with conditions (target price, target date)  
5. Variants & bundle comparison (sizes, models, packs)  

### Discovery & Alternatives  
6. Similar quality, lower-price recommendations (AI-based)  
7. Local availability filter (geo + inventory API)  
8. Eco-friendly seller filter  
9. Cross-region/currency price comparison  
10. Coupons & promotions integration  

### Community & Crowdsourcing  
11. Crowdsourced deal submissions  
12. Voting/ranking system for best deals  
13. Comments & buying tips  
14. Deal categories/tags (refurbished, eco, local, etc.)  

### Personalization & Engagement  
15. Personalized recommendations  
16. Smart filters & sorting (price, local-only, eco, shipping)  
17. Gamification (points, badges, leaderboards)  
18. Wishlist sharing (gifts, groups)  

### Platform & Management  
19. Multi-platform support (Web, Chrome Extension, Mobile phase 2)  
20. Admin & analytics dashboard  

---

## 3. User Personas  
- **Everyday Shopper:** Wants quick comparisons, local store options.  
- **Deal Hunter:** Interested in crowdsourced deals, voting, and alerts.  
- **Eco-Conscious Buyer:** Needs filters for eco-friendly/ethical retailers.  
- **Tech Enthusiast:** Uses Chrome extension for instant price overlays.  

---

## 4. Technical Architecture  

### Frontend  
- **Framework:** Next.js (React + TypeScript) on Vercel  
- **UI:** TailwindCSS + Radix UI  
- **Charts:** Recharts or Apache ECharts  
- **Maps/Local:** Mapbox GL  
- **State/Data:** TanStack Query (React Query) + Zod for validation  
- **Auth:** Clerk or Auth0  

### Chrome Extension  
- Manifest V3 (content scripts + background service worker)  
- Popup UI with React + Vite  
- Functions: detect product pages, send metadata to API, show comparisons/wishlist actions  

### Backend (APIs)  
- **Framework:** Node.js (NestJS preferred for structure, or Next.js API routes for MVP)  
- **Hosting:**  
  - API & frontend: Vercel (reads, lightweight writes)  
  - Workers: Fly.io / AWS Fargate for scraping, schedulers, alerts  
- **Validation:** Zod / class-validator  

### Workers (Price Tracking & Alerts)  
- **Scraping:** Playwright (JS) with rotating proxies (Bright Data/ScraperAPI)  
- **APIs:** Use retailer/affiliate APIs where possible (Amazon, Walmart, etc.)  
- **Scheduler/Jobs:** BullMQ + Redis (Upstash) or Temporal.io  
- **Notifications:** Firebase Cloud Messaging, APNs, Postmark for email  

### Data Layer  
- **Primary DB:** PostgreSQL (Neon/AWS RDS)  
- **Extensions:**  
  - TimescaleDB (time-series for price_history)  
  - pgvector (embeddings for product similarity)  
  - PostGIS (geo for local filters)  
- **Search:** Typesense (self-host) or Algolia (managed)  
- **Cache/Queues:** Redis (Upstash/AWS)  

### ML & Ranking  
- **Embeddings:** sentence-transformers (Python service) or OpenAI embeddings → pgvector  
- **Product matching:** Hybrid (UPC/SKU exact, fuzzy match, embeddings)  

### Monitoring & DevOps  
- **Error tracking:** Sentry  
- **Metrics/logging:** OpenTelemetry + Grafana/Prometheus or Datadog  
- **CI/CD:** GitHub Actions + Prisma migrations  
- **Infra as Code:** Terraform  

---

## 5. Database Schema (Core)  
- **products** (id, upc, brand, title, attrs_json, vector)  
- **retailers** (id, name, domain, eco_flags, geo_json)  
- **offers** (id, product_id, retailer_id, price, currency, url, in_stock, fetched_at)  
- **price_history** (id, product_id, retailer_id, price, ts) [Timescale hypertable]  
- **wishlists** (id, user_id), wishlist_items (wishlist_id, product_id, target_price, target_date)  
- **alerts** (id, user_id, product_id, condition_json, last_fired_at)  
- **deals** (id, user_id, title, product_ref, price, store_ref, tags, lat, lng)  
- **votes** (id, user_id, deal_id, value)  

---

## 6. MVP Build Plan (Phase 1, 8–12 weeks)  
1. **Frontend MVP:** Next.js app with auth, product search, price charts, wishlist & alerts  
2. **Backend MVP:** Node API, Postgres schema, price tracking worker (Playwright + BullMQ)  
3. **Chrome Extension MVP:** Detect product pages, show price compare popup, wishlist add  
4. **Community MVP:** Users can submit deals, upvote/downvote  
5. **Data:** Store price history in TimescaleDB, implement simple AI product matching  
6. **Filters:** Local-only and eco-friendly seller filters (basic)  

---

## 7. Phase 2 (Post-MVP)  
- Real-time notifications & live updating charts  
- Mobile-native app (React Native + Expo)  
- Full gamification (points, badges, leaderboards)  
- Embedding-powered alternatives engine  
- Advanced moderation & community tagging  
- Deeper affiliate program integrations  

---

## 8. Success Metrics  
- Daily active users (DAU) growth  
- Average wishlist size & alert usage per user  
- Number of crowdsourced deals submitted/voted weekly  
- % of price alerts successfully triggering purchases  
- Engagement on eco/local filters  

---

## 9. Risks & Mitigations  
- **Scraping blocks:** Prefer retailer APIs, use rotating proxies responsibly  
- **Data accuracy:** Cross-verify with multiple sources, crowd verification via user reports  
- **Moderation load:** Automate with OpenAI moderation + community flagging  
- **Scaling costs:** Use Upstash Redis, Neon Postgres for serverless efficiency  

---

## 10. Open Questions  
- Should wishlist sharing include group-buy features?  
- Which affiliate networks provide best API coverage?  
- Do we allow user-uploaded receipts for “proof of deal”?  

---

**End of Document**  
