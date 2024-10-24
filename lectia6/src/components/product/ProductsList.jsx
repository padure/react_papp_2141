import React, { useState, useEffect } from 'react';
import {
    fetchProducts
} from '../../services/product/productService.js';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetchProducts().then(result => setProducts([...result.products]));
    });
    const listData = products.map(product => (<div key={product.id}>{product.title}</div>))
  return (
    <div>
        {listData}
    </div>
  )
}

export default ProductsList
