const products = [
    {name: "Black Basketball Shoes", category: "Jordan", price: 120 }, 
    {name: "White Running Shoes", category: "Adidas", price: 110 },
    {name: "Red Soccer Cleats", category: "Nike", price: 100 },
    {name: "Blue Tennis Shoes", category: "Puma", price: 85 },
    {name: "Black Boots", category: "Timberland", price: 160 },
    {name: "White Sneakers", category: "Reebok", price: 75 },
    {name: "Gray Hiking Shoes", category: "Salomon", price: 140 },
    {name: "Green Sneakers", category: "New Balance", price: 100 },
    {name: "Pink Basketball Shoes", category: "Under Armour", price: 90 },
    {name: "Brown Football Cleats", category: "Nike", price: 95 },
    {name: "Black Dress Shoes", category: "Clarks", price: 110 },
    {name: "Brown Loafers", category: "Clarks", price: 100 },
    {name: "Black Sneakers", category: "Reebok", price: 70 },
    {name: "Black Running Shoes", category: "Adidas", price: 140 },
    {name: "White Hiking Shoes", category: "Salomon", price: 140 },
    {name: "Purple Basketball Shoes", category: "Jordan", price: 130 },
    {name: "Brown Dress Shoes", category: "Clarks", price: 115 },
    {name: "Tan Boots", category: "Timberland", price: 190 },
    {name: "Pink Football Cleats", category: "Adidas", price: 110 },
    {name: "Yellow Golf Shoes", category: "Jordan", price: 120 },
];

let shoppingCart = []; //shopping cart

//to select HTML contaienrs
const container = document.querySelector(".container");

const cartContainer = document.querySelector(".cart-container");

const total = document.querySelector("#total");


// to display products
function inject(item){
   
    container.insertAdjacentHTML(
       
        "beforeend",
       
        `<div class="card">
       
        <h2>${item.name}</h2>
       
        <p>Brand: ${item.category}</p>
        <p>Price: $${item.price}</p>
        <button class ="add-btn">Add to Cart </button>
        </div>`
    );
}

//to display all products
function displayProducts(items){
    container.innerHTML = "";
    items.forEach(inject);
    
    //select all add to cart buttons

    const buttons = document.querySelectorAll(".add-btn");
    buttons.forEach(function(button, index){
    button.addEventListener("click", function(){
        addItem(items[index]);
    });
    });
}

//filter by brand
function filterProducts(brand) {
    if (brand === "All") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(function(product){
            return product.category === brand;
        });
        displayProducts(filteredProducts);
    }
}

//add to cart
function addItem(item){
shoppingCart.push(item);
displayCart();
}

//remove
function removeItem(index){
    shoppingCart.splice(index,1);
    displayCart();
}

//show shopping cart
function displayCart(){
    cartContainer.innerHTML = "";
    let cartTotal = 0;
    shoppingCart.forEach(function(item, index) {
        cartTotal = cartTotal + item.price;
        cartContainer.insertAdjacentHTML(
            "beforeend",
            `<div class ="cart-item">
            <p>${item.name} - $${item.price}</p>
            <button class ="remove-btn">Remove</button>
            </div>`
        );
    });
 
// select all remove buttons
const removeButtons = document.querySelectorAll(".remove-btn");
removeButtons.forEach(function(button,index) {
    button.addEventListener("click", function(){
        removeItem(index);
    });
});
//display total
total.textContent = cartTotal;
}

//filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function(button){
    button.addEventListener("click", function(){
        filterProducts(button.textContent);
    });
});

displayProducts(products); //show all products
displayCart(); //show empty cart at first
