import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    fetchProducts
} from '@/services/product/productService.js';
import Product from './Product';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts().then(result => setProducts([...result.products]));
    });
    const listData = products.map(product => (
        <Link 
            key={product.id} 
            className='shadow shadow-cyan-200 p-3 rounded-md hover:bg-gradient-to-t from-cyan-200 h-auto hover:cursor-pointer'
            to={`/products/${product.id}`}
        >
            <Product key={product.id} {...product} />
        </Link>));
    return (
        <>
            <h4 className='text-2xl font-bold text-center pt-12 pb-2'>Lista produselor</h4>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 p-6'>
                {listData}
            </div>
        </>
    )
}

export default ProductsList
