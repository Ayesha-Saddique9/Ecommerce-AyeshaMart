import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
function PageNotFound() {
  return (
    <div>
     {/* <div className='flex flex-row gap-1 bg-gray-100 w-20 ml-14 mt-4'> */}
        <Link to='/' className='flex flex-row gap-1 bg-gray-100 w-20 ml-14 mt-4'>
        <IoIosArrowRoundBack className='text-3xl pt-2 pl-1'/>
        <p className='text-lg mb-2 pt-1'>Back</p>
        </Link>
    <div className='flex justify-center items-center max-h-[70vh] p-10 mt-14 mb-10'>
      <img src="/404Page.png" alt="" className='w-[60vw]'/>
    </div>
    </div>
  )
}
  
export default PageNotFound
