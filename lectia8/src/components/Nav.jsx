import React from 'react';
import { Link } from 'react-router';
const Nav = () => {
  return (
    <nav className='h-20 flex items-center w-full bg-orange-700 gap-4 px-12'>
        <Link 
            to="/" 
            className="text-orange-100 text-sm hover:underline underline-offset-2"
        >
            Acasa
        </Link>
        <Link 
            to="/projects" 
            className="text-orange-100 text-sm hover:underline underline-offset-2"
        >
            Projects
        </Link>
    </nav>
  )
}

export default Nav;
