import { getProductsCategories, createCategory } from "../actions/index";
import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import s from '../assets/styles/CatForm.module.css';


export default function CatForm (){
    const dispatch = useDispatch();
    const categories = useSelector(state=> state.productsReducer.categories);
    console.log(categories)
    const [category, setCategory] = useState({
        name: '',
    })
    
    useEffect(()=>{
        dispatch(getProductsCategories())
    },[dispatch])

    function handleSubmit(e){
        dispatch(createCategory(category))
        setCategory({
            name: '',
        })
        // alert('Category Created Succesfuly')
    }
    function handleChange(e){
        setCategory({
            ...categories,
            name: e.target.value,
        })
    }

return(
<>
<div className={s.Background}>
    {/* <!-- AÑADIR COMPONENTE NAVBAR -->
    <!-- AÑADIR BOTON DESPLEGABLE PERFIL --> */}
    <form className={s.Container} >
        <div className={s.Title}> 
            <h2>Product Category Creation</h2>
        </div>

        <div className={s.InputSelect}>
            <div className={s.Input}>
                <input 
                    onChange={handleChange}
                    value={category.name}
                    name='name'
                    type="text"
                    placeholder="Add a New Category"
                />
                <button 
                    type="submit"
                    onClick={handleSubmit}>
                        Add
                </button>

            </div><br></br>

            <div className={s.Select}>
                <select 
                        name="Abiable" 
                        placeholder="Abiable Categories" 
                        >
                    <option>Abiable Categories</option>
                    {categories.map((a)=>(
                        <option
                        key={a.idCategory}
                        value={a.idCategory}>
                            {a}
                        </option>
                    ))}
                </select> 
            </div><br></br>
        </div>

        <Link to='/'>
            <button>Home Page</button>
        </Link>
        
    </form>
</div>
</>
)}