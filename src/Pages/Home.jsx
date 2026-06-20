import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='flex flex-col md:flex-row items-center bg-gray-50 px-6 md:px-16 py-10 h-full md:h-[90vh]  gap-1 md:gap-8 '>
      <motion.div className='w-full md:w-1/2 mt-5' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:0.8}}>
        <h1 className='text-slate-500 font-bold text-sm uppercase tracking-widest'>#Big Fashion Sale</h1>
        <h1 className='text-slate-900 text-5xl font-bold md:text-6xl leading-tight mt-4'>Limited Time Offer! Up to 50% OFF!</h1>
        <p className='text-slate-500 text-lg mt-4 mb-8'>Redefine your everyday style with our premium collection of clothes, electronics, and accessories.</p>
        <Link to='/products' className='bg-black hover:bg-gray-600 text-white px-8 py-3 mt-4 transition-all rounded-lg font-semibold cursor-pointer'>Shop Now</Link>
      </motion.div>
      <motion.div className='w-full md:w-1/2 flex justify-center md:p-4' initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:0.8, delay:0.3}}>
       <img src="src\assets\lap.png" alt="" className='md:w-[99vw] object-contain w-full h-auto md:h-[99vh] drop-shadow-2xl md:mb-28 pr-12'/>
      </motion.div>
    </div>
  )
}

export default Home
