import React, { useState } from 'react';

const NewProduct = () => {
  const saveProduct = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8888/products`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify({
        name: name,
        description: description,
        price: price
      })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
    setName('');
    setDescription('');
    setprice(0);
  }
  const nameChange = (e) => {
    const { value } = e.target;
    setName(value);
  }
  const descriptionChange = (e) => {
    const { value } = e.target;
    setDescription(value);
  }
  const priceChange = (e) => {
    const { value } = e.target;
    setprice(value);
  }
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setprice] = useState(0);
  return (
    <div className='flex items-center justify-center py-6'>
      <form onSubmit={saveProduct}>
        <h5 className='text-lg text-slate-900 font-bold'>Add new product</h5>
        <div className="my-3">
          <label htmlFor="name" className='font-bold text-sm'>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className='p-1 border ml-4 rounded-md'
            value={name}
            onChange={nameChange} />
        </div>
        <div className="my-3">
          <label htmlFor="description" className='font-bold text-sm'>Description</label>
          <input
            type="text"
            name="description"
            id="description"
            className='p-1 border ml-4 rounded-md'
            value={description}
            onChange={descriptionChange} />
        </div>
        <div className="my-3">
          <label htmlFor="price" className='font-bold text-sm'>Price</label>
          <input
            type="number"
            name="price"
            id="price"
            className='p-1 border ml-4 rounded-md'
            value={price}
            onChange={priceChange} />
        </div>
        <button
          type="submit"
          className="bg-gray-700 py-1 px-4 text-white rounded-md hover:bg-gray-600">
          Save
        </button>
      </form>
    </div>
  )
}

export default NewProduct;
