import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='h-24 flex items-center justify-center bg-cyan-500 text-white text-base font-semibold'>
        All rights reserved {year}
    </footer>
  )
}

export default Footer
