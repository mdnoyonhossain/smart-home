import { getStoredCart } from "../utils/fakeDB";

export const productsAndCartData = async() => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoredCart();
    const initialCart = [];
    for(const id in savedCart){
        const foundProducts = products.find(product => product.id === id);
        if(foundProducts){
            const quantity = savedCart[id];
            foundProducts.quantity = quantity;
            initialCart.push(foundProducts);
        }
    }

    return {products, initialCart};
}