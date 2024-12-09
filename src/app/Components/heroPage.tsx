import React from "react";
import Image from "next/image";
import { Sparkle } from "lucide-react";

const HeroPage = () => {
  return (
    <div className=" flex h-[663px] w-full ">
      <div className=" w-6/12 h-[663px]">
        <div className="py-24 pl-10">
          <h1 className="text-6xl font-bold py-5 pr-1">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <h6 className="text-xs pb-5 pr-6 text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </h6>
          <button className="bg-black text-white rounded-3xl py-2 px-14">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex w-6/12 h-[663px]">
        <div className="relative flex justify-end">
          <Image src="/images/hero image 2.png" alt="" width={642} height={0} />

          <div className=" absolute inset-0 pt-60 h-20 w-full">
            <Sparkle className=" fill-black h-16 w-16" />
          </div>
          <div className="absolute inset-0 flex justify-end h-20 w-full pr-5 pt-10">
            <Sparkle className=" fill-black h-28 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
