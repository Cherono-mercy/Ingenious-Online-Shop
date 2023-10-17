//Getting DOM elements and storing them in variables

let listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let listCards = [];
let products = [];

document.addEventListener("DOMContentLoaded", function () {
  //To wait for HTML elements to be rendered to manipulate them
  let startShopping = document.querySelector(".shopping");
  let closeShopping = document.querySelector(".closeShopping");
  let list = document.querySelector(".list");

  let body = document.querySelector("body");

  startShopping.addEventListener("click", () => {
    //Adding event listener to open cart section
    body.classList.add("active");
  });

  closeShopping.addEventListener("click", () => {
    //Adding event listener to close cart section
    body.classList.remove("active");
  });

  //Function to get the products from an API using fetch()
  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        products = data;
        console.log(products);
        displayProducts();
      });
  }

  //Function to display our products in the document
  function displayProducts() {
    products.forEach((value, key) => {
      let newDiv = document.createElement("div");
      newDiv.classList.add("item");
      newDiv.innerHTML = `
       <img src="${value.image}"/>
       <div class="title">${value.title}</div>
       <div class="price">$${value.price}</div>
       <button onclick="addToCart(${key})">Add to Cart</button>`; //Adding click event listener to add to cart button. 
     
      list.appendChild(newDiv);
    });
  }
  getProducts();
});

//Function to add items to cart
function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCart();
}
//Function to add prices and quantity to our cart items
function reloadCart() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
            <div><img src="${value.image}"/></div>
            <div>${value.title}</div>
            <div>$${value.price}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
            </div>  `;  //Adding click event listeners to add and subtract quantity buttons
            
          
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice;
  quantity.innerText = count;
}
//Function to add and subtract the quantity of our cart items
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCart();
}
