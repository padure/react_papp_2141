import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contacts from './components/pages/Contacts';
import Cart from './components/pages/Cart';
import SinglePageProduct from './components/pages/SinglePageProduct';

const App = () => {
  return (
    <div className='bg-gradient-to-b from-cyan-100'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SinglePageProduct />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default App
