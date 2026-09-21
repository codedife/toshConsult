import React from 'react'
import Image from "next/image";
import Logo from "../../image/Toshconsult Img 1.png"

const Navbar = () => {
  return (
       <nav className='bg-black text-white px-5 md:px-10 lg:px-16 py-4 flex justify-between items-center'>         
           <div>
              <Image
                src={Logo}
                alt="toshlogo"
                className="h-10 w-auto"
              />
            </div>

            <ul className='flex space-x-3 w-auto text-[10px]'>
                <li>Home</li>
                <li>Courses</li>
                <li>About</li>
                <li>Student project</li>
                <li>Resources</li>
            </ul>

            <button className="h-7 w-auto text-[10px] p-3 flex items-center bg-orange-500 text-white  rounded-lg font-semibold hover:bg-orange-600 transition duration-300 shadow-md cursor-pointer">
                 Apply Now
            </button>



       </nav>
  )
}

export default Navbar
