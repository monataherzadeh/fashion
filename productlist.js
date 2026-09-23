const products = [
  {
    name: "Dress",
    price: 499,
    image: "./img/kjole.png",
  },
  {
    name: "T-shirt",
    price: 299,
    image: "./img/tshirt.png",
  },
  {
    name: "Shoe",
    price: 899,
    image: "./img/sko.png",
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
