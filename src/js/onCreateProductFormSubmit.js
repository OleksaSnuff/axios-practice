import { refs } from './refs';
import { productsApi } from '../requests/products';
import { createProductMarkup } from '../services/markupService';

export async function onCreateProductFormSubmit(event) {
  event.preventDefault();
  try {
    const newProduct = {};
    new FormData(event.currentTarget).forEach((value, key) => {
      newProduct[key] = value;
    });
    const result = await productsApi.add(newProduct);
    refs.newProductSection.insertAdjacentHTML(
      'beforeend',
      createProductMarkup(result.data)
    );
  } catch (error) {
    console.log(error.message);
  }
}
