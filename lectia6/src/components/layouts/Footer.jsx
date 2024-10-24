import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='h-24 flex items-center justify-center bg-indigo-600 text-white text-base'>
        Toate drepturile sunt rezervate {year}
    </footer>
  )
}

export default Footer
