import s from "../assets/styles/Home.module.css";
import Card from './ProductCard.jsx'
import { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { getAllProducts, getProductByName } from '../actions/index.js'
import { useParams } from "react-router-dom";
import Filters from "./Filters.jsx";
import imgnotfound from "../assets/img/notfound.gif";


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => {
            if(Array.isArray(state.productsReducer.allProducts)) return state.productsReducer.allProducts;
        return state.productsReducer.allProducts.productsInfo})
    const {search=null} = useParams();

    
    useEffect(()=>{
        console.log(search)
        if(!search)dispatch(getAllProducts())
        else{
            dispatch(getProductByName(search))
        }
        console.log(products)
    }, [dispatch])

    return (
        <div className={s.container}>
            <Filters/>
            {search?<div className={s.search}><p>Resultados de busqueda de: <strong>{search}</strong></p></div>:null}
            <div className={s.cards}>
                {Array.isArray(products)&&products.length>0?products.map((prod,i)=><Card key={i} id={prod.idProduct} name={prod.name} price={prod.price} image={prod.thumbnail}/>)
                :<div className={s.notfound}>
                    <img className={s.imgfound} src={imgnotfound}/>
                    <p>Products not found</p>
                </div>}
            </div>
       </div>
    )
}

export default Home
