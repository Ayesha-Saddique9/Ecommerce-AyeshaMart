import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoDiamond } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { easeOut, motion } from 'framer-motion';

function About() {
  return (
    <div>
      <div className='bg-slate-50 py-12 flex flex-col items-center justify-center'>
         <h1 className='text-slate-900 text-4xl font-bold'>Know Our Story</h1>
         <p className='text-gray-500 mt-4 text-center'> AyeshaMart is your premium destination for everyday style.</p>
      </div>
      <div className='flex md:flex-row flex-col px-6 md:px-16 py-16 items center justify-center'>
        <motion.div className='w-full md:w-1/2' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1,delay:0.2}}>
         <img src="src\assets\a.jpg" alt="" className='rounded-lg shadow-lg'/>
        </motion.div>
         <motion.div className='w-full md:w-1/2 md:pl-10' initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:0.8, delay:0.4}}>
         <h1 className='text-black text-2xl font-bold mb-4 mt-8 md:mt-0'>Our Mission</h1>
         <p className='text-gray-500 mb-4'>We started AyeshaMart with a simple, unwavering idea: high-quality fashion and everyday electronics shouldn't come with an untouchable price tag. We believe that everyone deserves to experience premium style without compromise.</p>
         <p className='text-gray-500 mb-4'>AyeshaMart was built to bring the best products in texh and fashion to your doorstep - without compromising on quality or style.</p>
         <p className='text-gray-500 mb-6'> We source the best tech and fashion globally.</p>
         <Link to='/products' className='bg-black text-white px-6 py-3 hover:bg-gray-600 transition-colors cursor-pointer rounded-lg font-bold'>Shop Now</Link>
        </motion.div>
        </div>
       <div className='bg-gray-100 px-6 md:px-16 py-16'>
        <h1 className='text-black text-center font-bold text-2xl'>Why Choose Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 '>
         <motion.div className='bg-white rounded-lg shadow-sm p-8 text-center items-center flex flex-col' initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1, y:0,scale:1}} viewport={{once:true}} transition={{delay:0, duration:0.7,ease:'easeOut'}} whileHover={{ scale: 1.05 ,y:-10}}>
          <MdLocalShipping className='text-4xl text-black mb-2'/>
          <p className='text-black font-bold'>Free Shipping </p>
          <p> On orders over $50 </p>
         </motion.div>
         <motion.div className='bg-white rounded-lg shadow-sm p-8 text-center items-center flex flex-col' initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1, y:0, scale:1}} viewport={{once:true}} transition={{delay: 0.2, duration:0.7,ease:'easeOut'}} whileHover={{ scale: 1.05,y:-10 }}>
          <IoDiamond className='text-4xl text-black mb-2'/>
          <p className='text-black font-bold'>Premium Quality</p>
          <p>Carefully inspected</p>
         </motion.div>
         <motion.div className='bg-white rounded-lg shadow-sm p-8 text-center items-center flex flex-col' initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1, y:0, scale:1}} viewport={{once:true}} transition={{delay: 0.4, duration:0.7,ease:'easeOut'}} whileHover={{ scale: 1.05 ,y:-10}}>
          <BiSupport className='text-4xl text-black mb-2'/>
          <p className='text-black font-bold'>24/7 Support</p>
          <p>Always here for you</p>
         </motion.div>
         </div>
        </div>
      </div>
  )
}

export default About
