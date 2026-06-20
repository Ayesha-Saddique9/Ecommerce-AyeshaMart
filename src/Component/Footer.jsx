import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-black w-full md:px-12 p-8 mt-10'>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-6'>
        <div className='md:mb-6'>
         <h1 className='text-white text-3xl md:text-4xl tracking-tight'>Ayesha<span className='text-xl md:text-2xl tracking-widest font-medium text-gray-400'>Mart</span></h1>
          <p className='text-gray-400 mt-4'>Your premium destination for everyday style and electronics.</p>
           <div className='flex flex-row gap-2 md:mt-4 mt-2'>
          <FaFacebook className='text-gray-400 text-2xl hover:text-white hover:cursor-pointer hover:scale-110 duration-300 transition-colors'/>
          <FaSquareInstagram  className='text-gray-400 text-2xl hover:text-white hover:cursor-pointer hover:scale-110 duration-300 transition-colors'/>
          <FaTwitterSquare className='text-gray-400 text-2xl hover:text-white hover:cursor-pointer hover:scale-110 duration-300 transition-colors'/>
          </div>
      </div>
      <div className='flex flex-col md:ml-30'>
        <h1 className='text-white font-bold mb-2'>Quick Links</h1>
        <Link to='/' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>Home</Link>
        <Link to='/about' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>About</Link>
        <Link to='/products' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>Products</Link>
      </div>
      <div className='flex flex-col md:ml-10'>
      <h1 className='text-white font-bold mb-2'>Contact Us</h1>
      <p className='text-gray-400'>📍 123 Fashion Street, Lahore, Pakistan</p>
      <p className='text-gray-400'>📧 support@ayeshamart.com</p>
      <p className='text-gray-400'>📞 +92 300 123 4567</p>
      </div>
      </div>
      <hr className='text-gray-500 mt-6'/>
      <p className='text-gray-400 text-center pt-4 bottom-0'>© 2026 AyeshaMart. All rights reserved</p>
    </div>
  )
}

export default Footer
