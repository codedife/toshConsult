import React from 'react'
import Image from 'next/image'
import brand from '../../image/Frame 13.png'
import group19 from '../../image/Group 19.png'
import group20 from '../../image/Group 20.png'
import group21 from '../../image/Group 21.png'
import group22 from '../../image/Group 22.png'
import group23 from '../../image/Group 23.png'
import group18 from '../../image/Group 18.png'
import thick from '../../image/tabler-icon-circle-check-filled.png'

const Page = () => {
  return (
    <section className='bg-white flex flex-col w-full h-auto items-center'>

      <div className='mt-10 flex flex-col items-center space-y-10'>
        <p className='text-black font-semibold'>
          Loved by brands and partners
        </p>

        <Image
          src={brand}
          alt="brand"
          className='h-auto w-[50vw]'
        />
      </div>

      <div className='flex flex-col mt-20 w-[40vw]'>
        <p className='text-black font-extrabold text-[30px] text-center'>
          Elevate Your Skills,
          <br />
          Transform Your Future
        </p>

        <p className='text-gray-700 text-[12px] text-center'>
          At Toshconsult, we are committed to shaping your tech skills and
          empowering your career. Explore the unique benefits that set us apart
          and pave the way for your success.
        </p>
      </div>

      <div className='mt-20 grid grid-cols-3 w-[70vw] justify-between space-y-16'>

        <div className='flex space-x-5'>
          <Image
            src={group19}
            alt='gp19'
            className='h-10 w-auto'
          />

          <div className="w-[15vw]">
            <p className="text-black font-bold">
              Expert Guidance
            </p>

            <p className="text-gray-500 text-[10px] font-light leading-4 mt-1">
              Learn from Industry Professionals Dedicated to Your Success
            </p>
          </div>
        </div>

        <div className='flex space-x-5'>
          <Image
            src={group20}
            alt='gp20'
            className='h-10 w-auto'
          />

          <div className="w-[15vw]">
            <p className="text-black font-bold leading-4">
              Hands-on Experience
            </p>

            <p className="text-gray-500 text-[10px] font-light leading-4 mt-1">
              Apply Your Skills to Practical, Hands-on Projects for Deep Learning
            </p>
          </div>
        </div>

        <div className='flex space-x-5'>
          <Image
            src={group21}
            alt='gp21'
            className='h-10 w-auto'
          />

          <div className="w-[16vw]">
            <p className="text-black font-bold leading-4">
              Personalized Learning
            </p>

            <p className="text-gray-500 text-[10px] font-light leading-4 mt-1">
              Customized Learning Paths to Match Your Learning Pace and Goals
            </p>
          </div>
        </div>

        <div className='flex space-x-5'>
          <Image
            src={group22}
            alt='gp22'
            className='h-10 w-auto'
          />

          <div className="w-[15vw]">
            <p className="text-black font-bold leading-4">
              Industry Relevance
            </p>

            <p className="text-gray-500 text-[10px] font-light leading-4 mt-1">
              Stay Ahead with the Latest Technologies and Industry Trends
            </p>
          </div>
        </div>

        <div className='flex space-x-5'>
          <Image
            src={group23}
            alt='gp23'
            className='h-10 w-auto'
          />

          <div className="w-[16vw]">
            <p className="text-black font-bold leading-4">
              Career Support
            </p>

            <p className="text-gray-500 text-[10px] font-light leading-4 mt-1">
              Boost Your Career with Our Exclusive Job Placement Support
            </p>
          </div>
        </div>

        <div className='flex space-x-5'>
          <Image
            src={group18}
            alt='gp18'
            className='h-10 w-auto'
          />

          <div className="w-[16vw]">
            <p className="text-black font-bold leading-4">
              Community Engagement
            </p>

            <p className="text-gray-500 text-[10px] font-light leading-4 mt-1">
              Connect with Peers, Collaborate on Projects, and Expand Your Network
            </p>
          </div>
        </div>
      </div>

      <div className='w-[35vw] text-center'>
        <p className='text-black font-extrabold text-[30px]'>
          Best courses available to choose
        </p>

        <p className='text-gray-600 text-[9px] font-semibold'>
          At Toshconsult, we are committed to shaping your tech skills and empowering your career.
          Explore the unique benefits that set us apart and pave the way for your succest.
        </p>
      </div>

      <div className=' flex flex-col h-auto mt-20'>

        <div className='flex flex-row space-x-5'>

          <div className='bg-fuchsia-100 w-[40vw] h-[73vh] rounded-t-xl p-7'>

            <div className='w-[30vw] space-y-2'>
              <p className='text-black font-bold text-[25px]'>
                Frontend Development Masterclass
              </p>

              <p className='text-gray-500 text-[12px]'>
                Dive into the world of frontend developrint. Leorn HTML CSS, and
                JavaSaript. Master popular framewarks like React and Vue.js. Create
                responsive, user-friendly Interfocos.
              </p>
            </div>

            <div className='grid grid-cols-2 mt-5 gap-2'>

              <div className='flex flex-col'>
                <p className='text-[12px] text-gray-600 font-light'>
                  Curriculum
                </p>

                <div className='flex flex-row mt-1 items-center gap-2'>
                  <Image src={thick} alt='thick'/>
                  <p className='font-bold text-black'>
                    02 SEPT Batches
                  </p>
                </div>
              </div>

              <div className='flex flex-col'>
                <p className='text-[12px] text-gray-600 font-light'>
                  Learning time
                </p>

                <div className='flex flex-row mt-1 items-center gap-2'>
                  <Image src={thick} alt='thick'/>
                  <p className='font-bold text-black'>
                      MON - FRI
                  </p>
                </div>

              </div>
              <div className='flex flex-col'>
                <p className='text-[12px] text-gray-600 font-light'>
                  Lesson time
                </p>
                <div className='flex flex-row mt-1 items-center gap-2'>
                  <Image src={thick} alt='thick'/>
                  <p className='font-bold text-black'>
                      Duration
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-10">
              Get Started
            </button>
          </div>
          <div className='bg-amber-200 w-[30vw] h-[73vh] rounded-t-xl p-5'>
               <div className='w-[20vw] space-y-2'>
              <p className='text-black font-bold text-[25px]'>
                Backend Development Course
              </p>

              <p className='text-gray-500 text-[12px]'>
                Explere server-side behnolgius, databases and
                Nodo.js. Ruby on Rgls, or Diango, Bulld robust
                Noce.js, Ruby on kls, ar bjango. Build robus
                backend systems for web applicotions.
              </p>
            </div>

            <div className='grid grid-cols-2 mt-5 gap-2'>

              <div className='flex flex-col w-[20vw]'>
                <p className='text-[12px] text-gray-600 font-light'>
                  Curriculum
                </p>

                <div className='flex flex-row mt-1 items-center gap-2'>
                  <Image src={thick} alt='thick'/>
                  <p className='font-bold text-black'>
                    02 SEPT Batches
                  </p>
                </div>
              </div>

              <div className='flex flex-col'>
                <p className='text-[12px] text-gray-600 font-light'>
                  Learning time
                </p>

                <div className='flex flex-row mt-1 items-center gap-2'>
                  <Image src={thick} alt='thick'/>
                  <p className='font-bold text-black'>
                      Weekend
                  </p>
                </div>

              </div>
              <div className='flex flex-col'>
                <p className='text-[12px] text-gray-600 font-light'>
                  Lesson time
                </p>
                <div className='flex flex-row mt-1 items-center gap-2'>
                  <Image src={thick} alt='thick'/>
                  <p className='font-bold text-black'>
                      Duration
                  </p>
                </div>
              </div>
            </div>
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-10">
              Get Started
            </button>
          </div>
          </div>
        </div>

    </section>
  )
}


export default Page