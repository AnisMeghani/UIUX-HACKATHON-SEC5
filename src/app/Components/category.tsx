import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image';

function Category() {
  return (
    <div>
         <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 mb-6" />
      </div>

      {/* links of home and casual */}
      <div className='flex justify-center w-full h-auto'>
      <h3 className="flex w-11/12 mb-2 ">
        Home <ChevronRight /> Casual
      </h3>
      </div>

{/* All Reviews line */}
<div className='flex justify-center w-full h-auto'>
        <div className='flex justify-between w-11/12 h-auto items-center'>
      <h1 className=" text-lg items-baseline text-slate-400"><b className='font-semibold text-4xl text-black'>Casual </b> Showing 1-10 of 100 Products</h1>
      {/* Icon & Write a Review */}
            <div className='flex'>
              <Image
                src="/images/Frame 19.png"
                alt="Vector icon"
                width={45}
                height={45}
              />
      </div>
      </div>
        </div>

        <div className='flex justify-center w-full h-auto'>
              {/* Thumbnail Images */}
              <div className="flex gap-4 w-11/12 h-auto mt-10">
                <Image
                  src="/images/Frame 60 (1).png"
                  alt="product-image 1"
                  width={290}
                  height={240}
                   />
                <Image
                  src="/images/Frame 104.png"
                  alt="product-image 1"
                  width={290}
                  height={240}
                />
                </div>
                </div>

                 {/* product name */}
                <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-4 w-11/12 h-auto mt-5">
                <Image
                  src="/images/Gradient Graphic T....png"
                  alt="product-image 1"
                  width={250}
                  height={200}
                   />
                   <Image
                  src="/images/Polo with Tipping De....png"
                  alt="product-image 1"
                  width={250}
                  height={200}
                  className='ml-10'
                   />
                   </div>
                   </div>

              {/* reviews and rating */}
             <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-4 w-11/12 h-auto mt-2">
                <Image
                  src="/images/Frame 62.png"
                  alt="product-image 1"
                  width={175}
                  height={10}
                   />
                   <Image
                  src="/images/Frame 11.png"
                  alt="product-image 1"
                  width={200}
                  height={10}
                  className='ml-28'
                   />
                   </div>
                   </div>

                    {/* prices and discount */}
                   <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-4 w-11/12 h-auto mt-2">
                <Image
                  src="/images/Frame 103.png"
                  alt="product-image 1"
                  width={225}
                  height={10}
                   />
                   <Image
                  src="/images/Frame 106.png"
                  alt="product-image 1"
                  width={225}
                  height={10}
                  className='ml-16'
                   />
                   </div>
                   </div>

                   <div className='flex justify-center w-full h-auto'>
              {/* Thumbnail Images */}
              <div className="flex gap-4 w-11/12 h-auto mt-10">
                <Image
                  src="/images/Frame 107.png"
                  alt="product-image 1"
                  width={290}
                  height={240}
                   />
                <Image
                  src="/images/Frame 108.png"
                  alt="product-image 1"
                  width={290}
                  height={240}
                />
                </div>
                </div>

                 {/* product name */}
                <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-4 w-11/12 h-auto mt-5">
                <Image
                  src="/images/Black Striped T-shirt.png"
                  alt="product-image 1"
                  width={250}
                  height={200}
                   />
                   <Image
                  src="/images/Skinny Fit Jeans.png"
                  alt="product-image 1"
                  width={200}
                  height={200}
                  className='ml-10'
                   />
                   </div>
                   </div>

              {/* reviews and rating */}
             <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-4 w-11/12 h-auto mt-2">
                <Image
                  src="/images/Frame 109.png"
                  alt="product-image 1"
                  width={190}
                  height={10}
                   />
                   <Image
                  src="/images/Frame 62.png"
                  alt="product-image 1"
                  width={180}
                  height={10}
                  className='ml-24'
                   />
                   </div>
                   </div>

                    {/* prices and discount */}
                   <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-4 w-11/12 h-auto mt-2">
                <Image
                  src="/images/Frame 111.png"
                  alt="product-image 1"
                  width={225}
                  height={10}
                   />
                   <Image
                  src="/images/Frame 112.png"
                  alt="product-image 1"
                  width={225}
                  height={10}
                  className='ml-16'
                   />
                   </div>
                   </div>

                   <div className='flex justify-center w-full h-auto'>
              {/* Thumbnail Images */}
              <div className="flex gap-4 w-11/12 h-auto mt-10">
                <Image
                  src="/images/Frame 113.png"
                  alt="product-image 1"
                  width={290}
                  height={240}
                   />
                <Image
                  src="/images/Frame 114 (1).png"
                  alt="product-image 1"
                  width={290}
                  height={240}
                />
                </div>
                </div>

                 {/* product name */}
                <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-28 w-11/12 h-auto mt-5">
                <Image
                  src="/images/Checkered Shirt.png"
                  alt="product-image 1"
                  width={200}
                  height={200}
                   />
                   <Image
                  src="/images/Sleeve Striped T-shirt.png"
                  alt="product-image 1"
                  width={250}
                  height={200}
                  className=''
                   />
                   </div>
                   </div>

              {/* reviews and rating */}
             <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-20 w-11/12 h-auto mt-2">
                <Image
                  src="/images/Frame 11.png"
                  alt="product-image 1"
                  width={225}
                  height={10}
                   />
                   <Image
                  src="/images/Frame 11.png"
                  alt="product-image 1"
                  width={200}
                  height={10}
                  className=''
                   />
                   </div>
                   </div>

                    {/* prices and discount */}
                   <div className='flex justify-center w-full h-auto'>
              <div className="flex gap-56 w-11/12 h-auto mt-2">
                <Image
                  src="/images/Frame 117 (1).png"
                  alt="product-image 1"
                  width={75}
                  height={10}
                   />
                   <Image
                  src="/images/Frame 118 (2).png"
                  alt="product-image 1"
                  width={225}
                  height={10}
                  className=''
                   />
                   </div>
                   </div>

                   <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 mt-10 mb-6" />
      </div>

      <div className='flex justify-center w-full h-auto'>
      <div className="flex justify-center w-11/12 h-auto mt-2">
                 <Image
                  src="/images/Group 14.png"
                  alt="product-image 1"
                  width={580}
                  height={8}
                  className=''
                   />
                    </div>
                    </div>
    
        

 </div>
  );
}

export default Category;
