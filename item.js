// CASOS DE USO DE ITENS

 criar itens com subtotal createContext
 async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
 }

 export default createItem; 
