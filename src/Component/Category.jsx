import React from 'react'
import { motion } from 'framer-motion'
function Category() {
  return (
    <div className='grid grid-cols-2 md:flex justify-center md:gap-28 gap-4 px-8 mt-10 md:mt-16 items-center'>
      <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1, duration:0.7}}>
        <div className='flex flex-col items-center border border-slate-200 rounded-full md:w-30 md:h-30 w-26 h-26 bg-gray-100 justify-center '><img src="src\assets\men.png" className='w-21 h-25' alt="" /></div>
        <p className='text-slate-500'>men's clothing</p>
      </motion.div>
       <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2, duration:0.7}}>
        <div className='border border-slate-200 rounded-full md:w-30 md:h-30 w-26 h-26 bg-gray-100 flex justify-center items-center flex-col'><img src="src\assets\brac.png" className='w-20 h-20 m-5' alt="" /></div>
        <p className='text-slate-500 text-center'>jewelery</p>
      </motion.div>
       <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.3, duration:0.7}}>
        <div className='border border-slate-200 rounded-full md:w-30 md:h-30 w-26 h-26 bg-gray-100 flex justify-center items-center flex-col'><img src="src\assets\drive.png" className='w-20 h-20 m-5' alt="" /></div>
        <p className='text-slate-500'>electronics</p>
      </motion.div>
       <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.4, duration:0.7}}>
        <div className='border border-slate-200 rounded-full md:w-30 md:h-30 w-26 h-26 bg-gray-100 flex justify-center items-center flex-col'><img src="src\assets\wo.png" className='w-20 h-22 m-5' alt="" /></div>
        <p className='text-slate-500'>women's clothing</p>
      </motion.div>
    </div>
  )
}

export default Category
