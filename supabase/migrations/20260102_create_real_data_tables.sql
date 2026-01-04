-- Create retailers table
create table if not exists public.retailers (
  id text primary key,
  name text not null,
  domain text unique,
  eco_flags text,
  created_at timestamp with time zone default now()
);

-- Create offers table
create table if not exists public.offers (
  id text primary key,
  product_id text not null references public.products(id) on delete cascade,
  retailer_id text not null references public.retailers(id) on delete cascade,
  price numeric(10,2) not null,
  currency text not null default 'USD',
  url text not null,
  in_stock boolean not null default true,
  fetched_at timestamp with time zone default now()
);

-- Create price_history table
create table if not exists public.price_history (
  id text primary key,
  product_id text not null references public.products(id) on delete cascade,
  retailer_id text not null references public.retailers(id) on delete cascade,
  price numeric(10,2) not null,
  ts timestamp with time zone default now()
);

-- Create indexes for better query performance
create index if not exists idx_offers_product_id on public.offers(product_id);
create index if not exists idx_offers_retailer_id on public.offers(retailer_id);
create index if not exists idx_price_history_product_id on public.price_history(product_id);
create index if not exists idx_price_history_ts on public.price_history(ts);
create index if not exists idx_products_brand on public.products(brand);
create index if not exists idx_products_category on public.products(category);

-- Seed retailers
insert into public.retailers (id, name, domain) values
  ('amazon', 'Amazon', 'amazon.com'),
  ('walmart', 'Walmart', 'walmart.com'),
  ('target', 'Target', 'target.com'),
  ('bestbuy', 'Best Buy', 'bestbuy.com')
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security (RLS) - optional but recommended
alter table public.products enable row level security;
alter table public.retailers enable row level security;
alter table public.offers enable row level security;
alter table public.price_history enable row level security;

-- Create policies to allow public read access
create policy "Allow public read access on products"
  on public.products for select
  using (true);

create policy "Allow public read access on retailers"
  on public.retailers for select
  using (true);

create policy "Allow public read access on offers"
  on public.offers for select
  using (true);

create policy "Allow public read access on price_history"
  on public.price_history for select
  using (true);
