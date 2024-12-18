import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

function ProductDetails() {
  return (
    <div>
      <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 mb-6" />
      </div>

      {/* links of home shop men and t-shirts */}
      <div className='flex justify-center w-full h-auto'>
      <h3 className="flex w-11/12 mb-2 ">
        Home <ChevronRight /> Shop <ChevronRight /> Men <ChevronRight /> T-shirts
      </h3>
      </div>

      {/* Product Picture */}
      <div className="w-full h-[500px] my-4 flex justify-center">
        <Image
          src="/images/product-image 1.png"
          alt="product-image 1"
          width={358}
          height={500}
          className='w-11/12 h-auto '
        />
      </div>

      <div className='flex justify-center w-full h-auto'>
      {/* Thumbnail Images */}
      <div className="flex gap-3 w-11/12 h-auto">
        <Image
          src="/images/product-image 1.png"
          alt="product-image 1"
          width={200}
          height={150}
           />
        <Image
          src="/images/product-image 1.png"
          alt="product-image 1"
          width={200}
          height={150}
        />
        <Image
          src="/images/product-image 1.png"
          alt="product-image 1"
          width={200}
          height={150}
        />
      </div>
      </div>

      {/* Product Heading */}
      <div className='w-full h-auto flex justify-center'>
        <h1 className="w-11/12 h-auto text-3xl font-black my-4">
          ONE LIFE GRAPHIC <br /> T-SHIRT
        </h1>
      </div>

      {/* Ratings */}
      <div className="flex justify-center w-full h-auto">
        <div className='flex w-11/12 h-auto'>
        <Image
          src="/images/Frame 11.png"
          alt="Rating"
          width={150}
          height={19}
          
        />
      </div>
      </div>

      {/* Prices and Discounts */}
      <div className="flex justify-center w-full h-auto my-3">
        <div className='w-11/12 h-auto flex'>
        <Image
          src="/images/Frame 114.png"
          alt="Prices and Discounts"
          width={185}
          height={32}
          
        />
      </div>
      </div>

      {/* Description */}
      <div className='flex justify-center w-full h-auto'>
        <p className="text-sm mx-3 text-slate-500 w-11/12 h-auto flex">
          This graphic t-shirt which is perfect for any occasion. Crafted from
          a soft and breathable fabric, it offers superior comfort and style.
        </p>
      </div>

      <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 my-6" />
      </div>

      {/* Colour Options */}
      <div className="w-full h-auto flex justify-center my-3">
        <div className='flex w-11/12 h-auto'>
        <Image
          src="/images/Frame 115.png"
          alt="Colours"
          width={170}
          height={70.14}
        />
      </div>
      </div>

      <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 my-6" />
      </div>

      {/* Sizes */}
      <div className="w-full h-auto my-3 flex justify-center">
      <div className='flex w-11/12 h-auto'>
        <Image
          src="/images/Frame 116.png"
          alt="Sizes"
          width={383}
          height={70}
        />
      </div>
      </div>

      <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 my-6" />
      </div>

      {/* Quantity Cart */}
      <div className="flex justify-center w-full h-auto my-3 gap-3">
      <div className='flex justify-between w-11/12 h-auto'>

        <Image
          src="/images/Frame 17.png"
          alt="Quantity Cart"
          width={170}
          height={54}
        />
        <Image
          src="/images/Frame 14.png"
          alt="Add to Cart"
          width={376}
          height={54}
        />
        </div>
        
      </div>

      {/* Links of products, rating and faqs */}
      <div className='flex justify-center w-full h-auto mt-16'>
          <div className='flex justify-between text-slate-400 w-11/12 h-auto text-xl'>
            <h3>Product Details</h3>
            <h3 className='text-black'>Rating & Reviews</h3>
            <h3>FAQs</h3>

          </div>

        </div>

        {/* Horizontal line */}
      <div className='flex justify-center w-full relative'>
      <hr className="flex w-11/12 border border-slate-300 my-6" />
      {/* underline at Rating & Reviews */}
      <hr className="absolute w-3/12 border border-black my-6 ml-24"  />
      </div>

      {/* All Reviews line */}
      <div className='flex justify-center w-full h-auto'>
        <div className='flex justify-between w-11/12 h-auto items-center'>
      <h1 className=" text-lg items-baseline text-slate-400"><b className='font-semibold text-4xl text-black'>All Reviews </b> (451)</h1>
      {/* Icon & Write a Review */}
      {/* <div className="w-full h-auto my-3 flex justify-center">*/}
      <div className='flex gap-3'>
        <Image
          src="/images/Frame 19.png"
          alt="Vector icon"
          width={45}
          height={45}
        />
        {/* button write a review */}
        <Image
          src="/images/Frame 20.png"
          alt="Write a Review"
          width={118}
          height={45}
        />
      </div>
      </div>
      </div>




      {/* People Reviews */}
      <div className="flex justify-center w-full h-auto  mt-3 mb-5">
      <div className='flex justify-center w-11/12 h-auto'>

        <Image
          src="/images/Frame 22.png"
          alt="Samantha D."
          width={563}
          height={22}
        />
      </div>
      </div>
      <div className="flex justify-center w-full h-auto  mt-3 mb-5">
      <div className='flex justify-center w-11/12 h-auto'>

        <Image
          src="/images/Frame 117.png"
          alt="Elex M."
          width={563}
          height={22}
        />
      </div>
      </div>
      <div className="flex justify-center w-full h-auto  mt-3 mb-12">
      <div className='flex justify-center w-11/12 h-auto'>

        <Image
          src="/images/Frame 118.png"
          alt="Ethan R."
          width={563}
          height={22}
        />
      </div>
      </div>

      
      {/* Load more reviews button */}
      <div className="flex justify-center w-full h-auto  mt-3 mb-12">
      <div className='flex justify-center w-11/12 h-auto'>

        <Image
          src="/images/Frame 28.png"
          alt="Load more button"
          width={353}
          height={65}
        />
      </div>
      </div>


      <div className='flex justify-center w-full h-auto'>
        <h1 className=" w-11/12 h-auto text-7xl font-black my-3 text-center">YOU MIGHT ALSO LIKE</h1>
      </div>

    </div>
  );
}

export default ProductDetails;
