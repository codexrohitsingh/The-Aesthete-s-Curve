import { Suspense } from 'react';
import PaintingContent from './PaintingContent.jsx';

// Export the generateMetadata function from metadata.ts
export { generateMetadata } from './metadata';




export default function PaintingPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PaintingContent />
      </Suspense>
    </>
  );
}