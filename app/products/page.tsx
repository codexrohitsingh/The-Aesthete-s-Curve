import CollectionsGallery from '../components/CollectionsGallery';
import { Metadata } from 'next';

// Import the seoConfig for reference
import seoConfig from '../../next-seo.config';

export const metadata: Metadata = {
  title: 'Our Paintings Collection',
  description: 'Explore our curated collection of premium paintings and traditional art pieces. Find the perfect artwork to enhance your living space.',
  keywords: 'paintings collection, art gallery, premium paintings, traditional art, wall art, home decor',
  openGraph: {
    type: 'website',
    title: 'Premium Paintings Collection | The Aesthete\'s Curve',
    description: 'Browse our exclusive collection of handcrafted paintings and traditional art pieces. Each artwork tells a unique story.',
    url: `${seoConfig.canonical}products`,
    images: [
      {
        url: '/logo3.jpeg',
        width: 1200,
        height: 630,
        alt: "The Aesthete's Curve Paintings Collection",
      },
    ],
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen full-width-container bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-5xl font-light text-[#3E2A1F] mb-4 text-center" style={{ fontFamily: 'serif' }}>
          Our Products
        </h1>
        <p className="text-center text-[#7D6E5F] mb-12 max-w-2xl mx-auto">
          Discover our curated collection of paintings, each piece carefully selected to bring 
          beauty and elegance to your space.
        </p>
      </div>
      <CollectionsGallery />
    </div>
  );
}