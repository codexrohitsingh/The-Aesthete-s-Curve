import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0] py-16">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <Image
            src="/logo1.png"
            alt="The Aesthete's Curve"
            width={120}
            height={120}
            className="mx-auto mb-8 object-contain"
          />
          <h1 className="text-5xl font-light text-[#3E2A1F] mb-6" style={{ fontFamily: 'serif' }}>
            About The Aesthete&apos;s Curve
          </h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#5C4033]">
          <p className="text-[#7D6E5F] leading-relaxed mb-6 font-light">
            Welcome to The Aesthete&apos;s Curve, where art meets elegance. We are passionate curators 
            of fine paintings, dedicated to bringing exceptional artwork into your living spaces.
          </p>

          <h2 className="text-2xl font-light text-[#3E2A1F] mt-12 mb-4" style={{ fontFamily: 'serif' }}>
            Our Mission
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-6 font-light">
            To make beautiful art accessible to everyone. We believe that every space deserves 
            artwork that inspires, and every artwork deserves a home where it&apos;s cherished.
          </p>

          <h2 className="text-2xl font-light text-[#3E2A1F] mt-12 mb-4" style={{ fontFamily: 'serif' }}>
            Quality & Craftsmanship
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-6 font-light">
            Each painting in our collection is carefully selected for its artistic merit and 
            quality. We work with talented artists and use premium materials to ensure that 
            your artwork stands the test of time.
          </p>

          <h2 className="text-2xl font-light text-[#3E2A1F] mt-12 mb-4" style={{ fontFamily: 'serif' }}>
            Custom Framing
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-6 font-light">
            We offer custom framing options to perfectly complement your chosen artwork and 
            interior design. Choose from our selection of natural, cream, mocha, and charcoal 
            frames to match your aesthetic.
          </p>

          <h2 className="text-2xl font-light text-[#3E2A1F] mt-12 mb-4" style={{ fontFamily: 'serif' }}>
            Contact Us
          </h2>
          <p className="text-[#7D6E5F] leading-relaxed mb-4 font-light">
            Have questions or need assistance? We&apos;re here to help!
          </p>
          <div className="flex flex-col gap-3 text-[#7D6E5F] font-light">
            <p>📍 Follow us on Instagram: @aesthete.s_curve</p>
            <p>📱 WhatsApp: +91 7856937007</p>
            <p>✉️ Email: contact@aesthetescurve.com</p>
          </div>

          <div className="mt-12 p-6 bg-white/60 rounded-lg border border-[#E8DFD3]">
            <p className="text-center text-[#5C4033] font-light italic">
              &quot;Art is not what you see, but what you make others see.&quot;
            </p>
            <p className="text-center text-[#7D6E5F] text-sm mt-2">- Edgar Degas</p>
          </div>
        </div>
      </div>
    </div>
  );
}