import React, { useEffect, useState } from 'react'
import { CiHospital1 } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { CiFilter } from "react-icons/ci";
import { motion } from 'framer-motion'

function Featuredproducts() {
  const [isLoading,setisLoading] = useState(false);
  const [productData,setProductData] = useState([]);
  const [error,setError] = useState(null)
  async function getProducts(){
    try{
        setisLoading(true);
    setError(null);
    const response = await fetch('https://fakestoreapi.com/products');
    if(response.ok){
      setisLoading(false);
      const data = await response.json();
      console.log(data);
      setProductData(data);
    }
    else{
      setError('Products not Found!');
      setisLoading(false);
    }
    }
    catch(err){
      setisLoading(false);
      setError('Network Error');
    }
  }

  useEffect(()=>{
     getProducts();
  },[])

  const slicedProducts = productData.slice(0,8);
  console.log(slicedProducts)
  return (
    <div>
      <h1 className='text-black font-semibold text-2xl pl-20 mt-16'>Featured Products</h1>
      {isLoading && <h1 className='text-center text-lg mt-6 font-bold'>Loading...</h1>}
      {error && <h1 className='text-center text-xl font-bold text-red-600 mt-10'>{error}</h1>}
      {productData.length>0 && <div className='grid md:grid-cols-4 grid-cols-1 gap-6 md:ml-20 md:mr-20 ml-8 mr-8 mt-6'>

      {slicedProducts.map((p,index)=>{
        return <motion.div className='bg-white border border-gray-200 shadow-sm hover:shadow-xl p-4 h-full w-full flex flex-col items-center justify-between gap-3 rounded-xl' key={p.id} initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1, y:0,scale:0.95}} viewport={{once:true}} transition={{delay: (index % 4) * 0.2, duration:0.7,ease:'easeOut'}} whileHover={{ scale: 1 ,y:-10}}> 
          <div className='bg-gray-100 h-60 w-full rounded-xl'>
           <img src={p.image} alt="" className='h-60 w-full p-8 object-contain'/>
          </div>
          <h2 className='text-gray-400 text-center text-sm truncate w-full px-4'>{p.title}</h2>
          <p className='text-black font-bold text-lg text-center'>$ {p.price}</p>
          <Link className='w-full py-3 bg-black text-white font-bold text-sm text-center rounded-lg hover:bg-gray-600 hover:cursor-pointer' to={'/product/' + p.id}>View Detail</Link>
        </motion.div>
      })}
      </div>}
      <div className='flex items-center justify-center'>
      <button className='px-8 py-2.5 mt-6 bg-black text-white font-bold text-sm rounded-lg hover:bg-gray-600 hover:cursor-pointer'><Link to= '/products'>View All</Link></button>
    </div>
    </div>
  )
}

export default Featuredproducts
