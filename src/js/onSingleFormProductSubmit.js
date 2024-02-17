import { refs } from './refs';
import { productsApi } from '../requests/products';
import { createProductMarkup } from '../services/markupService';

export async function onSingleFormProductSubmit(event) {
  event.preventDefault();
  const id = event.currentTarget.elements.id.value.trim();
  const { data } = await productsApi.getById(id);
  refs.singleProduct.innerHTML = createProductMarkup(data);
}
