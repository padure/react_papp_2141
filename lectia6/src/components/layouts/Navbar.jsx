import React from 'react';
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='bg-cyan-700 text-white'>
            <div className="container flex items-center">
                <div className="h-20 m-auto flex items-center justify-center md:justify-start">
                    <Link to="/" className='transition duration-400 hover:bg-cyan-900 py-2 px-4 rounded-md'>Home</Link>
                    <Link to="/products" className='transition duration-400 hover:bg-cyan-900 py-2 px-4 rounded-md'>Produse</Link>
                    <Link to="/contacts" className='transition duration-400 hover:bg-cyan-900 py-2 px-4 rounded-md'>Contacte</Link>
                </div>
                <Link to="/cart" className='transition duration-400 hover:bg-cyan-900 py-2 px-4 rounded-md'>
                    <FaShoppingCart />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
