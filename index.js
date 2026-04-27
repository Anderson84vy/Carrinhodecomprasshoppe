import createItem from "./services/item";

const cart = []; 

console.log("Welcome to the your Shoppe cart!");

const item1 = createItem("hotwheels Omega95", 28,99, 1);
const item2 = createItem("hotwheels Gol92", 28,99, 3);

console.log(item2.subtotal());
