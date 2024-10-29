import React from 'react';

const Product = ({ id, thumbnail, title, price, category, brand }) => {
  return (
    <>
      <img
        src={thumbnail}
        alt={title}
        className='w-full object-contain rounded-md h-4/6'
      />
      <div className="h-2/6">
        <h3
          title={title}
          className='text-sm font-bold text-cyan-600 text-center my-2 overflow-hidden text-ellipsis whitespace-nowrap max-w-[50ch]'>
          {title}...
        </h3>
        <p className='text-xs font-bold'>Preț: {price}</p>
        <div className='flex justify-between'>
          <p className='text-2xs sm:text-xs font-normal text-gray-600 capitalize'>{category}</p>
          <p className='text-2xs sm:text-xs font-normal text-gray-600 capitalize'>{brand}</p>
        </div>
      </div>
    </>
  )
}

export default Product;
