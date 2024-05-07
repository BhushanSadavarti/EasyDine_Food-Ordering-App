import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login")
  return (
    <div className='login-popup absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid'>
      <form className='login-popup-container place-self-center w-[23vw] text-[#808080] bg-[white] flex flex-col gap-[25px] px-[30px] py-[25px] rounded-[8px] text-[14px]'>
        <div className='login-popup-title flex justify-between items-center text-[black] text-[25px] font-bold'>
            <h2>{currState}</h2>
            <img className='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
        </div>
        <div className='login-popup-inputs flex flex-col gap-[20px]'>
            {currState === "Login" ? <></> :  <input className='border-2 border-gray-300 rounded-[4px] py-2 px-2' type='text' placeholder='Your name' required></input>}        
            <input type='text' placeholder='Your email' required className='border-2 border-gray-300 rounded-[4px]  py-2 px-2'></input>
            <input type='password' placeholder='Password' required className='border-2 border-gray-300 rounded-[4px]  py-2 px-2'></input>
        </div>
        <button className='p-[10px] rounded-[4px] text-[white] bg-tomato text-[15px] cursor-pointer'>{currState === "Sign Up"? "Create account" : "Login"}</button>
        <div className='login-popup-condition flex items-center gap-[8px] mt-[-15px]'>
            <input type='checkbox' required></input>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" 
        ? <p>Create a new account? <span className='text-[tomato] font-[500] cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Click here</span></p> 
        : <p>Already have an account? <span className='text-[tomato] font-[500] cursor-pointer' onClick={()=>setCurrState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopup
