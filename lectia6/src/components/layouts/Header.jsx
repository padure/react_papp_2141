import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className='bg-cyan-400 text-white text-5xl h-96 flex flex-col items-center justify-center'>
        Hello, buy from us
        <Link to="/products" className='bg-cyan-950 text-white px-3 py-1 mt-6 rounded-md text-lg'>
            Buy here
        </Link>
    </section>
  )
}

export default Header
