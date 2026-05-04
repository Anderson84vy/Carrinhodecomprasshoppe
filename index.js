import * as cartSrevice from "./services/cart.js";
import createItem from "./services/item.js";

const mycart = []; 
const mywhishList = [];

console.log("Welcome to the your Shoppe cart!");

// Criando dois itens
const item1 = createItem("hotwheels Omega95", 28,99, 1);
const item2 = createItem("hotwheels Gol92", 28,99, 3);
// Adicione dois itens ao carrinho
await cartService.addItem(mycart, item1);
await cartService.addItem(mywhishList, item2);

await cartService.removeItem(mywhishList, item2);
await cartService.removeItem(mywhishList, item2);
await cartService.removeItem(mywhishList, item2);

await cartService.displaycart(mycart);
// Deletei dois itens do carrinho
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);
await cartService.calculateTotal(mycart);
