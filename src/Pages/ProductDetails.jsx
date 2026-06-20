import React from 'react'
import { useParams } from 'react-router';
import { useState,useEffect } from 'react';
import { IoIosStar } from "react-icons/io";
import { useContext } from 'react';
import {Context} from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


function ProductDetails() {
     const [isLoading,setisLoading] = useState(false);
      const [product,setProduct] = useState(null);
      const [error,setError] = useState(null);
      const {id} = useParams();
      const {addToCart} = useContext(Context);
      
      async function getProductDetail(){
        try{
            setisLoading(true);
        setError(null);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if(response.ok){
          setisLoading(false);
          const data = await response.json();
          console.log(data);
          setProduct(data)
        }
        else{
          setError('Product not Found!');
          setisLoading(false);
        }
        }
        catch(err){
          setisLoading(false);
          setError('Network Error');
        }
      }
    
      useEffect(()=>{
         getProductDetail();
      },[])
  return (
    <div>
      {isLoading && <h1 className='text-center md:text-2xl text-lg mt-6 font-bold'>Loading...</h1>}
      {error && <h1 className='text-center text-2xl font-bold text-red-600'>{error}</h1>}
      {!isLoading && product && 
        <div className='flex flex-col w-full md:flex-row md:p-10 p-6 md:gap-10 gap-4'>
            <motion.div className='bg-gray-100 p-20 md:ml-5 md:w-1/2 w-full rounded-lg md:mt-10 mt-6 md:max-h-[70vh] max-h-[50vh] flex justify-center items-center' initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:0.8, delay:0.2}}>
                <img src={product.image} alt="" className='max-h-[50vh] object-contain w-full'/>
            </motion.div>
            <motion.div className='mt-15 w-full md:w-1/2 md:px-16 pl-2' initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{duration:0.8, delay:0.4}}>
                <h1 className='text-gray-500 text-sm tracking-wide'>{product.category.toUpperCase()}</h1>
                <h1 className='text-black md:text-3xl text-2xl font-bold mt-2'>{product.title}</h1>
                <p className='flex mt-2 gap-1'><IoIosStar className='text-yellow-400 mt-1'/>{product.rating.rate}</p>
                <p className='text-black text-lg mt-2 font-bold'>$ {product.price}</p>
                <p className='text-gray-500 mt-3 mb-5'>{product.description}</p>
              <div className='flex md:flex-row gap-4 flex-col w-full'>
              <motion.button className='md:block bg-black text-white font bold w-full py-3 rounded-lg hover:bg-gray-500 cursor-pointer transition-all duration-300 hover:scale-105' onClick={()=> addToCart(product)}>Add to Cart</motion.button>
              <Link to='/checkout' className='bg-white text-black font bold md:w-full text-center py-3 rounded-lg border border-gray-400 hover:scale-105 duration-300'>CheckOut Now</Link>
            </div>
            </motion.div>
        </div>}
    </div>
  )
}

export default ProductDetails
