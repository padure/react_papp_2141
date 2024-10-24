import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Contacts from './components/pages/Contacts';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
    </div>
  )
}

export default App
