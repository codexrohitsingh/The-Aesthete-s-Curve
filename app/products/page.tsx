import CollectionsGallery from '../components/CollectionsGallery';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-5xl font-light text-[#3E2A1F] mb-4 text-center" style={{ fontFamily: 'serif' }}>
          Our Products
        </h1>
        <p className="text-center text-[#7D6E5F] mb-12 max-w-2xl mx-auto">
          Discover our curated collection of paintings, each piece carefully selected to bring 
          beauty and elegance to your space.
        </p>
      </div>
      <CollectionsGallery />
    </div>
  );
}