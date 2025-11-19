create table if not exists public.users_simple (
  username text primary key,
  password_hash text not null,
  password_salt text not null,
  created_at timestamptz not null default now()
);
