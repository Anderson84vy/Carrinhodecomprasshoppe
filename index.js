import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shoppe cart!");

// Criando dois itens
const item1 = createItem("Hotwheels Omega95", 28.99, 1);
const item2 = createItem("Hotwheels Gol92", 28.99, 3);

// Adicionando itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myWishList, item2);

// Removendo itens da lista de desejos
await cartService.removeItem(myWishList, item2);
await cartService.removeItem(myWishList, item2);
await cartService.removeItem(myWishList, item2);

// Mostrando carrinho
await cartService.displayCart(myCart);

// Calculando total
await cartService.calculateTotal(myCart);
