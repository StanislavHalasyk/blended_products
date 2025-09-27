import axios from 'axios';
axios.defaults.baseURL = 'https://dummyjson.com';

export async function getProductsCategory() {
  try {
    const res = await axios.get('/products/category-list');
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProduct(currentPage = 1) {
  try {
    const productRes = await axios.get(
      `/products?limit=12&skip=${(currentPage - 1) * 12}`
    );
    return productRes.data;
  } catch (error) {
    console.log(error);
  }
}

export const getProductByCategory = async (category = 'smartphones') => {
  try {
    const res = await axios.get(`/products/category/smartphones${category}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
