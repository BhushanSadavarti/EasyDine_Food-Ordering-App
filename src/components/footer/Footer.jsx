import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] px-[8vw] py-[20px] pt-[50px] mt-[100px]' id='footer'>
        <div className='footer-content w-[100%] grid grid-cols-3 gap-[80px]'>
            <div className="footer-content-left flex flex-col items-start gap-[5px] list-none mb-[10px]">
                <img className='w-[200px] bg-white rounded-[10px]'  src='/EasyDineLogo1.png' alt=''/>
                <p>With EasyDine, users can explore a wide selection of restaurants and cuisines, customize their orders, and experience seamless checkout with just a few taps. Our app prioritizes fast and reliable delivery, ensuring that delicious meals are delivered promptly to your doorstep. </p>
                <div className='footer-social-icons flex'>
                    <img className='w-[40px] mr-[15px]' src={assets.facebook_icon} alt=''></img>
                    <img className='w-[40px] mr-[15px]' src={assets.twitter_icon} alt=''></img>
                    <img className='w-[40px] mr-[15px]' src={assets.linkedin_icon} alt=''></img>

                </div>
            </div>
            <div className="footer-content-center flex flex-col items-start gap-[20px]">
                <h2 className='text-[20px] text-[white] font-bold'>COMPANY</h2>
                <ul className='list-none mb-[10px] cursor-pointer'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right flex flex-col items-start gap-[20px]">
                <h2 className='text-[20px] text-[white] font-bold'>GET IN TOUCH</h2>
                <ul className='list-none mb-[10px] cursor-pointer'>
                    <li>+91 123456789</li>
                    <li>contact@easydine.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-[100%] h-[2px] mx-0 my-[20px] bg-[grey] border-none'></hr>
        <p className='footer-copyright'>Copyright 2024 © easydine.com - All Rights Reserved.'</p>
    </div>
  )
}

export default Footer
