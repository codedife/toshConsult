import React from 'react'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import Home from "../app/Landingpage/Home"

const page = () => {
  return (
    <div className="animate-fadeIn">
      <Navbar />

      <div className="animate-slideUp">
        <Home />
      </div>

      <div className="animate-slideUp">
        <Footer />
      </div>
    </div>
  )
}

export default page