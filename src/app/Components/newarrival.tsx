"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { NewFourProducts } from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react"; // Only import full and half stars

const NewArrival = () => {
  const [product, setproduct] = useState<Product[]>([]);

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct: Product[] = await client.fetch(NewFourProducts);
      setproduct(fetchedProduct);
    }
    getProduct();
  }, []);

  // Helper function to render stars dynamically
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Count of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if half star is needed

    return (
      <div className="flex items-center">
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <Star key={`full-${i}`} className="fill-yellow-500 text-yellow-500" />
          ))}
        {hasHalfStar && <StarHalf className="fill-yellow-500 text-yellow-500" />}
        <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}/5</span>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-5xl font-black text-center pt-14 pb-6">NEW ARRIVALS</h1>
      <div className="flex justify-center w-full h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-11/12 h-auto">
          {product.map((product) => (
            <div key={product._id}>
              <Link href={`/product/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={295}
                    height={298}
                    className="object-cover rounded-xl mb-4"
                  />
                )}
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                {/* Rating and stars */}
                <div className="flex items-center">
                  {product.rating && renderStars(product.rating)}
                </div>

                <div className="flex items-center text-xl text-gray-700 text-left pt-1 font-extrabold gap-2">
                  <span>${product.price}</span>
                  <div>
                    {product.discountPercent > 0 && (
                      <div className="bg-red-100 text-[#FF3333] border rounded-3xl px-[10px] py-[1px] items-center text-sm">
                        {product.discountPercent}%
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
