const CART_CONTAINER = document.getElementById("cart__container");
const CART_TOTAL = document.getElementById("cart__total");
const CHECKOUT_BTN = document.getElementById("checkout__btn");

// products array
let PRODUCTS = [
  {
    productId: 1223,
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7740262/1.jpg?8890",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 20000,
  },
  {
    productId: 36726,
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7740262/1.jpg?8890",
    productTitle: "Rolex watch",
    productQuantity: 1,
    productPrice: 5000,
  },
  {
    productId: 64636,
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7740262/1.jpg?8890",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 10000,
  },
  {
    productId: 7777,
    productImage:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/7740262/1.jpg?8890",
    productTitle: "Casio watch",
    productQuantity: 1,
    productPrice: 10000,
  },
];

// A function to display cart product
const displayCartProduct = (productToDisplay) => {
  let result = [];
  for (let i = 0; i < productToDisplay.length; i++) {
    result.push(`<div class="flex items-center gap-6 border p-2 rounded-md shadow-md">
        <img
          src=${productToDisplay[i].productImage}
          alt="product image"
          class="w-[100px] h-[100px]"
        />
        <div>
          <h3 class="font-bold">${productToDisplay[i].productTitle}</h3>
          <p class="text-gray-400">N${productToDisplay[i].productPrice}</p>
          <button 
            onclick="deleteItemFromCart(${productToDisplay[i].productId})"
          class="bg-red-600 text-white text-xs p-1 rounded-md">
            Delete
          </button>
        </div>

        <div class="flex gap-2 items-center">
          <button

          onclick="increaseQuantity(${productToDisplay[i].productId})"          
            class="font-semibold text-white bg-green-500 p-[0.2rem] rounded-md"
          >
            +
          </button>
          <p class="text-gray-400">${productToDisplay[i].productQuantity}</p>
          <button
           onclick="decreaseQuantity(${productToDisplay[i].productId})" 
            class="font-semibold text-white bg-red-500 p-[0.2rem] rounded-md"
          >
            -
          </button>
        </div>
      </div>`);
  }

  CART_CONTAINER.innerHTML = result.join("");
};

// when the window load, we want to display app the items we have in cart
window.addEventListener("DOMContentLoaded", () => {
  displayCartProduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
});

// A function to increase the quantity of a cart item
function increaseQuantity(productId) {
  PRODUCTS.forEach((item) => {
    if (item.productId === productId) {
      item.productQuantity = item.productQuantity + 1;
    }
  });
  displayCartProduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

// A function to decrease the quantity of a cart item
function decreaseQuantity(productId) {
  PRODUCTS.forEach((item) => {
    if (item.productId === productId && item.productQuantity >= 2) {
      item.productQuantity = item.productQuantity - 1;
    }
  });
  displayCartProduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

// A function to calculate the total cost of items
function calculateCartTotal(productToCalculate) {
  let total = 0;
  productToCalculate.forEach((item) => {
    total = total + item.productQuantity * item.productPrice;
  });

  CART_TOTAL.textContent = total;
}

// A function to delete item from our cart
function deleteItemFromCart(productId) {
  let result = [];

  for (let i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].productId !== productId) {
      result.push(PRODUCTS[i]);
    }
  }

  PRODUCTS = result;
  displayCartProduct(PRODUCTS);
  calculateCartTotal(PRODUCTS);
}

function processOrder() {
  console.log(PRODUCTS);
  alert("Order successful. Thank You!");
}

CHECKOUT_BTN.addEventListener("click", processOrder);
