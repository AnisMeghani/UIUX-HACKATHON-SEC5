import React from 'react'
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";

const HeadingBar2 = () => {
  return (
    
    <div className='w-full h-auto flex justify-center mb-10'>
        <div className="w-11/12 h-auto flex justify-between">
    <h1 className=" text-5xl font-black">
      OUR HAPPY CUSTOMERS
    </h1>

    <div className="flex w-auto h-auto items-end">
      <ArrowLeft className='w-[24] h-[24]'/>
      <ArrowRight className='w-[24] h-[24]'/>
    </div>
    
  </div>
  </div>
  )
}

export default HeadingBar2