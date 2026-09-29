const products = [
  {
    id: 1,
    name: "Dress",
    price: 499,
    image: "./img/kjole.png",
    category: "Clothing",
    offer: false,
    soldout: true,
  },
  {
    id: 2,
    name: "T-shirt",
    price: 299,
    image: "./img/tshirt.png",
    category: "Clothing",
    offer: false,
    soldout: true,
  },
  {
    id: 3,
    name: "Shoe",
    price: 899,
    image: "./img/sko.png",
    category: "Shoes",
    offer: false,
    soldout: true,
  },
];

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

console.log(category);

const productList = document.querySelector("#product-list");

const filteredProducts = products.filter(
  (product) => product.category === category,
);

filteredProducts.forEach((product) => {
  let status = "";

  if (product.offer) {
    status += `<span class="offer">Tilbud</span>`;
  }

  if (product.soldout) {
    status += `<span class="soldout">Udsolgt</span>`;
  }

  productList.innerHTML += `
  <article class="product-card">
    <a href="productdetails.html?id=${product.id}&category=${product.category}">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price} kr.</p>
      ${status}
    </a>
  </article>
`;
});
