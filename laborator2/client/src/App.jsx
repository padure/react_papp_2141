import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/products/:id/edit' element={<EditProduct/>} />
            <Route path='/new-product' element={<NewProduct/>} />
        </Routes>
    </>
  )
}

export default App;
