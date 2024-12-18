import React from "react";
import Image from "next/image";

const HeadingBar = () => {
  return (
    <div className="lg:flex bg-black w-full h-auto text-white items-center sm:gap-5 sm:py-10 ">
      <div className="flex sm:justify-evenly sm:pb-6 lg:pt-3">
      <div className="lg:pr-10 lg:pl-32 lg:w-[206] lg:h-[30]">
        <Image 
        src="/images/versace-logo-1 1.png"
        alt="versace-logo"
        width={166.48}
        height={33.16}
         />
         </div>
         <div className="lg:px-10 lg:w-[206] lg:h-[30]">
        <Image 
        src="/images/zara-logo-1 1.png"
        alt="zara-logo"
        width={91}
        height={38}
         />
         </div>
         <div className="lg:px-10 lg:w-[206] lg:h-[30]">
        <Image 
        src="/images/gucci-logo-1 1.png"
        alt="gucci-logo"
        width={156}
        height={36}
         />
         </div>
         </div>

          <div className="flex sm:justify-evenly lg:items-center lg:pb-2">
         <div className="lg:px-10 lg:w-[206] lg:h-[30]">
        <Image 
        src="/images/prada-logo-1 1.png"
        alt="prada-logo"
        width={194}
        height={32}
         />
         </div>
         <div className="lg:px-10 lg:w-[206] lg:h-[30]">
        <Image 
        src="/images/calvin-klein-logo-1 1.png"
        alt="calvin-klein-logo-1 1ppp"
        width={206.79}
        height={33.35}
         />
         </div>
         </div>
    </div>
  );
};

export default HeadingBar;
