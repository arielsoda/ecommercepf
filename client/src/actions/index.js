// actions
import { 
    GET_ALL_PRODUCTS, 
    GET_PRODUCT_BY_NAME,
    LOGIN,
    LOGOUT
} from "./actionsTypes";

import axios from 'axios';

const SERVER = 'http://localhost:3001';

export function login(payload){
    let res = null;
    
    return async (dispatch) => {
        if(payload.submitType === "login"){
            // console.log(`http://localhost/login?name=${payload.user.name}&email=${payload.user.email}&password=${payload.user.password}`);
            
            // res = await axios(`http://localhost/login?name=${payload.user.name}&email=${payload.user.email}&password=${payload.user.password}`);
            
        }else{
            var {user} = payload;
            console.log(`http://localhost/login?name=${user.givenName}&email=${user.email}`);

            // res = await axios(`http://localhost/login?name=${payload.user.name}&email=${payload.user.email}`);
        }
        
        res = {
            isConnected: true,
            user: {
                name: user.givenName || "",
                email: user.email || ""
            }
        }

        console.log(res)
        // res = {status: "failure"}

        return dispatch({
            type: LOGIN,
            payload: res
        })
    }
}

export function logOut(){
    return {
        type: LOGIN,
        payload: {isConnected: false}
    }
    
}


export function getAllProducts() {
    return async function(dispatch){
        try{
            const products = await axios.get(`${SERVER}/products`);
            console.log(products.data.productsInfo)
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: products.data.productsInfo
            });
        }catch(err){
            console.log(err)
        }
    }
}

export function getProductByName(name) {
    return async function(dispatch){
        try{
            const product = await axios.get(`${SERVER}/products?search=${name}`)
            return dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: product.data
            })
        }catch(err){
            console.log(err)
        }
    }
}

