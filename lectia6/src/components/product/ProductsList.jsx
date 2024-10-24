import React, { useState, useEffect } from 'react';
import {
    fetchProducts
} from '@/services/product/productService.js';
import Product from './Product';

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts().then(result => setProducts([...result.products]));
    });
    const listData = products.map(product => (<Product key={product.id} {...product} />))
    return (
        <>
            <h4 className='text-3xl font-bold text-center pt-12 pb-2'>Lista produselor</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-6'>
                {listData}
            </div>
        </>
    )
}

export default ProductsList
