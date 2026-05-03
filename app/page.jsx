import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Box,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  CreditCard,
  Filter,
  Heart,
  Home,
  LayoutDashboard,
  LockKeyhole,
  MapPin,
  MessageCircle,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Tag,
  Truck,
  Upload,
  UserCheck,
  Users,
} from 'lucide-react';
import { createSupabaseServerClient } from '../lib/supabase/server';
import { submitSellerApplication } from './actions';

const fallbackItems = [
  {
    title: 'Vintage Denim Jacket',
    seller_name: 'Maya K.',
    price: 42,
    category: 'Clothing & Shoes',
    condition: 'Good',
    location: 'Ships or local pickup',
    image_url: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
    badge: 'Seller pick',
  },
  {
    title: 'Walnut Side Table',
    seller_name: 'Home Finds Co.',
    price: 88,
    category: 'Home & Furniture',
    condition: 'Like New',
    location: 'Local pickup',
    image_url: 'https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=900&q=80',
    badge: 'Local deal',
  },
  {
    title: 'Mirrorless Camera Kit',
    seller_name: 'Theo R.',
    price: 315,
    category: 'Electronics',
    condition: 'Excellent',
    location: 'Shipping available',
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    badge: 'Inspected',
  },
  {
    title: 'Handmade Ceramic Bowl',
    seller_name: 'Clay & Table',
    price: 28,
    category: 'Handmade & Custom',
    condition: 'Handmade',
    location: 'Ships nationwide',
    image_url: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
    badge: 'New arrival',
  },
  {
    title: 'Compact Tool Set',
    seller_name: 'Garage Goods',
    price: 55,
    category: 'Tools & Equipment',
    condition: 'Good',
    location: 'Local pickup',
    image_url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80',
    badge: 'Great value',
  },
  {
    title: 'Classic Vinyl Bundle',
    seller_name: 'Record Room',
    price: 64,
    category: 'Books, Music & Media',
    condition: 'Vintage',
    location: 'Shipping available',
    image_url: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=900&q=80',
    badge: 'Collector find',
  },
];

const categories = [
  ['Electronics', 'Phones, computers, gaming, cameras'],
  ['Clothing & Shoes', 'Women, men, kids, bags, watches'],
  ['Home & Furniture', 'Decor, appliances, storage, office'],
  ['Beauty & Personal Care', 'Skincare, grooming, tools, fragrance'],
  ['Toys & Games', 'Board games, dolls, puzzles, video games'],
  ['Sports & Outdoors', 'Fitness, camping, bikes, fishing'],
  ['Tools & Equipment', 'Power tools, hand tools, lawn gear'],
  ['Baby & Kids', 'Strollers, clothing, nursery, toys'],
  ['Automotive', 'Parts, tires, accessories, detailing'],
  ['Jewelry & Watches', 'Fine, fashion, vintage, custom'],
  ['Books, Music & Media', 'Books, vinyl, instruments, DVDs'],
  ['Handmade & Custom', 'Art, crafts, personalized gifts'],
  ['Collectibles', 'Cards, coins, comics, antiques'],
  ['Pet Supplies', 'Beds, toys, carriers, accessories'],
  ['Office & School', 'Supplies, desks, tech, books'],
  ['Local Deals', 'Nearby pickup and delivery finds'],
];

const policies = [
  ['Terms of Service', ClipboardCheck, 'Clear rules for using the marketplace, listing responsibly, buying safely, and resolving account issues.'],
  ['Privacy Policy', LockKeyhole, 'Plain-language privacy standards for account data, seller information, messages, transactions, and notifications.'],
  ['Seller Policy', Store, 'Accurate descriptions, real photos, condition, shipping details, fair pricing, and no prohibited items.'],
  ['Buyer Protection', ShieldCheck, 'Coverage for missing items, damaged items, wrong items, and listings significantly different from the description.'],
  ['Seller Protection', UserCheck, 'Protection when sellers ship to the order address, use tracking, keep proof, and follow platform rules.'],
  ['Prohibited Items', PackageCheck, 'No illegal, unsafe, counterfeit, recalled, stolen, restricted, or policy-prohibited goods.'],
  ['Return & Refund Policy', Truck, 'Return windows, seller return terms, not-as-described reviews, refund paths, and evidence requirements.'],
  ['Fee Policy', CircleDollarSign, 'Transparent low transaction fees, optional promoted listings, seller subscriptions, and payment processing disclosures.'],
  ['Community Guidelines', Users, 'Respectful messaging, no harassment, no off-platform payment pressure, and clear reporting options.'],
];

const buyerSteps = [
  ['Search or browse items', Search],
  ['Review seller details', Star],
  ['Buy, message, or make an offer', MessageCircle],
  ['Ship or arrange pickup safely', Truck],
];

const sellerSteps = [
  ['Create an account', UserCheck],
  ['Upload photos and details', Upload],
  ['Set price and delivery options', Tag],
  ['Sell and get paid', CircleDollarSign],
];

async function getFeaturedItems() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return fallbackItems;
  }

  const { data, error } = await supabase
    .from('listings')
    .select('title, seller_name, price, category, condition, location, image_url, badge')
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
          <a href="#shop">Browse</a>
          <a href="#categories">Categories</a>
          <a href="#sell">Sell</a>
          <a href="#dashboards">Dashboards</a>
          <a href="#policies">Help</a>
          <a href="#signin">Sign In</a>
          <a className="nav-cta" href="#seller-application">List an Item</a>
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
        <div className="item-details-row">
          <span>{item.condition || 'Good'}</span>
          <span><MapPin size={14} /> {item.location || 'Shipping available'}</span>
        </div>
        <div className="product-footer">
          <strong>${Number(item.price).toFixed(0)}</strong>
          <a href="#seller-application">View Item <ChevronRight size={16} /></a>
        </div>
      </div>
    </article>
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
  const featuredItems = await getFeaturedItems();
  const newlyListed = [...featuredItems].reverse();

  return (
    <>
      <Header />
      <main id="top">
        <section className="hero section-pad wide-section">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> Simple. Safe. Local-friendly. Seller-friendly.</div>
            <h1>Buy and sell items easily on ShopMyItems.com.</h1>
            <p>
              Discover great deals, list your own items, and connect with trusted buyers and sellers in one simple marketplace.
            </p>
            <form className="hero-search" action="#shop">
              <Search size={22} />
              <input aria-label="Search marketplace" placeholder="Search for furniture, electronics, clothing, tools, and more..." />
              <button type="submit">Search</button>
            </form>
            <div className="hero-actions">
              <a className="primary-button" href="#shop">Shop Now <ArrowRight size={18} /></a>
              <a className="secondary-button" href="#seller-application">Start Selling</a>
            </div>
            <div className="hero-proof">
              <span><BadgeCheck size={18} /> Verified profiles</span>
              <span><ShieldCheck size={18} /> Buyer and seller protection</span>
              <span><CreditCard size={18} /> Secure checkout ready</span>
            </div>
          </div>

          <div className="hero-card marketplace-preview" aria-label="Marketplace preview">
            <div className="preview-topline">
              <span><Bell size={17} /> New message from buyer</span>
              <strong>Seller dashboard</strong>
            </div>
            <div className="hero-product-grid">
              {featuredItems.slice(0, 3).map((item) => (
                <div className="mini-product" key={item.title}>
                  <Image src={item.image_url} alt="" width={110} height={88} />
                  <div><strong>{item.title}</strong><span>${Number(item.price).toFixed(0)} · {item.condition || 'Good'}</span></div>
                </div>
              ))}
            </div>
            <div className="dashboard-stats">
              <div><strong>24</strong><span>Active listings</span></div>
              <div><strong>8</strong><span>Orders</span></div>
              <div><strong>5%</strong><span>Commission</span></div>
            </div>
          </div>
        </section>

        <section className="trust-banner wide-section">
          <div><ShieldCheck size={22} /><strong>Secure marketplace</strong><span>Verified profiles, safe messaging, dispute tools, and clear protection policies.</span></div>
          <div><MessageCircle size={22} /><strong>Buyer-seller messaging</strong><span>Ask questions, negotiate offers, and keep communication on the platform.</span></div>
          <div><CircleDollarSign size={22} /><strong>Low commission</strong><span>Designed around a seller-friendly 5% transaction fee model.</span></div>
        </section>

        <section id="categories" className="section-pad section-block wide-section">
          <div className="section-heading">
            <span className="eyebrow"><Box size={16} /> Featured categories</span>
            <h2>Browse the marketplace by what you need.</h2>
            <p>Clear categories help buyers find products quickly and help sellers list items where they belong.</p>
          </div>
          <div className="category-grid">
            {categories.map(([name, description]) => (
              <a className="category-card" href="#shop" key={name}>
                <span>{name.charAt(0)}</span>
                <strong>{name}</strong>
                <p>{description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="shop" className="section-pad section-block wide-section">
          <div className="section-heading marketplace-heading">
            <span className="eyebrow"><ShoppingBag size={16} /> Featured Items</span>
            <h2>Quality finds from everyday sellers and small businesses.</h2>
            <p>Product cards include the essentials buyers expect: photo, title, price, condition, seller rating, location, favorite, and view item action.</p>
          </div>
          <div className="filter-bar">
            <span><Filter size={17} /> Filters</span>
            <button>Category</button>
            <button>Price range</button>
            <button>Condition</button>
            <button>Location</button>
            <button>Shipping</button>
            <button>Seller rating</button>
          </div>
          <div className="product-grid">
            {featuredItems.map((item) => <ProductCard item={item} key={`${item.title}-${item.seller_name}`} />)}
          </div>
        </section>

        <section className="section-pad section-block wide-section compact-top">
          <div className="section-heading marketplace-heading">
            <span className="eyebrow"><Tag size={16} /> Newly Listed</span>
            <h2>Fresh listings make the marketplace feel active.</h2>
          </div>
          <div className="product-grid newly-grid">
            {newlyListed.slice(0, 4).map((item) => <ProductCard item={item} key={`new-${item.title}-${item.seller_name}`} />)}
          </div>
        </section>

        <section id="sell" className="seller-section">
          <div className="wide-section seller-inner">
            <div className="seller-panel">
              <div>
                <span className="eyebrow"><Store size={16} /> Sell on Shopmyitems</span>
                <h2>List it. Sell it. Ship it. Shop it.</h2>
                <p>
                  Sellers can create listings, upload photos, set pricing, accept offers, choose shipping or local pickup, manage orders, and track payouts.
                </p>
              </div>
              <div className="commission-card"><span>Recommended seller commission</span><strong>5%</strong><p>Optional featured listings, subscriptions, sponsored placements, and business tools can add future revenue.</p></div>
            </div>
            <div className="listing-flow">
              {['Add Photos', 'Add Details', 'Pricing Options', 'Delivery Options', 'Review & Publish'].map((step, index) => (
                <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-pad section-block wide-section how-section">
          <div className="section-heading">
            <span className="eyebrow"><ClipboardCheck size={16} /> How it works</span>
            <h2>Easy for buyers. Organized for sellers.</h2>
          </div>
          <div className="how-grid">
            <StepGroup title="For buyers" steps={buyerSteps} />
            <StepGroup title="For sellers" steps={sellerSteps} />
          </div>
        </section>

        <section id="dashboards" className="section-pad section-block wide-section dashboard-section">
          <div className="section-heading">
            <span className="eyebrow"><LayoutDashboard size={16} /> Dashboard experience</span>
            <h2>Built around buyer, seller, business seller, and admin workflows.</h2>
          </div>
          <div className="dashboard-grid">
            <article><BriefcaseBusiness size={24} /><h3>Seller dashboard</h3><p>Overview, active listings, sold items, drafts, orders, messages, offers, payments, shipping, reviews, promotions, and settings.</p></article>
            <article><Users size={24} /><h3>Buyer dashboard</h3><p>Purchases, favorites, saved searches, messages, offers, reviews, payment methods, shipping addresses, and account settings.</p></article>
            <article><Store size={24} /><h3>Storefronts</h3><p>Seller name, logo, banner, about section, rating, sales count, location, active listings, policies, contact, and follow button.</p></article>
            <article><ShieldCheck size={24} /><h3>Admin tools</h3><p>User management, seller verification, listing review, disputes, refunds, reports, analytics, fee tools, and moderation.</p></article>
          </div>
        </section>

        <section id="seller-application" className="section-pad application-section wide-section">
          <div className="application-copy">
            <span className="eyebrow"><CheckCircle2 size={16} /> Seller application</span>
            <h2>Accept seller applications directly into Supabase.</h2>
            <p>This form submits to the seller_applications table. No browser storage. No localStorage.</p>
            <ul>
              <li><CheckCircle2 size={18} /> Supports individual, small-business, maker, and local reseller account types.</li>
              <li><CheckCircle2 size={18} /> Collects seller categories and item details for approval review.</li>
              <li><CheckCircle2 size={18} /> Keeps marketplace data in Supabase for dashboards and admin workflows.</li>
            </ul>
          </div>
          <form className="application-form" action={submitSellerApplication}>
            <label>Full name<input name="full_name" type="text" placeholder="Your name" required /></label>
            <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
            <label>Seller type<select name="seller_type" defaultValue="" required><option value="" disabled>Choose one</option><option>Buyer Account</option><option>Individual Seller</option><option>Small Business Seller</option><option>Maker or Artist</option><option>Business Seller</option></select></label>
            <label>Categories you plan to sell<input name="categories" type="text" placeholder="Electronics, clothing, home goods, handmade..." /></label>
            <label>What do you want to sell?<textarea name="message" placeholder="Tell us about your items, condition, pricing, quantity, shipping, and pickup plan." required /></label>
            <button className="primary-button" type="submit">Submit seller interest <ArrowRight size={18} /></button>
          </form>
        </section>

        <section id="policies" className="section-pad section-block wide-section">
          <div className="section-heading">
            <span className="eyebrow"><Home size={16} /> Marketplace policies</span>
            <h2>Policies should be clear, visible, and easy to understand.</h2>
            <p>These policy areas support buyer confidence, seller protection, safer transactions, and future dispute handling.</p>
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
        <div><a className="brand" href="#top"><span className="brand-mark"><ShoppingBag size={22} /></span><span>Shopmyitems</span></a><p>Sell what you have. Shop what you love.</p></div>
        <div className="footer-links"><a href="#shop">Browse</a><a href="#categories">Categories</a><a href="#sell">Sell</a><a href="#policies">Policies</a><a href="#seller-application">List an Item</a></div>
      </footer>
    </>
  );
}
