import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Loader from '@/components/Loader/Loader';
import Cursor from '@/components/Cursor/Cursor';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Creative Commune — Digital Marketing & AI Agency',
  description: 'Helping luxury brands scale through strategy, content & AI. We build brands that don\'t just look good — they dominate attention. Brand strategy, social media, performance marketing, AI automation & web design.',
  keywords: ['digital marketing agency', 'AI agency', 'brand strategy', 'luxury marketing', 'social media marketing', 'performance marketing', 'AI automation', 'web design', 'Creative Commune'],
  authors: [{ name: 'Creative Commune' }],
  openGraph: {
    title: 'Creative Commune — Digital Marketing & AI Agency',
    description: 'Helping luxury brands scale through strategy, content & AI. Brand strategy, performance marketing, AI automation & premium web design.',
    url: 'https://creativecommune.com',
    siteName: 'Creative Commune',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Commune — Digital Marketing & AI Agency',
    description: 'Helping luxury brands scale through strategy, content & AI.',
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://creativecommune.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        <Loader />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
