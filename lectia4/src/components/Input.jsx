import React from 'react';

const Input = ({label, name, value, error, onChange, type='text'}) => {
  return (
    <div className='mb-4'>
        <label className='block text-sm text-gray-700'>{label}</label>
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={``} 
        />
    </div>
  )
}

export default Input
