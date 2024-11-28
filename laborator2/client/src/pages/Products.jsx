import {
    FaRegTrashCan,
    FaPenToSquare
} from "react-icons/fa6";
import {
    useState,
    useEffect
} from 'react';
import {
    fetchProducts,
    deleteProductById
} from '../services/apiProductService.js';

import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error(error.message);
                alert("Failed to load products");
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    const openDeleteModal = (id) => {
        setSelectedProductId(id);
        setShowModal(true);
    };

    const confirmDelete = async () => {
        try {
            await deleteProductById(selectedProductId);
            setProducts(products.filter(product => product.id !== selectedProductId));
            setShowModal(false);
            setSelectedProductId(null);
        } catch (error) {
            console.error(error.message);
            alert("Error deleting product");
        }
    };

    return (
        <div className="p-6">
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="loader border-t-4 border-b-4 border-lime-500 w-16 h-16 rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className='grid grid-cols-6 gap-4'>
                    {products.map(product => (
                        <div
                            key={product.id}
                            className='flex flex-col justify-between shadow shadow-lime-100 p-4 hover:bg-gradient-to-r hover:from-lime-50 hover:cursor-pointer min-h-52'>
                            <div>
                                <h5 className='font-bold text-lime-800'>{product.name}</h5>
                                <p className='font-semibold text-lime-700 text-sm'>{product.description}</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='font-bold'>Price: {product.price}</p>
                                <div className="flex gap-1">
                                    <Link to={`/products/${product.id}/edit`}>
                                        <FaPenToSquare
                                            className='text-yellow-600'
                                        />
                                    </Link>
                                    <FaRegTrashCan
                                        className='text-red-600'
                                        onClick={() => openDeleteModal(product.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg w-1/6">
                        <h3 className="text-lg font-bold mb-4 text-center">Confirm Delete</h3>
                        <p>Ești sigur?</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                                onClick={() => setShowModal(false)}
                            >
                                Nu
                            </button>
                            <button
                                className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={confirmDelete}
                            >
                                Da
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
