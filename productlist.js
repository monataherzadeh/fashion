let products = [];
let displayedProducts = [];

const endpoint = `https://kea-alt-del.dk/t7/api/products?limit=30`;

fetch(endpoint)
  .then((res) => res.json())
  .then((data) => {
    products = data;

    if (category) {
      const apiCategory = categoryMap[category];

      displayedProducts = products.filter(
        (product) => product.category === apiCategory,
      );

      showProducts(displayedProducts);
    } else {
      displayedProducts = products;
      showProducts(displayedProducts);
    }
  });

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const categoryMap = {
  Clothing: "Apparel",
  Shoes: "Footwear",
  Accessories: "Accessories",
};

console.log(category);

const productList = document.querySelector("#product-list");
const filterButtons = document.querySelectorAll("#filters button");
const sortButtons = document.querySelectorAll("#sorting button");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    if (filter === "all") {
      displayedProducts = products;
      showProducts(displayedProducts);
    } else {
      displayedProducts = products.filter(
        (product) => product.category.toLowerCase() === filter,
      );

      showProducts(displayedProducts);
    }
  });
});

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sort = button.dataset.sort;

    if (sort === "price-asc") {
      displayedProducts.sort((a, b) => a.price - b.price);
      showProducts(displayedProducts);
    }

    if (sort === "price-desc") {
      displayedProducts.sort((a, b) => b.price - a.price);
      showProducts(displayedProducts);
    }

    if (sort === "name-asc") {
      displayedProducts.sort((a, b) =>
        a.productdisplayname.localeCompare(b.productdisplayname),
      );
      showProducts(displayedProducts);
    }

    if (sort === "name-desc") {
      displayedProducts.sort((a, b) =>
        b.productdisplayname.localeCompare(a.productdisplayname),
      );
      showProducts(displayedProducts);
    }
  });
});

function showProducts(productsToShow) {
  productList.innerHTML = "";

  productsToShow.forEach((product) => {
    let status = "";

    if (product.discount) {
      status += `<span class="offer">Tilbud</span>`;
    }

    if (product.soldout) {
      status += `<span class="soldout">Udsolgt</span>`;
    }

    productList.innerHTML += `
  <article class="product-card">
    <a href="productdetails.html?id=${product.id}&category=${product.category}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
      <h2>${product.productdisplayname}</h2>
      <p>${product.price} kr.</p>
      ${status}
    </a>
  </article>
`;
  });
}

showProducts(products);
