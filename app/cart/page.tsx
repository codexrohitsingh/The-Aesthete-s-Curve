'use client';

import { useCart } from '../context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF7F0] py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-light text-[#3E2A1F] mb-8" style={{ fontFamily: 'serif' }}>
            Your Cart is Empty
          </h1>
          <p className="text-[#7D6E5F] mb-8">Add some beautiful paintings to your collection</p>
          <Link 
            href="/"
            className="inline-block bg-[#5C4033] text-[#FAF7F0] px-8 py-3 rounded-full hover:bg-[#3E2A1F] transition-colors font-light"
          >
            Browse Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF7F0] py-12">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-light text-[#3E2A1F] mb-8" style={{ fontFamily: 'serif' }}>
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="bg-white/80 rounded-lg shadow-lg p-6 mb-4 border border-[#E8DFD3]">
                <div className="flex gap-6">
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-light text-[#3E2A1F] mb-2">{item.title}</h3>
                    <p className="text-[#7D6E5F] text-sm mb-1">Frame: {item.frameColor}</p>
                    <p className="text-[#7D6E5F] text-sm mb-3">Package: {item.deliveryPackage}</p>
                    <p className="text-[#5C4033] text-lg font-light mb-3">{item.price}</p>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 rounded-lg shadow-lg p-6 border border-[#E8DFD3] sticky top-24">
              <h2 className="text-2xl font-light text-[#3E2A1F] mb-6" style={{ fontFamily: 'serif' }}>
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-[#7D6E5F]">{item.title}</span>
                    <span className="text-[#5C4033]">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-[#E8DFD3] pt-4 mb-6">
                <div className="flex justify-between text-xl">
                  <span className="font-light text-[#3E2A1F]">Total</span>
                  <span className="font-normal text-[#3E2A1F]">{getTotalPrice()}</span>
                </div>
              </div>
              
              <button
                onClick={() => {
                  const message = items.map(item => 
                    `${item.title} (Frame: ${item.frameColor}, Package: ${item.deliveryPackage}) - ${item.price}`
                  ).join('\n');
                  const totalMessage = `Order Summary:\n${message}\n\nTotal: ${getTotalPrice()}`;
                  
                  navigator.clipboard.writeText(totalMessage);
                  window.open('https://ig.me/m/aesthete.s_curve', '_blank');
                }}
                className="w-full bg-[#5C4033] text-[#FAF7F0] px-6 py-3 rounded-full hover:bg-[#3E2A1F] transition-colors font-light mb-3"
              >
                Checkout via Instagram
              </button>
              
              <button
                onClick={() => {
                  const message = items.map(item => 
                    `${item.title} (Frame: ${item.frameColor}, Package: ${item.deliveryPackage}) - ${item.price}`
                  ).join('\n');
                  const totalMessage = `Order Summary:\n${message}\n\nTotal: ${getTotalPrice()}`;
                  const phoneNumber = '917856937007';
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(totalMessage)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-white border-2 border-[#5C4033] text-[#5C4033] px-6 py-3 rounded-full hover:bg-[#FAF7F0] transition-colors font-light mb-3"
              >
                Checkout via WhatsApp
              </button>
              
              <button
                onClick={clearCart}
                className="w-full text-red-500 hover:text-red-700 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}