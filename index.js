//Declaring of store name, store location, and store capacity
//const keyword is used because it is constant and will not be changed
const storeName = "Jack of All Trades";
const storeLocation = "Las Piñas";
const storeCapacity = 5000;

let name;
let price;
let quantity;

//Declaration of product array in the shop
let inventoryProduct = [
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];

/*
The following lines of codes are for the functions that will be done
This includes calculation for total value of products, highest value product
*/

//This line of code indiciates the total number of products in the inventory
let totalNumberProducts = 0;

//This line of code computes for the total number of products using the quantity
for (let item of inventoryProduct) {
    totalNumberProducts += item.quantity;
}

//Declares and initializes inventory value
let totalInventoryValue = 0;

//Computes for the total value of inventory
for (let item of inventoryProduct) {
    totalInventoryValue += item.price * item.quantity;
}

//As per step 4, this updates product information of laptop quantity
const addLaptopQuantity = 10;
inventoryProduct[0].quantity += addLaptopQuantity;

//Handles declaration of most expensive product
let highestPriceProductName = "";
let highestPrice = 0;

//Updates the most expensive product and its value
for (let item of inventoryProduct) {
    if (item.price > highestPrice) {
        highestPrice = item.price;  
        highestPriceProductName = item.name;  
    }
}

//Displays the output in the console of the html opened
console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);
console.log("Total Number of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", inventoryProduct[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);