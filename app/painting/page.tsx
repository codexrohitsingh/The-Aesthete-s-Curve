'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import PaintingPurchase from '../components/PaintingPurchase';
import RelatedProducts from '../components/RelatedProducts';

function PaintingContent() {
  const searchParams = useSearchParams();
  
  const title = searchParams.get('title') || 'Divine Geometry';
  const price = searchParams.get('price') || '₹399.99';
  const image = searchParams.get('image') || '/logo1.png';

  return (
    <>
      <PaintingPurchase 
        title={title}
        price={price}
        image={image}
      />
      <RelatedProducts currentTitle={title} />
    </>
  );
}

export default function PaintingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaintingContent />
    </Suspense>
  );
}