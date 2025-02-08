"use client";

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React, { useState, useEffect } from "react";
import { Product } from "../../../../types/products";

interface CartPageProps {
  params: Promise<{ id: string }>; // Change params to a Promise
}

export default function CartPage({ params }: CartPageProps) {
  const { cart, removeFromCart, updateCartQuantity } = useCart(); // Using cart context
  const [cartData, setCartData] = useState<Product[]>(cart);
  const router = useRouter();
  const [cartId, setCartId] = useState<string | null>(null);

  useEffect(() => {
    // Syncing state with context when cart changes
    setCartData(cart);
  }, [cart]);

  useEffect(() => {
    // Unwrap the params promise to get the cart ID
    const unwrapParams = async () => {
      const resolvedParams = await params;
      setCartId(resolvedParams.id);
    };
    unwrapParams();
  }, [params]);

  if (cartData.length === 0) {
    return (
      <div>
        <h1>Your Cart is Empty</h1>
        <p>Please add some products to your cart.</p>
      </div>
    );
  }

  const handleRemove = (productId: string) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateCartQuantity(productId, newQuantity);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartData.map((product) => (
          <div
            key={product._id}
            className="flex items-center justify-between p-4 border-b border-gray-200"
          >
            {/* Product Image and Details */}
            <div className="flex items-center w-1/2">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px] object-cover mr-4 rounded-md"
                />
              )}
              <div className="truncate">
                <h2 className="font-semibold truncate">{product.name}</h2>
                <p className="text-sm text-gray-500">${product.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleUpdateQuantity(product._id, (product.quantity || 1) - 1)}
                className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400"
                disabled={(product.quantity || 1) <= 1}
              >
                -
              </button>
              <span className="w-8 text-center">{product.quantity || 1}</span>
              <button
                onClick={() => handleUpdateQuantity(product._id, (product.quantity || 1) + 1)}
                className="bg-gray-300 text-black px-3 py-1 rounded-md hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemove(product._id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="mt-6 flex justify-between items-center">
        <div className="font-semibold text-xl">
          Total: $
          {cartData.reduce(
            (total, product) => total + product.price * (product.quantity || 1),
            0
          )}
        </div>
        <button
          onClick={() => router.push(`/checkout/${cartId}`)} // Use the unwrapped cartId
          className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
