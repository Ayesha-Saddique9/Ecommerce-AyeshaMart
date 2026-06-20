import React, { useEffect, useState } from 'react'
import { CiHospital1 } from 'react-icons/ci';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function AllProducts() {
    const [isLoading, setisLoading] = useState(false);
    const [productData, setProductData] = useState([]);
    const [error, setError] = useState(null);
    const [category,setCategory] = useState('');
    const [productPrice,setProductPrice] = useState('');
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    async function getProducts() {
        try {
            setisLoading(true);
            setError(null);
            const response = await fetch('https://fakestoreapi.com/products');
            if (response.ok) {
                setisLoading(false);
                const data = await response.json();
                console.log(data);
                setProductData(data);
            }
            else {
                setError('Products not Found!');
                setisLoading(false);
            }
        }
        catch (err) {
            setisLoading(false);
            setError('Network Error');
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

   let displayProducts = productData;
   if(category !== ''){
    displayProducts = displayProducts.filter((p)=> p.category === category);
   }
   if(searchQuery !== null && searchQuery !== ''){
    displayProducts = displayProducts.filter((p)=>{
       return  p.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
   }
   if(productPrice === 'low-high'){
    displayProducts = [...displayProducts].sort((a,b)=> a.price - b.price);
   }
    else if(productPrice === 'high-low'){
    displayProducts = [...displayProducts].sort((a,b)=> b.price - a.price);
   }
    return (
        <div className='min-h-screen'>
            <div className='flex justify-between mt-10 md:px-20 px-6'>
            <select name="" id="" className=' border border-gray-200 py-2 md:px-4 text-gray-500 outline-none rounded-lg text-sm' onChange={(e)=> setCategory(e.target.value)}>
                <option value="" className='hover:bg-black'>Select Category</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="jewelery">Jewellery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's Clothing</option>
            </select>
             <select name="" id="" className=' border border-gray-200 py-2 md:px-4 text-gray-500 outline-none rounded-lg text-sm' onChange={(e)=> setProductPrice(e.target.value)}>
                <option value="">Sort by Price</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
            </select>
            </div>
            {isLoading && <h1 className='text-center text-lg mt-6 font-bold'>Loading...</h1>}
            {error && <h1 className='text-center text-xl font-bold text-red-600 mt-8'>{error}</h1>}
            {!isLoading && !error && displayProducts.length === 0 && <div className='flex flex-col justify-center items-center mt-40'><h1 className='text-xl text-black font-bold'>No products found</h1><p className='text-gray-500'>Try adjusting your search or filters.</p></div>}
            {productData.length > 0 && <div className='grid md:grid-cols-4 grid-cols-1 gap-6 md:ml-20 md:mr-20 ml-8 mr-8 mt-6'>

                {displayProducts.map((p,index) => {
                        return <motion.div className='bg-white border border-gray-200 shadow-sm hover:shadow-xl p-4 h-full w-full flex flex-col items-center justify-between gap-3 rounded-xl' key={p.id} initial={{opacity:0,y:50,scale:0.9}} whileInView={{opacity:1, y:0,scale:0.95}} viewport={{once:true}} transition={{delay: (index % 4) * 0.2, duration:0.7,ease:'easeOut'}} whileHover={{ scale: 1 ,y:-10}}>
                        <div className='bg-gray-100 h-60 w-full rounded-xl'>
                            <img src={p.image} alt="" className='h-60 w-full p-8 object-contain' />
                        </div>
                        <h2 className='text-gray-400 text-center text-sm truncate w-full px-4'>{p.title}</h2>
                        <p className='text-black font-bold text-lg text-center'>$ {p.price}</p>
                        <Link className=' text-center w-full py-3 bg-black text-white font-bold text-sm rounded-lg hover:bg-gray-600 hover:cursor-pointer' to= {'/product/' + p.id}>View Detail</Link>
                    </motion.div>
                })}
            </div>}
        </div>
    )
}

export default AllProducts
