import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shop-context';

const ProductItem = (props) => {

    const {id , Image , title , price , } = props.data
        const {addToCart, cartItem} = useContext(ShopContext)
        const cartItemAmount = cartItem[id]

  return (

         <div class="box">
                   <img src={Image} alt='....'/> 
                <div class="content">
                <p>
                <b>{title}</b>
                </p>
                <p>price :{price} EGP</p>
                </div>
                <button className='AddToCart' onClick={() => addToCart(id)}>Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
                
            </div>
  
 
  
  )
}

export default ProductItem
