import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Frontendhero from '../../image/frontendhero.jpg'
import fondermental from '../../image/fondermental.png'
import htmlcss from '../../image/htmlcss.png'
import reacthtml from '../../image/reacthtml.png'
import faruq from '../../image/faruq.png'
import sulyman from '../../image/sulyman.png'
import bolu from '../../image/bolu.png'
import faruq2 from '../../image/faruq2.png'
import sulyman2 from '../../image/sulyman2.png'
import bolu2 from '../../image/bolu2.png'
import faruq3 from '../../image/faruq3.png'
import sulyman3 from '../../image/sulyman3.png'
import bolu3 from '../../image/bolu3.png'

const page = () => {
  return (
    <div>
      <Navbar />
      <section className='px-[11%] bg-white pt-[100px] pb-[40px]'>
        <div className='flex justify-between items-cente'>
          <div className='pt-[50px]'>
            <h1 className='font-bold text-[40px] text-black mb-5 '>Become a <br />frontend <br />professional</h1>
            <p className='text-[12px] text-gray-600 mb-[20px]'>Dive into the Future of Tech Education. Select <br />Your Course, Apply Instantly.</p>
            <button className='py-[10px] px-[20px] bg-black rounded-[30px] text-[13px]'>Get Started</button>
          </div>
          <div className='mt-[30px]'>
            <Image
              src={Frontendhero}
              alt="brand"
              className='h-auto w-[40vw] rounded-2xl'
            />
          </div>
        </div>
      </section>
      <section className='px-[11%] bg-pink-100 py-[50px]'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[30px]'>
          <div className='bg-black p-[20px] rounded-2xl'>
            <p className='text-[11px] pb-[40px]'>Inter- state education</p>
            <h1 className='font-bold text-4xl text-white pb-[40px]'>70%</h1>
            <p className='text-[15px]'>Reach more than 3,000 <br />students around the <br />nigeria.</p>
          </div>
          <div className='bg-black p-[20px] rounded-2xl'>
            <p className='text-[11px] pb-[40px]'>Students onboard</p>
            <h1 className='font-bold text-4xl text-white pb-[40px]'>3000+</h1>
            <p className='text-[15px]'>Onboarded to our <br />frontend development <br />training.</p>
          </div>
          <div className='bg-black p-[20px] rounded-2xl'>
            <p className='text-[11px] pb-[40px]'>Access to jobs opportunities</p>
            <h1 className='font-bold text-4xl text-white pb-[40px]'>50%</h1>
            <p className='text-[15px]'>Our past students had <br />been working in a top <br />brands.</p>
          </div>
        </div>
      </section>
      <section className="px-[5%] md:px-[11%] py-7 bg-white">
        <div className="text-center mb-12">
          <h3 className="text-black text-[28px] font-bold">
            Our curated frontend <br />
            development courses
          </h3>
          <p className="text-gray-500 text-[10px] mt-2">
            At Toshconsult, we are committed to shaping your tech skills and empowering your career.
            <br />
            Explore the unique benefits that set us apart and pave the way for your success.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-[44%] shrink-0">
            <Image
              src={fondermental}
              alt="Fundamental JavaScript Course"
              className="w-full h-[270px] object-cover rounded-xl"
            />
          </div>
          <div className="relative z-10 -mt-6 md:mt-5 md:-ml-10 md:mr-5 w-[95%] top-6 md:flex-1 min-w-0 bg-white p-5 rounded-xl shadow-md">
            <div className="flex justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-bold text-black">
                  Fundamental <br /> of JavaScript
                </h3>
                <p className="text-gray-500 text-[10px] mt-2">
                  The beginner's course to become a pro in JavaScript.
                </p>
              </div>
              <div className="shrink-0">
                <h3 className="text-base font-bold text-black">₦50,000</h3>
                <div className="flex items-center gap-1">
                  <span className="bg-orange-500 text-white text-[8px] p-1 rounded">
                    50% OFF
                  </span>
                  <p className="text-[9px] line-through">₦100,000</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-5 text-[10px] text-black">
              <p>✓ Data fetching</p>
              <p>✓ Variable</p>
              <p>✓ Mapping</p>
              <p>✓ Looping</p>
              <p>✓ JSON</p>
              <p>✓ Data object</p>
            </div>
            <ul className="flex justify-between text-[10px] mb-5">
              <li>• Beginners</li>
              <li>• 3 Weeks</li>
              <li>• MON - FRI</li>
            </ul>
            <div className="flex justify-end gap-2">
              <button className="bg-orange-500 text-white text-[10px] px-4 py-2 rounded-full">
                Request quote
              </button>
              <button className="bg-black text-white text-[10px] px-5 py-2 rounded-full">
                Start course
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="w-full md:w-[44%] shrink-0">
            <Image
              src={htmlcss}
              alt="HTML and CSS Course"
              className="w-full h-[270px] object-cover rounded-xl"
            />
          </div>
          <div className="relative z-10 -mt-6 md:mt-5 md:-ml-10 md:mr-5 w-[95%] md:flex-1 top-6 min-w-0 bg-white p-5 rounded-xl shadow-md">
            <div className="flex justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-bold text-black">
                  Fundamental HTML <br /> & CSS
                </h3>
                <p className="text-gray-500 text-[10px] mt-2">
                  Learn HTML and CSS to build responsive websites.
                </p>
              </div>
              <div className="shrink-0">
                <h3 className="text-base font-bold text-black">₦50,000</h3>
                <div className="flex items-center gap-1">
                  <span className="bg-orange-500 text-white text-[8px] p-1 rounded">
                    50% OFF
                  </span>
                  <p className="text-[9px] line-through">₦100,000</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-5 text-[10px] text-black">
              <p>✓ HTML5</p>
              <p>✓ CSS3</p>
              <p>✓ Flexbox</p>
              <p>✓ Grid</p>
              <p>✓ Responsive</p>
              <p>✓ Animations</p>
            </div>
            <ul className="flex justify-between text-[10px] mb-5">
              <li>• Beginners</li>
              <li>• 3 Weeks</li>
              <li>• MON - FRI</li>
            </ul>
            <div className="flex justify-end gap-2">
              <button className="bg-orange-500 text-white text-[10px] px-4 py-2 rounded-full">
                Request quote
              </button>
              <button className="bg-black text-white text-[10px] px-5 py-2 rounded-full">
                Start course
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-12">

          <div className="w-full md:w-[44%] shrink-0">
            <Image
              src={reacthtml}
              alt="React and Hooks Course"
              className="w-full h-[270px] object-cover rounded-xl"
            />
          </div>
          <div className="relative z-10 -mt-6 md:mt-5 md:-ml-10 md:mr-5 w-[95%] md:flex-1 min-w-0 bg-white p-5 rounded-xl shadow-md top-6">
            <div className="flex justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-bold text-black">
                  Fundamental React <br /> & Hooks
                </h3>
                <p className="text-gray-500 text-[10px] mt-2">
                  Learn React and Hooks to build modern web applications.
                </p>
              </div>
              <div className="shrink-0">
                <h3 className="text-base font-bold text-black">₦50,000</h3>
                <div className="flex items-center gap-1">
                  <span className="bg-orange-500 text-white text-[8px] p-1 rounded">
                    50% OFF
                  </span>
                  <p className="text-[9px] line-through">₦100,000</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-5 text-[10px] text-black">
              <p>✓ Components</p>
              <p>✓ Props</p>
              <p>✓ useState</p>
              <p>✓ useEffect</p>
              <p>✓ React Hooks</p>
              <p>✓ API Fetching</p>
            </div>
            <ul className="flex justify-between text-[10px] mb-5">
              <li>• Beginners</li>
              <li>• 3 Weeks</li>
              <li>• MON - FRI</li>
            </ul>
            <div className="flex justify-end gap-2">
              <button className="bg-orange-500 text-white text-[10px] px-4 py-2 rounded-full">
                Request quote
              </button>
              <button className="bg-black text-white text-[10px] px-5 py-2 rounded-full">
                Start course
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#111111] px-[6%] md:px-[9%] py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
            Why you should take this <br className="hidden md:block" />
            course
          </h2>
          <p className="text-gray-400 text-xs md:text-sm">
            At Toshconsult, we are committed to shaping your tech skills and empowering your career.
            <br className="hidden md:block" />
            Explore the unique benefits that set us apart and pave the way for your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-[#090909] p-8 md:p-10 rounded-2xl
                          border border-white/[0.03]
                          hover:border-yellow-500/30 transition duration-300">
            <div className="text-yellow-500 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 8l10-5 10 5-10 5-10-5z" />
                <path d="M6 10v5c4 3 8 3 12 0v-5" />
                <path d="M22 8v7" />
              </svg>
            </div>

            <h3 className="text-white text-base font-semibold mb-4">
              Advance learning
            </h3>

            <p className="text-gray-400 text-xs leading-[1.6]">
              At Toshconsult, we are committed to shaping your tech skills
              and empowering your career. Explore the unique benefits
              that set us apart and pave the way for your success.
            </p>

          </div>
          <div className="bg-[#090909] p-8 md:p-10 rounded-2xl
                          border border-white/[0.03]
                          hover:border-yellow-500/30 transition duration-300">
            <div className="text-yellow-500 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="3" width="12" height="18" rx="2" />
                <path d="M8 7h4M8 11h4M9 21v-4h3v4" />
                <path d="M16 10h4v8h-4zM14 21h8" />
              </svg>
            </div>
            <h3 className="text-white text-base font-semibold mb-4">
              Internship placement
            </h3>
            <p className="text-gray-400 text-xs leading-[1.6]">
              At Toshconsult, we are committed to shaping your tech skills
              and empowering your career. Explore the unique benefits
              that set us apart and pave the way for your success.
            </p>
          </div>
          <div className="bg-[#090909] p-8 md:p-10 rounded-2xl
                          border border-white/[0.03]
                          hover:border-yellow-500/30 transition duration-300">
            <div className="text-yellow-500 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="7" r="3" />
                <circle cx="19" cy="7" r="2" />
                <path d="M3 20v-2a6 6 0 0112 0v2z" />
                <path d="M16 14a5 5 0 015 5v1h-3" />
              </svg>
            </div>
            <h3 className="text-white text-base font-semibold mb-4">
              Interactive community
            </h3>
            <p className="text-gray-400 text-xs leading-[1.6]">
              At Toshconsult, we are committed to shaping your tech skills
              and empowering your career. Explore the unique benefits
              that set us apart and pave the way for your success.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-[6%] md:px-[11%] py-12">
        <div className="text-center mb-12">
          <h2 className="text-black text-2xl font-bold">
            Steps to get started
          </h2>
          <p className="text-gray-500 text-[10px] mt-2">
            At Toshconsult, we are committed to shaping your tech skills and empowering your career.
            <br />
            Explore the unique benefits that set us apart and pave the way for your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-gray-300 text-6xl font-bold">
                01
              </h3>
              <div className="hidden md:flex flex-1 items-center">
                <div className="w-full h-[1px] bg-orange-500"></div>
                <span className="text-orange-500 text-[8px]">●</span>
              </div>
            </div>
            <p className="text-black text-xs font-medium mt-2">
              Choose your preferred <br /> course
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-gray-300 text-6xl font-bold">
                02
              </h3>
              <div className="hidden md:flex flex-1 items-center">
                <div className="w-full h-[1px] bg-orange-500"></div>
                <span className="text-orange-500 text-[8px]">●</span>
              </div>
            </div>
            <p className="text-black text-xs font-medium mt-2">
              Reach out to us to <br /> purchase course
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-gray-300 text-6xl font-bold">
                03
              </h3>
            </div>
            <p className="text-black text-xs font-medium mt-2">
              Start learning and <br /> become professional
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-[6%] md:px-[11%] py-12">
        <div className="text-center mb-10">
          <h2 className="text-black text-2xl font-bold">
            What our students are <br />
            saying
          </h2>
          <p className="text-gray-500 text-[10px] mt-2">
            At Toshconsult, we are committed to shaping your tech skills and empowering your career.
            <br />
            Explore the unique benefits that set us apart and pave the way for your success.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-3 gap-y-5 items-start">
          <div>
            <div className="relative">
              <Image
                src={faruq}
                alt="Student"
                className="w-full h-[220px] object-cover rounded-lg"
              />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">
              Gbadegesin Farouq
            </h3>
            <p className="text-gray-400 text-[9px] mt-1">
              Frontend developer, HTML5 Ecosystem
            </p>
          </div>
          <div className="pt-5">
            <div className="relative">
              <Image src={sulyman} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Bashir Sulyman</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, JavaScript</p>
          </div>
          <div className="pt-10">
            <div className="relative">
              <Image src={bolu} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Ayanda Boluwatife</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, HTML5 Ecosystem</p>
          </div>
          <div>
            <div className="relative">
              <Image src={faruq2} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Gbadegesin Farouq</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, HTML5 Ecosystem</p>
          </div>
          <div className="pt-5">
            <div className="relative">
              <Image src={sulyman2} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Bashir Sulyman</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, JavaScript</p>
          </div>
          <div className="pt-10">
            <div className="relative">
              <Image src={bolu2} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Ayanda Boluwatife</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, HTML5 Ecosystem</p>
          </div>
          <div>
            <div className="relative">
              <Image src={faruq3} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Gbadegesin Farouq</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, HTML5 Ecosystem</p>
          </div>
          <div className="pt-5">
            <div className="relative">
              <Image src={sulyman3} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Bashir Sulyman</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, JavaScript</p>
          </div>
          <div className="pt-10">
            <div className="relative">
              <Image src={bolu3} alt="Student" className="w-full h-[220px] object-cover rounded-lg" />
            </div>
            <h3 className="text-black text-xs font-semibold mt-2">Ayanda Boluwatife</h3>
            <p className="text-gray-400 text-[9px] mt-1">Frontend developer, HTML5 Ecosystem</p>
          </div>

        </div>
      </section>
      <section className="bg-[#F8E8F8] py-16 md:py-20 text-center">
        <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight mb-8">
          Ready to Dive <br />
          In? Enroll Now!
        </h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-9 py-3 rounded-full transition">
          Apply now
        </button>
      </section>
      <Footer />
    </div>
  )
}

export default page
