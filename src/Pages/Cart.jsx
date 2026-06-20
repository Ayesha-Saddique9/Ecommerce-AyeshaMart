import React, { useState } from 'react'
import { useContext } from 'react';
import {Context} from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { easeOut, motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion";

function Cart() {
    const {cart,increaseQuantity,decreaseQuantity,removeFromCart} = useContext(Context);
    let total = 0;
    cart.forEach((item)=>{
      const itemPrice = item.price * item.quantity;
      total = total + itemPrice;
    })
  return (
    <div className='min-h-[83vh]'>
      {cart.length === 0 ?<motion.div className='flex flex-col gap-6 min-h-[70vh] justify-center items-center' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1,delay:0.2}}><h1 className='text-3xl font-semibold'>Your Cart is Empty 🛒</h1><Link to= '/products'><button className='bg-black px-8 py-3 text-white rounded-lg hover:bg-gray-500 cursor-pointer hover:scale-105 duration-300'>Continue Shopping</button></Link></motion.div> : <div>
           <div className='md:flex flex-row mx-auto justify-between px-20 mb-8 mt-10 font-bold text-lg hidden'>
                    <p>Product</p>
                    <p className='relative pl-30'>Quantity</p>
                    <p className='relative pr-8'>Price</p>
                    <p>Amount</p>
                </div>
                <AnimatePresence>
        {  
           cart.map((item,index)=>{
            return <motion.div key={item.id} initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}}  exit={{ opacity: 0, x: 50 }} transition={{delay:index*0.15, duration:0.4,ease:'easeOut'}}>
                <div className='flex flex-row mx-auto justify-between max-w-[88vw] md:px-6 px-2 bg-gray-100 md:py-8 py-6 rounded-lg mb-4 items-center mt-3'>
                    <div className='flex flex-row md:gap-4 gap-2'>
                    <img src={item.image} alt="" className='w-10 h-10' />
                    <div className='md:max-w-[10vw] max-w-[22vw]'>
                      <h1 className='text-black font-bold text-sm truncate'>{item.title}</h1>
                       <p className='text-gray-500 text-xs truncate'>{item.description}</p>
                    </div>
                    </div>
                  <div className='flex flex-row gap-2 justify-center items-center '>
                  <FaMinusSquare className='md:text-lg text-sm hover:text-gray-600 cursor-pointer' onClick={()=> decreaseQuantity(item.id)}/><p>{item.quantity}</p><FaPlusSquare className='md:text-lg hover:text-gray-600 text-sm cursor-pointer' onClick={()=> increaseQuantity(item.id)}/>
                  </div>
                <p className='text-black font-bold md:block hidden'>$ {item.price}</p>
                <div className='flex flex-row md:gap-2 gap-1 items-center justify-center'>
                <p className='text-black font-bold text-sm md:text-lg'>$ {item.price * item.quantity}</p><MdDeleteForever className='md:text-2xl text-lg  text-red-600 cursor-pointer' onClick={()=> removeFromCart(item.id)}/>
                </div>
                </div>
            </motion.div>
            
           }) 
        }
        </AnimatePresence>
          <motion.div className='flex md:flex-row flex-col md:justify-between items-center md:px-20 px-4 md:mt-10 gap-3' initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{delay:0.2, duration:0.8}}>
        <h1 className='md:text-2xl text-black font-bold'>Grand Total: $ {total.toFixed(2)}</h1>
        <Link to='/checkout' className='bg-black text-white font-bold px-6 py-3 rounded-lg  hover:bg-gray-500 cursor-pointer w-full md:max-w-[20vw] hover:scale-105 duration-300'><div className='flex flex-row gap-2 justify-center items-center'>Proceed to CheckOut <FaArrowRightLong className='text-white mt-1'/></div></Link>
        </motion.div>
        </div> }
    </div>
  )
}

export default Cart
