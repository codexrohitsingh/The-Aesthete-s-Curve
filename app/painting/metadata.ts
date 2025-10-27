import { Metadata } from 'next';
import seoConfig from '../../next-seo.config';

export async function generateMetadata({ searchParams }: { searchParams: { title?: string, image?: string, price?: string } }): Promise<Metadata> {
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
}