export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const INCREMENT_CART_ITEM_QUANTITY ="INCREMENT_CART_ITEM_QUANTITY";
export const DECREMENT_CART_ITEM_QUANTITY= "DECREMENT_CART_ITEM_QUANTITY";
export const REMOVE_PRODUCT_FROM_CART="REMOVE_PRODUCT_FROM_CART";
export const CLEAR_CART="CLEAR_CART";

// //para probar mi carrito
export function addProductToCart(product) {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    };
}
//de carrito
export function incrementCartItemQuantity(id){
    return {
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: id
    }
}

export function decrementCartItemQuantity(id){
    return {
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: id
    }
}

export function removeProductFromCart(id) {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: id
    };
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}