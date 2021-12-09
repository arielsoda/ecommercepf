import { GET_ALL_PRODUCTS, 
         GET_PRODUCT_BY_NAME,
         } from "./actionsTypes";
import axios from 'axios';


export function getAllProducts() {
    return async function(dispatch){
        try{
            const products = await axios.get('http://localhost:3001/products');
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: products.data
            });
        }catch(err){
            console.log(err)
        }
    }
};

export function getProductByName(name) {
    return async function(dispatch){
        try{
            const product = await axios.get(`http://localhost:3001/product?name=${name}`)
            return dispatch({
                type: GET_PRODUCT_BY_NAME,
                payload: product.data
            })
        }catch(err){
            console.log(err)
        }
    }
};