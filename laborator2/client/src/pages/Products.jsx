import React, { useState, useEffect } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8888/products`)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='grid grid-cols-6 gap-4 p-6'>
            {products.map(product => (
                <div 
                    key={product.id} 
                    className='flex flex-col justify-between shadow shadow-lime-100 p-4 hover:bg-gradient-to-r hover:from-lime-50 hover:cursor-pointer'>
                    <div>
                        <h5 className='font-bold text-lime-800'>{product.name}</h5>
                        <p className='font-semibold text-lime-700 text-sm'>{product.description}</p>
                    </div>
                    <p className='font-bold'>Price: {product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Products;
