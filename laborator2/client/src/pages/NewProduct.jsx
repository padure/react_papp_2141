import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/apiProductService.js";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !description || !price) {
      alert("Please fill all fields correctly.");
      setLoading(false);
      return;
    }
    try {
      await createProduct({ name, description, price });
      navigate("/products");
      setName("");
      setDescription("");
      setPrice("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <form
        onSubmit={saveProduct}
        className="w-full max-w-md bg-lime-100 rounded-lg shadow-md p-6 my-32"
      >
        <h5 className="text-2xl text-gray-800 font-bold mb-6 text-center font-mono">
          Add New Product
        </h5>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="bg-lime-50 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            className="bg-lime-50 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Price
          </label>
          <input
            type="number"
            min="0"
            name="price"
            id="price"
            placeholder="Price"
            className="bg-lime-50 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-lime-500 text-white py-3 rounded-lg font-semibold hover:bg-lime-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Product"}
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
