import { getCategories, createCategory } from "../actions/index";
import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import s from '../assets/styles/CatForm.module.css';


export default function CatForm (){
    const dispatch = useDispatch();
    const categories = useSelector(state=> state=["smartPhone", "smartWatch","television"]);
    console.log(categories)
    const [category, setCategory] = useState({
        name: '',
    })
    const [error, setError] = useState({
        name: '',
    })

    useEffect(()=>{
        dispatch(getCategories())
        console.log(getCategories())
    },[dispatch])

    function handleSubmit(e){
        dispatch(...categories,category)
        setCategory({
            name: '',
        })
        alert('Activity Created Succesfuly')
    }
    function handleChange(e){
        let name= e.target.name;
        let value= e.target.value;
        if(value==""){
            setError({...error,[name]:'No se admite campo vacio'})
        }else if((name==="name" || name==="season")&& /\d/.test(value)){
            setError({...error,[name]:'Solo se admiten letras'})
        }else if(name!=="season" && name!=="name" && isNaN(value))
            setError({...error,[name]:'Solo se admiten numeros'})
        setCategory({
            ...category,
            [e.target.name] : e.target.value,
        })
    }

    function handleSelect(e){
        setCategory({
            ...category,
            name: e.target.value
        })
    }

// function handleSelect(e){
//     setCategory({
//         ...category,

//     })
// }
return(
<>
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
                    onChange={handleSelect}
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