const products = [
  {
    name: "Dress",
    price: 599,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
  },
  {
    name: "T-shirt",
    price: 299,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
  },
  {
    name: "Jacket",
    price: 499,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
  },
];

const productList = document.querySelector("#product-list");

products.forEach((product) => {
  productList.innerHTML += `
        <article class="product-card">
            <a href="productdetails.html">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price} kr.</p>
            </a>
        </article>
    `;
});
