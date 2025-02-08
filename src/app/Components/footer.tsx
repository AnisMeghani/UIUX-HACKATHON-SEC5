import { FaInstagram } from "react-icons/fa";
import Offers from "./offer";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { Images } from "lucide-react";
import Image from "next/image";

export default function Footer(){
    return (
        <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32  max-w-screen-2xl mx-auto">
          {/*  */}
          <div className="flex justify-center">
          <span className="absolute top-[-80px]">
          <Offers/>
          </span>
          </div>
        {/* container */}
        <div  className="flex h-full md:h-[400px] flex-col md:flex-row justify-between items-center p-5 pt-[160px] sm:pt-32 border-b ">
          {/* top div */}
          <div className="flex flex-col justify-center items-center w-[200px]"> 
            <ul>
                <h2 className="text-2xl sm:text-3xl font-black pb-2 ">SHOP.CO</h2>
                <p className="text-sm mt-1 pb-4"> We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                   {/* icon */}
                   <div className="flex items-center space-x-3 mt-1">
                    <FaInstagram className="text-xl"/>
                     <FaFacebook className="text-xl"/>
                       <FaGithub className="text-xl"/>
                      <FaTwitter className="text-xl"/>
                   </div>
            </ul>
          </div>
          {/* mid div */}
          <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 items-center space-y-4">
              {/* box 1 */}
                 <ul className="space-y-3 ">
                   <h2 className="text-sm sm:text-2xl">COMPANY</h2>
                   <li  className="text-sm">About</li>
                   <li  className="text-sm">Features</li>
                   <li  className="text-sm">Work</li>
                   <li  className="text-sm">Career</li>
                   </ul>
                {/* box 2 */}
                <ul className="space-y-3 pb-4">
                   <h2 className="text-sm sm:text-2xl">HELP</h2>
                   <li  className="text-sm">Customer Support</li>
                   <li  className="text-sm">Delivery Details</li>
                   <li  className="text-sm">Terms and Conditions</li>
                   <li  className="text-sm">Privacy Policy</li>
                   </ul>
                {/* box 3*/}
                <ul className="space-y-3 pb-4">
                   <h2 className="text-sm sm:text-2xl">FAQ</h2>
                   <li  className="text-sm">Account</li>
                   <li  className="text-sm">Manage Deliveries</li>
                   <li  className="text-sm">Orders</li>
                   <li  className="text-sm">Payments</li>
                   </ul>
                {/* box 4 */}
                <ul className="space-y-3 pb-4">
                   <h2 className=" text-sm sm:text-2xl">RESOURCES</h2>
                   <li className="text-sm">Free eBooks</li>
                   <li className="text-sm">Development Tutorial</li>
                   <li className="text-sm">How to - Blog</li>
                   <li className="text-sm">Youtube Playlist</li>
                   </ul>
                {/* complete boxes*/}

          </div>
           
        </div>
         {/* bottom div */}
         <div className="flex flex-col sm:flex-row justify-between items-center mt-3 mx-16">
                <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex items-center ">
                    <Image src={"/images/VisaBadge-1.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/images/MasterBadge-2.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/images/PayPalBadge-3.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/images/PayPalBadge-3.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/images/GooglePayBadge-5.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                </div>
            </div>
        </main>
    )
}
