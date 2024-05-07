import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className='cart mt-[100px] '>
      <div className='cart-items'>
        <div className='cart-items-title grid grid-cols-6 items-center text-[grey] text-[1vw]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr className='mx-[0px] my-[10px] h-[2px] bg-[#e2e2e2] border-none'/>
        {food_list.map((item, index)=>{
          if(cartItems[item._id]>0){
            return(
              <div>
                  <div className='cart-items-title cart-item-item mx-[0] my-[10px] text-[black] grid grid-cols-6 items-center'>
                    <img className='w-[50px]' src={item.image} alt=''></img>
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{cartItems[item._id]*item.price}</p>
                    <p className='cross cursor-pointer' onClick={()=>removeFromCart(item._id)}>x</p>
                  </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none '/>

              </div>             
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[12vw]">
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
            <button className='border-none text-[white] bg-tomato w-[200px] px-0 py-[12px] rounded-[4px] place-self-center cursor-pointer' onClick={()=>navigate('/order')} >Proceed To Checkout</button>
        </div>
        <div className='cart-promocode flex-1 '>
          <div>
            <p className='text-[#555]' >If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input className='bg-transparent border-none outline-none px-[10px]' type='text' placeholder='Promo code'></input>
              <button className='w-[150px] px-[5px] py-[12px] bg-[black] border-none text-[white] rounded-[4px]'>Submit</button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart
