import Image from 'next/image';
import { Metadata } from 'next';

// Import the seoConfig for reference
import seoConfig from '../../next-seo.config';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Aesthete\'s Curve - our mission, values, and dedication to bringing exceptional artwork into your living spaces.',
  keywords: 'about us, art gallery, painting collection, art mission, art curators, premium art',
  openGraph: {
    type: 'website',
    title: 'About The Aesthete\'s Curve | Our Story & Mission',
    description: 'Discover the story behind The Aesthete\'s Curve and our passion for curating fine paintings and traditional art.',
    url: `${seoConfig.canonical}about`,
    images: [
      {
        url: '/logo1.png',
        width: 800,
        height: 600,
        alt: 'The Aesthete\'s Curve Logo',
      },
    ],
  },
};

// Add JSON-LD script for organization
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "The Aesthete's Curve",
  url: 'https://the-aesthete-curve.vercel.app',
  logo: 'https://the-aesthete-curve.vercel.app/logo1.png',
  description: "The Aesthete's Curve is a curated collection of premium paintings and traditional art pieces. We are passionate about bringing exceptional artwork into your living spaces.",
  sameAs: [
    'https://instagram.com/theaesthetecurve',
    'https://twitter.com/theaesthetecurve'
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN'
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    <div className="min-h-screen full-width-container bg-[#FAF7F0] py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <Image
            src="/logo1.png"
            alt="The Aesthete's Curve"
            width={120}
            height={120}
            className="mx-auto mb-6 sm:mb-8 object-contain w-20 h-20 sm:w-[120px] sm:h-[120px]"
          />
          <h1 className="text-3xl sm:text-5xl font-light text-[#3E2A1F] mb-4 sm:mb-6" style={{ fontFamily: 'serif' }}>
            About The Aesthete&apos;s Curve
          </h1>
        </div>

        <div className="prose prose-base sm:prose-lg max-w-none text-[#5C4033]">
          <p className="text-[#7D6E5F] leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
            Welcome to The Aesthete&apos;s Curve, where art meets elegance. We are passionate curators 
            of fine paintings, dedicated to bringing exceptional artwork into your living spaces.
          </p>

          <h2 className="text-xl sm:text-2xl font-light text-[#3E2A1F] mt-8 sm:mt-12 mb-3 sm:mb-4" style={{ fontFamily: 'serif' }}>
            Our Mission
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
            To make beautiful art accessible to everyone. We believe that every space deserves 
            artwork that inspires, and every artwork deserves a home where it&apos;s cherished.
          </p>

          <h2 className="text-xl sm:text-2xl font-light text-[#3E2A1F] mt-8 sm:mt-12 mb-3 sm:mb-4" style={{ fontFamily: 'serif' }}>
            Quality & Craftsmanship
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
            Each painting in our collection is carefully selected for its artistic merit and 
            quality. We work with talented artists and use premium materials to ensure that 
            your artwork stands the test of time.
          </p>

          <h2 className="text-xl sm:text-2xl font-light text-[#3E2A1F] mt-8 sm:mt-12 mb-3 sm:mb-4" style={{ fontFamily: 'serif' }}>
            Custom Framing
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-4 sm:mb-6 font-light text-sm sm:text-base">
            We offer custom framing options to perfectly complement your chosen artwork and 
            interior design. Choose from our selection of natural, cream, mocha, and charcoal 
            frames to match your aesthetic.
          </p>

          <h2 className="text-xl sm:text-2xl font-light text-[#3E2A1F] mt-8 sm:mt-12 mb-3 sm:mb-4" style={{ fontFamily: 'serif' }}>
            Contact Us
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-3 sm:mb-4 font-light text-sm sm:text-base">
            Have questions or need assistance? We&apos;re here to help!
          </p>
          <div className="flex flex-col gap-2 sm:gap-3 text-[#7D6E5F] font-light text-sm sm:text-base">
            <p className="break-words">📍 Follow us on Instagram: @aesthete.s_curve</p>
            <p className="break-words">📱 WhatsApp: +91 7856937007</p>
            <p className="break-words">✉️ Email: contact@aesthetescurve.com</p>
          </div>

          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white/60 rounded-lg border border-[#E8DFD3]">
            <p className="text-center text-[#5C4033] font-light italic text-sm sm:text-base">
              &quot;Art is not what you see, but what you make others see.&quot;
            </p>
            <p className="text-center text-[#7D6E5F] text-xs sm:text-sm mt-2">- Edgar Degas</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}