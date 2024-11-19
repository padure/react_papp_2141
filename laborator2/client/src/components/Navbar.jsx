import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-lime-600 px-12 flex'>
        <Link 
          to='/' 
          className='py-2 px-3 rounded-md my-3 text-white transition duration-500 hover:bg-lime-700'>
            Home
        </Link>
        <Link 
          to='/products' 
          className='py-2 px-3 rounded-md my-3 text-white transition duration-500 hover:bg-lime-700'>
            Products
        </Link>
    </nav>
  )
}

export default Navbar
