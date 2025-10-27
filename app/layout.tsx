import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Breadcrumb from "./components/Breadcrumb";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
// Import SEO config for reference only
// import SEO from '../next-seo.config';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import the seoConfig for reference
import seoConfig from '../next-seo.config';

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/logo1.png",
  },
  keywords: seoConfig.additionalMetaTags?.find(tag => tag.name === 'keywords')?.content,
  metadataBase: new URL(seoConfig.canonical),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: seoConfig.openGraph.locale,
    url: seoConfig.openGraph.url,
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    siteName: seoConfig.openGraph.siteName,
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.handle,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ProductsProvider>
            <CartProvider>
              <Navbar />
              <div className="container mx-auto px-4">
                <Breadcrumb />
                {children}
              </div>
            </CartProvider>
          </ProductsProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
