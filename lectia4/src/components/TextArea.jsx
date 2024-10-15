import React from 'react'

const TextArea = ({label, name, value, error, onChange}) => {
  return (
    <div className='mb-4'>
        <label className='block text-sm text-gray-700'>{label}</label>
        <textarea 
          name={name}
          value={value}
          onChange={onChange}
          className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-800': 'border-gray-300'}`} 
          rows="4"
        />
        {error && <p className='mt-1 text-red-800'>{error}</p>}
    </div>
  )
}

export default TextArea
