
const products = [
{   name: "Black Basketball Shoes",
    category: "Jordan",
    price: 100,
},
{   name: "White Running Shoes",
    category: "Adidas",
    price: 120,
},
{   name: "Red Soccer Cleats",
    category: "Nike",
    price: 140,
},
{   name: "Blue Tennis Shoes",
    category: "Puma",
    price: 105,
},
{   name: "Black Boots",
    category: "Timberland",
    price: 150,
},
{   name: "White Sneakers",
    category: "Reebok",
    price: 110,
},
{   name: "Gray Hiking Shoes",
    category: "Salomon",
    price: 130,
},
{   name: "Green Sneakers",
    category: "New Balance",
    price: 90,
},
{   name: "Pink Basketball Shoes",
    category: "Under Armour",
    price: 120,
},
{   name: "Brown Football Cleats",
    category: "Nike",
    price: 85,
},
{   name: "Black Dress Shoes",
    category: "Clarks",
    price: 90,
},
{   name: "Brown Loafers",
    category: "Clarks",
    price: 80,
},
{   name: "Black Sneakers",
    category: "Reebok",
    price: 75,
},
{   name: "Black Running Shoes",
    category: "Adidas",
    price: 160,
},
{   name: "White Hiking Shoes",
    category: "Salomon",
    price: 130,
},
{   name: "Purple Basketball Shoes",
    category: "Jordan",
    price: 105,
},
{   name: "Brown Dress Shoes",
    category: "Clarks",
    price: 90,
},
{   name: "Tan Boots",
    category: "Timberland",
    price: 200,
},
{   name: "Pink Football Cleats",
    category: "Adidas",
    price: 250,
},
{   name: "Yellow Golf Shoes",
    category: "Jordan",
    price: 115,
},
]

const Jordans = products.filter(product => product.category === "Jordan");
console.log(Jordans);
const Nike = products.filter(product => product.category === "Nike");
console.log(Nike);
const Adidas = products.filter(product => product.category === "Adidas");
console.log (Adidas);
const Clarks = products.filter(product => product.category === "Clarks")
console.log (Clarks);
const Reebok = products.filter(product => product.category === "Reebok")
console.log (Reebok);
const Timberland = products.filter(product => product.category === "Timberland")
console.log (Timberland);
const Salomon = products.filter(product => product.category === "Salomon")
console.log (Salomon);
const Under Armour = products.filter(product => product.category === "Under Armour")
console.log (Under Armour);
const New Balance = products.filter(product => product.category === "New Balance")
console.log (New Balance);

function cart() {
    let cart = [];
    return{
        addItem: function (item){
            cart.push(item);
            console.log(`${item} has been added to cart`);
        },
        removeItem: function (item){
            cart.splice(cart.indexOf(item), 1);
            console.log(`${item} has been removed from cart`);
        }
    }
}
const myCart = cart();
myCart.addItem("Black Basketball Shoes");
myCart.removeItem("Black Basketball Shoes");