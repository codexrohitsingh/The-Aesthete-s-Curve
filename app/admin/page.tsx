'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useProducts, Product } from '../context/ProductsContext';

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const { products, updateProducts } = useProducts();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    title: '',
    price: '',
    image: '',
    available: true
  });

  useEffect(() => {
    if (isLoaded) {
      // Check if user is authorized
      if (!user || user.primaryEmailAddress?.emailAddress !== 'shivankar023@gmail.com') {
        router.push('/');
      }
    }
  }, [user, isLoaded, router]);

  const startEdit = (product: Product) => {
    setEditingId(product.id);
    setEditForm({
      title: product.title,
      price: product.price,
      image: product.image,
      available: product.available
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({
      title: '',
      price: '',
      image: '',
      available: true
    });
  };

  const saveEdit = () => {
    const updatedProducts = products.map(product => 
      product.id === editingId 
        ? { ...product, ...editForm }
        : product
    );
    updateProducts(updatedProducts);
    cancelEdit();
  };

  const toggleAvailability = (id: number) => {
    const updatedProducts = products.map(product => 
      product.id === id 
        ? { ...product, available: !product.available }
        : product
    );
    updateProducts(updatedProducts);
  };

  const deleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(product => product.id !== id);
      updateProducts(updatedProducts);
    }
  };

  const addNewProduct = () => {
    const newProduct: Product = {
      id: Math.max(...products.map(p => p.id)) + 1,
      title: 'New Painting',
      artist: 'The Aesthete\'s Curve',
      image: '/logo1.png',
      price: '₹0',
      available: true
    };
    updateProducts([...products, newProduct]);
    startEdit(newProduct);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#FAF7F0] flex items-center justify-center">
        <p className="text-[#5C4033]">Loading...</p>
      </div>
    );
  }

  if (!user || user.primaryEmailAddress?.emailAddress !== 'shivankar023@gmail.com') {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-light text-[#3E2A1F]" style={{ fontFamily: 'serif' }}>
            Admin Panel
          </h1>
          <button
            onClick={addNewProduct}
            className="bg-[#5C4033] text-[#FAF7F0] px-4 sm:px-6 py-2 rounded-full hover:bg-[#3E2A1F] transition-colors font-light text-sm sm:text-base"
          >
            Add New Product
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block bg-white/80 rounded-lg shadow-xl p-6 border border-[#E8DFD3] overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E8DFD3]">
                <th className="text-left py-3 px-4 text-[#5C4033] font-light">Image</th>
                <th className="text-left py-3 px-4 text-[#5C4033] font-light">Title</th>
                <th className="text-left py-3 px-4 text-[#5C4033] font-light">Price</th>
                <th className="text-left py-3 px-4 text-[#5C4033] font-light">Status</th>
                <th className="text-left py-3 px-4 text-[#5C4033] font-light">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-[#E8DFD3]/50">
                  <td className="py-4 px-4">
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editForm.image}
                        onChange={(e) => setEditForm({...editForm, image: e.target.value})}
                        className="w-full p-2 border border-[#E8DFD3] rounded"
                        placeholder="Image path"
                      />
                    ) : (
                      <div className="relative w-16 h-16">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editForm.title}
                        onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                        className="w-full p-2 border border-[#E8DFD3] rounded"
                      />
                    ) : (
                      <span className="text-[#3E2A1F]">{product.title}</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {editingId === product.id ? (
                      <input
                        type="text"
                        value={editForm.price}
                        onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                        className="w-32 p-2 border border-[#E8DFD3] rounded"
                      />
                    ) : (
                      <span className="text-[#5C4033]">{product.price}</span>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {editingId === product.id ? (
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={editForm.available}
                          onChange={(e) => setEditForm({...editForm, available: e.target.checked})}
                          className="mr-2"
                        />
                        <span className="text-sm">Available</span>
                      </label>
                    ) : (
                      <button
                        onClick={() => toggleAvailability(product.id)}
                        className={`px-3 py-1 rounded-full text-xs font-light ${
                          product.available 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {product.available ? 'Available' : 'Out of Stock'}
                      </button>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      {editingId === product.id ? (
                        <>
                          <button
                            onClick={saveEdit}
                            className="text-green-600 hover:text-green-800 text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="text-gray-600 hover:text-gray-800 text-sm"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(product)}
                            className="text-[#5C4033] hover:text-[#3E2A1F] text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteProduct(product.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white/80 rounded-lg shadow-xl p-4 border border-[#E8DFD3]">
              {editingId === product.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-[#5C4033] font-light">Image Path</label>
                    <input
                      type="text"
                      value={editForm.image}
                      onChange={(e) => setEditForm({...editForm, image: e.target.value})}
                      className="w-full p-2 border border-[#E8DFD3] rounded mt-1"
                      placeholder="Image path"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#5C4033] font-light">Title</label>
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                      className="w-full p-2 border border-[#E8DFD3] rounded mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#5C4033] font-light">Price</label>
                    <input
                      type="text"
                      value={editForm.price}
                      onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                      className="w-full p-2 border border-[#E8DFD3] rounded mt-1"
                    />
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={editForm.available}
                      onChange={(e) => setEditForm({...editForm, available: e.target.checked})}
                    />
                    <span className="text-sm text-[#5C4033]">Available</span>
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-full text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex gap-4 mb-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-[#3E2A1F] mb-1">{product.title}</h3>
                      <p className="text-[#5C4033] font-light mb-2">{product.price}</p>
                      <button
                        onClick={() => toggleAvailability(product.id)}
                        className={`px-3 py-1 rounded-full text-xs font-light ${
                          product.available 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {product.available ? 'Available' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 border-t border-[#E8DFD3] pt-3">
                    <button
                      onClick={() => startEdit(product)}
                      className="flex-1 bg-[#5C4033] text-[#FAF7F0] px-4 py-2 rounded-full text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex-1 bg-red-500 text-white px-4 py-2 rounded-full text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Changes are saved locally. To upload new images, place them in the public folder 
            and use the path format: /filename.jpg
          </p>
        </div>
      </div>
    </div>
  );
}