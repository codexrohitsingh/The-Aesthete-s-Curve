'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useProducts } from '../context/ProductsContext';

interface RelatedProductsProps {
  currentTitle?: string;
}

export default function RelatedProducts({ currentTitle }: RelatedProductsProps) {
  const router = useRouter();
  const { products } = useProducts();
  const paintings = products;

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
    <div className="py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-light text-[#3E2A1F] mb-6 sm:mb-8 text-center" style={{ fontFamily: 'serif' }}>
          You May Also Like
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                <div className="p-3 sm:p-4">
                  <h3 className="text-[#3E2A1F] font-light text-base sm:text-lg mb-1">{painting.title}</h3>
                  <p className="text-[#5C4033] font-light text-lg sm:text-xl">{painting.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}