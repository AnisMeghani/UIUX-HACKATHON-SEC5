import React from "react";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const HeroPage = () => {
  return (
    <div className="bg-[#efedee] lg:flex lg:h-[663px] w-full h-auto border border-solid border-black lg:mt-2 " >
      <div className=" lg:w-6/12 w-11/12 h-auto lg:h-[663px] mx-auto">
        <div className="lg:py-24 lg:pl-16 mx-auto w-full h-auto">
          <h1 className="text-7xl font-black py-5 text-clip">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <h6 className="text-base pb-5 pr-6 text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h6>
          <button className="bg-black text-white w-full lg:w-40 h-auto rounded-3xl py-2 lg:px-5 mb-5">
            Shop Now
          </button>
        </div>

        <div className="lg:hidden flex w-full h-auto">
        <div className="text-4xl font-bold w-full h-auto pl-10">200+
          <p className="text-lg text-gray-600 font-normal">Internation Brands</p>
        </div>
        <div  className="border-l border-gray-300 w-full h-auto mx-auto">

        <div className="text-4xl  font-bold w-full h-auto pl-12">2000+
        <p className="text-lg text-gray-600 font-normal">High-Quality Products</p>
        </div>
        

        </div>
      </div>
      <div className="lg:hidden w-full h-auto flex justify-center mt-3">
      <div className="text-center font-bold text-4xl">30000+
          <p className="text-lg text-gray-600 font-normal pl-2">Happy Customers</p>
        </div>
        </div>

      </div>
      <div className="w-11/12 h-auto lg:flex lg:w-6/12 lg:h-auto">
        <div className="lg:relative lg:flex lg:justify-end">
          <Image src="/images/hero image 2.png" alt="" width={642} height={0} />

          {/* <div className=" absolute lg:inset-0 lg:pl-10 lg:pt-60 lg:h-20 w-full h-auto inset-0 ">
            <Sparkle className=" fill-black h-16 w-16" />
          </div>
          <div className="absolute lg:inset-0 flex justify-end lg:h-20 w-full h-auto  lg:pt-10">
            <Sparkle className=" fill-black h-28 w-28" /> */}
          </div>
        </div>
        
      </div>
  );
};

export default HeroPage;
