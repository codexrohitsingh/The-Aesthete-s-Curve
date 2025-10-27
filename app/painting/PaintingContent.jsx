'use client';

import { useSearchParams } from 'next/navigation';
import PaintingPurchase from '../components/PaintingPurchase';
import RelatedProducts from '../components/RelatedProducts';
import Breadcrumb from '../components/Breadcrumb';

export default function PaintingContent() {
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