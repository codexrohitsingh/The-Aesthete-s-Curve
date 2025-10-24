'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProducts } from '../context/ProductsContext';

export default function CollectionsGallery() {
  const router = useRouter();
  const { products } = useProducts();
  const paintings = products;

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-light text-[#3E2A1F] mb-3 leading-tight" style={{ fontFamily: 'serif' }}>
              Collections Of Paintings Worth To Buy
            </h1>
            <div className="mt-4">
              <Image
                src="/logo1.png"
                alt="The Aesthete's Curve"
                width={40}
                height={40}
                className="object-contain opacity-60"
              />
            </div>
          </div>
          
          <div className="max-w-full lg:max-w-sm lg:pl-8">
            <p className="text-[#7D6E5F] text-xs sm:text-sm leading-relaxed font-light">
              {/* Lorem ipsum dolor opsoit amet cons ectetur 
              adipi scing elit, sed do eiusmod tempor 
              incididunt ut labore */}
            </p>
          </div>
        </div>


        {/* Paintings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className={`group ${painting.available ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              onClick={() => {
                if (painting.available) {
                  const params = new URLSearchParams({
                    title: painting.title,
                    price: painting.price,
                    image: painting.image
                  });
                  router.push(`/painting?${params.toString()}`);
                }
              }}
            >
              <div className={`overflow-hidden rounded-lg shadow-lg bg-white/80 border border-[#E8DFD3] ${painting.available ? 'hover:shadow-xl' : ''} transition-shadow relative`}>
                <div className="aspect-square relative overflow-hidden bg-gray-50">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    width={500}
                    height={500}
                    className={`object-contain w-full h-full ${painting.available ? 'group-hover:scale-105' : 'opacity-50'} transition-transform duration-300`}
                  />
                  {!painting.available && (
                    <div className="absolute inset-0 bg-gray-500/40 flex items-center justify-center">
                      <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-light">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-3 sm:p-5">
                  <h3 className={`font-light text-base sm:text-xl mb-1 sm:mb-2 ${painting.available ? 'text-[#3E2A1F]' : 'text-gray-400'}`}>
                    {painting.title}
                  </h3>
                  <p className={`text-sm sm:text-base font-light mb-2 sm:mb-3 ${painting.available ? 'text-[#7D6E5F]' : 'text-gray-400'}`}>
                    {painting.artist}
                  </p>
                  <p className={`font-light text-lg sm:text-2xl ${painting.available ? 'text-[#5C4033]' : 'text-gray-400 line-through'}`}>
                    {painting.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="w-12 h-12 rounded-full bg-white/80 border border-[#E8DFD3] flex items-center justify-center hover:bg-[#C4B5A0]/20 transition-colors">
            <svg className="w-5 h-5 text-[#5C4033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full bg-white/80 border border-[#E8DFD3] flex items-center justify-center hover:bg-[#C4B5A0]/20 transition-colors">
            <svg className="w-5 h-5 text-[#5C4033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Background Text Decoration */}
        <div className="fixed top-20 left-0 -z-10 opacity-5 pointer-events-none">
          <h1 className="text-[15rem] font-light text-[#3E2A1F]" style={{ fontFamily: 'serif' }}>
            our collection
          </h1>
        </div>
      </div>
    </div>
  );
}