import * as cartSrevice from "./services/cart.js";
import createItem from "./services/item.js";

const mycart = []; 
const mywhishList = [];

console.log("Welcome to the your Shoppe cart!");

const item1 = createItem("hotwheels Omega95", 28,99, 1);
const item2 = createItem("hotwheels Gol92", 28,99, 3);

await cartService.addItem(mycart, item1);
await cartService.addItem(mywhishList, item2);

console.log("Shoppe cart TOTAL IS:");
await cartService.calculateTotal(mycart);

cartSrevice.addItem();

console.log(item2.subtotal());
