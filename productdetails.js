const productId = new URLSearchParams(window.location.search);
const endpoint = Number(productId.get("id"));
const category = productId.get("category");
const categoryMap = {
  Apparel: "Clothing",
  Footwear: "Shoes",
  Accessories: "Accessories",
};

const backCategory = categoryMap[category] || "";

const apiUrl = `https://kea-alt-del.dk/t7/api/products/${endpoint}`;

const productDetails = document.querySelector("#product-details");

fetch(apiUrl)
  .then((res) => res.json())
  .then((product) => {
    productDetails.innerHTML = `
      <article class="product-detail">
        <div class="product-image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
        </div>

        <div class="product-info">
          <h1>${product.productdisplayname}</h1>
          <p class="product-price">${product.price} kr.</p>

          <a class="back-link" href="productlist.html?category=${backCategory}">← Back to products</a>
        </div>
      </article>
    `;
  });
