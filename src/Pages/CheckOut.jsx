import React from 'react'
import { useContext } from 'react';
import {Context} from '../Context/CartContext';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion'

function CheckOut() {
  
const navigate = useNavigate();
     const {cart,clearCart} = useContext(Context);
        let total = 0;
        cart.forEach((item)=>{
          const itemPrice = item.price * item.quantity;
          total = total + itemPrice;
        })
      function handleSubmit(e){
         e.preventDefault();
         clearCart();
         navigate('/thankyou');
      }
  return (
    <div className='md:min-h-[76vh]'>
       <h1 className='text-black text-lg md:px-20 px-8 font-bold mt-8 mb-4'>Shipping Address</h1>
       <form className='flex md:flex-row flex-col gap-10 md:gap-2' onSubmit={handleSubmit}>
        <motion.div className='md:w-2/3 flex flex-col w-full md:px-20 px-6 gap-6' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1,delay:0.3}}>
        <input type="text" name="" id=""required placeholder='Name' className='bg-gray-100 border border-gray-300 py-3 px-4 rounded-lg placeholder:text-gray-500 outline-none required:not-visited:'/>
        <input type="email" name="" id="" required placeholder='Email Address'  className='bg-gray-100 border border-gray-300 py-3 px-4 rounded-lg placeholder:text-gray-500 outline-none' />
        <input type="number" name="" id="" required placeholder='Phone Number' className='bg-gray-100 border border-gray-300 py-3 px-4 rounded-lg placeholder:text-gray-500 outline-none' />
        <input type="text" name="" id="" required placeholder='Address' className='bg-gray-100 border border-gray-300 py-3 px-4 rounded-lg placeholder:text-gray-500 outline-none'/>
        <input type="text" name="" id="" required placeholder='Card Number' className='bg-gray-100 border border-gray-300 py-3 px-4 rounded-lg placeholder:text-gray-500 outline-none'/>
        </motion.div>
         <motion.div className='md:w-1/4 bg-gray-50 border border-gray-200 md:mr-20 rounded-lg ml-6 max-w-[88vw]' initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:1,delay:0.4}}>
          <h1 className='text-black font-bold text-center mt-8'>Review Order</h1>
           <div className='flex flex-col justify-between gap-2'>
            <div className='flex flex-row justify-between px-8 text-sm mt-14'><p>Subtotal:</p><p className='font-bold'>$ {total.toFixed(2)}</p></div>
            <div className='flex flex-row justify-between px-8 text-sm'><p>Shipping:</p> <p className='font-bold'>Free</p></div>
            <div className='flex flex-row justify-between px-8 mb-8'><p className='text-base font-bold'>Grand Total:</p><p className='font-bold'>$ {total.toFixed(2)}</p></div>
           </div>
                  <motion.button className='font-bold text-white bg-black md:px-21 rounded-lg py-2 mt-4 ml-8 px-22 mb-8 cursor-pointer hover:bg-gray-500' type='submit' whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Place Order</motion.button>
        </motion.div>
       </form>
    </div>
  )
}

export default CheckOut
