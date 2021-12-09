import React, {useReducer}from "react";
import CartItem from './CartItem';
import ProductItem from './ProductItem'
import {reducer, initialState} from '../../reducer/index'
import { ADD_PRODUCT_TO_CART, 
         CLEAR_CART, 
         REMOVE_ALL_PRODUCTS_FROM_CART, 
         REMOVE_ONE_PRODUCT_FROM_CART} from '../../actions/index'
import s from '../assets/styles/Shopping.module.css'



export function ShoppingCart() {
   const [state, dispatch] = useReducer(reducer, initialState)

   const {allProducts, cart} = state;

   const addToCart = (product) => {
       dispatch({
           type: ADD_PRODUCT_TO_CART,
           payload: product
        })
   }

   const removeItem = (id, all=false) => {
       if(all){
           dispatch({
               type:REMOVE_PRODUCTS_FROM_CART,
               payload: id
           })
       }else{
           dispatch({
               type: REMOVE_PRODUCT_FROM_CART,
               payload: id
            })
       }
       }

       const clearCart = (e) => {
           e.preventDefault()
           dispatch({
               type: CLEAR_CART,
           })
       }
   
    return (
        <>
        <h3>Productos Mok</h3>
            <article className={s.grid_responsive}>
                {allProducts.map((p)=> (
                    <ProductItem key={p.id} data={p} addToCart={addToCart} />
                ))}
            </article>
        <h3>My Cart</h3>
        <article className={s.box}>
            {cart.map((item, index) => (
                <CartItem key={index} data={item} removeItem={removeItem} />
                ))}
        </article>     
                <button onClick={clearCart}>Clean Cart</button>
    </>
   )
}



export default ShoppingCart

