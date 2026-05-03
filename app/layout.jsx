import './globals.css';

export const metadata = {
  title: 'Shopmyitems | Buy and sell quality finds',
  description: 'A low-commission marketplace for individuals, creators, and small sellers to sell quality items.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
