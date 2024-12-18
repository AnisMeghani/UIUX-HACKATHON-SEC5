import Image from "next/image";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";

const ProductListing1 = () => {
  const ProductName = [
    {
      proName: "T-shirts with Tape Details",
      review: (
        <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <StarHalf className="fill-yellow-500 text-yellow-500" /> 4.5/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400"></div>,
      disprice: "$120",
      percent: (
        <div className="border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
      ),
      image: "/images/product1.png",
    },
    {
      proName: "Skinny Fit Jeans",
      review: (
        <div className="flex items-center w-[126.2px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <StarHalf className="fill-yellow-500 text-yellow-500" /> 3.5/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400">$260</div>,
      disprice: "$240",
      percent: (
        <div className="border rounded-2xl bg-red-200  text-red-600 text-xs">
          -20%
        </div>
      ),

      image: "/images/product2.png",
    },
    // {
    //   proName: "Checkered Shirt",
    //   review: (
    //     <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <StarHalf className="fill-yellow-500 text-yellow-500" />
    //       4.5/5
    //     </div>
    //   ),
    //   price: <div className="flex line-through text-slate-400"></div>,
    //   disprice: "$180",
    //   percent: (
    //     <div className=" border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
    //   ),

    //   image: "/images/product3.png",
    // },
    // {
    //   proName: "Sleeve Striped T-Shirt",
    //   review: (
    //     <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <Star className="fill-yellow-500 text-yellow-500" />
    //       <StarHalf className="fill-yellow-500 text-yellow-500" />
    //       4.5/5
    //     </div>
    //   ),
    //   price: <div className="flex line-through text-slate-400">$160</div>,
    //   disprice: "$130",
    //   percent: (
    //     <div className="border rounded-2xl bg-red-200  text-red-600 text-xs">
    //       -30%
    //     </div>
    //   ),

    //   image: "/images/product4.png",
    // },
  ];

  return (
    <div>
      {/* Heading */}
      <h1 className="text-5xl font-black text-center pt-14 pb-6 ">
        NEW ARRIVALS
      </h1>
      <div className="flex justify-center w-full h-auto">
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
                  width={295}
                  height={298}
                  className="object-cover rounded-xl mb-4"
                />
              </div>
              {/* Products Name and Prices */}
              <div className="text-left mb-5" >
                <h1 className="font-semibold text-sm ">{products.proName}</h1>
                <div className="text-xs text-gray-700">{products.review}</div>
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

export default ProductListing1;
