import { getCategories, createCategory } from "../../actions/index";
import React,{useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import s from '../../assets/styles/CategoryForm.module.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component';

export default function CatForm (){
    const dispatch = useDispatch();
    const categories = useSelector(state=> state.productsReducer.categories);
    const [category, setCategory] = useState({
        name: '',
    })
    const [error, setError] = useState({
        name: 'Introduzca un nombre para continuar',
    })
    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'NOMBRE',
            selector: row => row.namecat,
            sortable: true,
        },
        {
            name: 'ACCIONES',
            selector: row => row.buttons,
            sortable: false,
        },
    ]
    
    let tcategorys=categories.map((a,i)=>{
        return {
            key:i,
            id: i,
            namecat: a,
            buttons: [
                <attr title="Editar categoria"><button className={s.btnEdit} ><FontAwesomeIcon icon={faEdit}/></button></attr>,
                <attr title="Eliminar categoria"><button className={s.btnDel}><FontAwesomeIcon icon={faTrashAlt}/></button></attr>
            ]}
    })
    
    useEffect(()=>{
        dispatch(getCategories())
    },[dispatch])

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createCategory(category))
        Swal.fire({
            title: 'Categoria agregada',
            text: `La categoria ${category.name} ha sido registrada correctamente.`,
            icon: 'success'
        })
        setCategory({
            name: '',
        })
        
    }
    function handleChange(e){
        let errorinput='';
        if(e.target.name==='name' && e.target.value &&!/[a-zA-Z0-9]/.test(e.target.value)){
            errorinput='Solo se admiten caracteres alfanúmericos'
        }else{
            setCategory({
                ...categories,
                name: e.target.value,
            })
        }
        if(!e.target.value){
            errorinput='Introduzca un nombre para continuar';
        }
        setError({
            ...error,
            name:errorinput
        })
    }

return(
<>
<div className={s.Container}>
    {/* <!-- AÑADIR COMPONENTE NAVBAR -->
    <!-- AÑADIR BOTON DESPLEGABLE PERFIL --> */}
    <form className={s.Form} >
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
                {error.name?<span>{error.name}</span>:null}
                <button 
                    type="submit"
                    onClick={handleSubmit}>
                        Add
                </button>

            </div><br></br>

             {/* <div className={s.Select}> */}
             <div>
                {/* <select 
                        name="Abiable" 
                        placeholder="Abiable Categories" 
                        >
                    <option>Abiable Categories</option> */}
                
                    
            </div><br></br>{/**/}
        </div>

        <Link to='/'>
            <button>Home Page</button>
        </Link>
        
        
    </form>
    <DataTable
                    columns={columns}
                    data={tcategorys}
                />
</div>
</>
)}