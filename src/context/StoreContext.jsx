import { createContext, useState } from "react"
import { food_list } from "../assets/assets"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        console.log([itemId])
        setCartItems(prevCartItems => ({
            ...prevCartItems,
            [itemId]: (prevCartItems[itemId] || 0) + 1
          }));
    }

    const removeFromCart = (itemId) => {
        setCartItems(prevCartItems => {
            const updatedCart = { ...prevCartItems };
            if (updatedCart[itemId] && updatedCart[itemId] > 0) {
              updatedCart[itemId] -= 1;
            }
            return updatedCart;
          });
    }

   const getTotalCartAmount = () => {
    let totalAmount = 0
    for(const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=>product._id === item)
        totalAmount += itemInfo.price * cartItems[item]      
        }  
    }
    return totalAmount
   }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider