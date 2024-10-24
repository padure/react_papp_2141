import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='bg-indigo-700 text-white'>
            <div className="container h-14 m-auto flex items-center">
                <Link to="/" className='transition duration-400 hover:bg-indigo-900 py-2 px-4 rounded-md'>Home</Link>
                <Link to="/products" className='transition duration-400 hover:bg-indigo-900 py-2 px-4 rounded-md'>Produse</Link>
                <Link to="/contacts" className='transition duration-400 hover:bg-indigo-900 py-2 px-4 rounded-md'>Contacte</Link>
            </div>
        </nav>
    )
}

export default Navbar;
