import React, { useState } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import validateProduct from '../functions/validateProduct';

const Form = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: ""
  });
  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateProduct(product);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setProducts([...products, product]);
      setProduct({
        name: "",
        price: "",
        description: ""
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nume produs"
          name="name"
          value={product.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          label="Preț produs"
          name="price"
          value={product.price}
          onChange={handleChange}
          error={errors.price}
          type="number"
        />
        <TextArea
          label="Descriere produs"
          name="description"
          value={product.description}
          onChange={handleChange}
          error={errors.description}
        />
        <button type='submit'
          className='w-full bg-slate-400 text-white py-2 px-4 rounded-md'>
          Trimite
        </button>
      </form>
    </>

  )
}

export default Form
