const products = [
    {name: "Black Basketball Shoes", category: "Jordan", price: 120, image: "images/jordan.jpg"},
    {name: "White Running Shoes", category: "Adidas", price: 110, image: "images/adidas-running.jpg"},
    {name: "Red Soccer Cleats", category: "Nike", price: 100, image: "images/nike-red-cleats.jpg"},
    {name: "Blue Sneakers", category: "Puma", price: 85, image: "images/puma-blue-sneakers.jpg"},
    {name: "Black Boots", category: "Timberland", price: 160, image: "images/timberland-black.jpg"},
    {name: "White Sneakers", category: "Reebok", price: 75, image: "images/reebok-sneakers-white.jpg"},
    {name: "Gray Hiking Shoes", category: "Salomon", price: 140, image: "images/grey-hiking.avif"},
    {name: "Green Sneakers", category: "New Balance", price: 100, image: "images/nb-green1.jpeg"},
    {name: "Pink Basketball Shoes", category: "Under Armour", price: 90, image: "images/curry-1.jpeg"},
    {name: "Brown Football Cleats", category: "Nike", price: 95, image: "images/brown-cleats-nike.jpeg"},
    {name: "Black Dress Shoes", category: "Clarks", price: 110,image: "images/dress-shoes.jpeg"},
    {name: "White Adidas Sneakers", category: "Adidas", price: 100,image: "images/sambas.webp"},
    {name: "Black Sneakers", category: "Reebok", price: 70, image: "images/reebok14.avif" },
    {name: "Black Running Shoes", category: "Adidas", price: 140, image: "images/adidas-1.webp"},
    {name: "White Hiking Shoes", category: "Salomon", price: 140, image: "images/salomon19.webp" },
    {name: "Purple Basketball Shoes", category: "Jordan", price: 130, image: "images/jordan-purple.webp" },
    {name: "Brown Dress Shoes", category: "Clarks", price: 115, image: "images/brown-clarks.jpeg" },
    {name: "Tan Boots", category: "Timberland", price: 190, image: "images/timberland-tan.webp" },
    {name: "Pink Football Cleats", category: "Nike", price: 110, image: "images/pink-cleats.webp" },
    {name: "Yellow Sneakers", category: "Nike", price: 120, image: "images/yellow-nike.webp" },
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
        <img src="${item.image}" alt="${item.name}">
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

//show all products
displayProducts(products);

//show empty cart at first
displayCart();

