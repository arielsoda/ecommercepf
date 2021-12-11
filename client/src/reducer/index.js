<<<<<<< HEAD
import {DO_SOMETHING, LOGIN, LOGOUT} from "../actions";

const initialState = {
    loginInfo:{
        isConnected: false,
        user: {
            name: "",
            email: ""
        }
    }
}

export function reducer(state=initialState, {type, payload}){
    console.log(type)
    switch(type){
        case DO_SOMETHING:
            // do something...
            break;
        
        case LOGIN:
            return{
                ...state,
                loginInfo: payload
            }
        
        case LOGOUT:
            return{
                ...state,
                loginInfo: payload
            }

        default:
            // do something else...
            return state
=======
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
>>>>>>> origin/develop-fran
    }
}

export default reducer