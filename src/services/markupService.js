export function createProdauctsMarkup(data) {
  return data
    .map(
      ({ title, description, price }) =>
        ` <li>
        <h2>${title}</h2>
        <p>${description}</p>
        <p>${price}</p>
      </li>`
    )
    .join('');
}

export function createProductMarkup({ title, description, price }) {
  return `<li>
        <h2>${title}</h2>
        <p>${description}</p>
        <p>${price}</p>
      </li>`;
}
