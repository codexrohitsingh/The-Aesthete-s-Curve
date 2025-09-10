'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();

  return (
    <header className="px-8 py-6 flex items-center justify-between border-b border-[#E8DFD3] bg-[#FAF7F0]">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo1.png"
          alt="The Aesthete's Curve"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>
      
      <nav className="flex items-center gap-12">
        <Link href="/" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
          home
        </Link>
        <Link href="/#collections" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
          product
        </Link>
        <Link href="#" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
          services
        </Link>
        <Link href="#" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
          contact
        </Link>
      </nav>

      <Link href="/cart" className="relative">
        <svg className="w-6 h-6 text-[#5C4033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#5C4033] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </header>
  );
}