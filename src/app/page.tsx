import Image from "next/image";
import HeroPage from "./Components/heroPage";
import HeadingBar from "./Components/headingBar";
import ProductListing1 from "./Components/productListing1";
import ProductListing2 from "./Components/productListing2";
import ViewAllBtn from "./Components/viewAllBtn";
import Gallery from "./Components/gallery";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Reviews from "./Components/reviews";


export default function Home() {
  return (
    <div>
    
      <HeroPage />
      <HeadingBar />
      <ProductListing1 />
      <ViewAllBtn />
      <ProductListing2 />
      <ViewAllBtn />
      <Gallery />
      <div className="flex justify-between w-full">
        <h1 className=" text-3xl font-black pl-16 pt-10 pb-6">OUR HAPPY CUSTOMERS</h1>
        <div className="flex justify-end text-end w-2/12 gap-5 mr-12 pt-10">
        <ArrowLeft />
        <ArrowRight />
        </div>
      </div>
      <Reviews />
    </div>
  );
}
