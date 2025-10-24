// app/page.tsx  (for App Router)
import LandingPage from './components/LandingPage';
import CollectionsGallery from './components/CollectionsGallery';

export const metadata = {
  title: "The Aesthete Curve | Home",
  description: "Be Blended with painting and art.",
  openGraph: {
    title: "The Aesthete Curve | Home",
    description: "Be Blended with painting and art. .",
    url: "https://the-aesthete-curve.vercel.app/",
    siteName: "The Aesthete Curve",
    images: [
      {
        url: "https://the-aesthete-curve.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview image alt text",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aesthete Curve | Home",
    description: "Be Blended with painting and art.",
    images: ["https://the-aesthete-curve.vercel.app/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <LandingPage />
      <CollectionsGallery />
     <script src="https://analytics.ahrefs.com/analytics.js" data-key="5dTmpZD+Pe92DdLVC4cLeQ" async></script>
    </>
  );
}

