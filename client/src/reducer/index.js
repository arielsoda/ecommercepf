import{ GET_ALL_PRODUCTS, 
    GET_PRODUCT_BY_NAME } from '../actions/actionsTypes'

const initialState = {
    allProducts: [], 
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
        default:
            return state;
    }
}

export default reducer