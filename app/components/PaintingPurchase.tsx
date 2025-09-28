'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/CartContext';

interface PaintingPurchaseProps {
  title?: string;
  price?: string;
  image?: string;
}

export default function PaintingPurchase({ 
  title = 'Divine Geometry', 
  price = '₹399.99',
  image = '/logo1.png'
}: PaintingPurchaseProps) {
  const [selectedFrame, setSelectedFrame] = useState('natural');
  const [deliveryPackage, setDeliveryPackage] = useState('Gift for Friends');
  const [showToast, setShowToast] = useState(false);
  const [showCartToast, setShowCartToast] = useState(false);
  const { addToCart } = useCart();

  const frameColors = [
    { id: 'natural', color: '#E8DFD3', label: 'Natural' },
    { id: 'cream', color: '#FAF7F0', label: 'Cream' },
    { id: 'mocha', color: '#C4B5A0', label: 'Mocha' },
    { id: 'charcoal', color: '#5C4033', label: 'Charcoal' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-6 sm:py-12 relative">
      {/* Toast Notifications */}
      {showToast && (
        <div className="fixed top-20 right-2 sm:right-4 bg-[#5C4033] text-[#FAF7F0] px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg z-50 animate-fade-in max-w-[90vw] sm:max-w-sm">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-medium">Message copied!</p>
              <p className="text-sm opacity-90 mt-1">Press Ctrl+V (or Cmd+V on Mac) to paste in Instagram chat</p>
            </div>
          </div>
        </div>
      )}
      
      {showCartToast && (
        <div className="fixed top-20 right-2 sm:right-4 bg-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg z-50 animate-fade-in max-w-[90vw] sm:max-w-sm">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <p className="font-medium">Added to Cart!</p>
              <p className="text-sm opacity-90 mt-1">{title} has been added to your cart</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="max-w-4xl mx-4 sm:mx-8 lg:mx-auto bg-white/80 rounded-lg shadow-xl p-4 sm:p-6 lg:p-8 border border-[#E8DFD3]">
        <h2 className="text-center text-[#7D6E5F] text-base sm:text-lg mb-6 sm:mb-8 font-light">
          One step to receive your painting...
        </h2>

        <div className="flex flex-col items-center mb-8 sm:mb-10">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 sm:h-12 bg-[#C4B5A0]"></div>
            <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-0.5 bg-[#C4B5A0]"></div>
            <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2">
              <div className="relative mt-4">
                <Image
                  src={image}
                  alt={title}
                  width={320}
                  height={320}
                  className="rounded-sm shadow-xl object-contain w-56 h-56 sm:w-80 sm:h-80"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-4 sm:mb-6 mt-4">
          <h1 className="text-2xl sm:text-3xl font-light mb-2 text-[#3E2A1F]" style={{ fontFamily: 'serif' }}>{title}</h1>
          <p className="text-[#7D6E5F] font-light text-sm sm:text-base">
            8 inches × 8 inches • Wood & hardboard
          </p>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <p className="text-3xl sm:text-4xl font-light text-[#3E2A1F]">{price}</p>
        </div>

        {/* <div className="mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-light mb-3 sm:mb-4 text-[#5C4033] tracking-wider">
            SELECT FRAME COLOR
          </h3>
          <div className="flex gap-3 sm:gap-4 justify-center">
            {frameColors.map((frame) => (
              <button
                key={frame.id}
                onClick={() => setSelectedFrame(frame.id)}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all ${
                  selectedFrame === frame.id
                    ? 'border-[#5C4033] ring-2 ring-[#C4B5A0]/30'
                    : 'border-[#E8DFD3]'
                }`}
                style={{ backgroundColor: frame.color }}
                aria-label={frame.label}
              />
            ))}
          </div>
        </div> */}

        <div className="mb-6 sm:mb-8">
          <h3 className="text-xs sm:text-sm font-light mb-3 sm:mb-4 text-[#5C4033] tracking-wider">
            DELIVERY PACKAGE
          </h3>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#7D6E5F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <select
              value={deliveryPackage}
              onChange={(e) => setDeliveryPackage(e.target.value)}
              className="w-full p-3 pl-10 border border-[#E8DFD3] rounded-md appearance-none bg-white/90 pr-10 focus:outline-none focus:ring-2 focus:ring-[#C4B5A0] text-[#3E2A1F] font-light"
            >
              <option value="" disabled>Select gift package</option>
              <option value="Gift for Friends">Gift for Friends</option>
              <option value="Personal Use">Personal Use</option>
              <option value="Premium Gift">Premium Gift</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-[#7D6E5F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button 
              onClick={() => {
                const itemId = `${title}-${selectedFrame}-${deliveryPackage}`;
                addToCart({
                  id: itemId,
                  title,
                  price,
                  image,
                  frameColor: selectedFrame,
                  deliveryPackage
                });
                setShowCartToast(true);
                setTimeout(() => setShowCartToast(false), 3000);
              }}
              className="bg-white border-2 border-[#5C4033] text-[#5C4033] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#FAF7F0] transition-colors font-light text-sm sm:text-base"
            >
              Add to Cart
            </button>
            <button 
              onClick={async () => {
                const message = `Hi, I want to buy: ${title} - ${price}`;
                
                try {
                  // Copy message to clipboard
                  await navigator.clipboard.writeText(message);
                  
                  // Show toast notification with instructions
                  setShowToast(true);
                  
                  // Open Instagram DM
                  setTimeout(() => {
                    window.open('https://ig.me/m/aesthete.s_curve', '_blank');
                  }, 500);
                  
                  // Hide toast after 5 seconds
                  setTimeout(() => setShowToast(false), 5000);
                } catch (err) {
                  console.error('Failed to copy message:', err);
                  // Fallback: just open Instagram
                  window.open('https://ig.me/m/aesthete.s_curve', '_blank');
                }
              }}
              className="bg-[#5C4033] text-[#FAF7F0] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#3E2A1F] transition-colors font-light flex items-center gap-2 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
              Buy via Instagram
            </button>
          </div>
          
          {/* Alternative: WhatsApp with pre-filled message (actually works!) */}
          <div className="text-center">
            <p className="text-xs text-[#7D6E5F] mb-2">Or contact via WhatsApp </p>
            <button
              onClick={() => {
                const message = `Hi, I want to buy: ${title} - ${price}`;
                // Replace with your actual WhatsApp number
                const phoneNumber = '917856937007'; // Format: country code + number (91 for India)
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="text-[#5C4033] hover:text-[#3E2A1F] underline text-sm font-light"
            >
              Message on WhatsApp 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}