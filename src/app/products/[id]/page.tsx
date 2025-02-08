 "use client" 
import Image from "next/image";
import { Check, Minus, Plus, Star } from "lucide-react";
import { StarHalf } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
interface iproducts{
    id: number,
    proName: string,
    review: any,
    price: any,
    disprice: string,
    percent: any,
    image: string,
    img1: string,
    img2: string,
    img3: string
}

// let ProductList = () => {
  let Products: iproducts[] = [
    {
      id:1,
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
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs"></div>
      ),
      image: "/images/product1.png",
      img1: "/images/image 2.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:2,
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
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs">
          -20%
        </div>
      ),
      image: "/images/product2.png",
      img1: "/images/image 2.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:3,
      proName: "Checkered Shirt",
      review: (
        <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <StarHalf className="fill-yellow-500 text-yellow-500" />
          4.5/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400"></div>,
      disprice: "$180",
      percent: (
        <div className=" border rounded-2xl bg-red-200 text-red-600 text-xs"></div>
      ),
      image: "/images/product3.png",
      img1: "/images/image 2.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:4,
      proName: "Sleeve Striped T-Shirt",
      review: (
        <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <StarHalf className="fill-yellow-500 text-yellow-500" />
          4.5/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400">$160</div>,
      disprice: "$130",
      percent: (
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs">
          -30%
        </div>
      ),
      image: "/images/product4.png",
      img1: "/images/pro image 1.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:5,
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
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs">
          -20%
        </div>
      ),
      image: "/images/product5.png",
      img1: "/images/pro image 1.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:6,
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
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs"></div>
      ),
      image: "/images/product6.png",
      img1: "/images/pro image 1.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:7,
      proName: "Loose Fit Bermuda Shorts",
      review: (
        <div className="flex items-center w-[113.09px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" /> 3.0/5
        </div>
      ),
      price: <div className="flex line-through text-slate-400"></div>,
      disprice: "$120",
      percent: (
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs"></div>
      ),
      image: "/images/product7.png",
      img1: "/images/pro image 1.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
    {
      id:8,
      proName: "Faded Skinny Jeans",
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
        <div className="border rounded-2xl bg-red-200 text-red-600 text-xs"></div>
      ),
      image: "/images/product8.png",
      img1: "/images/pro image 1.png",
    img2: "/images/image 5.png",
    img3: "/images/image 6.png"
    },
  ];

export default function proDetails(){
  const params= useParams()
  const id= params.id //dynamic id yaha se milegi
  const item= Products.find((item)=> item.id === Number(id))
  if(!item){
    return<h1>Product not found</h1>
  }
    return(
        <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
          {/* left image area */}
        <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1 mt-2">
          {/*Get image */}
          <Image src={item.img1} className="w-[100px] h-[100px] sm:w-full sm:h-[150px]" alt="Product Details" width={100} height={100}></Image>
          <Image src={item.img2} className="w-[100px] h-[100px] sm:w-full sm:h-[150px] sm:mt-3" alt="Product Details" width={100} height={100}></Image>
          <Image src={item.img3} className="w-[100px] h-[100px] sm:w-full sm:h-[150px] sm:mt-3" alt="Product Details" width={100} height={100}></Image>
          </div>
          {/* middle image area   */}
          <div className="w-full h-[260px] sm:w-[444px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
          <Image src={item.image} className="w-full h-[100%]" alt="Product Details" width={100} height={100}></Image>
          </div>
          {/* right side area */}
          <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
            <h1 className="text-2xl md:text-3xl font-black">
              ONE LIFE GRAPHIC T-SHIRT
            </h1>
            <div className="flex items-center w-[150px] h-[19px] gap-[4.7px]">
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
          <Star className="fill-yellow-500 text-yellow-500" />
        </div>
        <ul>
        <li className="font-bold mt-1">{item.price}{item.disprice}</li>
        <li>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric,
          it offers superior comfort and style. </li>
          </ul>
        {/* Select colour */}
        <div className=" mt-5">
          <p className="text-gray-500">Select colours</p>
          <div className="flex space-x-3 mt-2">
          <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="opacity-0 hover:opacity-100 cursor-pointer text-white"/></div>
          <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="opacity-0 hover:opacity-100 cursor-pointer text-white"/></div>
          <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="opacity-0 hover:opacity-100 cursor-pointer text-white"/></div>
          </div>
        </div>
        {/* Choose size */}
        <div className="mt-4">
          <p className="text-gray-500">Choose size</p>
        
        <div className="flex space-x-3 mt-2">
          <div className="w-[80px] h-[40px] bg-[#f0f0f0] text-gray-400 flex justify-center items-center rounded-[62px]">Small</div>
          <div className="w-[90px] h-[40px] bg-[#f0f0f0] text-gray-400 flex justify-center items-center rounded-[62px]">Medium</div>
          <div className="w-[80px] h-[40px] bg-[#f0f0f0] text-gray-400 flex justify-center items-center rounded-[62px]">Large</div>
          <div className="w-[90px] h-[40px] bg-[#f0f0f0] text-gray-400 flex justify-center items-center rounded-[62px]">X-Large</div>
        </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-start items-center mt-7 space-x-4">
        <div className="w-[100px] h-[40px] p-3  bg-[#f0f0f0] text-gray-400 flex justify-between items-center rounded-[62px]">
        <Minus/>1
        <Plus/>
        </div>
        <Button className="bg-black text-white w-[350px] rounded-[62px]">Add to Cart</Button>
          </div>

          </div>
          
          
          </div>
    )
}