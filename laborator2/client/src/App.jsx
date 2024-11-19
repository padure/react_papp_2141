import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/new-product' element={<NewProduct/>} />
        </Routes>
    </>
  )
}

export default App;
