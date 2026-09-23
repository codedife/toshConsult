"use client"
import React, { useState } from "react"
import Image from 'next/image'
import brand from '../../image/Frame 13.png'
import group19 from '../../image/Group 19.png'
import group20 from '../../image/Group 20.png'
import group21 from '../../image/Group 21.png'
import group22 from '../../image/Group 22.png'
import group23 from '../../image/Group 23.png'
import group18 from '../../image/Group 18.png'
import thick from '../../image/tabler-icon-circle-check-filled.png'
import frame44 from '../../image/Frame 44.png'
import frame43 from '../../image/Frame 43.png'
import frame42 from '../../image/Frame 42.png'
import frame41 from '../../image/Frame 41.png'
import frame40 from '../../image/Frame 40.png'
import frame39 from '../../image/Frame 39.png'
import frame47 from '../../image/Frame 47.png'
import group4 from '../../image/Group 4.png'
import group4a from '../../image/Group 4 (1).png'


const Page = () => {
  const [faqOpen,setfaqOpen] = useState(false) 

  return (
    <section className='bg-white flex flex-col w-full h-auto items-center'>

      <div className='mt-10 flex flex-col items-center space-y-10  brand-section'>
        <p className='text-black font-semibold'>
          Loved by brands and partners
        </p>

        <Image
          src={brand}
          alt="brand"
          className='h-auto w-[50vw] brand-image'
        />
      </div>

      <div className='flex flex-col mt-20 w-[40vw] intro-section'>
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

      <div className='mt-20 grid grid-cols-3 w-[70vw] justify-between space-y-16 benefits-section'>

        <div className='flex space-x-5 benefit-card'>
          <Image
            src={group19}
            alt='gp19'
            className='h-10 w-auto benefit-icon'
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
            className='h-10 w-auto benefit-icon'
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
            className='h-10 w-auto benefit-icon'
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
            className='h-10 w-auto benefit-icon'
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
            className='h-10 w-auto benefit-icon'
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
            className='h-10 w-auto benefit-icon'
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

      <div className='w-[35vw] text-center courses-title'>
        <p className='text-black font-extrabold text-[30px]'>
          Best courses available to choose
        </p>

        <p className='text-gray-600 text-[9px] font-semibold'>
          At Toshconsult, we are committed to shaping your tech skills and empowering your career.
          Explore the unique benefits that set us apart and pave the way for your succest.
        </p>
      </div>

      <div className=' flex flex-col h-auto m-20 space-y-5'>

        <div className='flex flex-row space-x-5 course-row'>

          <div className='bg-fuchsia-100 w-[40vw] h-[73vh] rounded-t-xl p-7 course-card'>

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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-[14%] course-button">
              Get Started
            </button>
          </div>
          <div className='bg-amber-200 w-[30vw] h-[73vh] rounded-t-xl p-5 course-card'>
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

              <div className='flex flex-col ml-3'>
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-12 course-button">
              Get Started
            </button>
          </div>
          </div>
          <div className='flex flex-row space-x-5'>
           
            <div className='bg-amber-200 w-[30vw] h-[73vh] p-5 course-card'>
               <div className='w-[20vw] space-y-2'>
              <p className='text-black font-bold text-[25px]'>
               Mobile App Development Course
              </p>

              <p className='text-gray-500 text-[12px]'>
                Develop Android and iOS apps from scratch.
                learn mobile UI/UX design principles. Work with
                frameworks like React Native or Flutter. Launch
                your apps on app stores
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

              <div className='flex flex-col ml-3'>
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-14 course-button">
              Get Started
            </button>
          </div>
            
          <div className='bg-fuchsia-100 w-[40vw] h-[73vh]  p-7 course-card'>

            <div className='w-[30vw] space-y-2'>
              <p className='text-black font-bold text-[25px]'>
                Python Fullstack Development Course
              </p>

              <p className='text-gray-500 text-[12px]'>
               Combine Python's versatility with frontend and backend technologies,
               build dynamic websites using frameworks like Django and Flask. Develop
              interactive user interfoces with JavaScript.
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-[14%] course-button">
              Get Started
            </button>
          </div>
          </div>
          <div className='flex flex-row space-x-5'>

          <div className='bg-fuchsia-100 w-[40vw] h-[73vh] p-7 course-card'>

            <div className='w-[30vw] space-y-2'>
              <p className='text-black font-bold text-[25px]'>
               JavaScript Fullstack Development Course
              </p>

              <p className='text-gray-500 text-[12px]'>
               Become proficient in both frontend and backend JavaScript
                technologies. Leam Node.js for server side development. Use React or
                Angular for building madern, dynamic interfaces.
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-[14%] course-button">
              Get Started
            </button>
          </div>
          <div className='bg-amber-200 w-[30vw] h-[73vh] p-5 course-card'>
               <div className='w-[20vw] space-y-2'>
              <p className='text-black font-bold text-[25px] w-[22vw]'>
                UI/UX Design Fundamentals Course
              </p>

              <p className='text-gray-500 text-[12px]'>
                Master the art of user-centered design. Learn wireframing, prototypin 
                and user testing. 
                Explore tools like Sketch and Adobe XD, Craft 
                seamless and intuitive user experiences.
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

              <div className='flex flex-col ml-3'>
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-12 course-button">
              Get Started
            </button>
          </div>
          </div>
          <div className='flex flex-row space-x-5'>
           
           <div className='bg-amber-200 w-[30vw] h-[73vh] rounded-b-xl p-6 course-card'>
               <div className='w-[20vw] space-y-2'>
              <p className='text-black font-bold text-[25px]'>
                Digital Marketing Course
              </p>

              <p className='text-gray-500 text-[12px] w-[23vw]'>
                Unlock the power of onling marketing. Learn SEO, social media
                 marketing, email marketing, and PPC 
                 advertising. Analyze data, create compelling
                campaigns, and boost online presence.
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

              <div className='flex flex-col ml-3'>
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-12 course-button">
              Coming soon
            </button>
          </div>

          <div className='bg-fuchsia-100 w-[40vw] h-[73vh] rounded-b-xl p-7 course-card'>

            <div className='w-[30vw] space-y-2'>
              <p className='text-black font-bold text-[25px] w-[20vw]'>
               Wordpress Development Course
              </p>

              <p className='text-gray-500 text-[12px]'>
                Master Wordpress from basics to advanced customization. Create
                responsive and SEO-friendly websites. Explore theme development,
                plugins, and e-commerce integration.
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
            <button className="bg-black text-white px-4 py-1.5 rounded-full font-semibold hover:bg-gray-800 transition mt-[13%] course-button">
              Coming soon
            </button>
          </div>
          </div>
        </div>
        <div className='w-[35vw] flex flex-col space-y-5'>
          <p className='text-[30px] text-black font-extrabold text-center leading-12'>
            Enrich your business with our expert sofware solutions
          </p>
          <p className='text-[11px] text-black text-center font-light'>
            At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.
          </p>
        </div>
     <div className='w-[70vw] h-[60vh] bg-pink-200 rounded-3xl mt-16 flex flex-col items-center justify-center gap-7 shadow-2xl shadow-pink-300'>

              {/* TOP 3 */}
              <div className='flex flex-row items-center justify-center gap-4'>
                <Image 
                  src={frame43} 
                  alt='frame43' 
                  className='h-[14vh] w-auto'
                />

                <Image 
                  src={frame42} 
                  alt='frame42' 
                  className='h-[14vh] w-auto'
                />

                <Image 
                  src={frame41} 
                  alt='frame41' 
                  className='h-[14vh] w-auto'
                />
              </div>

              {/* BOTTOM 3 */}
              <div className='flex flex-row items-center justify-center gap-6'>
                <Image 
                  src={frame39} 
                  alt='frame39' 
                  className='h-[14vh] w-auto'
                />

                <Image 
                  src={frame40} 
                  alt='frame40' 
                  className='h-[14vh] w-auto'
                />

                <Image 
                  src={frame44} 
                  alt='frame44' 
                  className='h-[13vh] w-auto'
                />
              </div>
            </div>
            <div className='w-[35vw] flex flex-col space-y-5 mt-10'>
              <p className='text-[30px] text-black font-extrabold text-center leading-12'>
                What our students are saying about us
              </p>
              <p className='text-[11px] text-black text-center font-light'>
                    At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.
              </p>
            </div>
            <div className='mt-10 w-[50vw] h-[40vh] bg-amber-50 shadow-2xl shadow-black rounded-2xl p-10'>
              <p  className='text-black text-[20px]'>
                  “At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.”
              </p>
              <Image src={frame47} alt='frame47' className='mt-10 h-10 w-auto' />
            </div>
            <div>
            <div className='w-[35vw] flex flex-col space-y-5 mt-10 items-center'>
                    <p className='text-[30px] text-black font-extrabold text-center leading-12'>
                     Frequently asked question
                    </p>
                    <p className='text-[11px] text-black text-center font-light'>
                          At Toshconsult, we are committed to shaping your tech skills and empowering your career. Explore the unique benefits that set us apart and pave the way for your success.
                    </p>

                    <div className='w-[40vw] flex flex-col mb-10'>

                        <div className='flex flex-row justify-between items-center'>
                          
                          <div className='flex flex-row gap-5 items-center'>
                            <p className='text-black text-2xl'>
                              01.
                            </p>

                            <p className='text-black text-[15px]'>
                              Frequently asked question
                            </p>
                          </div>

                          <Image
                            src={faqOpen ? group4a : group4}
                            alt="faq"
                            className="h-5 w-auto cursor-pointer"
                            onClick={() => setfaqOpen(!faqOpen)}
                          />

                        </div>
                        {faqOpen && (
                          <p className='text-gray-500 text-sm mt-4'>
                            At Toshconsult, we are committed to shaping your tech skills and
                            empowering your career. Explore the unique benefits that set us apart
                            and pave the way for your success.
                          </p>
                        )}
                      </div>
            </div>
            </div>
            <div className="w-full h-[50vh] bg-purple-200 flex flex-col justify-center items-center gap-5">

                <p className="w-[25vw] text-black text-4xl font-extrabold text-center">
                     Ready to Dive In? Enroll Now!
                </p>
                <button className="h-7 w-[7vw] text-[10px] rounded-2xl flex justify-center items-center bg-orange-500 text-white  hover:bg-orange-600 transition duration-300 shadow-md cursor-pointer">
                  Apply Now
                </button>

              

            </div>
    </section>
  )
}


export default Page