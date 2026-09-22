import React from "react";
import Image from "next/image";
import Logo from "../../image/Toshconsult Img 1.png"
import insta from "../../image/Group 13.png"
import X from "../../image/Group 15.png"
import link from "../../image/Group 17.png"
import face from "../../image/Group 16.png"

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 md:px-16 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
             <div>
              <Image
                src={Logo}
                alt="toshlogo"
                className="h-24 w-auto"
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/toshconsult"> <Image src={insta} alt="instagram" className="h-9 w-9 object-contain"/> </a>
              <a href="https://x.com/toshconsult">  <Image src={X} alt="twitter" className="h-9 w-9 object-contain" /> </a>
              <a href="https://www.linkedin.com/company/toshconsult/"> <Image src={link}  alt="linkedin" className="h-9 w-9 object-contain"/></a>
              <a href="https://web.facebook.com/toshconsult?_rdc=1&_rdr#"> <Image src={face} alt="facebook" className="h-9 w-9 object-contain" /></a>
            </div>
      </div>


      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

        {/* Contact */}
        <div>
          <h2 className="font-semibold mb-8">
            Contact
          </h2>

          <div className="space-y-7 text-gray-400">

            <div className="flex gap-4">
              <span className="font-semibold text-[10px] text-gray-300">
                Address: 
              </span>
              <p className="text-[10px]">
                 30, Ibrahim Taiwo Rd, Besides Mamtess Store, Taiwo Isale, Ilorin, Kwara State, Nigeria 
              </p>
            </div>

            <div className="flex gap-2">
              <span className="font-semibold text-[10px] text-gray-300 whitespace-nowrap">
                Phone No :
              </span>
              <p className="text-[10px]">
                08080595043
              </p>
            </div>

            <div className="flex gap-4">
              <span className="font-semibold text-[10px] text-gray-300">
                Email:
              </span>
              <p className="text-[10px]">   
                  info@toshconsult.com
              </p>
            </div>

          </div>

          <p className="text-gray-500 text-[10px] mt-24">
            2023 Copyright By Toshconsult.
          </p>
        </div>


        {/* Courses */}
        <div>
          <h2 className="text-xl font-semibold mb-8">
            Courses
          </h2>

          <ul className="space-y-5 text-[10px] text-gray-400">
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Python Full-Stack Development</li>
            <li>Javascript Full-Stack Development</li>
            <li>Courses For Children</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-8">
            Services
          </h2>

          <ul className="space-y-5 text-[10px] text-gray-400">
            <li>
              <a href="/services/website-development" className="hover:text-white transition">
                Website Development
              </a>
            </li>

            <li>
              <a href="/services/mobile-app-development" className="hover:text-white transition">
                Mobile App Development
              </a>
            </li>

            <li>
              <a href="/services/digital-marketing" className="hover:text-white transition">
                Digital Marketing
              </a>
            </li>

            <li>
              <a href="/services/software-development" className="hover:text-white transition">
                Software Development
              </a>
            </li>

            <li>
              <a href="/services/ui-ux-design" className="hover:text-white transition">
                UI/UX Design
              </a>
            </li>

            <li>
              <a href="/services/seo-management" className="hover:text-white transition">
                SEO Management
              </a>
            </li>

            <li>
              <a href="" className="hover:text-white transition">
                Social Media Management
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-8">
            Company
          </h2>

          <ul className="space-y-5 text-[10px] text-gray-400">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="/blog" className="hover:text-white transition">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
            </li>
          </ul>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
