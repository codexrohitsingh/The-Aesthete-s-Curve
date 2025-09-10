'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CollectionsGallery() {
  const router = useRouter();

  const paintings = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png', // Replace with: '/painting1.jpg' after adding your image
      price: '₹2,499'
    },
    {
      id: 2,
      title: 'Golden Hour',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png', // Replace with: '/painting2.jpg' after adding your image
      price: '₹3,299'
    },
    {
      id: 3,
      title: 'Serene Landscapes',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png', // Replace with: '/painting3.jpg' after adding your image
      price: '₹4,599'
    },
    {
      id: 4,
      title: 'Abstract Emotions',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png', // Replace with: '/painting4.jpg' after adding your image
      price: '₹3,999'
    },
    {
      id: 5,
      title: 'Nature\'s Symphony',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png', // Replace with: '/painting5.jpg' after adding your image
      price: '₹5,299'
    },
    {
      id: 6,
      title: 'Urban Poetry',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png', // Replace with: '/painting6.jpg' after adding your image
      price: '₹2,999'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-12">
          <div className="flex-1">
            <h1 className="text-6xl font-light text-[#3E2A1F] mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
              Collections Of Paintings<br />
              Worth To Buy
            </h1>
            <div className="mt-6">
              <Image
                src="/logo1.png"
                alt="The Aesthete's Curve"
                width={60}
                height={60}
                className="object-contain opacity-60"
              />
            </div>
          </div>
          
          <div className="max-w-md pl-12">
            <p className="text-[#7D6E5F] leading-relaxed font-light">
              Lorem ipsum dolor opsoit amet cons ectetur 
              adipi scing elit, sed do eiusmod tempor 
              incididunt ut labore
            </p>
          </div>
        </div>


        {/* Wishlist Button */}
        <div className="flex justify-end mb-12">
          <button className="px-6 py-2 bg-[#C4B5A0] text-[#3E2A1F] rounded-full hover:bg-[#B8A68E] transition-colors font-light">
            add to wishlist
          </button>
        </div>

        {/* Paintings Grid */}
        <div className="grid grid-cols-3 gap-8">
          {paintings.map((painting) => (
            <div
              key={painting.id}
              className="group cursor-pointer"
              onClick={() => {
                const params = new URLSearchParams({
                  title: painting.title,
                  price: painting.price,
                  image: painting.image
                });
                router.push(`/painting?${params.toString()}`);
              }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 border border-[#E8DFD3]">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#3E2A1F] font-light text-lg mb-1">{painting.title}</h3>
                  <p className="text-[#7D6E5F] text-sm font-light mb-2">{painting.artist}</p>
                  <p className="text-[#5C4033] font-light text-xl">{painting.price}</p>
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