import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({id, name, price, description, image}) => {
    
   const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item w-[100%] m-auto rounded-[15px] shadow-lg shadow-[#00000015]'>
        <div className="food-item-img-container relative ">
            <img className='food-item-image w-[100%] rounded-t-[15px] ' src={image} alt=''></img>
            {!cartItems[id]
                ?<img className='add w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt='' />
                :<div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                    <img className='w-[30px]' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                </div>
            }
                
        </div>
        <div className='food-item-info p-[20px]'>
            <div className='food-item-name-rating flex justify-between items-center mb-[10px]'>
                <p className='text-[20px] font-semibold'>{name}</p>
                <img className='w-[70px]' src={assets.rating_starts} alt=''></img>
            </div>
            <p className='food-item-des text-[#676767]'>{description}</p>
            <p className='food-item-price text-[tomato] text-[22px] font-semibold mx-0 my-[10px]'>₹{price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
