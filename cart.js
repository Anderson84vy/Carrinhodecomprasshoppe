// Quais ações meu carrinho da shoppe pode fazer

//Casos de uso
// -> adicionar item no carrinho
async function addItem(userCart){
userCart.push(item);
}

// -> calcular o total do carrinho 
async function calculateTotal(userCart) {

console.log("/nShoppe Cart TOTAL IS:");

const result = userCart.reduce((total, item) => total = item.subtotal(), 0);
console.log(`🎁Total: ${result}`);
}

// ->deletar item do carrinho 
async function deleteItens(userCart, name){
const index = userCart.findIndex((item) => item.name === name);

if (index !== -1) {
    userCart.splice(index, 1);
}
}

// ->remover um item - diminui um item
async function removeItem(userCart, index){
    //1. encontrar o indice o item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    //2. Caso não encontre o item
}

export{
    addItem,
    calculateTotal,
    deleteItens,
    removeItem,
}
