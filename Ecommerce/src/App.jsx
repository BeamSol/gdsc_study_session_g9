import React from 'react'
import './App.css'
import {Routes, Route, NavLink } from "react-router-dom"
import Home from './Home'
import Product from './Product'
import Cart from './Cart'

function App() {

  return (
    <>
    <ul>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
      <NavLink to='/cart'>Cart</NavLink>
      </li>
      <li>
      <NavLink to='/product'>Product</NavLink>
      </li>
      
    </ul>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/product/:productId' element={<Product />} />
    <Route path="*" element={<div>not found</div>} />
    </Routes>
    
    </>
  )
}

export default App
