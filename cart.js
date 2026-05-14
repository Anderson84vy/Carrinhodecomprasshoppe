// Quais ações meu carrinho da shoppe pode fazer 

// Casos de uso
// -> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// -> calcular o total do carrinho 
async function calculateTotal(userCart) {
  console.log("\nShoppe Cart TOTAL IS:");

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: ${result}`);
}

// -> deletar item do carrinho 
async function deleteItens(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// -> remover um item (diminui 1 da quantidade)
async function removeItem(userCart, item) {
  // 1. encontrar o indice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  // 2. Caso não encontre o item
  if (indexFound === -1) {
    console.log("Item não encontrado!");
    return;
  }

  // 3. Se quantidade > 1, diminui
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
  } else {
    // 4. Se quantidade for 1, remove do carrinho
    userCart.splice(indexFound, 1);
  }
}

// -> mostrar carrinho
async function displayCart(userCart) {
  console.log("\n🛒 Shoppe Cart List:");

  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | Qtd: ${
        item.quantity
      } | Subtotal: ${item.subtotal()}`
    );
  });
}

export {
  addItem,
  calculateTotal,
  deleteItens,
  removeItem,
  displayCart,
};
