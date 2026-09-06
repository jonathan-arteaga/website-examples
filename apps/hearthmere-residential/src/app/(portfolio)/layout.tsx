import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import { assertProductionEnv } from '@hearthmere/utils';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  CookieConsent,
  DemoSafetyNotice,
  ToastContainer,
  ToastProvider,
} from '@hearthmere/ui';
import { JsonLd } from '@/components/seo/JsonLd';
import { seoConfig } from '@/config/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hearthmere.example';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    url: '/',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Hearthmere Residential fictional property portfolio showcase',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
    images: ['/twitter-image'],
  },
  icons: {
    icon: [{ url: '/images/logo-brandmark.svg', type: 'image/svg+xml' }],
    shortcut: ['/images/logo-brandmark.svg'],
    apple: [{ url: '/images/logo-brandmark.svg', type: 'image/svg+xml' }],
  },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  assertProductionEnv({ context: 'root layout' });

  const headersList = await headers();
  const nonce = headersList.get('x-nonce') ?? undefined;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd nonce={nonce} />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <ToastProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ToastContainer />
          <CookieConsent />
          <DemoSafetyNotice />
        </ToastProvider>
      </body>
    </html>
  );
}
