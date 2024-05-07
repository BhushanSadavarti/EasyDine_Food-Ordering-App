import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="header h-[35vw] mx-auto my-[10px] bg-[url('/header_img.png')] bg-contain bg-no-repeat relative">
      <div className='header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
        <h2 className='text-[4.5vw] text-[white] font-bold'>Order your favorite food here</h2>
        <p className='text-[1vw] text-[white]'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button className='text-[1vw] text-[white] px-[30px] py-[10px] border-[1px] border-solid border-[white] rounded-xl cursor-pointer hover:bg-[white] hover:text-[black]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
