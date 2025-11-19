import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import AllProducts from './components/Allproducts'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderSuccess from './components/OrderSuccess'
import MyOrders from './components/MyOrders'
import Contact from './components/Contact'

function App() {

  return (

    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
      
   <Footer/>
    </>
  )
}

export default App
