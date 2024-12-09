
import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='bg-[#efedee] border rounded-lg  mt-5 mx-16 w-[1239px] h-[750px]'>
        <h1 className=" text-3xl font-black text-center pt-10 pb-6">BROWSE BY DRESS STYLE</h1>

    <div className='ml-20 grid grid-cols-4 grid-rows-2 w-100 h-[566px] gap-3'>
        <div className='row-span-1 w-[407px] h-[289px]'>
            <div className='relative'>
            <Image 
            src="/images/gallerypic1dup.png" 
            alt='pic1'
            width={390}
            height={0}
            className='border rounded-xl'

            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
    Casual
  </div>
  </div>
        </div>
        <div className='col-span-2  w-[684px] h-[289px] ml-36'>
        <div className='relative'>
            <Image 
            src="/images/gallerypic2dup.png" 
            alt='pic1'
            width={650}
            height={0}
            className='border rounded-xl'


            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
    Formal
  </div>
  </div>
        </div>
        <div className='col-span-2 w-[684px] h-[289px] mr-4 mt-5'>
        <div className='relative'>
            <Image 
            src="/images/gallerypic3dup.png" 
            alt='pic1'
            width={645}
            height={0}
            className='border rounded-xl'


            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
    Party
  </div>
  </div>
        </div>
        <div className='  col-span- w-[407px] h-[289px] ml-28 mt-5'>
        <div className='relative'>
            <Image 
            src="/images/gallerypic4dup.png" 
            alt='pic1'
            width={384}
            height={0}
            className='border rounded-xl'


            />
            <div className="absolute inset-0 flex text-black text-2xl font-bold bg-black bg-opacity-0 pl-8 pt-8">
    Gym
  </div>
  </div>
        </div>
    </div>
    </div>
  )
}

export default Gallery