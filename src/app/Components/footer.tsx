import React from "react";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import Image from "next/image";
import BorderLine from "./borderLine";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#efedee] w-full h-auto mt-20 flex justify-center">
        <div className="w-11/12 h-auto">
          <div className="bg-black text-white rounded-3xl pb-10">
          
            <div className="text-5xl font-black pt-3 ml-8">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>

            <div className="w-full h-[108px] mt-2 mx-auto">
              <div
                className="flex items-center bg-white border rounded-[62px] h-11 w-[540px] pt-[12px] pr-[16[x] mx-auto pb-[12px] 
           mb-4"
              >
                <Mail className="text-slate-600 w-auto h-auto pl-5" />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-white placeholder-slate-600 text-sm pl-5"
                ></input>
              </div>
              <div className="flex items-center bg-white border rounded-[62px] h-11 w-[540px] pt-[12px] pr-[16[x] mx-auto pb-[12px] 
           mb-4">
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className="bg-white placeholder-black font-semibold text-sm text-center w-full"
              ></input>
            </div>
            </div>

            


          </div>
          <div className=" justify-between w-full h-auto mt-12  left-[-1px]">
            <div className=" flex justify-between">
              <div className="">
                <h1 className=" text-sm ">
                  <b className="font-black text-5xl">SHOP.CO </b>
                  <br />
                  <br />
                  We have clothes that suits your style and which you&apos;re
                  proud to wear. From women to men.
                  <br />
                  <div className="flex w-full h-auto gap-5 py-5">
                    <Twitter className="rounded-full border fill-black bg-white" />
                    <Facebook className="bg-black fill-white rounded-full border " />
                    <Instagram className="bg-white rounded-full border" />
                    <Github className="bg-white rounded-full border" />
                  </div>
                </h1>
              </div>
              </div>
              <div>

              {/* <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p> */}
              <div className="flex justify-between">
                <div className="w-11/12 h-auto flex justify-between">
                <h3>
                  <b className="font-normal text-[20px]">COMPANY</b>
                  <br />
                  <div className="text-xs pt-6 ">
                    <p>About</p> <br />
                    <p>Features </p> <br />
                    <p>Works </p> <br />
                    <p> Career </p>
                  </div>
                </h3>
              
              <div>
              <div>
                <h3 className="pr-4">
                  <b className="font-normal text-[20px]">HELP</b>
                  <br />
                  <div className="text-xs pt-6 ">
                    <p>Customer Support</p> <br />
                    <p>Delivery Details </p> <br />
                    <p>Terms & Conditions </p> <br />
                    <p> Privacy Policy </p>
                  </div>
                </h3>
                </div>
                </div>
              </div>
              </div>
              <div className=" flex justify-between w-full h-auto my-5">
              <div className="w-11/12 h-auto flex justify-between ">                
              <h3>
                  <b className="font-normal text-[20px]">FAQ</b>
                  <br />
                  <div className="text-xs pt-6 ">
                    <p>Account</p> <br />
                    <p>Manage Deliveries </p> <br />
                    <p>Orders </p> <br />
                    <p> Payments </p>
                  </div>
                </h3>
              
              <div>
                <h3>
                  <b className="font-normal text-[20px]">RESOURCES</b>
                  <br />
                  <div className="text-xs pt-6 ">
                    <p>Free eBooks</p> <br />
                    <p>Developement Tutorial </p> <br />
                    <p>How to - Blog </p> <br />
                    <p>Youtube Playlist </p>
                  </div>
                </h3>
              </div>
              </div>
            </div>
            </div>
            <br />

            {/* border line inserted */}
            <div className="w-full h-auto flex justify-center">
              <div className="w-full h-auto">
              <hr className="border border-slate-200"></hr>
            </div>
            </div>


            <div className="bg-[#efedee]  w-full h-auto pt-5 text-center">
              
              <p>Shop.co © 2000-2023, All Rights Reserved</p>
              {/* VisaPay Badge inserted */}
              <div className="flex justify-center gap-3 w-[281.07] h-[30.03] mt-5 mb-10 ">
                <Image
                  src="/images/VisaBadge-1.png"
                  alt="visaCard"
                  width={50.61}
                  height={30.03}
                />
              
              {/* MasterPay Badge inserted */}
                <Image
                  src="/images/MasterBadge-2.png"
                  alt="MasterCard"
                  width={50.61}
                  height={30.03}
                />
              {/* PayPal Badge inserted */}
                <Image
                  src="/images/PayPalBadge-3.png"
                  alt="PayPalCard"
                  width={50.61}
                  height={30.03}
                />
              {/* ApplePay Badge inserted */}
                <Image
                  src="/images/ApplePayBadge-4.png"
                  alt="ApplePayCard"
                  width={50.61}
                  height={30.03}
                />
              {/* GooglePay Badge inserted */}
                <Image
                  src="/images/GooglePayBadge-5.png"
                  alt="GooglePayCard"
                  width={50.61}
                  height={30.03}
                />
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
