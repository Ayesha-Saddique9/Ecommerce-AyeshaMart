import React from 'react'
import { TiTick } from "react-icons/ti";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function ThankYou() {
  return (
    <motion.div className='flex flex-col justify-center items-center md:min-h-[82vh] min-h-[78vh]' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.2}}>
      <TiTick className='text-3xl text-white bg-black h-12 w-12 rounded-full'/>
      <div className='md:w-sm md:h-60 h-70 max-w-[88vw] bg-gray-100 mt-4 rounded-lg flex flex-col justify-center items-center gap-4'>
        <h1 className='text-black font-extrabold text-3xl'>Thank You</h1>
        <p className='text-gray-500 px-6'>Order <span className='text-gray-500 font-bold'>#123456789</span> has been successfully placed.
          We have sent a receipt and shipping tracking 
          details to your email address</p>
          <Link to='/products' className='bg-black text-white px-14 py-2.5 rounded-lg hover:scale-105 hover:bg-gray-500 duration-300'> Back to Shopping</Link>
      </div>
    </motion.div>
  )
}

export default ThankYou
