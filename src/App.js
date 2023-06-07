import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import  ShopContextProvider  from './context/Shop-context';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='app'>
    <ShopContextProvider>
    <BrowserRouter>
    <NavBar></NavBar>

    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/' element={<Footer></Footer>}></Route>
        

    </Routes>
      
    </BrowserRouter>
    
    </ShopContextProvider>
    
    
    </div>
    
  )
}

export default App
