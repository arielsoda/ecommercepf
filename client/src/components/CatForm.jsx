import { getCategories, createCategory } from "../actions/index";
import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import s from '../assets/styles/CatForm.module.css';


export default function CatForm (){
const dispatch = useDispatch();
const categories = useSelector(state=>state.categories);
const [category, setCategory]=useState({
    name:'',
});
// const [error,setError]=useState({
//     name:''
// });

useEffect(()=>{
    dispatch(getCategories())
},[dispatch])

function handleSubmit(e){
    dispatch(createCategory(category))
    setCategory({
        name:'',
    })
    alert('Category added succesfully')
}
function handleChange(e){
    // let name = e.target.name;
    // let value = e.target.value;
    // if(name.split('')[0]=== name.split('')[0].toUpperCase()){}
    setCategory({
        ...category,
        [e.target.name]:e.target.value
    })
}

// function handleSelect(e){
//     setCategory({
//         ...category,

//     })
// }

<div className={s.Background}>
    {/* <!-- AÑADIR COMPONENTE NAVBAR -->
    <!-- AÑADIR BOTON DESPLEGABLE PERFIL --> */}
    <form className={s.Container}>
        <div className={s.Title}> 
            <h2>Product Category Creation</h2>
        </div>

    {/* <!-- CONECTAR CON ESTADOS DE CATEGORIAS --> */}
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
                        id="">
                    <option>Abiable Categories</option>
                    {categories.map((a)=>(
                        <option
                        key={a.idCategory}
                        value={a.idCategory}>
                            {a.name}
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

}