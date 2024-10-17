import React from 'react';
import { Link } from 'react-router-dom';
import products from './products';

const Products = () => {
  const listProducts = products.map((product, id)=><Link key={id} to={`/products/${product.id}`}>{product.nume}</Link>);
  return (
    <div className='h-dvh flex flex-col justify-center items-center font-extralight text-2xl bg-gray-100'>
      <h4 className='font-bold mb-8'>Products</h4>
      <div className='flex flex-col space-y-6'>
          {listProducts}
      </div>
    </div>
  )
}

export default Products
