import React from 'react'
import productData from '../../data/productData'
import { ShopContext } from '../../context/Shop-context';
import { useContext } from 'react';
import  './Cart.css'
import CartItems from './CartItems';
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItem , getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
 
  return (
    <div className='cart'>
    <div>
    <h1>Your Cart Items</h1>
    </div>
    <div className='cartItems'>
    {productData.map((product) => {
        if(cartItem[product.id] !== 0 ){
            return <CartItems data={product}></CartItems>
        }
    })}
    
    </div>
 {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/products")}> Continue Shopping </button>
          
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}      
    </div>
  )
}

export default Cart
