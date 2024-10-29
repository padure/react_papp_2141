import axios from "axios";
import {
    URL_API_PRODUCTS,
    URL_API_PRODUCT
} from '../api.js';

export const fetchProducts = async () => {
    try {
        const response = await axios.get(URL_API_PRODUCTS);
        const products = await response.data;
        return products;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const fetchProduct = async (id) => {
    try {
        const response = await axios.get(`${URL_API_PRODUCT}${id}`);
        const product = await response.data;
        return product;
    } catch (error) {
        console.error(error);
        throw error;
    }
}