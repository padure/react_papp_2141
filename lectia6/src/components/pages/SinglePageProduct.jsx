import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchProduct
} from '@/services/product/productService.js';

const SinglePageProduct = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    fetchProduct(id).then(result => setProduct({...result}));
  });
  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        {product.images.map(image => (<img src={image} alt={product.title} className='w-64 shadow' />))}
      </div>
    </div>
  )
}

export default SinglePageProduct;
