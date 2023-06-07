import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCart } from 'phosphor-react';
import "bootstrap/js/src/collapse.js";
import '../App.css'

const NavBar = () => {
  return (
    <>


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <Link class="navbar-brand" >Shop</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto"> 
        
        <li class="nav-item">
          <Link class="nav-link active" to='/'>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to='/products'>Products</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link" to='/cart'>
            <ShoppingCart size={28}></ShoppingCart>
          
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>






      
    </>
  )
}

export default NavBar
