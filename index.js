document.addEventListener("DOMContentLoaded", function(){

let startShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

startShopping.addEventListener("click", () => {
    body.classList.add("active");
}) 

closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
})

let listCards = [];





//Function to get the products 
function getProducts(){
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => displayProducts(data));
}

//Function to display our products 
function displayProducts (products) {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
       <img src="${value.image}"/>
       <div class="title">${value.title}</div>
       <div class="price">$${value.price}</div>
       <button onclick="addToCard(${key})">Add to Cart</button>
    `;
    list.appendChild(newDiv);
  })
};
getProducts();

});





















 






