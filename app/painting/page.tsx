'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import PaintingPurchase from '../components/PaintingPurchase';
import RelatedProducts from '../components/RelatedProducts';
import Breadcrumb from '../components/Breadcrumb';
import { Metadata } from 'next';

// Import the seoConfig for reference
import seoConfig from '../../next-seo.config';

export const generateMetadata = async ({ searchParams }: { searchParams: { title?: string, image?: string, price?: string } }): Promise<Metadata> => {
  const title = searchParams.title || 'Divine Geometry';
  const imageUrl = searchParams.image || '/logo1.png';
  const price = searchParams.price || '₹399.99';
  
  return {
    title: title,
    description: `Explore ${title} - a beautiful painting from The Aesthete's Curve collection. Perfect for enhancing your living space with artistic elegance.`,
    keywords: `${title}, painting, art, wall art, home decor, premium art, The Aesthete's Curve`,
    openGraph: {
      type: 'website',
      title: `${title} | Premium Painting | The Aesthete's Curve`,
      description: `Discover ${title} - a stunning artwork from our premium collection. Add artistic beauty to your space.`,
      url: `${seoConfig.canonical}painting?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(imageUrl)}`,
      images: [
        {
          url: imageUrl.startsWith('http') ? imageUrl : `${seoConfig.canonical.replace(/\/$/, '')}${imageUrl}`,
          width: 800,
          height: 600,
          alt: `${title} - Premium Painting from The Aesthete's Curve`,
        },
      ],
    },
  };
};

function PaintingContent() {
  const searchParams = useSearchParams();
  
  const title = searchParams.get('title') || 'Divine Geometry';
  const price = searchParams.get('price') || '₹399.99';
  const image = searchParams.get('image') || '/logo1.png';

  // Product JSON-LD structured data
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: title,
    image: image.startsWith('http') ? image : `https://the-aesthete-curve.vercel.app${image}`,
    description: `${title} - A beautiful painting from The Aesthete's Curve collection. Perfect for enhancing your living space with artistic elegance.`,
    brand: {
      '@type': 'Brand',
      name: "The Aesthete's Curve"
    },
    offers: {
      '@type': 'Offer',
      url: `https://the-aesthete-curve.vercel.app/painting?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}`,
      priceCurrency: 'INR',
      price: price.replace('₹', '').replace(',', ''),
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition'
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb productTitle={title} />
        <PaintingPurchase 
          title={title}
          price={price}
          image={image}
        />
        
        <div className="mt-16">
          <RelatedProducts currentTitle={title} />
        </div>
      </div>
    </div>
   );
}

export default function PaintingPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PaintingContent />
      </Suspense>
    </>
  );
}