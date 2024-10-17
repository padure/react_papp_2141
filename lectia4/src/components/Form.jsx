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
  const listProducts = products.map((product, id) => <tr key={id}>
      <td>{id + 1}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.description}</td>
    </tr>
  );
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
      <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nume</th>
              <th>Pret</th>
              <th>Descriere</th>
            </tr>
          </thead>
          <tbody>
            {listProducts}
          </tbody>
      </table>
    </>
  )
}

export default Form
