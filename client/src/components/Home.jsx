import s from "../assets/styles/Home.module.css";
import Card from './ProductCard.jsx'
import { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { getAllProducts, getProductByName } from '../actions/index.js'
import { useParams } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => {
        console.log(state)
    })
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
            <div className={s.cards}>
                {search?<div className={s.search}><p>Resultados de busqueda de: <strong>{search}</strong></p></div>:null}
                {products.length>0?products.map((prod,i)=><Card key={i} id={prod.idProduct} name={prod.name} price={prod.price} image={prod.thumbnail}/>):<div></div>}
            </div>
       </div>
    )
}

export default Home
