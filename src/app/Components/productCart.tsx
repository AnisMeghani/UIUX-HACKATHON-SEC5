import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const ProductCart = () => {
  const prodName = [
    {
      Name: "Gradient Graphic T-shirt",
      image: "/images/Frame 123.png",
      
    },
    {
      Name: "Checkered Shirt",
      image: "/images/Frame 124.png",
    },
    {
      Name: "Skinny Fit Jeans",
      image: "/images/Frame 125.png",
    },
  ];

  return (
    <div>
      {/* Upper part with line and links */}
      <div>
        <div className="flex justify-center w-full h-auto">
          {/* Horizontal line */}
          <hr className="w-11/12 border border-slate-300 mb-6" />
        </div>

        {/* Links of Home and Cart */}
        <div className="flex justify-center w-full h-auto">
          <h3 className="flex w-11/12 mb-2">
            Home <ChevronRight /> Cart
          </h3>
          
        </div>
        {/*Your Cart Heading */}
        <div className="flex justify-center w-full h-auto">
          <h1 className="flex w-11/12 mb-2 font-black text-5xl">
          YOUR CART</h1>
          </div>
      </div>

      {/* Product cards */}
      <div className="w-full h-auto flex justify-center">
        <div className="w-11/12 h-auto border rounded-3xl">
          {prodName.map((products, index) => (
            <div key={index} className="mx-auto w-11/12 h-auto">
              {/* Image */}
              <div className="mb-6 mt-6">
                <Image
                  src={products.image}
                  alt={products.Name}
                  width={500}
                  height={100}
                />
              </div>
              <div className="flex justify-center w-full h-auto">
          {/* Horizontal line */}
          <hr className="w-full border border-slate-200 mt-1" />
        </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-auto flex justify-center mt-5'>
        <div className='w-11/12 h-auto flex justify-center'>
        <Image 
        src="/images/Frame 28 (1).png"
        alt='Frame 28 (1)'
        width={582}
        height={400}
        />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
