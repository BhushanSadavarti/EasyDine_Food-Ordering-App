import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'

import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginPopup/LoginPopup'
const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className='app w-[80%] m-auto'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
