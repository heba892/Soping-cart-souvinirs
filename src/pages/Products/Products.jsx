import React from 'react'
import productData from '../../data/productData'
import ProductItem from './ProductItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'

const Products = () => {
  return (
    <>
      <div className="categories">
      <div className='container'>
      <div className="main-title">All Products</div>
    <div className='containers'>
                {productData.map((item) => (<ProductItem data={item}></ProductItem>))}

</div>
      </div>
        

            </div>
      
    </>
  )
}

export default Products
