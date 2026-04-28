// Quais ações meu carrinho da shoppe pode fazer

//Casos de uso
// -> adicionar item no carrinho
async function addItem(userCart){
userCart.push(item);
}

// -> calcular o total do carrinho 

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => totaal + item.subtotal(), 0);
}
// ->deletar item do carrinho 
async function deleteItens(userCart, name){

}

// ->remover um item - diminui um item
async function removeItem(userCart, index){
    
}

export{
    addItem,
    calculateTotal,
    deleteItens,
    removeItem,
}
