"use client";
import { useState } from "react";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/context/CartContext";
import { Plus, Minus } from "lucide-react";
import { Product } from "../../../types/products";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.inventory) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ ...product, quantity });
    toast.success("Product successfully added to cart! 🎉", {
      position: "top-right", // Toast position
      autoClose: 2000, // Auto dismiss after 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light", // Toast theme
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={decreaseQuantity}
          className="bg-gray-200 flex justify-center px-5 py-2 rounded-[62px] hover:bg-gray-300"
        >
          <Minus />
        </button>
        <span>{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="bg-gray-200 flex justify-center px-5 py-2 rounded-[62px] hover:bg-gray-300"
        >
          <Plus />
        </button>

      <Button
        onClick={handleAddToCart}
        className="bg-black text-white w-[400px] rounded-[62px]"
      >
        Add to Cart
      </Button>
    </div>
    </div>

  );
}
