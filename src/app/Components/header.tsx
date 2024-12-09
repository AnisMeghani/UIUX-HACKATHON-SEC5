import React from "react";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { CircleUserRound } from "lucide-react";

const UpperHeader = () => {
  return (
    <div className="flex justify-center items-center h-38px w-full bg-black text-white">
      <span className="font-solid text-white ml-80">
        Sign up and get 20% off to your first order.
        <a className="underline mx-2" href="/">
          Sign Up Now
        </a>
      </span>
      {/*cross icon inserted  */}
      <X className="ml-64" />
    </div>
  );
};

export default UpperHeader;

export const Header = () => {
  return (
    <div className="flex w-full h-8 my-5">
      <nav className="font-bold text-2xl w-2/12 text-end">SHOP.CO</nav>
      <div className="flex justify-evenly gap-5 w-4/12 pt-2 px-5">
        <nav className="text-xs">Shop </nav>
        <nav className="text-xs">On Sales </nav>
        <nav className="text-xs">New Arrivals </nav>
        <nav className="text-xs">Brands</nav>
      </div>

      {/* search bar display */}
      <div className="flex w-4/12 bg-slate-200 border rounded-3xl px-4 py-2">
      {/* search icon placement */}
        <Search className="pb-2" />
        <input
          type="text"
          placeholder="Search for products..."
          className=" bg-slate-200 pl-3 text-sm"
        ></input>
      </div>
        {/* Shopping trolly icon inserted */}
      <ShoppingCart className="ml-6 mr-3 mt-1 text-sm" />
      {/* Contact icon inserted */}
      <CircleUserRound className="mt-1 text-sm" />
    </div>
  );
};
