import React from "react";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { AlignJustify } from 'lucide-react';


const UpperHeader = () => {
  return (
    <div className="flex justify-center items-center w-full h-auto bg-black text-white ">
      <span className="font-solid text-white flex justify-center item-center w-10/12">
        Sign up and get 20% off to your first order.
        <a className="underline mx-2" href="/">
          Sign Up Now
        </a>
      </span>
      {/*cross icon inserted  */}
      <X className=" sm:hidden lg:flex justify-end lg:w-2/12" />
    </div>
  );
};

export default UpperHeader;

export const Header = () => {
  return (
    <div className="flex justify-center w-full h-auto">
    <div className=" flex  w-11/12  h-8 my-5 items-center">
      <AlignJustify className="lg:hidden h-10 w-auto"/>
      <nav className="font-black text-3xl w-2/12 lg:w-2/12 ml-10">SHOP.CO</nav>

      <div className="lg:flex lg:justify-center lg:w-full lg:h-auto ">
      <div className=" sm:hidden lg:flex lg:justify-around lg:w-full lg:items-center ">
        <nav className="text-sm">Shop </nav>
        <nav className="text-sm">On Sales </nav>
        <nav className="text-sm">New Arrivals </nav>
        <nav className="text-sm">Brands</nav>
      </div>
      </div>

      {/* searchbar display */}
      <div className=" flex lg:justify-end lg:w-full lg:h-auto lg:items-center  ">

      {/* search icon placement */}
      <div className="sm:hidden lg:flex lg:justify-end lg:bg-[#efedee] lg:w-full lg:border lg:rounded-3xl lg:px-6 lg:py-2">
        
        <Search className="lg:flex lg:justify-start" />
        <input
          type="text"
          placeholder="Search for products..."
          className=" lg:bg-[#efedee] lg:pl-2 lg:text-sm lg:flex lg:justify-start lg:w-full"
        ></input>
      </div>
      </div>
      

      <div className=" flex justify-end w-full h-auto items-center lg:w-2/12">
      <div >

      {/* search icon inserted */}
      <div className=" flex gap-5">
      <Search className="lg:hidden"/>
      {/* Shopping trolly icon inserted */}
      <ShoppingCart className=" text-sm" />
      {/* Contact icon inserted */}
      <CircleUserRound className=" text-sm" />
    </div>
    </div>
    </div>
    </div>
     </div>
  );
};
