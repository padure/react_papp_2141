import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='bg-gray-800 fixed w-full'>
        <div className='flex space-x-0'>
            <Link to="/" className='px-6 py-5 text-sm font-medium text-white hover:bg-gray-900'>Home</Link> 
            <Link to="/products" className='px-6 py-5 text-sm font-medium text-white hover:bg-gray-900'>Products</Link> 
            <Link to="/about" className='px-6 py-5 text-sm font-medium text-white hover:bg-gray-900'>About</Link> 
            <Link to="/contact" className='px-6 py-5 text-sm font-medium text-white hover:bg-gray-900'>Contact</Link> 
            <Link to="/dashboard" className='px-6 py-5 text-sm font-medium text-white hover:bg-gray-900'>Dashboard</Link> 
        </div>
    </nav>
  )
}

export default Nav
