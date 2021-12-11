import{ GET_ALL_PRODUCTS, 
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_BY_ID
} from '../actions/actionsTypes'

const initialState = {
    allProducts: [], 
    product:[],
    filters: []
}

function reducer(state = initialState, action){   
    switch(action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                filters: action.payload
            };
        case GET_PRODUCT_BY_NAME:
            return {
                ...state,
                allProducts: action.payload
            };
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    }
}

export default reducer