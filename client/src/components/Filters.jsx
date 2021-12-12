import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import s from '../assets/styles/Filters.module.css'
import {
    getAllProducts,
    getCategories,
    filterByCategory,
    filterByPrice,
    filterProductByBrand,
    sortProducts
} from '../actions/index'


function Filters() {
     const dispatch = useDispatch();
     const filters = useSelector(state => state.filters);
     const [,setSort] = useState('')
    
     return (
        <div className={s.container}>
            
        </div>
    )
}

export default Filters
