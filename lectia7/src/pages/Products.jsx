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
            {products.map(product => (<div key={product.id} className='shadow shadow-lime-100 p-4'>
                {product.name}
            </div>))}
        </div>
    )
}

export default Products;
