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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-black text-white px-5 md:px-10 lg:px-16 py-4 flex justify-between items-center shadow-2xl">

      {/* Logo */}
      <a href="/">
        <Image
          src={Logo}
          alt="toshlogo"
          className="h-8 md:h-10 w-auto"
        />
      </a>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
      <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent px-5 md:px-0 pb-5 md:pb-0 space-y-5 md:space-y-0 md:space-x-5 text-sm md:text-xs items-start md:items-center`}>

        <li>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li className="relative w-full md:w-auto">
          <a
            onClick={() => setCourseOpen(!courseOpen)}
            className="cursor-pointer flex items-center gap-2"
          >
            Course <span>ᵛ</span>
          </a>

          {courseOpen && (
            <div className="relative md:absolute md:top-8 md:left-1/2 md:-translate-x-1/2 z-50 mt-3 md:mt-0">

              <div className="w-full md:w-[450px] lg:w-[550px] rounded-xl md:rounded-2xl bg-white p-4 md:p-6 shadow-xl">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <a href="/Frontendpage" className="flex items-center gap-3">
                    <Image src={frontend} alt="frontend" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">Frontend development</span>
                  </a>
                  <a href="/Backendpage" className="flex items-center gap-3">
                    <Image src={backend} alt="backend" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">Backend development</span>
                  </a>
                  <a href="/courses/ui-ux" className="flex items-center gap-3">
                    <Image src={ui} alt="ui" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">UI/UX design</span>
                  </a>
                  <a href="/courses/mobile" className="flex items-center gap-3">
                    <Image src={mobile} alt="mobile" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">Mobile app development</span>
                  </a>
                  <a href="/courses/python" className="flex items-center gap-3">
                    <Image src={python} alt="python" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">Python fullstack</span>
                  </a>
                  <a href="/courses/javascript" className="flex items-center gap-3">
                    <Image src={javascript} alt="javascript" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">Javascript fullstack</span>
                  </a>
                  <a href="/courses/wordpress" className="flex items-center gap-3">
                    <Image src={wordpress} alt="wordpress" className="w-8 h-8 object-contain" />
                    <span className="text-xs md:text-sm text-gray-950">Wordpress development</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </li>
        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="/student-project" onClick={() => setMenuOpen(false)}>
            Student project
          </a>
        </li>
        <li>
          <a href="/resources" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
        </li>
        <li className="md:hidden">
          <a
            href="/apply"
            className="inline-block bg-orange-500 px-5 py-2 rounded-lg text-white"
          >
            Apply Now
          </a>
        </li>
      </ul>
      <a
        href="/apply"
        className="hidden md:block text-xs px-5 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition"
      >
        Apply Now
      </a>
    </nav>
  )
}

export default Navbar