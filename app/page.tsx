import React from 'react'
import Navbar from '../app/components/Navbar'
import Footer from '../app/components/Footer'
import Home from "../app/Landingpage/Home"
const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default page