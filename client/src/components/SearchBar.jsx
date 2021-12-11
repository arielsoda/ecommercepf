import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {getProductByName} from '../actions/index';
import s from '../assets/styles/SearchBar.module.css'


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('')

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(name){
            dispatch(getProductByName(name))
        }else{
            alert('Name not Found. Try again...')
        }
        setName('')   
    }

    return(
        <>
        <div >
            <input
                className={s.input}
                type='text'
                value={name}
                onChange={handleChange}
                placeholder='Product Name...'
            />
            <button
                className={s.btn}
                type='submit'
                onClick={(e) => handleSubmit(e)}>
                Search
            </button>      
        </div>
        </>
    )
}