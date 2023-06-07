import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../pages/Products/Products'
import Footer from './Footer'
const Home = () => {
  return (
    <>
    <section class="banner">
    
          <div class="overlay">
            <div class="content">
              <h1>souvenirs</h1>
              <p class="formargin">variety of souvenirs & gifts From Egypt</p>
              <Link to='/products'>shop now</Link>
          </div>
          </div>
          
        </section>
        <section><Products></Products></section>
        <section style={{backgroundColor:"black" , color:"white"}}><Footer></Footer></section>

    </>
  )
}

export default Home
