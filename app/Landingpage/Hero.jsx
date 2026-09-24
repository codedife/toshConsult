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
            h-[25vh]
            sm:h-[30vh]
            md:h-[32vh]
            lg:h-[35vh]
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
            text-center
            text-black
            font-extrabold
            leading-tight
          '>
            Where Tech Dreams
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
            Dive into the Future of Tech Education. Select Your Course, Apply Instantly,
            and Let's Begin the Transformation Journey Together!
          </p>

        </div>

        <Image
          src={img2}
          alt='re'
          className='
            h-[25vh]
            sm:h-[30vh]
            md:h-[32vh]
            lg:h-[35vh]
            w-auto
            hero-right
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
            h-[22vh]
            sm:h-[27vh]
            md:h-[32vh]
            lg:h-[35vh]
            w-auto
            object-contain
          '
        />

        <button className='
          bg-black
          h-[7vh]
          sm:h-[8vh]
          md:h-[9vh]
          lg:h-[10vh]
          w-[35vw]
          sm:w-[20vw]
          md:w-[13vw]
          lg:w-[10vw]
          p-2
          rounded-4xl
          text-[3vw]
          sm:text-[2vw]
          md:text-[1.3vw]
          lg:text-[10px]
          cursor-pointer
          hover:bg-white
          hover:text-black
          mt-2
          hero-button
        '>
          Get Started
        </button>

        <Image
          src={img4}
          alt='re'
          className='
            h-[22vh]
            sm:h-[27vh]
            md:h-[32vh]
            lg:h-[35vh]
            w-auto
            object-contain
            mb-[5vh]
          '
        />

      </div>

    </section>
  )
}

export default Hero