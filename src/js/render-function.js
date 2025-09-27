import { listCategory, listProduct } from './refs.js';

export function createCategoryMarkUp(categories) {
  const markUp = categories
    .map(
      category => `
        <li class="categories__item">
          <button class="categories__btn" type="button">${category}</button>
        </li>`
    )
    .join('');

  listCategory.innerHTML = markUp;
}

export const createProductMarkUp = products => {
  const markUp = products
    .map(
      prod => `
        <li class="products__item" data-id="${prod.id}">
          <img class="products__image" src="${prod.images[0]}" alt="${prod.title}" />
          <p class="products__title">${prod.title}</p>
          <p class="products__brand">
            <span class="products__brand--bold">Brand:</span> ${prod.brand}
          </p>
          <p class="products__category">Category: ${prod.category}</p>
          <p class="products__price">Price: $${prod.price}</p>
        </li>`
    )
    .join('');

  listProduct.innerHTML = markUp;
};
