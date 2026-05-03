import Image from 'next/image';
import {
  BadgeCheck,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Car,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Gamepad2,
  Gem,
  Gift,
  Hammer,
  Heart,
  Home,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  MessageCircle,
  PackageCheck,
  PawPrint,
  Search,
  ShieldCheck,
  Shirt,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Tag,
  Truck,
  User,
  UserCheck,
  Users,
  Watch,
} from 'lucide-react';
import { createSupabaseServerClient } from '../lib/supabase/server';
import { submitSellerApplication } from './actions';

const fallbackItems = [
  {
    title: 'Vintage Denim Jacket',
    seller_name: 'Maya K.',
    price: 42,
    original_price: 58,
    category: 'Clothing & Shoes',
    condition: 'Good',
    location: 'Brooklyn, NY',
    shipping: 'Ships for $6.99',
    rating: '4.9',
    image_url: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
    badge: 'Daily deal',
  },
  {
    title: 'Walnut Side Table',
    seller_name: 'Home Finds Co.',
    price: 88,
    original_price: 120,
    category: 'Home & Furniture',
    condition: 'Like New',
    location: 'Chicago, IL',
    shipping: 'Local pickup',
    rating: '4.8',
    image_url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
    badge: 'Local deal',
  },
  {
    title: 'Mirrorless Camera Kit',
    seller_name: 'Theo R.',
    price: 315,
    original_price: 399,
    category: 'Electronics',
    condition: 'Excellent',
    location: 'Austin, TX',
    shipping: 'Free shipping',
    rating: '4.9',
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    badge: 'Verified seller',
  },
  {
    title: 'Handmade Ceramic Bowl',
    seller_name: 'Clay & Table',
    price: 28,
    original_price: 35,
    category: 'Handmade & Custom',
    condition: 'Handmade',
    location: 'Portland, OR',
    shipping: 'Ships nationwide',
    rating: '5.0',
    image_url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
    badge: 'New arrival',
  },
  {
    title: 'DeWalt Tool Set 20pc',
    seller_name: 'Garage Goods',
    price: 119,
    original_price: 155,
    category: 'Tools & Equipment',
    condition: 'Good',
    location: 'Dallas, TX',
    shipping: 'Local pickup',
    rating: '4.7',
    image_url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80',
    badge: 'Great value',
  },
  {
    title: 'Classic Vinyl Bundle',
    seller_name: 'Record Room',
    price: 65,
    original_price: 85,
    category: 'Books, Music & Media',
    condition: 'Very Good',
    location: 'Nashville, TN',
    shipping: 'Ships for $5.99',
    rating: '4.9',
    image_url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=900&q=80',
    badge: 'Collector find',
  },
  {
    title: 'Wireless Headphones',
    seller_name: 'Sound Swap',
    price: 59,
    original_price: 79,
    category: 'Electronics',
    condition: 'Like New',
    location: 'Seattle, WA',
    shipping: 'Free shipping',
    rating: '4.8',
    image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    badge: 'Price drop',
  },
  {
    title: 'Leather Backpack',
    seller_name: 'City Carry',
    price: 75,
    original_price: 99,
    category: 'Clothing & Shoes',
    condition: 'Like New',
    location: 'Atlanta, GA',
    shipping: 'Ships for $7.99',
    rating: '4.8',
    image_url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    badge: 'Trending',
  },
];

const categoryNav = [
  ['Women', Shirt],
  ['Men', Shirt],
  ['Electronics', Watch],
  ['Toys', Gift],
  ['Gaming', Gamepad2],
  ['Home', Home],
  ['Vintage', Sparkles],
  ['Beauty', Gem],
  ['Kids', Users],
  ['Sports', BadgeCheck],
  ['Handmade', Store],
  ['Office', BriefcaseBusiness],
  ['Pet', PawPrint],
  ['Outdoor', MapPin],
  ['Tools', Hammer],
  ['Books', BookOpen],
];

const categoryTiles = [
  ['Electronics', 'Phones, laptops, cameras, gaming', Watch],
  ['Clothing & Shoes', 'Women, men, kids, bags, watches', Shirt],
  ['Home & Furniture', 'Decor, appliances, storage, office', Home],
  ['Beauty & Personal Care', 'Skincare, grooming, tools, fragrance', Gem],
  ['Toys & Games', 'Board games, dolls, puzzles, video games', Gift],
  ['Sports & Outdoors', 'Fitness, camping, bikes, fishing', BadgeCheck],
  ['Tools & Equipment', 'Power tools, hand tools, lawn gear', Hammer],
  ['Automotive', 'Parts, tires, accessories, detailing', Car],
];

const sellerCards = [
  ['Clay & Table', 'Handmade home goods', '5.0', 'Portland, OR'],
  ['Home Finds Co.', 'Furniture and decor', '4.8', 'Chicago, IL'],
  ['Record Room', 'Vinyl and music media', '4.9', 'Nashville, TN'],
  ['Garage Goods', 'Tools and equipment', '4.7', 'Dallas, TX'],
];

const policies = [
  ['Terms', ClipboardCheck],
  ['Privacy', LockKeyhole],
  ['Seller Policy', Store],
  ['Buyer Protection', ShieldCheck],
  ['Seller Protection', UserCheck],
  ['Prohibited Items', PackageCheck],
  ['Returns', Truck],
  ['Fees', CircleDollarSign],
  ['Community', Users],
];

const buyerSteps = [
  ['Search or browse items', Search],
  ['Review seller details', Star],
  ['Buy, message, or make an offer', MessageCircle],
  ['Receive or arrange pickup', Truck],
];

const sellerSteps = [
  ['Create an account', UserCheck],
  ['Upload photos and details', ShoppingBag],
  ['Set price and delivery options', Tag],
  ['Sell and get paid', CircleDollarSign],
];

async function getMarketplaceItems() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return fallbackItems;
  }

  const { data, error } = await supabase
    .from('listings')
    .select('title, seller_name, price, original_price, category, condition, location, shipping, rating, image_url, badge')
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(12);

  if (error || !data?.length) {
    return fallbackItems;
  }

  return data;
}

function Header() {
  return (
    <header className="site-header">
      <div className="top-nav wide-section">
        <a className="brand" href="#top" aria-label="Shopmyitems home">
          <span className="brand-mark"><ShoppingBag size={22} /></span>
          <span>Shopmyitems</span>
        </a>
        <form className="global-search" action="#shop">
          <input aria-label="Search marketplace" placeholder="Search for anything" />
          <button type="submit" aria-label="Search"><Search size={22} /></button>
        </form>
        <div className="utility-actions">
          <a href="#deals">Deals</a>
          <a href="#saved">Saved</a>
          <a href="#messages">Messages</a>
          <a href="#signin">Sign In</a>
          <a className="icon-link" href="#notifications" aria-label="Notifications"><Bell size={20} /></a>
          <a className="icon-link" href="#cart" aria-label="Cart"><ShoppingCart size={21} /></a>
          <a className="sell-button" href="#seller-application">Sell</a>
        </div>
      </div>
      <nav className="category-nav wide-section" aria-label="Marketplace categories">
        {categoryNav.map(([name, Icon]) => (
          <a href="#shop" key={name}><Icon size={22} /><span>{name}</span></a>
        ))}
        <a href="#categories"><ChevronRight size={22} /><span>View all</span></a>
      </nav>
    </header>
  );
}

function ProductCard({ item }) {
  const originalPrice = Number(item.original_price || item.price + 15);
  const price = Number(item.price);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image src={item.image_url} alt={item.title} fill sizes="(max-width: 760px) 50vw, (max-width: 1200px) 25vw, 16vw" />
        <button aria-label={`Save ${item.title}`}><Heart size={18} /></button>
        <span>{item.badge || 'Featured'}</span>
      </div>
      <div className="product-content">
        <h3>{item.title}</h3>
        <div className="price-row"><strong>${price.toFixed(0)}</strong><s>${originalPrice.toFixed(0)}</s></div>
        <p>{item.condition || 'Good condition'}</p>
        <div className="rating-row"><Star size={14} fill="currentColor" /><span>{item.rating || '4.8'}</span><span>·</span><span>{item.location || 'Shipping available'}</span></div>
        <div className="shipping-row"><Truck size={14} /><span>{item.shipping || 'Shipping available'}</span></div>
        <a className="quick-view" href="#shop">View Item</a>
      </div>
    </article>
  );
}

function ProductRow({ id, title, subtitle, items }) {
  return (
    <section id={id} className="commerce-section wide-section">
      <div className="row-heading">
        <div><h2>{title}</h2><p>{subtitle}</p></div>
        <a href="#shop">View all</a>
      </div>
      <div className="product-row">
        {items.map((item) => <ProductCard item={item} key={`${id}-${item.title}-${item.seller_name}`} />)}
      </div>
    </section>
  );
}

function StepGroup({ title, steps }) {
  return (
    <article className="how-card">
      <h3>{title}</h3>
      <div className="how-steps">
        {steps.map(([label, Icon], index) => (
          <div key={label}>
            <span><Icon size={20} /></span>
            <p><strong>{index + 1}.</strong> {label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default async function HomePage() {
  const items = await getMarketplaceItems();
  const dailyDeals = items.slice(0, 6);
  const newlyListed = [...items].reverse().slice(0, 6);
  const localDeals = [...items.slice(2), ...items.slice(0, 2)].slice(0, 6);
  const recommended = [...items.slice(4), ...items.slice(0, 4)].slice(0, 6);

  return (
    <>
      <Header />
      <main id="top">
        <section className="promo-hero wide-section">
          <div className="promo-copy">
            <span className="eyebrow"><Sparkles size={16} /> Daily finds, local deals, trusted sellers</span>
            <h1>Shop deals from everyday sellers.</h1>
            <p>Find furniture, electronics, clothing, tools, collectibles, handmade goods, and more.</p>
            <div className="promo-actions">
              <a className="primary-button" href="#shop">Shop deals</a>
              <a className="secondary-button" href="#seller-application">List an item</a>
            </div>
          </div>
          <div className="promo-grid">
            {dailyDeals.slice(0, 4).map((item) => (
              <div key={`promo-${item.title}`}>
                <Image src={item.image_url} alt={item.title} width={220} height={150} />
                <strong>{item.title}</strong>
                <span>${Number(item.price).toFixed(0)}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="categories" className="category-tile-section wide-section">
          {categoryTiles.map(([name, description, Icon]) => (
            <a className="category-tile" href="#shop" key={name}>
              <Icon size={28} />
              <strong>{name}</strong>
              <span>{description}</span>
            </a>
          ))}
        </section>

        <ProductRow id="shop" title="Featured Deals" subtitle="Popular finds with strong prices and trusted seller details." items={dailyDeals} />
        <ProductRow id="newly-listed" title="Newly Listed" subtitle="Fresh items just added by the community." items={newlyListed} />
        <ProductRow id="local-deals" title="Local Deals Near You" subtitle="Pickup-friendly listings and nearby marketplace finds." items={localDeals} />
        <ProductRow id="recommended" title="Picks For You" subtitle="Recommended items, trending products, and saved-search style discoveries." items={recommended} />

        <section className="seller-strip wide-section">
          <div className="row-heading"><div><h2>Recommended Sellers</h2><p>Follow storefronts with strong ratings, reliable communication, and active listings.</p></div><a href="#seller-application">See sellers</a></div>
          <div className="seller-card-grid">
            {sellerCards.map(([name, description, rating, location]) => (
              <article className="seller-card" key={name}>
                <div className="seller-avatar"><Store size={24} /></div>
                <h3>{name}</h3>
                <p>{description}</p>
                <div><Star size={15} fill="currentColor" /> {rating} · {location}</div>
                <a href="#shop">View storefront</a>
              </article>
            ))}
          </div>
        </section>

        <section id="sell" className="seller-section">
          <div className="wide-section seller-inner">
            <div className="seller-panel">
              <div>
                <span className="eyebrow"><Store size={16} /> Sell on Shopmyitems</span>
                <h2>List it. Sell it. Ship it. Shop it.</h2>
                <p>Sellers can upload photos, set pricing, accept offers, choose shipping or local pickup, manage orders, and grow a storefront.</p>
              </div>
              <div className="commission-card"><span>Seller-friendly commission</span><strong>5%</strong><p>Simple fees on successful sales, with optional boosts and storefront tools later.</p></div>
            </div>
            <div className="listing-flow">
              {['Add Photos', 'Add Details', 'Pricing Options', 'Delivery Options', 'Review & Publish'].map((step, index) => (
                <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="info-section wide-section">
          <div className="section-heading">
            <span className="eyebrow"><ClipboardCheck size={16} /> How it works</span>
            <h2>Easy for buyers. Organized for sellers.</h2>
          </div>
          <div className="how-grid">
            <StepGroup title="For buyers" steps={buyerSteps} />
            <StepGroup title="For sellers" steps={sellerSteps} />
          </div>
        </section>

        <section id="dashboards" className="info-section wide-section dashboard-section">
          <div className="section-heading">
            <span className="eyebrow"><LayoutDashboard size={16} /> Account tools</span>
            <h2>Everything buyers, sellers, and admins need.</h2>
          </div>
          <div className="dashboard-grid">
            <article><User size={24} /><h3>Buyer Dashboard</h3><p>Purchases, favorites, saved searches, messages, offers, reviews, addresses, and payment methods.</p></article>
            <article><BriefcaseBusiness size={24} /><h3>Seller Dashboard</h3><p>Listings, orders, messages, offers, earnings, shipping, reviews, promotions, and settings.</p></article>
            <article><Store size={24} /><h3>Seller Storefront</h3><p>Seller profile, banner, shop description, active listings, policies, reviews, and follow button.</p></article>
            <article><ShieldCheck size={24} /><h3>Admin Tools</h3><p>User management, seller verification, listing review, disputes, reports, analytics, and moderation.</p></article>
          </div>
        </section>

        <section id="seller-application" className="application-section wide-section">
          <div className="application-copy">
            <span className="eyebrow"><CheckCircle2 size={16} /> Seller application</span>
            <h2>Apply to sell on Shopmyitems.</h2>
            <p>Tell us what you plan to sell, how you want to fulfill orders, and whether you are a casual seller, maker, reseller, or small business.</p>
            <ul>
              <li><CheckCircle2 size={18} /> Individual, small-business, maker, and local reseller accounts.</li>
              <li><CheckCircle2 size={18} /> Seller approval helps keep the marketplace safe and trustworthy.</li>
              <li><CheckCircle2 size={18} /> Clear policies for listings, payments, shipping, returns, and disputes.</li>
            </ul>
          </div>
          <form className="application-form" action={submitSellerApplication}>
            <label>Full name<input name="full_name" type="text" placeholder="Your name" required /></label>
            <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Seller type<select name="seller_type" defaultValue="" required><option value="" disabled>Choose one</option><option>Individual Seller</option><option>Small Business Seller</option><option>Maker or Artist</option><option>Local Reseller</option><option>Business Seller</option></select></label>
            <label>Categories you plan to sell<input name="categories" type="text" placeholder="Electronics, clothing, home goods, handmade..." /></label>
            <label>What do you want to sell?<textarea name="message" placeholder="Tell us about your items, condition, pricing, quantity, shipping, and pickup plan." required /></label>
            <button className="primary-button" type="submit">Submit application</button>
          </form>
        </section>

        <section id="policies" className="policy-section wide-section">
          <div className="row-heading"><div><h2>Trust, safety, and marketplace policies</h2><p>Clear rules help buyers shop confidently and sellers operate fairly.</p></div><a href="#policies">Help center</a></div>
          <div className="policy-grid">
            {policies.map(([title, Icon]) => (
              <article className="policy-card" key={title}><Icon size={22} /><h3>{title}</h3></article>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer wide-section">
        <div><a className="brand" href="#top"><span className="brand-mark"><ShoppingBag size={22} /></span><span>Shopmyitems</span></a><p>Sell what you have. Shop what you love.</p></div>
        <div className="footer-links"><a href="#shop">Browse</a><a href="#categories">Categories</a><a href="#sell">Sell</a><a href="#policies">Policies</a><a href="#seller-application">List an Item</a></div>
      </footer>
    </>
  );
}
