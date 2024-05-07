import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download mx-auto my-auto mt-[100px] text-[5vw] md:text-[3vw] items-center font-[500]' id='app-download'>
        <p>For Better Experience Download <br/> EasyDine App Now</p>
        <div className='app-download-platforms flex justify-start gap-[10px] mt-[40px]'>
            <img className='w-[30vw] max-w-[180px] transistion-0.5 hover:scale-[1.05]' src={assets.play_store} alt=''></img>
            <img className='w-[30vw] max-w-[180px] transistion-0.5 hover:scale-[1.05]' src={assets.app_store} alt=''></img>
        </div>
    </div>
  )
}

export default AppDownload
