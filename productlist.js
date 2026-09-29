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

const productList = document.querySelector("#product-list");

products.forEach((product) => {
  productList.innerHTML += `
        <article class="product-card">
            <a href="productdetails.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.price} kr.</p>
            </a>
        </article>
    `;
});
