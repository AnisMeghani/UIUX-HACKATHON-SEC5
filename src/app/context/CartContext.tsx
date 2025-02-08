"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../../../types/products";
import { v4 as uuidv4 } from "uuid";

// Create Cart context
const CartContext = createContext<any>(null);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [cartId, setCartId] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      const storedCartId = localStorage.getItem("cartId");

      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
      if (storedCartId) {
        setCartId(storedCartId);
      } else {
        const newCartId = uuidv4();
        setCartId(newCartId);
        localStorage.setItem("cartId", newCartId);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingProductIndex]) {
          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity:
              (updatedCart[existingProductIndex].quantity || 0) +
              (product.quantity || 0),
          };
        }
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  const updateCartQuantity = (productId: string, newQuantity: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        cartCount,
        cartId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
