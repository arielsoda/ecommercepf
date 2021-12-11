
import { GET_ALL_PRODUCTS, 
         GET_PRODUCT_BY_NAME,
         GET_PRODUCT_BY_ID,
         } from "./actionsTypes";
import axios from 'axios';

const SERVER = 'http://localhost:3001';

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

export function getProductById(id) {
    return async function(dispatch){
        try{
            const product = await axios.get(`${SERVER}/products/${id}`)
            return dispatch({
                type: GET_PRODUCT_BY_ID,
                payload: product.data
            })
        }catch(err){
            console.log(err)
        }
    }
}