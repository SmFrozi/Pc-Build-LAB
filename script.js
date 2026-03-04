"use strict";

let currentTotal = 0;
const productsGrid = document.querySelector(".products-grid");
const totalAmountElement = document.querySelector("#total-amount");
const selectedItemContainer = document.querySelector("#selected-item");

// ДОБАВИЛИ ТОЧКИ ПЕРЕД КЛАССАМИ
const selectedName = selectedItemContainer.querySelector(".selected-name");
const selectedPrice = selectedItemContainer.querySelector(".selected-price");
const selectedImg = selectedItemContainer.querySelector(
  ".selected-product-img",
);

const products = [
  {
    id: 1,
    name: "Amd Ryzen 5 5600",
    price: 125,
    img: "img/E910_AMD_R5-5600_01.png",
  },
  {
    id: 2,
    name: "Intel Core i5-12400F",
    price: 140,
    img: "img/E910_AMD_R5-5600_01.png",
  },
  {
    id: 3,
    name: "Amd Ryzen 5 3600",
    price: 45,
    img: "img/E910_AMD_R5-5600_01.png",
  },
  {
    id: 4,
    name: "Intel Core i5-7500",
    price: 399,
    img: "img/E910_AMD_R5-5600_01.png",
  },
];

function renderProducts(items) {
  productsGrid.innerHTML = "";
  items.forEach((product) => {
    // ДОБАВИЛИ data-img В КНОПКУ
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

// ВСЯ ЛОГИКА ВНУТРИ ОДНОГО ОБРАБОТЧИКА
productsGrid.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-add")) {
    const price = Number(e.target.dataset.price);
    const name = e.target.dataset.name;
    const img = e.target.dataset.img;

    // Считаем общую сумму
    currentTotal += price;
    totalAmountElement.textContent = currentTotal;

    // ОБНОВЛЯЕМ ПРАВУЮ КОЛОНКУ
    selectedName.textContent = name;
    selectedPrice.textContent = `${price} €`;
    selectedImg.src = img;

    console.log(`Добавлено: ${name}`);
  }
});
