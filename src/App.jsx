import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from  "./Pages/home/Home"
import Cart from "./Pages/cart/Cart"
import Placeorder from './Pages/placeorder/Placeorder'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
     <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App
