document.addEventListener("DOMContentLoaded", function(){

const productList = document.getElementById("main");



//Function to get the products 
function getProducts(){
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => displayProducts(data));
}

//Function to display our products 
function displayProducts (products) {
    let i = 0;
   productList.innerHTML = products.map((product) =>{         
    let {title, image,price} = product;
    return(
        `<div class="box">
            <div class="image-box">
                <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$${price}</h2>
            <button onclick="addToCart">Add to Cart</button>
             </div>
             </div>`
    )

   }).join(" ")
};
getProducts();

});





















 






