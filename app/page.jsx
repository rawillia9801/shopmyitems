import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Box,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Heart,
  Home,
  LockKeyhole,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Truck,
  Upload,
  Users,
} from 'lucide-react';
import { createSupabaseServerClient } from '../lib/supabase/server';
import { submitSellerApplication } from './actions';

const fallbackItems = [
  {
    title: 'Vintage Denim Jacket',
    seller_name: 'Maya K.',
    price: 42,
    category: 'Fashion',
    image_url: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
    badge: 'Seller pick',
  },
  {
    title: 'Walnut Side Table',
    seller_name: 'Home Finds Co.',
    price: 88,
    category: 'Home',
    image_url: 'https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=900&q=80',
    badge: 'Local favorite',
  },
  {
    title: 'Mirrorless Camera Kit',
    seller_name: 'Theo R.',
    price: 315,
    category: 'Electronics',
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    badge: 'Inspected',
  },
  {
    title: 'Handmade Ceramic Bowl',
    seller_name: 'Clay & Table',
    price: 28,
    category: 'Handmade',
    image_url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
    badge: 'New arrival',
  },
];

const categories = ['Clothing', 'Home Goods', 'Electronics', 'Collectibles', 'Books', 'Handmade', 'Sports', 'Kids'];

const policies = [
  ['Seller Policy', Store, 'Accurate descriptions, real photos, item condition, shipping details, fair pricing, and no prohibited items.'],
  ['Buyer Protection', ShieldCheck, 'Buyers can report missing, damaged, or materially different items for marketplace review.'],
  ['Returns & Refunds', PackageCheck, 'Listings must show return terms, while not-as-described items may still qualify for review.'],
  ['Shipping Policy', Truck, 'Sellers choose shipping, pickup, or both, and must package items safely with clear handling times.'],
  ['Commission & Fees', CircleDollarSign, 'A low 5% marketplace commission is recommended, excluding processor fees, taxes, and shipping.'],
  ['Trust & Safety', LockKeyhole, 'No scams, harassment, counterfeit goods, stolen property, or off-platform payment pressure.'],
];

async function getFeaturedItems() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return fallbackItems;
  }

  const { data, error } = await supabase
    .from('listings')
    .select('title, seller_name, price, category, image_url, badge')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(8);

  if (error || !data?.length) {
    return fallbackItems;
  }

  return data;
}

function Header() {
  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Shopmyitems home">
          <span className="brand-mark"><ShoppingBag size={22} /></span>
          <span>Shopmyitems</span>
        </a>
        <div className="nav-links">
          <a href="#shop">Shop</a>
          <a href="#sell">Sell</a>
          <a href="#how-it-works">How it works</a>
          <a href="#policies">Policies</a>
          <a className="nav-cta" href="#seller-application">Start selling</a>
        </div>
      </nav>
    </header>
  );
}

function ProductCard({ item }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={item.image_url} alt={item.title} fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 25vw" />
        <button aria-label={`Save ${item.title}`}><Heart size={18} /></button>
        <span>{item.badge || 'Featured'}</span>
      </div>
      <div className="product-content">
        <div className="product-meta">
          <span>{item.category}</span>
          <span><Star size={14} fill="currentColor" /> 4.9</span>
        </div>
        <h3>{item.title}</h3>
        <p>Sold by {item.seller_name}</p>
        <div className="product-footer">
          <strong>${Number(item.price).toFixed(0)}</strong>
          <a href="#seller-application">View details <ChevronRight size={16} /></a>
        </div>
      </div>
    </article>
  );
}

export default async function HomePage() {
  const featuredItems = await getFeaturedItems();

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero section-pad wide-section">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> A marketplace built for everyday sellers</div>
            <h1>Sell your stuff, discover great finds, and keep more of every sale.</h1>
            <p>
              Shopmyitems helps individuals, creators, and small sellers list quality items with clear policies,
              buyer confidence, and a low-commission marketplace model powered by Supabase.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#shop">Browse items <ArrowRight size={18} /></a>
              <a className="secondary-button" href="#seller-application">Become a seller</a>
            </div>
            <div className="hero-proof">
              <span><BadgeCheck size={18} /> Low 5% seller commission</span>
              <span><ShieldCheck size={18} /> Buyer protection standards</span>
              <span><Truck size={18} /> Shipping or local pickup</span>
            </div>
          </div>

          <div className="hero-card" aria-label="Marketplace preview">
            <div className="search-card"><Search size={18} /><span>Search vintage, handmade, home goods...</span></div>
            <div className="hero-product-grid">
              {featuredItems.slice(0, 3).map((item) => (
                <div className="mini-product" key={item.title}>
                  <Image src={item.image_url} alt="" width={110} height={88} />
                  <div><strong>{item.title}</strong><span>${Number(item.price).toFixed(0)}</span></div>
                </div>
              ))}
            </div>
            <div className="seller-callout">
              <Users size={20} />
              <div><strong>Open seller marketplace</strong><p>Apply, list, ship, and get paid after successful orders.</p></div>
            </div>
          </div>
        </section>

        <section className="category-strip wide-section" aria-label="Popular categories">
          {categories.map((category) => <a href="#shop" key={category}>{category}</a>)}
        </section>

        <section className="trust-banner wide-section">
          <div><Box size={22} /><strong>Curated categories</strong><span>Everyday items, small shops, and handmade goods.</span></div>
          <div><ShieldCheck size={22} /><strong>Supabase-backed data</strong><span>Listings and seller applications belong in Supabase, not local storage.</span></div>
          <div><CircleDollarSign size={22} /><strong>Low commission</strong><span>Designed so sellers keep more from each completed sale.</span></div>
        </section>

        <section id="shop" className="section-pad section-block wide-section">
          <div className="section-heading">
            <span className="eyebrow"><ShoppingBag size={16} /> Featured marketplace finds</span>
            <h2>Quality items from everyday sellers and small shops.</h2>
            <p>Listings come from Supabase when configured, with clean fallbacks so the site remains viewable during setup.</p>
          </div>
          <div className="product-grid">
            {featuredItems.map((item) => <ProductCard item={item} key={`${item.title}-${item.seller_name}`} />)}
          </div>
        </section>

        <section id="sell" className="seller-section">
          <div className="wide-section seller-inner">
            <div className="seller-panel">
              <div>
                <span className="eyebrow"><Store size={16} /> Sell on Shopmyitems</span>
                <h2>A seller-friendly marketplace with simple rules and low commission.</h2>
                <p>List personal items, handmade goods, collectibles, home goods, and more. Supabase stores seller applications and active listings.</p>
              </div>
              <div className="commission-card"><span>Recommended seller commission</span><strong>5%</strong><p>Low marketplace fee on completed item sales. Payment processor fees may still apply.</p></div>
            </div>
            <div className="steps-grid">
              <article className="step-card"><span><Upload size={24} /></span><h3>List in minutes</h3><p>Upload photos, set your price, choose shipping or pickup, and publish after review.</p></article>
              <article className="step-card"><span><ShieldCheck size={24} /></span><h3>Sell with confidence</h3><p>Clear standards help transactions feel professional for buyers and sellers.</p></article>
              <article className="step-card"><span><CircleDollarSign size={24} /></span><h3>Keep more</h3><p>A simple low commission model helps sellers earn more from each sale.</p></article>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad section-block wide-section split-section">
          <div className="section-heading left-align">
            <span className="eyebrow"><ClipboardCheck size={16} /> How it works</span>
            <h2>Built for a real marketplace backend.</h2>
            <p>Seller applications submit to Supabase. Listings load from Supabase. Auth, image storage, and orders can be added on the same foundation.</p>
          </div>
          <div className="timeline">
            <div className="timeline-item"><span>1</span><div><h3>Create your seller profile</h3><p>Apply with your contact details, seller type, and item categories.</p></div></div>
            <div className="timeline-item"><span>2</span><div><h3>Publish trusted listings</h3><p>Use real photos, condition notes, pricing, and shipping or pickup details.</p></div></div>
            <div className="timeline-item"><span>3</span><div><h3>Complete the order</h3><p>Buyers purchase, sellers fulfill, and marketplace policies guide disputes.</p></div></div>
          </div>
        </section>

        <section id="seller-application" className="section-pad application-section wide-section">
          <div className="application-copy">
            <span className="eyebrow"><CheckCircle2 size={16} /> Seller application</span>
            <h2>Accept seller applications directly into Supabase.</h2>
            <p>This form submits to the seller_applications table. No browser storage. No localStorage.</p>
            <ul>
              <li><CheckCircle2 size={18} /> Collect seller type, item categories, and contact details.</li>
              <li><CheckCircle2 size={18} /> Screen sellers before approving marketplace access.</li>
              <li><CheckCircle2 size={18} /> Keep all marketplace data in Supabase.</li>
            </ul>
          </div>
          <form className="application-form" action={submitSellerApplication}>
            <label>Full name<input name="full_name" type="text" placeholder="Your name" required /></label>
            <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Seller type<select name="seller_type" defaultValue="" required><option value="" disabled>Choose one</option><option>Individual seller</option><option>Small business</option><option>Maker or artist</option><option>Local reseller</option></select></label>
            <label>Categories you plan to sell<input name="categories" type="text" placeholder="Clothing, home goods, electronics..." /></label>
            <label>What do you want to sell?<textarea name="message" placeholder="Tell us about your items, condition, pricing, and shipping plan." required /></label>
            <button className="primary-button" type="submit">Submit seller interest <ArrowRight size={18} /></button>
          </form>
        </section>

        <section id="policies" className="section-pad section-block wide-section">
          <div className="section-heading">
            <span className="eyebrow"><Home size={16} /> Marketplace policies</span>
            <h2>Clear rules for sellers, buyers, payments, shipping, and safety.</h2>
            <p>Starter policies are included for a marketplace launch and should be reviewed before real transactions go live.</p>
          </div>
          <div className="policy-grid">
            {policies.map(([title, Icon, text]) => (
              <article className="policy-card" key={title}>
                <div className="policy-title"><span><Icon size={22} /></span><h3>{title}</h3></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer wide-section">
        <div><a className="brand" href="#top"><span className="brand-mark"><ShoppingBag size={22} /></span><span>Shopmyitems</span></a><p>Buy and sell quality finds with a friendly, low-commission marketplace.</p></div>
        <div className="footer-links"><a href="#shop">Shop</a><a href="#sell">Sell</a><a href="#policies">Policies</a><a href="#seller-application">Apply</a></div>
      </footer>
    </>
  );
}
