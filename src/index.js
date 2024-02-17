import './styles/normalize.css';
import './styles/index.css';
import { productsApi } from './requests/products';
import { createProdauctsMarkup } from './services/markupService';
const listRef = document.querySelector('#allProducts');

async function renderProducts() {
  listRef.innerHTML = createProdauctsMarkup(
    (await productsApi.getAll()).data.products
  );
}
renderProducts();
