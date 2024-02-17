import apiInstance from '../services/api.js';

async function getAll() {
  const data = await apiInstance.get('/products');
  return data;
}

async function getById(id) {
  const data = await apiInstance.get(`/products/${id}`);
  return data;
}

export const productsApi = { getAll, getById };
