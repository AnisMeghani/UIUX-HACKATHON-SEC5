import Image from "next/image";
import { Star } from "lucide-react";
import { StarHalf } from "lucide-react";

const ProductListing2 = () => {
  const ProductName = [
    {
      proName: "Vertical Striped Shirt",
      review: (
        <div className="flex items-center w-[125px] h-[18.69px] gap-[4.7px]">
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
        <div className="flex items-center w-[108px] h-[18.69px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" /> 4.0/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400"></div>,
      disprice: "$120",
      percent: (
        <div className="border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
      ),

      image: "/images/product6.png",
    },
    {
      proName: "Loose Fit Bermuda Shorts",
      review: (
        <div className="flex items-center w-[80px] h-[18.69px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          3.0/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400"></div>,
      disprice: "$120",
      percent: (
        <div className="border rounded-2xl bg-red-200  text-red-600 text-xs"></div>
      ),

      image: "/images/product7.png",
    },
    {
      proName: "Faded Skinny Jeans",
      review: (
        <div className="flex items-center w-[115px] h-[18.69px] gap-[4.7px]">
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

      image: "/images/product8.png",
    },
  ];

  return (
    <div>
      {/* Heading */}
      <h1 className="text-3xl font-black text-center pt-2 pb-6">TOP SELLING</h1>
      <div className="flex flex-wrap justify-evenly gap-6">
        {ProductName.map((products, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-md w-60"
            >
              {/* Image */}
              <div className="mb-4">
                <Image
                  src={products.image}
                  alt={products.proName}
                  width={295}
                  height={298}
                  className="object-cover rounded-md"
                />
              </div>
              {/* Car Name and Price */}
              <div className="text-center">
                <h1 className="font-semibold text-sm">{products.proName}</h1>
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
  );
};
export default ProductListing2;
