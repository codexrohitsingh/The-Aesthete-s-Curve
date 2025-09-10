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
      if (!user || user.primaryEmailAddress?.emailAddress !== 'rs21rohit@gmail.com') {
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

  if (!user || user.primaryEmailAddress?.emailAddress !== 'rs21rohit@gmail.com') {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-light text-[#3E2A1F]" style={{ fontFamily: 'serif' }}>
            Admin Panel
          </h1>
          <button
            onClick={addNewProduct}
            className="bg-[#5C4033] text-[#FAF7F0] px-6 py-2 rounded-full hover:bg-[#3E2A1F] transition-colors font-light"
          >
            Add New Product
          </button>
        </div>

        <div className="bg-white/80 rounded-lg shadow-xl p-6 border border-[#E8DFD3]">
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