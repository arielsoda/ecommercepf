
import { GET_ALL_PRODUCTS, 
    GET_PRODUCT_BY_NAME,
    GET_PRODUCT_ID,
    GET_ALL_CATEGORIES,
    FILTER_PRODUCTS_BY_CATEGORY,
    FILTER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_BRANDS,
    SORT_PRODUCTS,
    CREATE_CATEGORY,
    CREATE_PRODUCT,
    FILTERS_CLEAR
} from "./actionsTypes";
import axios from 'axios';

const SERVER = 'http://localhost:3001';

    // export function getAllProducts() {
    //     return async function(dispatch){
    //         try{
    //             const products = await axios.get('http://localhost:3001/products');
    //             return dispatch({
    //                 type: GET_ALL_PRODUCTS,
    //                 payload: products.data
    //             });
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    // };

    // export function getProductByName() {
    //     return async function(dispatch){
    //         try{
    //             const product = await axios.get(`http://localhost:3001/products?name=''`)
    //             return dispatch({
    //                 type: GET_PRODUCT_BY_NAME,
    //                 payload: product.data
    //             })
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    // };

    export function getProductId(idProduct) {
        return async function(dispatch){
            try{
                const detail= await axios.get(`http://localhost:3001/products/${idProduct}`)
                return dispatch({
                    type: GET_PRODUCT_ID,
                    payload: detail.data
                })     
            }catch(err){
                console.log(err)
            }   
        }
    };

    export function getCategories(){
        return async function(dispatch){
            try{
                const categories= await axios.get('http://localhost:3001/categories')
                return dispatch({
                    type: GET_ALL_CATEGORIES,
                    payload: categories.data
                })
            }catch(err){
                console.log(err)
            }
        }
    };


    export function createCategory(payload){
        return async function (dispatch){
            const newCategory = await axios.post( '',payload)
            return dispatch ({
                type: CREATE_CATEGORY,
                payload: newCategory
            })
        }
    };

    export function createProduct(payload){
        return async function (dispatch){
            const newProduct = await axios.post('' ,payload)
            return dispatch ({
                type: CREATE_PRODUCT,
                payload: newProduct
            })
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

    export function filterByCategory(payload){
        return {
            type: FILTER_PRODUCTS_BY_CATEGORY,
            payload
        }
    };

    export function filterByPrice(min, max){ //ver si tengo ruta
        return{
            type: FILTER_PRODUCTS_BY_PRICE,
            payload: {min, max}
        }
    }

    export function filterProductByBrand(payload){
        return{
            type: FILTER_PRODUCTS_BY_BRANDS,
            payload
        }
    }

    export function sortProducts(payload){
        return {
            type: SORT_PRODUCTS,
            payload
        }
    };

    export function filtersClear(){
        return {
            type: FILTERS_CLEAR
        }
    }


