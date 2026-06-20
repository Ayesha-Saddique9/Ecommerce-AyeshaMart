import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../Context/CartContext';
function Navbar() {
  const [name,setName] = useState('');
  const [ismenuOpen,setismenuOpen] = useState(false);
  const navigate = useNavigate();

  const {cart} = useContext(Context);
   function toggleMenu(){
   setismenuOpen(!ismenuOpen);
  }

  function handleSearch(){
    if(name !== ''){
      navigate('/products?search=' + name);
      setName('');
    }
  }
  return (
    <div className='bg-white h-16 sticky z-50 p-2'>
       <div className='flex justify-between items-center gap-12'>
        <div className='md:pl-14 pl-4'>
         <Link to='/' className='text-slate-900 font-black text-3xl md:text-4xl tracking-tight'>Ayesha<span className='text-xl md:text-2xl tracking-widest font-medium'>Mart</span></Link>
        </div>
        <div className='md:flex items-center gap-8 text-slate-600 hidden'>
            <Link to='/' className='hover:text-black transition-colors duration-300 cursor-pointer'>Home</Link>
            <Link to='/about' className='hover:text-black transition-colors duration-300 cursor-pointer'>About</Link>
            <Link to='/products' className='hover:text-black transition-colors duration-300 cursor-pointer'>Products</Link>
        </div>
        <div className='flex flex-row gap-6 pr-0 md:pr-12 items-center'>
          <div className='md:flex gap-6 bg-transparent border border-slate-300 p-1 mt-1 hidden rounded-lg'>
            <input type="text" name="" id=""  placeholder='search products...' className='outline-none' value={name} onChange={(e)=> setName(e.target.value)}/>
           <CiSearch className='text-slate-800 text-lg mt-1 cursor-pointer' onClick={handleSearch}/>
          </div>
          <div className='flex flex-row gap-3 relative right-4'>
          <Link to='/cart'><IoCartOutline className=' text-slate-400 text-3xl'/><span className='bg-black text-white w-4 h-4 text-xs rounded-full flex justify-center items-center absolute md:-top-2 md:-right-2 right-7 -top-1'>{cart.length}</span></Link>
            <button onClick={toggleMenu} className='md:hidden transition-all delay-150 text-slate-400 text-2xl'>{ismenuOpen?<AiOutlineClose/> : <CiMenuFries />}</button>
        </div>
        </div>
       </div>
            {/* Menu */}
        {ismenuOpen?<div className='md:hidden text-lg flex flex-col  p-3 gap-1 absolute w-26 right-2 bg-white top-10 items-center shadow-xl'>
                 <Link to='/' className='hover:text-orange-500'>Home</Link>
            <Link to='/about' className='hover:text-orange-500'>About</Link>
            <Link to='/products' className='hover:text-orange-500'>Products</Link>
       </div>: ''}
    </div>
  )
}

export default Navbar
