"use strict";

let currentTotal = 0;
const productsGrid = document.querySelector(".products-grid");
const totalAmountElement = document.querySelector("#total-amount");
const buildSummary = document.querySelector(".build-summary");

const products = [
  {
    id: 1,
    name: "Amd Ryzen 5 5600",
    price: 121,
    img: "img/E910_AMD_R5-5600_01.png",
  },
  {
    id: 2,
    name: "Intel Core i5-12400F",
    price: 118,
    img: "img/e8b474_i5-12400f.png",
  },
  {
    id: 3,
    name: "Amd Ryzen 5 3600",
    price: 53,
    img: "img/E910_AMD_R5-5600_01.png",
  },
  {
    id: 4,
    name: "Intel Core i5-7500",
    price: 389,
    img: "img/e8b474_i5-12400f.png",
  },
];

function renderProducts(items) {
  productsGrid.innerHTML = "";
  items.forEach((product) => {
    const html = `
      <article class="product-card">
        <img class="product-img" src="${product.img}" alt="${product.name}">
        <p class="product-name">${product.name}</p>
        <p class="product-price">${product.price} €</p>
        <button class="btn-add" 
          data-price="${product.price}" 
          data-name="${product.name}" 
          data-img="${product.img}">ADD TO BUILD</button>
      </article>
    `;
    productsGrid.insertAdjacentHTML("beforeend", html);
  });
}

renderProducts(products);

productsGrid.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-add")) {
    const price = Number(e.target.dataset.price);
    const name = e.target.dataset.name;
    const img = e.target.dataset.img;

    currentTotal = price;
    totalAmountElement.textContent = currentTotal;

    const selectedHtml = `
      <div id="selected-item">
        <img class="selected-product-img" src="${img}" alt="${name}" />
        <div class="selected-info">
          <p class="selected-name">${name}</p>
          <span class="selected-price">${price} €</span>
        </div>
      </div>
    `;

    const existingItem = document.querySelector("#selected-item");
    if (existingItem) existingItem.remove();

    buildSummary.insertAdjacentHTML("beforeend", selectedHtml);

    console.log(`Цена заменена на: ${price}€`);
  }
});
