"use strict";

const productsGrid = document.querySelector(".products-grid");
const totalAmountElement = document.querySelector("#total-amount");

const products = [
  {
    id: 1,
    name: "Ryzen 5 5600",
    price: 125,
    img: "img/E910_AMD_R5-5600_01.png",
    category: "cpu",
  },
  {
    id: 2,
    name: "Intel Core i5-12400F",
    price: 140,
    img: "img/E910_AMD_R5-5600_01.png",
    category: "cpu",
  },
  {
    id: 3,
    name: "Ryzen 5 3600",
    price: 45,
    img: "img/E910_AMD_R5-5600_01.png",
    category: "cpu",
  },
  {
    id: 4,
    name: "Ryzen 5 7500f",
    price: 130,
    img: "img/E910_AMD_R5-5600_01.png",
    category: "cpu",
  },
];

function renderProducts(items) {
  // 1. Сначала очистим контейнер от старой верстки
  productsGrid.innerHTML = "";

  // 2. Перебираем каждый товар в массиве
  items.forEach((product) => {
    // Создаем переменную с куском HTML кода
    const html = `
      <article class="product-card">
        <img class="product-img" src="${product.img}" alt="${product.name}">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price} €</p>
        <button class="btn-add">ADD TO BUILD</button>
      </article>
    `;

    // 3. Вставляем этот код в наш grid
    productsGrid.insertAdjacentHTML("beforeend", html);
  });
}

// 4. Вызываем функцию, чтобы она сработала при загрузке страницы
renderProducts(products);
