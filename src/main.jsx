import React from 'react';
import { createRoot } from 'react-dom/client';
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
  Menu,
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
  X,
} from 'lucide-react';
import './styles.css';

const featuredItems = [
  {
    title: 'Vintage Denim Jacket',
    seller: 'Maya K.',
    price: '$42',
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
    badge: 'Seller pick',
  },
  {
    title: 'Walnut Side Table',
    seller: 'Home Finds Co.',
    price: '$88',
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a694?auto=format&fit=crop&w=900&q=80',
    badge: 'Local favorite',
  },
  {
    title: 'Mirrorless Camera Kit',
    seller: 'Theo R.',
    price: '$315',
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    badge: 'Inspected',
  },
  {
    title: 'Handmade Ceramic Bowl',
    seller: 'Clay & Table',
    price: '$28',
    category: 'Handmade',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80',
    badge: 'New arrival',
  },
];

const categories = ['Clothing', 'Home Goods', 'Electronics', 'Collectibles', 'Books', 'Handmade', 'Sports', 'Kids'];

const sellerSteps = [
  {
    icon: Upload,
    title: 'List in minutes',
    text: 'Upload photos, set your price, choose shipping or local pickup, and publish your item after review.',
  },
  {
    icon: ShieldCheck,
    title: 'Sell with confidence',
    text: 'Clear buyer expectations, order tracking, and seller standards help every transaction feel professional.',
  },
  {
    icon: CircleDollarSign,
    title: 'Keep more of each sale',
    text: 'A simple low commission model lets everyday sellers, small shops, and creators earn more from their items.',
  },
];

const policies = [
  {
    title: 'Seller Policy',
    icon: Store,
    points: [
      'Sellers must provide accurate descriptions, real photos, item condition, shipping details, and fair pricing.',
      'Prohibited items include illegal goods, unsafe products, counterfeit items, recalled items, weapons, stolen property, and restricted substances.',
      'Sellers are expected to respond to buyer questions and ship orders within the handling time shown on the listing.',
    ],
  },
  {
    title: 'Buyer Protection Policy',
    icon: ShieldCheck,
    points: [
      'Buyers can report items that arrive materially different from the listing, damaged, missing, or not received.',
      'Eligible disputes should be opened within 7 days of delivery with photos, tracking details, and order information.',
      'Shopmyitems may request evidence from both parties before approving a refund, return, replacement, or seller payout release.',
    ],
  },
  {
    title: 'Returns & Refunds Policy',
    icon: PackageCheck,
    points: [
      'Each listing must clearly state whether returns are accepted, but items not as described may still qualify for review.',
      'Approved returns should be shipped back in the same condition received unless the item arrived damaged.',
      'Refunds are processed to the original payment method after the returned item is received or the dispute is resolved.',
    ],
  },
  {
    title: 'Shipping Policy',
    icon: Truck,
    points: [
      'Sellers may offer shipping, local pickup, or both, and must include handling time and shipping costs before purchase.',
      'Tracking is strongly recommended for shipped orders and may be required for higher-value items.',
      'Sellers are responsible for safe packaging that protects items during transit.',
    ],
  },
  {
    title: 'Commission & Fees Policy',
    icon: CircleDollarSign,
    points: [
      'Shopmyitems is designed around a low marketplace commission so sellers keep more of every sale.',
      'The recommended starting commission is 5% of the item sale price, excluding taxes, shipping, and payment processor fees.',
      'Any listing upgrades, promoted placements, or optional seller tools should be shown clearly before a seller pays.',
    ],
  },
  {
    title: 'Trust & Safety Policy',
    icon: LockKeyhole,
    points: [
      'Users should treat each other respectfully and may not harass, threaten, scam, impersonate, or pressure other members.',
      'Suspicious activity, fraud, fake reviews, duplicate accounts, and off-platform payment schemes may result in account limits or removal.',
      'Personal information should only be used to complete the transaction and should not be shared publicly.',
    ],
  },
];

function Header() {
  const [open, setOpen] = React.useState(false);
  const links = ['Shop', 'Sell', 'How it works', 'Policies'];

  return (
    <header className="site-header">
      <nav className="nav-shell">
        <a className="brand" href="#top" aria-label="Shopmyitems home">
          <span className="brand-mark"><ShoppingBag size={22} /></span>
          <span>Shopmyitems</span>
        </a>

        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <a className="nav-cta" href="#seller-application" onClick={() => setOpen(false)}>
            Start selling
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section-pad">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={16} /> A marketplace built for everyday sellers</div>
        <h1>Sell your stuff, discover great finds, and keep more money in your pocket.</h1>
        <p>
          Shopmyitems helps individuals, creators, and small sellers list quality items with clear policies,
          friendly buyer protection, and a low-commission marketplace model.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#shop">Browse items <ArrowRight size={18} /></a>
          <a className="secondary-button" href="#sell">Become a seller</a>
        </div>
        <div className="hero-proof">
          <span><BadgeCheck size={18} /> Low 5% seller commission</span>
          <span><ShieldCheck size={18} /> Buyer protection standards</span>
          <span><Truck size={18} /> Shipping or local pickup</span>
        </div>
      </div>
      <div className="hero-card" aria-label="Marketplace preview">
        <div className="search-card">
          <Search size={18} />
          <span>Search vintage, handmade, home goods...</span>
        </div>
        <div className="hero-product-grid">
          {featuredItems.slice(0, 3).map((item) => (
            <div className="mini-product" key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <strong>{item.title}</strong>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="seller-callout">
          <Users size={20} />
          <div>
            <strong>Open seller marketplace</strong>
            <p>Apply, list, ship, and get paid after successful orders.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="category-strip" aria-label="Popular categories">
      {categories.map((category) => (
        <a href="#shop" key={category}>{category}</a>
      ))}
    </section>
  );
}

function FeaturedShop() {
  return (
    <section id="shop" className="section-pad section-block">
      <div className="section-heading">
        <span className="eyebrow"><ShoppingBag size={16} /> Featured marketplace finds</span>
        <h2>Quality items from everyday sellers and small shops.</h2>
        <p>These sample listings show the kind of curated, trust-forward experience Shopmyitems is built for.</p>
      </div>

      <div className="product-grid">
        {featuredItems.map((item) => (
          <article className="product-card" key={item.title}>
            <div className="product-image-wrap">
              <img src={item.image} alt={item.title} />
              <button aria-label={`Save ${item.title}`}><Heart size={18} /></button>
              <span>{item.badge}</span>
            </div>
            <div className="product-content">
              <div className="product-meta">
                <span>{item.category}</span>
                <span><Star size={14} fill="currentColor" /> 4.9</span>
              </div>
              <h3>{item.title}</h3>
              <p>Sold by {item.seller}</p>
              <div className="product-footer">
                <strong>{item.price}</strong>
                <a href="#seller-application">View details <ChevronRight size={16} /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SellSection() {
  return (
    <section id="sell" className="section-pad seller-section">
      <div className="seller-panel">
        <div>
          <span className="eyebrow"><Store size={16} /> Sell on Shopmyitems</span>
          <h2>A seller-friendly marketplace with simple rules and low commission.</h2>
          <p>
            List personal items, handmade goods, collectibles, home goods, and more. Shopmyitems is designed
            to feel easier than a big marketplace while still giving buyers the trust signals they expect.
          </p>
        </div>
        <div className="commission-card">
          <span>Recommended seller commission</span>
          <strong>5%</strong>
          <p>Low marketplace fee on completed item sales. Payment processor fees may still apply.</p>
        </div>
      </div>

      <div className="steps-grid">
        {sellerSteps.map((step) => {
          const Icon = step.icon;
          return (
            <article className="step-card" key={step.title}>
              <span><Icon size={24} /></span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function HowItWorks() {
  const items = [
    ['Create your seller profile', 'Tell buyers who you are, where you ship, and what kinds of items you sell.'],
    ['Publish trusted listings', 'Use real photos, accurate item condition, clear pricing, and shipping or pickup details.'],
    ['Complete the order', 'Buyers purchase through the marketplace, sellers ship or coordinate pickup, and payouts follow successful completion.'],
  ];

  return (
    <section id="how-it-works" className="section-pad section-block split-section">
      <div className="section-heading left-align">
        <span className="eyebrow"><ClipboardCheck size={16} /> How it works</span>
        <h2>Built for a smooth marketplace launch.</h2>
        <p>
          This site includes the front-end structure and policy foundation needed to explain the marketplace,
          collect seller interest, and present trusted listings.
        </p>
      </div>
      <div className="timeline">
        {items.map(([title, text], index) => (
          <div className="timeline-item" key={title}>
            <span>{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SellerApplication() {
  return (
    <section id="seller-application" className="section-pad application-section">
      <div className="application-copy">
        <span className="eyebrow"><CheckCircle2 size={16} /> Seller application</span>
        <h2>Invite sellers to apply before opening full accounts.</h2>
        <p>
          Connect this form to a backend, email service, or form provider when you are ready. For now, it gives
          your marketplace a complete, professional seller onboarding flow.
        </p>
        <ul>
          <li><CheckCircle2 size={18} /> Collect seller type, item categories, and contact details.</li>
          <li><CheckCircle2 size={18} /> Screen for policy fit before approving marketplace access.</li>
          <li><CheckCircle2 size={18} /> Set expectations for accurate listings and customer service.</li>
        </ul>
      </div>

      <form className="application-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          Full name
          <input type="text" placeholder="Your name" />
        </label>
        <label>
          Email address
          <input type="email" placeholder="you@example.com" />
        </label>
        <label>
          Seller type
          <select defaultValue="">
            <option value="" disabled>Choose one</option>
            <option>Individual seller</option>
            <option>Small business</option>
            <option>Maker or artist</option>
            <option>Local reseller</option>
          </select>
        </label>
        <label>
          What do you want to sell?
          <textarea placeholder="Tell us about your items, condition, pricing, and shipping plan." />
        </label>
        <button className="primary-button" type="submit">Submit seller interest <ArrowRight size={18} /></button>
      </form>
    </section>
  );
}

function Policies() {
  return (
    <section id="policies" className="section-pad section-block">
      <div className="section-heading">
        <span className="eyebrow"><Home size={16} /> Marketplace policies</span>
        <h2>Clear rules for sellers, buyers, payments, shipping, and safety.</h2>
        <p>
          These starter policies mirror the expectations common to trusted marketplaces. Have a qualified
          attorney review them before launch, especially once real payments and disputes are active.
        </p>
      </div>

      <div className="policy-grid">
        {policies.map((policy) => {
          const Icon = policy.icon;
          return (
            <article className="policy-card" key={policy.title}>
              <div className="policy-title">
                <span><Icon size={22} /></span>
                <h3>{policy.title}</h3>
              </div>
              <ul>
                {policy.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function TrustBanner() {
  return (
    <section className="trust-banner">
      <div><Box size={22} /><strong>Curated categories</strong><span>Everyday items, small shops, and handmade goods.</span></div>
      <div><ShieldCheck size={22} /><strong>Marketplace standards</strong><span>Rules that protect buyers and responsible sellers.</span></div>
      <div><CircleDollarSign size={22} /><strong>Low commission</strong><span>Designed so sellers keep more from each sale.</span></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a className="brand" href="#top">
          <span className="brand-mark"><ShoppingBag size={22} /></span>
          <span>Shopmyitems</span>
        </a>
        <p>Buy and sell quality finds with a friendly, low-commission marketplace.</p>
      </div>
      <div className="footer-links">
        <a href="#shop">Shop</a>
        <a href="#sell">Sell</a>
        <a href="#policies">Policies</a>
        <a href="#seller-application">Apply</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <TrustBanner />
        <FeaturedShop />
        <SellSection />
        <HowItWorks />
        <SellerApplication />
        <Policies />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
