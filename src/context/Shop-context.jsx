import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import productData from '../data/productData'

export const ShopContext = createContext(null)

const getDefaultCart =() =>{
    let cart = {}
    for(let i = 1 ; i < productData.length +1 ; i++){
        cart[i] =0
    }
    return cart
}
const ShopContextProvider = (props) => {
    const [cartItem , setCartItem] = useState(getDefaultCart());


    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = productData.find((product) => product.id === Number(item));
        totalAmount += cartItem[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };


    const addToCart =(itemId) =>{
        setCartItem((prev)=> ({...prev , [itemId]:prev[itemId] + 1 }))
    }
    const rempveFromCart =(itemId) =>{
        setCartItem((prev)=> ({...prev , [itemId]:prev[itemId] - 1 }))
    }

    const updateCartItemCount = (newAmount, itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: newAmount }));
  };
 
  const checkout = () => {
    setCartItem(getDefaultCart());
  };

    const contextValue = {cartItem , addToCart , rempveFromCart , updateCartItemCount ,getTotalCartAmount,
    checkout,}

  return (
   <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider
