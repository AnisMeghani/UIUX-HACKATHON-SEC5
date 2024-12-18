import Image from "next/image";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";

const ProductListing2 = () => {
  const ProductName = [
    {
      proName: "Vertical Striped Shirt",
      review: (
        <div className="flex items-center w-[160.7px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" /> 5.0/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400">$232</div>,
      disprice: "$212",
      percent: (
        <div className="border rounded-2xl bg-red-200  text-red-600 text-xs">
          -20%
        </div>
      ),

      image: "/images/product5.png",
    },
    {
      proName: "Courage Graphics T-Shirt",
      review: (
        <div className="flex items-center w-[137.9px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" /> 4.0/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400"></div>,
      disprice: "$145",
      percent: (
        <div className="border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
      ),

      image: "/images/product6.png",
    },
    // {
    //   proName: "Loose Fit Bermuda Shorts",
    //   review: (
    //     <div className="flex items-center w-[113.09px] h-[19px] gap-[4.7px]">
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       3.0/5
    //     </div>
    //   ),
    //   price: <div className=" flex line-through text-slate-400"></div>,
    //   disprice:"$120" ,
    //   percent: (
    //     <div className=" border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
    //   ),

    //   image:"/images/product7.png",
    // },
    // {
    //   proName: "Faded Skinny Jeans",
    //   review: (
    //     // Stars Lucid icons inserted
    //     <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <StarHalf className="fill-yellow-500 text-yellow-500" /> 4.5/5
    //     </div>
    //   ),
    //   price: <div className="flex line-through text-slate-400"></div>,
    //   disprice: "$120",
    //   percent: (
    //     <div className="border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
    //   ),

    //   image: "/images/product8.png",
    // },
  ];

  return (
    <div>
      {/* Heading */}
      <h1 className="text-5xl font-black text-center pt-4 pb-6">TOP SELLING</h1>
      <div className="w-full h-auto flex justify-center">
      <div className="flex w-11/12 h-auto">
        {ProductName.map((products, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-left p-2 w-full h-auto"
            >
              {/* Image */}
              <div>
                <Image
                  src={products.image}
                  alt={products.proName}
                  width={395}
                  height={298}
                  className="object-cover rounded-xl mb-4"
                />
              </div>
              {/* Products Name and Price */}
              <div className=" text-left mb-5 ">
                <h1 className="font-semibold text-sm">{products.proName}</h1>
                <div className=" text-xs text-gray-700 ">{products.review}</div>
                <div className="flex text-sm text-gray-700 text-left pt-1 font-extrabold gap-2">
                  {products.disprice} {products.price}
                  <div className="  px-3  ">{products.percent}</div>
                </div>
              </div>
              </div>
            
          );
        })}
      </div>
      </div>
    </div>
  );
};
export default ProductListing2;
