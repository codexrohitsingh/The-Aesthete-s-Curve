'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from '@clerk/nextjs';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();
  const { user } = useUser();
  const isAdmin = user?.primaryEmailAddress?.emailAddress === 'shivankar023@gmail.com';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 sm:px-8 py-4 sm:py-6 border-b border-[#E8DFD3] bg-[#FAF7F0]">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="The Aesthete's Curve"
            width={60}
            height={60}
            className="object-contain sm:w-20 sm:h-20"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link href="/" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
            Home
          </Link>
          <Link href="/products" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
            Product
          </Link>
          <Link href="/about" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
            About Us
          </Link>
          {isAdmin && (
            <Link href="/admin" className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light border-l border-[#E8DFD3] pl-8 lg:pl-12">
            ADMIN
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="bg-[#5C4033] text-[#FAF7F0] rounded-full font-light text-sm px-4 py-2 hover:bg-[#3E2A1F] transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6 text-[#5C4033]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-[#E8DFD3] pt-4">
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              home
            </Link>
            <Link 
              href="/products" 
              className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              product
            </Link>
            <Link 
              href="/about" 
              className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              about us
            </Link>
            {isAdmin && (
              <Link 
                href="/admin" 
                className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light border-t border-[#E8DFD3] pt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                admin
              </Link>
            )}
            <div className="sm:hidden border-t border-[#E8DFD3] pt-4">
              <SignedOut>
                <div className="flex flex-col gap-3">
                  <SignInButton mode="modal">
                    <button className="text-[#5C4033] hover:text-[#3E2A1F] transition-colors font-light text-left">
                      Sign In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="bg-[#5C4033] text-[#FAF7F0] rounded-full font-light text-sm px-4 py-2 hover:bg-[#3E2A1F] transition-colors">
                      Sign Up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
              
              <SignedIn>
                <div className="flex items-center gap-2">
                  {/* <span className="text-[#5C4033] font-light">Account</span> */}
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}