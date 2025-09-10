'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface RelatedProductsProps {
  currentTitle?: string;
}

export default function RelatedProducts({ currentTitle }: RelatedProductsProps) {
  const router = useRouter();

  const paintings = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹2,499'
    },
    {
      id: 2,
      title: 'Golden Hour',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹3,299'
    },
    {
      id: 3,
      title: 'Serene Landscapes',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹4,599'
    },
    {
      id: 4,
      title: 'Abstract Emotions',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹3,999'
    },
    {
      id: 5,
      title: 'Nature\'s Symphony',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹5,299'
    },
    {
      id: 6,
      title: 'Urban Poetry',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹2,999'
    }
  ];

  // Filter out the current painting and show only 3 others
  const otherPaintings = paintings
    .filter(painting => painting.title !== currentTitle)
    .slice(0, 3);

  const handlePaintingClick = (painting: typeof paintings[0]) => {
    const params = new URLSearchParams({
      title: painting.title,
      price: painting.price,
      image: painting.image
    });
    router.push(`/painting?${params.toString()}`);
  };

  return (
    <div className="bg-[#FAF7F0] py-16">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-3xl font-light text-[#3E2A1F] mb-8 text-center" style={{ fontFamily: 'serif' }}>
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-3 gap-6">
          {otherPaintings.map((painting) => (
            <div
              key={painting.id}
              className="group cursor-pointer"
              onClick={() => handlePaintingClick(painting)}
            >
              <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 border border-[#E8DFD3] hover:shadow-xl transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={painting.image}
                    alt={painting.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[#3E2A1F] font-light text-lg mb-1">{painting.title}</h3>
                  <p className="text-[#5C4033] font-light text-xl">{painting.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}