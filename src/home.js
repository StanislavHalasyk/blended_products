import {
  createCategoryMarkUp,
  createProductMarkUp,
} from './js/render-function.js';
import {
  getProductsCategory,
  getProduct,
  getProductByCategory,
} from './js/products-api.js';

import { listCategory } from './js/refs.js';

async function renderCategory() {
  const categories = await getProductsCategory();
  console.log(categories);
  const allCategories = ['All', ...categories];
  createCategoryMarkUp(allCategories);
}

renderCategory();

async function renderProducts() {
  const products = await getProduct();
  createProductMarkUp(products.products);
}
renderProducts();
getProductByCategory();

listCategory.addEventListener('click', async event => {
  const clickBtn = event.target.closest('.categories__btn');
  if (!clickBtn) return;
  const categoryName = clickBtn.textContent;
  console.log(categoryName);

  let products = [];

  if (categoryName === 'ALL') {
    products = await getProduct();
  } else {
    products = await getProductByCategory(categoryName);
  }
  createCategoryMarkUp(products.products);
});
