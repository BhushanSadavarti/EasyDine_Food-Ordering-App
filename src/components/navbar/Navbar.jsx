import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import './Navbar.css'
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] =useState("Home")

    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar py-[10px] flex justify-between items-center'>
      <Link to='/'><img src='/EasyDineLogo1.png' alt='' className='logo w-[160px] h-auto'/></Link>
      <ul className="hidden sm:flex list-none gap-[20px] text-[#49557e] text-[18px] cursor-pointer" style={{"@media (max-width: 640px)": "display: none"}}>
        <Link to='/' onClick={() => {setMenu("Home")}} className={menu === 'Home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => {setMenu("Menu")}} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
        <a href='#app-download' onClick={() => {setMenu("Mobile-app")}} className={menu === 'Mobile-app' ? 'active' : ''}>Mobile-app</a>
        <a href='#footer' onClick={() => {setMenu("Contact us")}} className={menu === 'Contact us' ? 'active' : ''}>Contact us</a>
      </ul>
      <div className="navbar-right flex items-center gap-[40px]">
        <img src={assets.search_icon} alt=''></img>
        <div className="navbar-search-icon relative">
            <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
            <div className={`${getTotalCartAmount() > 0 ?'':'hidden'} absolute min-w-[10px] min-h-[10px] top-[-8px] right-[-8px] bg-[tomato] rounded-full`}></div>
        </div>
        <button className='text-[16px] text-[#49557e] px-[30px] py-[10px] border-[1px] border-solid border-[tomato] rounded-xl cursor-pointer hover:bg-[tomato] hover:text-[white]' onClick={()=> setShowLogin(true)} >Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
