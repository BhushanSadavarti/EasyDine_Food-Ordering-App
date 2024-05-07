import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-[20px]' id='explore-menu'>
        <h1 className='explore-menu-h1 text-[40px] text-[#262626] font-bold'>Explore Our Menu</h1>
        <p className='explore-menu-text max-w-[100%] text-[#808080]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center mx-[0px] my-[20px] overflow-x-auto sm:overflow-hidden scroll-smooth scrollbar-thin scrollbar-thumb-[#e2e2e2]  sm:scrollbar-none sm:scrollbar-none-x" style={{
    WebkitOverflowScrolling: "touch", // Enables smooth scrolling on iOS devices
    scrollbarWidth: "none", // Firefox
    "-ms-overflow-style": "none", // Internet Explorer and Edge
    "&::-webkit-scrollbar": { display: "none" } // WebKit (Chrome, Safari)
}} >
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={() => setCategory(prev=> prev === item.menu_name ? 'All' : item.menu_name)} key={index} className='explore-menu-list-item' >
                        <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200 ease-in ${category === item.menu_name ? 'active' : ''}`} src={item.menu_image} alt="" />
                        <h1 className='mt-[10px] text-[18px] text-[#747474] font-bold cursor-pointer'>{item.menu_name}</h1>
                    </div>
                )
            })}
        </div>
        <hr className='mx-[0px] my-[10px] h-[2px] bg-[#e2e2e2] border-none'></hr>
      
    </div>
  )
}

export default ExploreMenu
