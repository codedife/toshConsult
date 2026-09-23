"use client"

import React, { useState } from "react"
import Image from "next/image"
import Logo from "../../image/Toshconsult Img 1.png"
import frontend from "../../image/tabler-icon-code.png"
import backend from "../../image/tabler-icon-schema.png"
import ui from "../../image/tabler-icon-vector-bezier-2.png"
import mobile from "../../image/tabler-icon-versions.png"
import python from "../../image/tabler-icon-brand-python.png"
import javascript from "../../image/tabler-icon-brand-javascript.png"
import wordpress from "../../image/tabler-icon-brand-wordpress.png"


const Navbar = () => {
  const [courseOpen, setCourseOpen] = useState(false)

  return (
    <>
      <nav className="fixed z-50 w-full bg-black text-white px-5 md:px-10 lg:px-16 py-4 flex justify-between items-center">

        <div>
          <Image
            src={Logo}
            alt="toshlogo"
            className="h-10 w-auto"
          />
        </div>

        <ul className="flex space-x-3 w-auto text-[10px]">
          <li>Home</li>

          {/* Course */}
          <li
            onClick={() => setCourseOpen(!courseOpen)}
            className="relative cursor-pointer"
          >
            Course

            {/* Courses Dropdown */}
            {courseOpen && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="w-[30vw] rounded-[30px] bg-white px-5 py-7 shadow-xl">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">

                    {/* Frontend */}
                    <div className="flex items-center gap-3">
                      <Image src={frontend} alt="frontend" />
                      <span className="text-[13px] font-normal text-gray-950">
                        Frontend development
                      </span>
                    </div>

                    {/* Backend */}
                    <div className="flex items-center gap-3">
                      <Image src={backend} alt="backend" />
                      <span className="text-[13px] font-normal text-gray-950">
                        Backend development
                      </span>
                    </div>

                    {/* UI/UX */}
                    <div className="flex items-center gap-3">
                      <Image src={ui} alt="ui" />
                      <span className="text-[13px] font-normal text-gray-950">
                        UI/UX design
                      </span>
                    </div>

                    {/* Mobile */}
                    <div className="flex items-center gap-3">
                      <Image src={mobile} alt="mobile" />
                      <span className="text-[13px] font-normal text-gray-950">
                        Mobile app development
                      </span>
                    </div>

                    {/* Python */}
                    <div className="flex items-center gap-3">
                      <Image src={python} alt="python" />
                      <span className="text-[13px] font-normal text-gray-950">
                        Python fullstack
                      </span>
                    </div>

                    {/* Javascript */}
                    <div className="flex items-center gap-3">
                      <Image src={javascript} alt="javascript" />
                      <span className="text-[13px] font-normal text-gray-950">
                        Javascript fullstack
                      </span>
                    </div>

                    {/* Wordpress */}
                    <div className="flex items-center gap-3">
                      <Image src={wordpress} alt="wordpress" />
                      <span className="text-[13px] font-normal text-gray-950">
                        Wordpress development
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            )}
          </li>

          <li>About</li>
          <li>Student project</li>
          <li>Resources</li>
        </ul>

        <button className="h-7 w-auto text-[10px] px-3 flex items-center bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-md cursor-pointer">
          Apply Now
        </button>

      </nav>
    </>
  )
}

export default Navbar