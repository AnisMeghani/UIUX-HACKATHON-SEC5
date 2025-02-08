"use client"
import React, { useState, useEffect } from "react";
import { X, Search, ShoppingCart, CircleUserRound } from "lucide-react";
import Link from "next/link";
import axios from "axios"; // For API call
import { SheetSide } from "./sheets";
import { NavigationMenuDemo } from "./navigationShop";
import { useCart } from "../context/CartContext"; // Import the Cart Context
import { useRouter } from "next/navigation"; // Import useRouter
import { Product } from "../../../types/products";

// Normalize the string for search purposes
const normalizeString = (str: string) => {
  return str.toLowerCase().trim().replace(/\s+/g, ""); // Remove extra spaces and convert to lowercase
};

export const UpperHeader = () => {
  return (
    <header className="bg-black w-full h-[38px] flex justify-center items-center relative">
      <div className="flex justify-center items-center">
        <div className="font-solid text-white text-xs sm:text-sm">
          Sign up and get 20% off to your first order.
          <Link className="underline mx-2 text-xs sm:text-sm" href="/signup">
            Sign Up Now
          </Link>
        </div>
        <X className="absolute right-[50px] text-white hidden md:block" />
      </div>
    </header>
  );
};

// Main Header component
export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const { cart, cartCount, cartId } = useCart(); // Destructure cartId from useCart
  const router = useRouter();

  // Optimized handleSearch function
  const handleSearch = async (query: string) => {
    const normalizedQuery = normalizeString(query); // Normalize the query before sending it to the API

    if (!normalizedQuery.trim()) return; // If the query is empty or only contains spaces, don't search.

    setLoading(true);
    try {
      const response = await axios.get(`/api/search?query=${normalizedQuery}`, {
        headers: {
          "Cache-Control": "no-store",  // Disable caching for the search request
        },
      });
      setResults(response.data); // Set the filtered products from the API response
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm); // Trigger search on "Enter"
    }
  };

  // Add a debounce to reduce excessive search calls
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm) {
        handleSearch(searchTerm); // Start search on typing
      } else {
        setResults([]); // Clear results if searchTerm is empty
      }
    }, 500); // Delay of 500ms before firing the search

    return () => clearTimeout(timer); // Clean up the timer on searchTerm change
  }, [searchTerm]);

  return (
    <>
      <UpperHeader /> {/* UpperHeader component */}
      <header className="flex justify-between items-center w-full h-[60px]">
        <div className="flex justify-center items-center">
          <SheetSide />
          <Link href={"/"} className="font-black text-xl sm:text-3xl pl-2">
            SHOP.CO
          </Link>
        </div>

        {/* Navbar */}
        <ul className="hidden md:block">
          <li className="space-x-5 flex items-center">
            <Link href={""}>
              <NavigationMenuDemo />
            </Link>
            <Link href={""} className="text-sm">
              On Sales
            </Link>
            <Link href={""} className="text-sm">
              New Arrivals
            </Link>
            <Link href={""} className="text-sm">
              Brands
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:block relative">
          <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#efedee]">
            <Search className="text-xl ml-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-[#efedee] ml-2 text-sm outline-none rounded-[62px] w-full h-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Trigger search on each keystroke
              onKeyDown={handleKeyPress}
            />
          </div>

          {/* Search Results */}
          {loading && <p className="text-sm mt-2">Loading...</p>}
          {results.length > 0 && (
            <div className="absolute top-full left-0 w-[330px] bg-white shadow-md rounded-md mt-2 z-20 max-h-60 overflow-y-auto">
              {results.map((product: Product) => (
                <Link key={product._id} href={`/product/${product.slug?.current}`}>
                  <div className="p-2 border-b last:border-none text-sm cursor-pointer">
                    <p>
                      <strong>{product.name}</strong>
                    </p>
                    <p>${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {results.length === 0 && !loading && searchTerm && (
            <p className="text-sm mt-2">No products found.</p>
          )}
        </div>

        {/* Cart and Icons */}
        <div className="flex items-center mr-7 space-x-5">
          {/* Cart Icon with Badge */}
          <div
            className="relative cursor-pointer"
            onClick={() => router.push(`/your-cart/${cartId}`)} // Use cartId here
          >
            <ShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </div>
            )}
          </div>

          <Link href={""}>
            <CircleUserRound className="text-xl" />
          </Link>
        </div>
      </header>
    </>
  );
};
