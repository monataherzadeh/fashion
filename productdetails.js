const products = [
  {
    id: 1,
    name: "Dress",
    price: 499,
    image: "./img/kjole.png",
  },
  {
    id: 2,
    name: "T-shirt",
    price: 299,
    image: "./img/tshirt.png",
  },
  {
    id: 3,
    name: "Shoe",
    price: 899,
    image: "./img/sko.png",
  },
];

const productId = new URLSearchParams(window.location.search);
const endpoint = Number(productId.get("id"));

const product = products.find((product) => product.id === endpoint);

console.log(product);

const productDetails = document.querySelector("#product-details");

productDetails.innerHTML = `
  <article class="product-detail">
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-info">
      <h1>${product.name}</h1>
      <p class="product-price">${product.price} kr.</p>

      <a class="back-link" href="productlist.html">← Back to products</a>
    </div>
  </article>
`;
