import React from 'react'

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-lime-800 text-white flex h-40 items-center justify-center'>
      @Toate drepturile rezervate {year}
    </footer>
  )
}

export default Footer
