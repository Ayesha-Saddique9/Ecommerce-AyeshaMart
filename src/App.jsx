import React from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import Category from './Component/Category'
import Featuredproducts from './Component/Featuredproducts'
import Footer from './Component/Footer'
import About from './Pages/About'
import { Route, Routes } from 'react-router'
import AllProducts from './Pages/AllProducts'
import ProductDetails from './Pages/ProductDetails'
import PageNotFound from './Pages/PageNotFound'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'
import ThankYou from './Pages/ThankYou'

function App() {
  return (
    <div>
      <Navbar/>
       <Routes>
        <Route path='/' element={<><Home/><Category/><Featuredproducts/></>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/thankyou' element={<ThankYou/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
