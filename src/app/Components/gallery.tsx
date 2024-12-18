import React from "react";
import Image from "next/image";
const Gallery = () => {
  return (
    <div className="w-full h-auto flex justify-center">
    <div className=" bg-[#efedee] border rounded-3xl mt-6 mb-16  w-11/12 h-auto">
      <h1 className=" text-5xl font-black text-center pt-14 pb-4">
        BROWSE BY DRESS STYLE
      </h1>

      
        <div className=" lg:flex lg:justify-center w-full h-auto gap-3 mb-3 mt-3">
          <div className="w-11/12 mx-auto h-auto lg:w-[407px] lg:h-[289px]">
            <div className="relative mb-4">
            <Image
              src="/images/gallerypic1dup.png"
              alt="pic1"
              width={590}
              height={189}
              className="border rounded-3xl"
            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
              Casual
            </div>
          </div>
          </div>

          <div className=" w-11/12 h-auto mx-auto">
          <div className="relative lg:border rounded-3xl overflow-hidden opacity-100 mx-auto">
            <Image
              src="/images/gallery-pic-2.png"
              alt="Formal"
              width={590}
              height={289}
              className=""
            />
            {/* <div className=" transform rotate-0 absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
            
            </div> */}
          </div>
          </div>
        </div>

        <div className="lg:flex lg:justify-center w-full h-auto lg:gap-3 ">
        <div className=" w-11/12 h-auto mx-auto ">
        <div className="relative border rounded-3xl overflow-hidden opacity-100 mb-4">
            <Image
              src="/images/gallery-pic-3.png"
              alt="Party"
              width={684}
              height={289}
              className=""
            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
              Party
            </div>
          </div>
        </div>

        <div className=" w-11/12 h-auto mx-auto">
        <div className="relative mb-8">
    <Image
      src="/images/gallery-pic-4.png"
      alt="Gym"
      width={590}
      height={289}
      className="lg:border rounded-xl"
    />

</div>
    {/* <div className="absolute inset-0 flex items-start justify-start text-black text-2xl font-bold  pl-8 pt-8">
    </div> */}
  </div>
          </div>
        </div>









      {/* <div className="grid grid-cols-4 grid-rows-2 w-[1112px] h-[595px] gap-3 ml-16">
        <div className="row-span-1 w-[407px] h-[289px]">
          <div className="relative">
            <Image
              src="/images/gallerypic1dup.png"
              alt="pic1"
              width={390}
              height={0}
              className="border rounded-xl"
            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
              Casual
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-1 w-[684px] h-[289px] ml-36">
          <div className="relative border rounded-xl overflow-hidden opacity-100">
            <Image
              src="/images/gallerypic2.png"
              alt="pic1"
              width={684}
              height={289}
              className=""
            />
            <div className=" transform rotate-0 absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
              Formal
            </div>
          </div>
        </div>
        <div className="col-span-2 w-[684px] h-[289px]">
          <div className="relative border rounded-xl overflow-hidden opacity-100">
            <Image
              src="/images/gallerypic3dup.png"
              alt="pic1"
              width={684}
              height={289}
              className=""
            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
              Party
            </div>
          </div>
        </div>
        <div className="col-span-1 w-[407px] h-[289px]">
  <div className="relative w-full h-full border rounded-xl">
    <Image
      src="/images/gallerypic4.png"
      alt="pic1"
      layout="fill"  // Makes the image fill the container
      objectFit="cover"  // Ensures the image fills the box without distortion
      className="rounded-xl"
    />
    <div className="absolute inset-0 flex items-start justify-start text-white text-2xl font-bold bg-black bg-opacity-40 pl-8 pt-8">
      Gym
    </div>
  </div>
</div>

      </div> */}
    </div>
  );
};

export default Gallery;
