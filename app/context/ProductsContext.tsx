'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: number;
  title: string;
  artist: string;
  image: string;
  price: string;
  available: boolean;
}

interface ProductsContextType {
  products: Product[];
  updateProducts: (products: Product[]) => void;
  getAvailableProducts: () => Product[];
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const defaultProducts: Product[] = [
  {
    id: 1,
    title: 'Ethereal Dreams',
    artist: 'The Aesthete\'s Curve',
    image: '/logo1.png',
    price: '₹2,499',
    available: true
  },
  {
    id: 2,
    title: 'Golden Hour',
    artist: 'The Aesthete\'s Curve',
    image: '/logo1.png',
    price: '₹3,299',
    available: true
  },
  {
    id: 3,
    title: 'Serene Landscapes',
    artist: 'The Aesthete\'s Curve',
    image: '/logo1.png',
    price: '₹4,599',
    available: true
  },
  {
    id: 4,
    title: 'Abstract Emotions',
    artist: 'The Aesthete\'s Curve',
    image: '/logo1.png',
    price: '₹3,999',
    available: true
  },
  {
    id: 5,
    title: 'Nature\'s Symphony',
    artist: 'The Aesthete\'s Curve',
    image: '/logo1.png',
    price: '₹5,299',
    available: true
  },
  {
    id: 6,
    title: 'Urban Poetry',
    artist: 'The Aesthete\'s Curve',
    image: '/logo1.png',
    price: '₹2,999',
    available: true
  }
];

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(defaultProducts);

  // useEffect(() => {
  //   // Load products from localStorage on mount
  //   if (typeof window !== 'undefined') {
  //     const savedProducts = localStorage.getItem('adminProducts');
  //     if (savedProducts) {
  //       try {
  //         setProducts(JSON.parse(savedProducts));
  //       } catch (e) {
  //         console.error('Failed to parse saved products:', e);
  //       }
  //     }
  //   }
  // }, []);

  const updateProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminProducts', JSON.stringify(newProducts));
    }
  };

  const getAvailableProducts = () => {
    return products.filter(product => product.available);
  };

  return (
    <ProductsContext.Provider value={{ products, updateProducts, getAvailableProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};