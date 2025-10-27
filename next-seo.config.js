// next-seo.config.js
// This file is now used as a reference for metadata in the App Router
// The values here should be used in the metadata objects in layout.tsx and page.tsx files

const seoConfig = {
  title: "The Aesthete's Curve | Premium Art & Paintings Collection",
  titleTemplate: "%s | The Aesthete's Curve",
  description:
    "Explore 'The Aesthete's Curve' — a curated collection of premium paintings, traditional art, and inspired aesthetics. Discover unique works that celebrate beauty, culture, and artistic expression.",
  canonical: "https://the-aesthete-curve.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://the-aesthete-curve.vercel.app/",
    title: "The Aesthete's Curve | Premium Art & Paintings Collection",
    description:
      "Immerse yourself in The Aesthete's Curve — where tradition meets emotion through exquisite paintings and art pieces.",
    siteName: "The Aesthete's Curve",
    images: [
      {
        url: "https://the-aesthete-curve.vercel.app/logo3.jpeg",
        width: 1200,
        height: 630,
        alt: "The Aesthete's Curve Artwork - Shiv Vivah Painting",
      },
      {
        url: "https://the-aesthete-curve.vercel.app/logo1.png",
        width: 800,
        height: 600,
        alt: "The Aesthete's Curve Logo",
      },
    ],
  },
  twitter: {
    handle: "@theaesthetecurve",
    site: "@theaesthetecurve",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: "paintings, art, traditional art, Indian art, home decor, wall art, premium paintings, Madhubani, Krishna, Shiv Vivah"
    },
    {
      name: "author",
      content: "The Aesthete's Curve"
    },
    {
      property: "og:image:alt",
      content: "Beautiful traditional paintings from The Aesthete's Curve"
    }
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/logo1.png",
    },
    {
      rel: "apple-touch-icon",
      href: "/logo1.png",
      sizes: "76x76"
    },
  ],
};

export default seoConfig;
