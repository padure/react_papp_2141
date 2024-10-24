import React from 'react';
import { useParams } from 'react-router-dom';
import products from './products.js';

const ProductInfo = () => {
  const {id} = useParams();
  const product = products.filter( data => data.id == id ).pop();
  return (
    <div className='h-dvh flex flex-col justify-center items-center font-extralight text-4xl bg-gray-100'>
      <h1>Nume: {product.nume}</h1>
      <p>Descriere: {product.descriere}</p>
    </div>
  )
}

export default ProductInfo
