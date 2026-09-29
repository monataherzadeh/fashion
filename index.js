const categories = ["Clothing", "Shoes", "Accessories"];

const categoryList = document.querySelector("#categories");

categories.forEach((category) => {
  categoryList.innerHTML += `
    <a href="productlist.html?category=${category}">
      ${category}
    </a>
  `;
});
