"use client"; // Mark this as a client component

import { useCart } from "@/app/context/CartContext";
import { ShoppingCart } from "lucide-react";

const CartIcon = () => {
  const { cartCount } = useCart(); // Get the total count of products in the cart, including quantities

  return (
    <div className="relative">
      <ShoppingCart className="text-gray-800" size={24} />
      {cartCount > 0 && (
        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {cartCount} {/* Display total count of items in the cart */}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
