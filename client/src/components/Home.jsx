import s from "../assets/styles/Home.module.css";
import Card from './ProductCard.jsx'
import {useState} from 'react';
//import { Link } from "react-router-dom"


const Home = () => {
    const [state,setState] = useState([
        {
            id:1,
            name: 'Xiaomi Note 10 Pro 128GB 6GB RAM Bronze',
            image:'https://m.media-amazon.com/images/I/81aQWPoGdOL._AC_SL1500_.jpg',
            price: 67.00,
            desc:false
        },
        {
            id:2,
            name: 'Samsung Galaxy A52 128 GB awesome black 6 GB RAM',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_729328-MLA45401751457_032021-F.webp',
            price: 73.00,
            desc:false
        },
        {
            id:3,
            name: 'Apple iPhone 13 mini (128 GB) - Blanco estelar',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_888083-MLA48036040738_102021-F.webp',
            price: 110.00,
            desc:false
        },
        {
            id:4,
            name: 'Apple iPhone 13 Pro (1 TB) - Oro',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_613428-MLA48035763107_102021-F.webp',
            price: 1780.00,
            desc:false
        },
        {
            id:5,
            name: 'iPhone X 64 GB plata',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_613428-MLA48035763107_102021-F.webp',
            price: 450.00,
            desc:false
        },
        {
            id:6,
            name: 'iPhone XS 64 GB gris espacial',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_961882-MLA43773355262_102020-F.webp',
            price: 640.00,
            desc:false
        },
        {
            id:7,
            name: 'Samsung Galaxy S21+ 5G Dual SIM 128 GB phantom black 8 GB RAM',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_600340-MLA45058669247_032021-F.webp',
            price: 960.00,
            desc:false
        },
        {
            id:8,
            name: 'Xiaomi Mi 11 Dual SIM 256 GB horizon blue 8 GB RAM',
            image:'https://http2.mlstatic.com/D_NQ_NP_2X_721572-MLA46928568388_072021-F.webp',
            price: 950.00,
            desc:false
        },
    ])
    return (
        <>
         <div className={s.container}>
            {state.map(prod=><Card key={prod.id} id={prod.id} name={prod.name} price={prod.price} image={prod.image}/>)}
        </div>
        </>
       
    )
}

export default Home
