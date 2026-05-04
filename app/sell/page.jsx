import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  PackageCheck,
  ShieldCheck,
  ShoppingBag,
  Store,
  Truck,
  Upload,
} from 'lucide-react';
import { submitSellerApplication } from '../actions';

const sellerBenefits = [
  ['Low seller fee', 'Keep more from each successful sale with a simple 5% marketplace commission.', CircleDollarSign],
  ['Flexible fulfillment', 'Offer shipping, local pickup, local delivery, or a mix that works for your items.', Truck],
  ['Seller protection', 'Clear listing, tracking, and dispute standards help protect honest sellers.', ShieldCheck],
  ['Simple listing flow', 'Add photos, item details, price, delivery options, then review and publish.', Upload],
];

export default function SellPage() {
  return (
    <main className="sell-page wide-section">
      <Link className="back-link" href="/">
        <ArrowLeft size={18} /> Back to marketplace
      </Link>

      <section className="sell-page-hero">
        <div>
          <span className="eyebrow"><Store size={16} /> Sell on Shopmyitems</span>
          <h1>List your items and reach buyers looking for everyday finds.</h1>
          <p>
            Apply to sell personal items, handmade goods, collectibles, home goods, tools,
            electronics, clothing, and more. Seller approval helps keep the marketplace safe,
            trustworthy, and easy to shop.
          </p>
          <div className="seller-proof-row">
            <span><CheckCircle2 size={18} /> 5% commission</span>
            <span><PackageCheck size={18} /> Shipping or pickup</span>
            <span><ClipboardCheck size={18} /> Clear seller policies</span>
          </div>
        </div>

        <form className="application-form" action={submitSellerApplication}>
          <h2>Apply to sell</h2>
          <label>Full name<input name="full_name" type="text" placeholder="Your name" required /></label>
          <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
          <label>Seller type<select name="seller_type" defaultValue="" required><option value="" disabled>Choose one</option><option>Individual Seller</option><option>Small Business Seller</option><option>Maker or Artist</option><option>Local Reseller</option><option>Business Seller</option></select></label>
          <label>Categories you plan to sell<input name="categories" type="text" placeholder="Electronics, clothing, home goods, handmade..." /></label>
          <label>What do you want to sell?<textarea name="message" placeholder="Tell us about your items, condition, pricing, quantity, shipping, and pickup plan." required /></label>
          <button className="primary-button" type="submit">Submit application</button>
        </form>
      </section>

      <section className="seller-benefit-grid">
        {sellerBenefits.map(([title, text, Icon]) => (
          <article key={title}>
            <Icon size={24} />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="seller-process-card">
        <div>
          <span className="eyebrow"><ShoppingBag size={16} /> Listing flow</span>
          <h2>From photos to published listing.</h2>
          <p>Shopmyitems keeps the seller flow simple so everyday people and small businesses can list quickly.</p>
        </div>
        <div className="listing-flow light-flow">
          {['Add Photos', 'Add Details', 'Set Price', 'Choose Delivery', 'Publish'].map((step, index) => (
            <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>
          ))}
        </div>
      </section>
    </main>
  );
}
