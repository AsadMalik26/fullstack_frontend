// api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api'; // Update with your backend server URL

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const starProduct = async (productId, userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/star-product/${productId}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error starring product:', error);
    throw error;
  }
};

export const getStarredProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/starred-products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching starred products:', error);
    throw error;
  }
};
