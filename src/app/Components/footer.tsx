import React from "react";
import { Mail } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-200 w-full h-[589px] absolute-top-[3781px] left-[-1px]">
        <div>
          <div
            className="flex bg-black text-white w-[1240px] h-[180px] justify-between ml-12
      pt-[36px] pr-[64px] pb-[36px] pl-[64px] rounded-[20px] absolute-top-[3781px] left-[100px] mt-20"
          >
            <div className="text-4xl w-[551px] h-[94px] font-black pt-3">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </div>

            <div className="w-[349px] h-[108px] mt-2 ">
              <div
                className="flex items-center bg-white border rounded-[62px] h-9 w-[349px] pt-[12px] pr-[16[x] pb-[12px] 
           mb-4 pl-[16px]"
              >
                <Mail className="text-slate-600 w-[24px] h-[24px]" />
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="bg-white placeholder-slate-600 text-sm pl-2"
                ></input>
              </div>
              <input
                type="text"
                placeholder="Subscribe to Newsletter"
                className=" bg-white placeholder-black text-sm border rounded-[62px] h-9 w-[349px] pt-[12px] pr-[16[x] pb-[12px] 
          pl-[16px] gap-[12px] text-center"
              ></input>{" "}
            </div>
          </div>
          <div className="bg-slate-200 justify-between w-full h-[299px] my-14  left-[-1px]">
            <div className="bg-slate-200 flex w-[1240px] h-[177px] ml-14 absolute-top-[4011px] left-[100px] justify-evenly">
              <div>
                <h1 className="w-[248px] h-[177px] text-[12px]">
                  <b className="font-black text-[33.45px]">SHOP.CO </b>
                  <br />
                  We have clothes that suits your style and which you&apos;re
                  proud to wear. From women to men.
                  <br />
                  <div className="flex w-[148px] h-[28px] gap-2 pt-9">
                    <Twitter className="rounded-full border fill-black bg-white" />
                    <Facebook className="bg-black fill-white rounded-full border " />
                    <Instagram className="bg-white rounded-full border" />
                    <Github className="bg-white rounded-full border" />
                  </div>
                </h1>
              </div>

              {/* <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p> */}
              <div className=" w-[104px] h-[177px] pt-2">
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
              </div>
              <div className=" w-[136px] h-[177px] pt-2">
                <h3>
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
              <div className=" w-[149px] h-[177px] pt-2">
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
              </div>
              <div className=" w-[149px] h-[177px] pt-2">
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
            <br />
            <br />
            <br />
            <div className="w-full flex justify-center">
              <hr className="border-black w-11/12 " />
            </div>

            <div className=" flex justify-between w-full px-14 pt-5">
              <p>Shop.co © 2000-2023, All Rights Reserved</p>
              <div className="flex justify-end gap-3 ">
                <FaCcVisa className="bg-blue-700 text-white text-2xl h-5 border rounded-sm" />
                <FaCcMastercard className="text-white bg-black text-2xl h-5 border rounded-sm" />
                <FaPaypal className="bg-white text-blue-900 text-2xl h-5 border rounded-sm" />
                <FaGooglePay className="bg-white text-black text-2xl h-5 border rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
