'use client'

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"
import { allProducts, CasualProductQuery, fourProducts, NewFourProducts } from "@/sanity/lib/queries"
import { Product } from "../../../types/products"
import React from "react"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

const Casual = () => {
    
    const [product, setproduct] = useState<Product[]>([])

    useEffect(() => {
        async function getProduct(){
            const fetchedProduct : Product[] = await client.fetch(CasualProductQuery)
            setproduct(fetchedProduct)
        }
        getProduct()
    },[])

    return(
        <div>
            
                  <h1 className="text-5xl font-black text-center pt-14 pb-6">Casual</h1>
                  <div className="flex justify-center w-full h-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 h-auto">



            {product.map((product) => (
                <div key= {product._id}>

                    {product.image && (
                        <Image src={urlFor(product.image).url()} alt="image" width={295} height={298}
                        className="object-cover rounded-xl mb-4"
                        />
                    )}
                    {product.name}
                    {product.rating}
                    
                    <div className="flex text-xl text-gray-700 text-left pt-1 font-extrabold gap-2">

                    {product.price}
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

                </div>
            ))}
            </div>
            </div>
            
        </div>
    )

}
export default Casual