# Shopmyitems Marketplace

Shopmyitems is a Next.js marketplace website backed by Supabase. It is built for selling your own items and allowing approved sellers to list theirs with a low-commission model.

## Stack

- Next.js App Router
- React
- Supabase database
- Supabase row level security policies
- CSS in `app/globals.css`

## What is included

- Proportional, wide responsive marketplace homepage
- Featured listings loaded from Supabase when configured
- Fallback demo listings so the site remains viewable during setup
- Seller application form that submits to Supabase
- Low 5% seller commission messaging
- Marketplace policy sections
- Supabase schema for seller applications, seller profiles, listings, and orders

## Local setup

Install dependencies:

```bash
npm install
```

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

Add your Supabase project values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Run locally:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

## Supabase setup

1. Create or open your Supabase project.
2. Open the SQL editor.
3. Run the SQL in `supabase/schema.sql`.
4. Add active listings to the `listings` table.
5. Seller application submissions will save to `seller_applications`.

## Hostinger deployment

Use Hostinger's Node.js hosting for this Next.js version. Configure:

- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`
- Port: use the port Hostinger assigns through the environment

Add the same Supabase environment variables in Hostinger before starting the app.

## Notes

No marketplace data should be stored in localStorage. Listings, seller applications, seller profiles, and orders belong in Supabase.
