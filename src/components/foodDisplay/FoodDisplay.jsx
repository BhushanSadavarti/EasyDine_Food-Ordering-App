import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display mt-[30px]'>
        <h2 className='text-[40px] font-bold text-[#262626]'>Top dishes near you</h2>
        <div className="food-display-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-[30px] gap-[30px] gap-x-[30px]">
            {food_list.map((item, index) => {
                if(category === 'All' || category === item.category){
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />

                }
                
            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
