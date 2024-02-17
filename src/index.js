import './styles/normalize.css';
import './styles/index.css';
import { productsApi } from './requests/products';
import { createProdauctsMarkup } from './services/markupService';
import { refs } from './js/refs';
import { onSingleFormProductSubmit } from './js/onSingleFormProductSubmit';

async function renderProducts() {
  refs.list.innerHTML = createProdauctsMarkup(
    (await productsApi.getAll()).data.products
  );
}
// renderProducts();

refs.singleProductForm.addEventListener('submit', onSingleFormProductSubmit);
