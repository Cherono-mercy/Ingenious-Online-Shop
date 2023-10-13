//Function to get the products 
function getProducts(){
    fetch("http://localhost:3000/produts")
    .then((response) => response.json())
    .then((data) => displayProducts(data))
}
 
//Function to display our products 
function displayProducts(products){
    const productList = document.getElementById("root");
   productList.innerHTML = products.map((product) =>{
    let {name, image,price} = product;
    return(
        `<div class="box">
            <div class="image-box">
                <img class="images" src=${image}></img>
            </div>
            <div class="bottom">
            <p>${name}</p>
            <h2>${price}</h2>
            <button>Add to Cart</button>
             </div>`
    )

   }).join(" ")
};
getProducts();

