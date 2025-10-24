// next-seo.config.js

export default {
  title: "The Aesthete Curve | Modern Art & Creative Expression",
  description:
    "Explore 'The Aesthete Curve' — a curated collection of modern art, creative paintings, and inspired aesthetics. Discover unique works that celebrate beauty, emotion, and design.",
  canonical: "https://the-aesthete-curve.vercel.app/",
  openGraph: {
    type: "website",
    url: "https://the-aesthete-curve.vercel.app/",
    title: "The Aesthete Curve | Modern Art & Creative Expression",
    description:
      "Immerse yourself in The Aesthete Curve — where creativity meets emotion through modern art and paintings.",
    siteName: "The Aesthete Curve",
    images: [
      {
        url: "https://the-aesthete-curve.vercel.app/logo3.jpeg", // ✅ clean image path
        width: 1200,
        height: 630,
        alt: "The Aesthete Curve Artwork",
      },
    ],
  },
  twitter: {
    handle: "@theaesthetecurve", // if you have a Twitter handle
    site: "@theaesthetecurve",
    cardType: "summary_large_image",
  },
};
