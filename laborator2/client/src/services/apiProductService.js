const API_BASE_URL = "http://localhost:8888/products";

export const fetchProducts = async () => {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

export const deleteProductById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete product");
    }
    return response.json();
};
export const createProduct = async (product) => {
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
    });
    if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
    }
    return response.json();
};
