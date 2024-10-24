import React from 'react';

const Product = ({id, thumbnail, title, price, category, brand}) => {
  return (
    <div key={id} className='border border-indigo-200 p-3 rounded-md hover:bg-indigo-100'>
        <img 
            src={thumbnail} 
            alt={title}
            className='w-full object-contain rounded-md h-40 md:h-44 lg:h-48' 
        />
        <h3 className='text-sm font-bold text-indigo-600'>{title}</h3>
        <p className='text-xs font-bold'>{price}</p>
        <p className='text-xs font-semibold text-gray-500'>{category}</p>
        <p className='text-xs font-semibold text-gray-500'>{brand}</p>
    </div>
  )
}

export default Product;
