"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import {
  allProducts,
  fourProducts,
  FourTagsquery,
  NewFourProducts,
} from "@/sanity/lib/queries";
import { Product } from "../../../types/products";
import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf } from "lucide-react";

const TopSelling = () => {
  const [product, setproduct] = useState<Product[]>([]);

  useEffect(() => {
    async function getProduct() {
      const fetchedProduct: Product[] = await client.fetch(FourTagsquery);
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
      <h1 className="text-5xl font-black text-center pt-14 pb-6">
        TOP SELLING
      </h1>
      <div className="flex justify-center w-full h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-11/12 h-auto">
          {product.map((product) => (
            <div key={product._id}>
              <Link href={`/product/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt="image"
                    width={295}
                    height={298}
                    className="object-cover rounded-xl mb-4"
                  />
                )}
                {product.name}
                {product.rating}
                {/* Rating and stars */}
                <div className="flex items-center">
                  {product.rating && renderStars(product.rating)}
                </div>

                <div className="flex text-xl text-gray-700 text-left pt-1 font-extrabold gap-2">
                  ${product.price}
                  <div>
                    {product.discountPercent > 0 ? (
                      <>
                        <div className="bg-red-100 text-[#FF3333] border rounded-3xl px-[10px] py-[2px] items-center text-sm">
                          {product.discountPercent}%
                        </div>
                      </>
                    ) : null}
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
export default TopSelling;
