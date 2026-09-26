import React from 'react'
import Image from "next/image"
import img1 from "../../image/Rectangle 3 (1).png"
import tosh from "../../image/Frame 8.png"
import img2 from "../../image/Rectangle 5.png"
import img3 from "../../image/Rectangle 4.png"
import img4 from "../../image/Rectangle 6.png"

const Hero = () => {
  return (
    <section className='
      bg-pink-100
      h-auto
      w-full
      flex
      items-center
      justify-center
      flex-col
      space-y-[5vh]
      mt-[8vh]
      py-[5vh]
    '>

      {/* TOP SECTION */}
      <div className='
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        w-[90vw]
        md:w-[80vw]
        lg:w-[70vw]
        mt-[5vh]
        gap-[5vh]
        md:gap-[2vw]
      '>
      <Image
        src={img1}
        alt='re'
        className='
          h-[14vh]
          sm:h-[18vh]
          md:h-[22vh]
          lg:h-[25vh]
          w-auto
          hero-left
          hero-float
          object-contain
        '
      />

        <div className='
          flex
          flex-col
          items-center
          justify-center
          w-[85vw]
          sm:w-[75vw]
          md:w-[40vw]
          lg:w-[35vw]
          h-auto
          space-y-[2vh]
          hero-content
        '>

          <Image
            src={tosh}
            alt='re'
            className='
              h-auto
              w-[30vw]
              sm:w-[25vw]
              md:w-[18vw]
              lg:w-[15vw]
              object-contain
            '
          />

          <p className='
            text-[7vw]
            sm:text-[5vw]
            md:text-[3.5vw]
            lg:text-[35px]
            font-poppins
            text-center
            text-black
            font-extrabold
            leading-tight
          '>
            Where Tech Dreams <br/>
            Take Flight!
          </p>

          <p className='
            text-[3vw]
            sm:text-[2.2vw]
            md:text-[1.5vw]
            lg:text-[12px]
            text-center
            text-black
            max-w-[80vw]
            md:max-w-[35vw]
          '>
            Dive into the Future of Tech Education. Select Your Course, Apply Instantly, <br/>
            and Let's Begin the Transformation Journey Together!
          </p>

        </div>

      <Image
        src={img2}
        alt='re'
        className='
          h-[14vh]
          sm:h-[18vh]
          md:h-[22vh]
          lg:h-[25vh]
          w-auto
          hero-left
          hero-float
          object-contain
        '
      />


      </div>


      {/* BOTTOM SECTION */}
      <div className='
        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        w-[85vw]
        sm:w-[75vw]
        md:w-[65vw]
        lg:w-[60vw]
        gap-[4vh]
        sm:gap-[2vw]
        hero-bottom
      '>

         <Image
        src={img3}
        alt='re'
        className='
          h-[14vh]
          sm:h-[18vh]
          md:h-[22vh]
          lg:h-[25vh]
          w-auto
          hero-left
          hero-float
          object-contain
        '
      />

   <button className='
        bg-black
        text-white
          h-10
          sm:h-11
          md:h-10
          lg:h-10
          w-32
          sm:w-36
          md:w-32
          lg:w-28
          px-4
          rounded-full
          text-xs
          sm:text-sm
          md:text-xs
          lg:text-[11px]
          cursor-pointer
          hover:bg-white
          hover:text-black
          hover:border
          hover:border-black
          transition-all
          duration-300
          mt-2
          hero-button
        '>
          Get Started
        </button>

         <Image
        src={img4}
        alt='re'
        className='
          h-[14vh]
          sm:h-[18vh]
          md:h-[22vh]
          lg:h-[25vh]
          w-auto
          hero-left
          hero-float
          object-contain
        '
      />

      </div>

    </section>
  )
}

export default Hero