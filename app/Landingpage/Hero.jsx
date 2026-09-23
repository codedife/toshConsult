import React from 'react'
import Image from "next/image"
import img1 from "../../image/Rectangle 3 (1).png"
import tosh from "../../image/Frame 8.png"
import img2 from "../../image/Rectangle 5.png"
import img3 from "../../image/Rectangle 4.png"
import img4 from "../../image/Rectangle 6.png"

const Hero = () => {
  return (
    <section className='bg-pink-100 h-auto w-full flex items-center justify-center  flex-col space-y-10 mt-10'>
        <div className='flex flex-row justify-between w-[70vw] mt-16'>
             <Image src={img1} alt='re' className='h-[35vh] w-auto' />
             <div className='flex flex-col items-center w-[35vw] h-auto space-y-5'>
              <Image src={tosh} alt='re' className='h-auto w-[15vw]' />
               <p className='text-[35px] text-center text-black font-extrabold'>
                Where Tech Dreams
                Take Flight!
               </p>
               <p className='text-[12px] text-center text-black'>
                Dive into the Future of Tech Education. Select Your Course, Apply Instantly,
                and Let's Begin the Transformation Journey Together!
               </p>
             </div>
             <Image src={img2} alt='re' className='h-[35vh] w-auto' />
        </div>
        <div className='flex flex-row justify-between w-[60vw]'>
          <Image src={img3} className='h-[35vh] w-auto' />
          <button className='bg-black h-[10vh] w-[10vw] p-2 rounded-4xl text-[10px] cursor-pointer hover:bg-white hover:text-black mt-2'>Get Started</button>
          <Image src={img4} className='h-[35vh] w-auto mb-16'/>
        </div>
    </section>
  )
}

export default Hero
