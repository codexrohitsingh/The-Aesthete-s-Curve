'use client';

import Image from 'next/image';

export default function LandingPage() {
  const stats = [
    // { value: '44013', label: 'OUR PAINTINGS', icon: '🎨' },
    // { value: '44013', label: 'OUR PAINTINGS', icon: '🎨' },
    // { value: '44013', label: 'EXHIBITIONS', icon: '📅' },
    // { value: '3093', label: 'ARTWORK SOLD', icon: '📦' },
    // { value: '1014', label: 'AWARDS', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      {/* Hero Section */}
      <section className="px-4 sm:px-8 py-8 sm:py-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-[#3E2A1F] mb-6 sm:mb-8 leading-tight" style={{ fontFamily: 'serif' }}>
              Be Blended<br />
              With<br />
              Paintings Art
            </h1>
            <p className="text-[#7D6E5F] mb-6 sm:mb-8 leading-relaxed font-light text-sm sm:text-base">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
              enim ad minim veniam, quis nostrud. */}
            </p>
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#C4B5A0] text-[#3E2A1F] rounded-full hover:bg-[#B8A68E] transition-colors font-light text-sm sm:text-base">
              see projects
            </button>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="w-72 sm:w-80 lg:w-96 h-[400px] sm:h-[450px] lg:h-[500px] rounded-[150px] sm:rounded-[200px] overflow-hidden shadow-2xl">
              <Image
                src="/logo1.png"
                alt="Classical Painting"
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-1/2 -left-4 lg:-left-8 transform -translate-y-1/2 bg-[#5C4033] text-[#FAF7F0] rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm">
              01/06
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="px-4 sm:px-8 py-8 sm:py-12 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 sm:px-4 sm:border-r border-[#E8DFD3] last:border-r-0 py-4 sm:py-0">
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <span className="text-xl sm:text-2xl mb-1 sm:mb-2">{stat.icon}</span>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[#3E2A1F]">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-[#7D6E5F] tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Collections Section */}
      {/* <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-8">
            <div className="w-32 h-40 rounded-[80px] overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=200&h=250&fit=crop"
                alt="Mountain Landscape"
                width={200}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-light text-[#3E2A1F] mb-4" style={{ fontFamily: 'serif' }}>
                Collections Of Paintings<br />
                Worth To Buy
              </h2>
              <div className="flex items-center gap-2 mt-8">
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-contain opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-[#7D6E5F] leading-relaxed font-light">
              Lorem ipsum dolor oscult amet cons ectetur 
              adipi scing elit, sed do eiusmod tempor 
              incididunt ut labore.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}