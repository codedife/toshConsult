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

  const [faqOpen, setfaqOpen] = useState(false)

  return (

    <section className='bg-white flex flex-col w-full min-h-screen items-center overflow-hidden'>


      {/* ================================
          BRAND SECTION
      ================================= */}

      <div className='mt-10 md:mt-14 flex flex-col items-center space-y-6 md:space-y-10 brand-section'>

        <p className='text-black font-semibold text-sm md:text-base text-center'>
          Loved by brands and partners
        </p>
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-[marquee_20s_linear_infinite] space-x-5">
              
              <Image
                src={brand}
                alt="brand"
                className="
                  h-auto
                  w-[85vw]
                  sm:w-[70vw]
                  md:w-[50vw]
                  shrink-0
                "
              />
               
              <Image
                src={brand}
                alt="brand"
                className="
                  h-auto
                  w-[85vw]
                  sm:w-[70vw]
                  md:w-[50vw]
                  shrink-0
                "
              />

               <Image
                src={brand}
                alt="brand"
                className="
                  h-auto
                  w-[85vw]
                  sm:w-[70vw]
                  md:w-[50vw]
                  shrink-0
                "
              />

            </div>
          </div>
      </div>



      {/* ================================
          INTRO SECTION
      ================================= */}

      <div className='flex flex-col mt-16 md:mt-20 w-[90vw] sm:w-[75vw] md:w-[40vw] intro-section'>

        <p className='text-black font-extrabold text-[24px] sm:text-[28px] md:text-[30px] text-center leading-tight'>

          Elevate Your Skills,

          <br />

          Transform Your Future

        </p>

        <p className='text-gray-700 text-[11px] sm:text-[12px] text-center mt-3 leading-5'>

          At Toshconsult, we are committed to shaping your tech skills and
          empowering your career. <br /> Explore the unique benefits that set us apart
          and pave the way for your success.

        </p>

      </div>



      {/* ================================
          BENEFITS
      ================================= */}

      <div className='mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 w-[88vw] md:w-[70vw] benefits-section'>


        {/* BENEFIT 1 */}

        <div className='flex space-x-4 items-start benefit-card'>

          <Image
            src={group19}
            alt='gp19'
            className='h-9 md:h-10 w-auto benefit-icon'
          />

          <div className='w-full'>

            <p className='text-black font-bold text-sm'>
              Expert Guidance
            </p>

            <p className='text-gray-500 text-[10px] font-light leading-4 mt-1'>
              Learn from Industry Professionals <br /> Dedicated to Your Success
            </p>

          </div>

        </div>



        {/* BENEFIT 2 */}

        <div className='flex space-x-4 items-start benefit-card'>

          <Image
            src={group20}
            alt='gp20'
            className='h-9 md:h-10 w-auto benefit-icon'
          />

          <div className='w-full'>

            <p className='text-black font-bold text-sm leading-4'>
              Hands-on Experience
            </p>

            <p className='text-gray-500 text-[10px] font-light leading-4 mt-1'>
              Apply Your Skills to Practical, Hands-on <br /> Projects for Deep Learning
            </p>

          </div>

        </div>



        {/* BENEFIT 3 */}

        <div className='flex space-x-4 items-start benefit-card'>

          <Image
            src={group21}
            alt='gp21'
            className='h-9 md:h-10 w-auto benefit-icon'
          />

          <div className='w-full'>

            <p className='text-black font-bold text-sm leading-4'>
              Personalized Learning
            </p>

            <p className='text-gray-500 text-[10px] font-light leading-4 mt-1'>
              Customized Learning Paths to Match Your <br /> Learning Pace and Goals
            </p>

          </div>

        </div>



        {/* BENEFIT 4 */}

        <div className='flex space-x-4 items-start benefit-card'>

          <Image
            src={group22}
            alt='gp22'
            className='h-9 md:h-10 w-auto benefit-icon'
          />

          <div className='w-full'>

            <p className='text-black font-bold text-sm'>
              Industry Relevance
            </p>

            <p className='text-gray-500 text-[10px] font-light leading-4 mt-1'>
              Stay Ahead with the Latest Technologies <br /> and Industry Trends
            </p>

          </div>

        </div>



        {/* BENEFIT 5 */}

        <div className='flex space-x-4 items-start benefit-card'>

          <Image
            src={group23}
            alt='gp23'
            className='h-9 md:h-10 w-auto benefit-icon'
          />

          <div className='w-full'>

            <p className='text-black font-bold text-sm'>
              Career Support
            </p>

            <p className='text-gray-500 text-[10px] font-light leading-4 mt-1'>
              Boost Your Career with Our Exclusive Job <br /> Placement Support
            </p>

          </div>

        </div>



        {/* BENEFIT 6 */}

        <div className='flex space-x-4 items-start benefit-card'>

          <Image
            src={group18}
            alt='gp18'
            className='h-9 md:h-10 w-auto benefit-icon'
          />

          <div className='w-full'>

            <p className='text-black font-bold text-sm'>
              Community Engagement
            </p>

            <p className='text-gray-500 text-[10px] font-light leading-4 mt-1'>
              Connect with Peers, Collaborate on <br /> Projects, and Expand Your Network
            </p>

          </div>

        </div>

      </div>



      {/* ================================
          COURSES TITLE
      ================================= */}

      <div className='w-[88vw] sm:w-[70vw] md:w-[35vw] text-center courses-title mt-16 md:mt-20'>

        <p className='text-black font-extrabold text-[24px] sm:text-[28px] md:text-[30px] leading-tight'>

          Best courses available to choose

        </p>

        <p className='text-gray-600 text-[9px] sm:text-[10px] font-semibold mt-3 leading-4'>

          At Toshconsult, we are committed to shaping your tech skills and
          empowering your career. Explore the unique benefits that set us apart
          and pave the way for your success.

        </p>

      </div>


          {/* ================================
              COURSES
          ================================= */}

        <div className='
        flex
        flex-col
        items-center
        justify-center
        h-auto
        my-[8vh]
        w-full
        space-y-[5vh]
        px-[2vw]
      '>

        {/* ================================
            ROW 1
        ================================= */}

        <div className='
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-[5vh]
          md:gap-[2vw]
          w-full
          course-row
        '>

          {/* FRONTEND */}

          <div className='
            bg-fuchsia-100
            w-[90vw]
            sm:w-[80vw]
            md:w-[40vw]
            lg:w-[38vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            rounded-t-xl
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[30vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                lg:text-[1.8vw]
                leading-tight
              '>
                Frontend Development Masterclass
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Dive into the world of frontend development. Learn HTML CSS,
                and JavaScript. Master popular frameworks like React and Vue.js. <br />
                Create responsive, user-friendly interfaces.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[7vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                  font-light
                '>
                  Curriculum
                </p>

                <div className='
                  flex
                  flex-row
                  mt-[1vh]
                  items-center
                  gap-[1vw]
                '>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                  font-light
                '>
                  Learning time
                </p>

                <div className='
                  flex
                  flex-row
                  mt-[1vh]
                  items-center
                  gap-[1vw]
                '>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    MON - FRI
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                  font-light
                '>
                  Lesson time
                </p>

                <div className='
                  flex
                  flex-row
                  mt-[1vh]
                  items-center
                  gap-[1vw]
                '>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[5vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Get Started
            </button>

          </div>



          {/* BACKEND */}

          <div className='
            bg-amber-200
            w-[90vw]
            sm:w-[80vw]
            md:w-[30vw]
            lg:w-[30vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            rounded-t-xl
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[20vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                lg:text-[1.8vw]
                leading-tight
              '>
                Backend Development Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Explore server-side technologies, databases and Node.js.
                Build robust backend systems for web applications.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[5vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Weekend
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[5vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Get Started
            </button>

          </div>

        </div>


        {/* ================================
            ROW 2
        ================================= */}

        <div className='
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-[5vh]
          md:gap-[2vw]
          w-full
          course-row
        '>

          {/* MOBILE */}

          <div className='
            bg-amber-200
            w-[90vw]
            sm:w-[80vw]
            md:w-[30vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[22vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                leading-tight
              '>
                Mobile App Development Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Develop Android and iOS apps from scratch.
                Learn mobile UI/UX design principles. Work with
                frameworks like React Native or Flutter. Launch
                your apps on app stores.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[5vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Weekend
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[7vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Get Started
            </button>

          </div>


          {/* PYTHON */}

          <div className='
            bg-fuchsia-100
            w-[90vw]
            sm:w-[80vw]
            md:w-[40vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[30vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                leading-tight
              '>
                Python Fullstack Development Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Combine Python's versatility with frontend and backend
                technologies. Build dynamic websites using frameworks like
                Django and Flask. Develop interactive user interfaces with
                JavaScript.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[5vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    MON - FRI
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[7vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Get Started
            </button>

          </div>

        </div>


        {/* ================================
            ROW 3
        ================================= */}

        <div className='
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-[5vh]
          md:gap-[2vw]
          w-full
          course-row
        '>

          {/* JAVASCRIPT */}

          <div className='
            bg-fuchsia-100
            w-[90vw]
            sm:w-[80vw]
            md:w-[40vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[30vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                leading-tight
              '>
                JavaScript Fullstack Development Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Become proficient in both frontend and backend <br />
                JavaScript technologies. Learn Node.js for server-side development.
                Use React or <br /> Angular for building modern, dynamic interfaces.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[6vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    MON - FRI
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[7vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Get Started
            </button>

          </div>


          {/* UI UX */}

          <div className='
            bg-amber-200
            w-[90vw]
            sm:w-[80vw]
            md:w-[30vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[22vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                leading-tight
              '>
                UI/UX Design Fundamentals Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Master the art of user-centered design. Learn wireframing,
                prototyping and user testing. Explore tools like Sketch and
                Adobe XD. Craft seamless and intuitive user experiences.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[6vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Weekend
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[7vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Get Started
            </button>

          </div>

        </div>


        {/* ================================
            ROW 4
        ================================= */}

        <div className='
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          gap-[5vh]
          md:gap-[2vw]
          w-full
          course-row
        '>

          {/* DIGITAL MARKETING */}

          <div className='
            bg-amber-200
            w-[90vw]
            sm:w-[80vw]
            md:w-[30vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            rounded-b-xl
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[20vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                leading-tight
              '>
                Digital Marketing Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Unlock the power of online marketing. Learn SEO, social media
                marketing, email marketing, and PPC advertising. Analyze data,
                create compelling <br /> campaigns, and boost online presence.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[5vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Weekend
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[8vh]
              lg:mt-[6vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Coming soon
            </button>

          </div>


          {/* WORDPRESS */}

          <div className='
            bg-fuchsia-100
            w-[90vw]
            sm:w-[80vw]
            md:w-[40vw]
            h-auto
            min-h-[65vh]
            md:h-[65vh]
            rounded-b-xl
            p-[5vw]
            sm:p-[4vw]
            md:p-[2vw]
            course-card
            flex
            flex-col
          '>

            <div className='
              w-full
              md:w-[30vw]
              space-y-[1vh]
            '>

              <p className='
                text-black
                font-bold
                text-[6vw]
                sm:text-[4vw]
                md:text-[2vw]
                leading-tight
              '>
                Wordpress Development Course
              </p>

              <p className='
                text-gray-500
                text-[3.2vw]
                sm:text-[2.2vw]
                md:text-[0.8vw]
                md:leading-[3vh]
              '>
                Master Wordpress from basics to advanced customization.
                Create <br /> responsive and SEO-friendly websites. Explore theme
                development, <br /> plugins, and e-commerce integration.
              </p>

            </div>


            <div className='
              grid
              grid-cols-2
              mt-[5vh]
              gap-[4vw]
              md:gap-[2vw]
            '>

              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Curriculum
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    02 SEPT Batches
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Learning time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    MON - FRI
                  </p>

                </div>

              </div>


              <div className='flex flex-col'>

                <p className='
                  text-[3vw]
                  sm:text-[2.2vw]
                  md:text-[0.8vw]
                  text-gray-600
                '>
                  Lesson time
                </p>

                <div className='flex items-center gap-[1vw] mt-[1vh]'>

                  <Image
                    src={thick}
                    alt='thick'
                    className='h-[2vh] w-auto'
                  />

                  <p className='
                    font-bold
                    text-black
                    text-[3vw]
                    sm:text-[2.2vw]
                    md:text-[0.8vw]
                  '>
                    Duration
                  </p>

                </div>

              </div>

            </div>


            <button className='
              bg-black
              text-white
              px-[5vw]
              sm:px-[3vw]
              md:px-[2vw]
              py-[1.5vh]
              rounded-full
              font-semibold
              hover:bg-gray-800
              transition
              mt-auto
              md:mt-[8vh]
              self-start
              course-button
              text-[3vw]
              sm:text-[2vw]
              md:text-[0.8vw]
            '>
              Coming soon
            </button>
          </div>
        </div>
      </div>
      <div className='w-[88vw] sm:w-[70vw] md:w-[35vw] flex flex-col space-y-5 mt-5 md:mt-10'>

        <p className='text-[24px] sm:text-[28px] md:text-[30px] text-black font-extrabold text-center leading-tight'>

          Enrich your business with our expert software solutions

        </p>

        <p className='text-[10px] sm:text-[11px] text-black text-center font-light leading-5'>

          At Toshconsult, we are committed to shaping your tech skills and
          empowering your career. Explore the unique benefits that set us apart
          and pave the way for your success.

        </p>

      </div>



          <div className='
            w-[90vw] sm:w-[82vw] md:w-[70vw]
            h-[38vh] sm:h-[48vh] md:h-[60vh]
            bg-pink-200
            rounded-3xl
            mt-[6vh] md:mt-[8vh]
            flex flex-col
            items-center
            justify-center
            gap-[3vh] sm:gap-[4vh] md:gap-[5vh]
            shadow-2xl shadow-pink-300
            px-[3vw]
          '>

            {/* TOP 3 */}

            <div className='
              flex flex-row
              items-center
              justify-center
              gap-[2vw] sm:gap-[3vw] md:gap-[2vw]
              w-full
            '>

              <Image
                src={frame43}
                alt='frame43'
                className='
                  w-[25vw] h-auto
                  sm:w-[20vw]
                  md:w-[15vw]
                  max-h-[10vh] sm:max-h-[12vh] md:max-h-[14vh]
                  object-contain
                '
              />

              <Image
                src={frame42}
                alt='frame42'
                className='
                  w-[25vw] h-auto
                  sm:w-[20vw]
                  md:w-[15vw]
                  max-h-[10vh] sm:max-h-[12vh] md:max-h-[14vh]
                  object-contain
                '
              />

              <Image
                src={frame41}
                alt='frame41'
                className='
                  w-[25vw] h-auto
                  sm:w-[20vw]
                  md:w-[15vw]
                  max-h-[10vh] sm:max-h-[12vh] md:max-h-[14vh]
                  object-contain
                '
              />

            </div>


            {/* BOTTOM 3 */}

            <div className='
              flex flex-row
              items-center
              justify-center
              gap-[2vw] sm:gap-[3vw] md:gap-[2vw]
              w-full
            '>

              <Image
                src={frame39}
                alt='frame39'
                className='
                  w-[25vw] h-auto
                  sm:w-[20vw]
                  md:w-[15vw]
                  max-h-[10vh] sm:max-h-[12vh] md:max-h-[14vh]
                  object-contain
                '
              />

              <Image
                src={frame40}
                alt='frame40'
                className='
                  w-[25vw] h-auto
                  sm:w-[20vw]
                  md:w-[15vw]
                  max-h-[10vh] sm:max-h-[12vh] md:max-h-[14vh]
                  object-contain
                '
              />

              <Image
                src={frame44}
                alt='frame44'
                className='
                  w-[20vw] h-auto
                  sm:w-[16vw]
                  md:w-[13vw]
                  max-h-[8vh] sm:max-h-[10vh] md:max-h-[13vh]
                  object-contain
                '
              />

            </div>

          </div>


      <div className='w-[88vw] sm:w-[70vw] md:w-[35vw] flex flex-col space-y-5 mt-14 md:mt-16'>

        <p className='text-[24px] sm:text-[28px] md:text-[30px] text-black font-extrabold text-center leading-tight'>

          What our students are saying about us

        </p>

        <p className='text-[10px] sm:text-[11px] text-black text-center font-light leading-5'>

          At Toshconsult, we are committed to shaping your tech skills and
          empowering your career. Explore the unique benefits that set us apart
          and pave the way for your success.

        </p>

      </div>



      <div className='mt-10 w-[90vw] sm:w-[75vw] md:w-[50vw] min-h-[250px] md:h-[40vh] bg-amber-50 shadow-2xl shadow-black rounded-2xl p-6 md:p-10'>

        <p className='text-black text-[16px] sm:text-[18px] md:text-[20px] leading-7'>

          “At Toshconsult, we are committed to shaping your tech skills and
          empowering your career. Explore the unique benefits that set us apart
          and pave the way for your success.”

        </p>

        <Image
          src={frame47}
          alt='frame47'
          className='mt-8 md:mt-10 h-8 md:h-10 w-auto'
        />

      </div>



      {/* ================================
          FAQ
      ================================= */}

      <div className='w-full flex flex-col items-center'>

        <div className='w-[88vw] sm:w-[70vw] md:w-[35vw] flex flex-col space-y-5 mt-14 md:mt-16 items-center'>

          <p className='text-[24px] sm:text-[28px] md:text-[30px] text-black font-extrabold text-center leading-tight'>

            Frequently asked question

          </p>

          <p className='text-[10px] sm:text-[11px] text-black text-center font-light leading-5'>

            At Toshconsult, we are committed to shaping your tech skills and
            empowering your career. Explore the unique benefits that set us apart
            and pave the way for your success.

          </p>


          {/* FAQ ITEM */}

          <div className='w-full md:w-[40vw] flex flex-col mb-10 mt-5'>

            <div className='flex flex-row justify-between items-center gap-4'>

              <div className='flex flex-row gap-3 md:gap-5 items-center'>

                <p className='text-black text-xl md:text-2xl'>
                  01.
                </p>

                <p className='text-black text-[13px] md:text-[15px]'>
                  Frequently asked question
                </p>

              </div>


              <Image
                src={faqOpen ? group4a : group4}
                alt="faq"
                className="h-5 w-auto cursor-pointer flex-shrink-0"
                onClick={() => setfaqOpen(!faqOpen)}
              />

            </div>


            {faqOpen && (

              <p className='text-gray-500 text-[12px] md:text-sm mt-4 leading-5'>

                At Toshconsult, we are committed to shaping your tech skills
                and empowering your career. Explore the unique benefits that
                set us apart and pave the way for your success.

              </p>

            )}

          </div>

        </div>

      </div>



      {/* ================================
          CTA
      ================================= */}

      <div className="w-full min-h-[40vh] md:h-[50vh] bg-purple-200 flex flex-col justify-center items-center gap-5 px-5 mt-10">

        <p className="w-full sm:w-[70vw] md:w-[25vw] text-black text-3xl sm:text-4xl font-extrabold text-center leading-tight">

          Ready to Dive In? Enroll Now!

        </p>

        <button className="h-9 md:h-10 w-28 md:w-[7vw] text-[10px] rounded-2xl flex justify-center items-center bg-orange-500 text-white hover:bg-orange-600 transition duration-300 shadow-md cursor-pointer">

          Apply Now

        </button>

      </div>


    </section>
  )
}


export default Page