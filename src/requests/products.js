import apiInstance from '../services/api.js';

async function getAll() {
  const data = await apiInstance.get('/products');
  return data;
}

export const productsApi = { getAll };
