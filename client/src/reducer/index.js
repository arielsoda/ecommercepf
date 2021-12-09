import { ADD_PRODUCT_TO_CART,
         INCREMENT_CART_ITEM_QUANTITY,
         DECREMENT_CART_ITEM_QUANTITY,
         REMOVE_PRODUCT_FROM_CART,
         CLEAR_CART} from "../actions/index.js"

export const initialState= {
    allProducts: [
        {id: 1, name:"Producto 1", price: 100, image:["hola"]},
        {id: 2, name:"Producto 2", price: 200, image:["hola1"]},
        {id: 3, name:"Producto 3", price: 300, image:["hola2"]},
        {id: 4, name:"Producto 4", price: 400, image:["hola3"]},
        {id: 5, name:"Producto 5", price: 500, image:["hola4"]},
        {id: 6, name:"Producto 6", price: 600, image:["hola5"]}
    ],
    cart: []
}

export function reducer(state = initialState, action){
    switch(action.type){
        case ADD_PRODUCT_TO_CART:
            const newItem = state.allProducts.filter(product => product.id === action.payload.id) ? state :
            [...state, {...action.payload, quantity: 1}];
            
            return newItem;

        case REMOVE_PRODUCT_FROM_CART:
            const itemDelete = state.cart.filter((product) => product.id !== action.payload.id);
            
            return itemDelete;

        case INCREMENT_CART_ITEM_QUANTITY:
            const addQuantity= state.cart

            
                
    

            
        case CLEAR_CART:
            return []
                  
        default:
            return state;
    }
}