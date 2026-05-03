create extension if not exists pgcrypto;

create table if not exists public.seller_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  seller_type text not null,
  categories text,
  message text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now()
);

create table if not exists public.seller_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  display_name text not null,
  bio text,
  location text,
  commission_rate numeric(5,2) not null default 5.00,
  status text not null default 'pending' check (status in ('pending', 'active', 'paused', 'removed')),
  created_at timestamptz not null default now()
);

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid references public.seller_profiles(id) on delete set null,
  seller_name text not null,
  title text not null,
  description text,
  price numeric(10,2) not null check (price >= 0),
  category text not null,
  condition text,
  image_url text not null,
  badge text,
  status text not null default 'active' check (status in ('draft', 'active', 'sold', 'removed')),
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid references public.listings(id) on delete set null,
  buyer_email text not null,
  seller_id uuid references public.seller_profiles(id) on delete set null,
  subtotal numeric(10,2) not null,
  marketplace_fee numeric(10,2) not null default 0,
  status text not null default 'pending' check (status in ('pending', 'paid', 'shipped', 'completed', 'refunded', 'cancelled')),
  created_at timestamptz not null default now()
);

alter table public.seller_applications enable row level security;
alter table public.seller_profiles enable row level security;
alter table public.listings enable row level security;
alter table public.orders enable row level security;

create policy if not exists "Anyone can submit seller applications"
  on public.seller_applications for insert
  with check (true);

create policy if not exists "Anyone can view active listings"
  on public.listings for select
  using (status = 'active');

create policy if not exists "Anyone can view active seller profiles"
  on public.seller_profiles for select
  using (status = 'active');
