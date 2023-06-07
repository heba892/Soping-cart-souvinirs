import React from 'react'
import { ShopContext } from '../../context/Shop-context';
import { useContext } from 'react';
const CartItems = (props) => {
    const {id , Image , title , price , } = props.data
        const { cartItem , addToCart , rempveFromCart , updateCartItemCount} = useContext(ShopContext)

  return (
    <div className='cartItem'>
      <img src={Image} alt='...'></img>
      <div className='description'>
      <p>
      <b>{title}</b>
      </p>
      <p>{price}</p>
      <div className='countHandler'>
      <button onClick={()=> rempveFromCart(id) }>-</button>
      <input value={cartItem[id]} onChange={(e) => updateCartItemCount(Number(e.target.value) ,id)}></input>
      <button onClick={()=> addToCart(id)}>+</button>
      
      </div>
      </div>
      
    </div>
  )
}

export default CartItems
