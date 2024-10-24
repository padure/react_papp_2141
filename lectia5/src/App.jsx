import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products.jsx';
import ProductInfo from './ProductInfo';
import About from './About';
import Contact from './Contact';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const App = () => {
  const isAuth = false;
  return (
    <div>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/products/:id' element={< ProductInfo />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
        <Route path='/dashboard' element={isAuth ? < Dashboard /> : < Home/>} />
        <Route path='*' element={< NotFound />} />
      </Routes>
    </div>
  )
}

export default App
