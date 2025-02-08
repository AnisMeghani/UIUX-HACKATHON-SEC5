import React from 'react'
import { ChevronRight } from 'lucide-react'

function YourCart () {
  return (
    <div>
        <div className='flex justify-center w-full'>
      {/* Horizontal line */}
      <hr className="w-11/12 border border-slate-300 mb-6" />
      </div>

      {/* links of home and casual */}
      <div className='flex justify-center w-full h-auto'>
      <h3 className="flex w-11/12 mb-2 ">
        Home <ChevronRight /> Cart
      </h3>
      </div>

      {/* All Reviews line */}
<div className='flex justify-center w-full h-auto'>
        <div className='flex justify-between w-11/12 h-auto items-center my-2'>
      <h1 className=" text-lg items-baseline text-slate-400"><b className='font-black text-5xl text-black'>YOUR CART </b></h1>
    </div>
    </div>

  </div>


  )
}

export default YourCart


























// const YourCart = () => {
//     const ProductName = [
//         {
//             ProdName1: "Product 1"
//             // /images/
//         },
//         {
//             ProdName1: "Product 2"
//             // /images/
//         },
//         {
//             ProdName1: "Product 3"
//             // /images/
//         },

//     ];








