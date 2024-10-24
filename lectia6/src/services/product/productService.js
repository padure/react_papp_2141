import axios from "axios";
import {
    URL_API_PRODUCTS
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