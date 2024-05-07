import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className='place-order-left w-[100%] max-w-[500px] '>
        <p className='title text-[30px] font-bold mb-[50px]'>Delivery Information</p>
        <div className='multi-fields flex gap-[10px]'>
          <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='First name'></input>
          <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='Last name'></input>
        </div>
        <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='email' placeholder='Email address'></input>
        <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='Street'></input>
        <div className='multi-fields flex gap-[10px]'>
          <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='City'></input>
          <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='State'></input>
        </div>
        <div className='multi-fields flex gap-[10px]'>
          <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2  ' type='text' placeholder='Zip code'></input>
          <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='Country'></input>
        </div>
        <input className='mb-[15px] w-[100%] border-2 border-gray-200 rounded-[4px] px-2 py-2 ' type='text' placeholder='Phone'></input>
      </div>
      <div className='place-order-right w-[100%] max-w-[500px]'>
      <div className='cart-total flex-1 flex flex-col gap-[20px]'>
            <h2 className='text-[30px] font-bold'>Cart Total</h2>
            <div>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr className='mx-0 my-[10px]'/>
              <div className="cart-total-details flex justify-between text-[#555]">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>
              </div>
              <hr className='mx-0 my-[10px]'/>
              <div className="cart-total-details flex justify-between text-[#555]">
                <b>Total</b>
                <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+20}</b>
              </div>
            </div>
            <button className='border-none text-[white] bg-tomato w-[200px] px-0 py-[12px] rounded-[4px] place-self-center cursor-pointer mt-[30px]' >Proceed To Payment</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
