import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import s from '../assets/styles/Filters.module.css'
import {
    getAllProducts,
    getCategories,
    filterByCategory,
    filterProductByBrand,
    sortProducts
} from '../actions/index'


function Filters() {
     const dispatch = useDispatch();
     const filters = useSelector(state => state.productsReducer.filters);
     const [,setSort] = useState('');

     useEffect(() => {
         dispatch(getAllProducts)
         dispatch(getCategories) 
     }, [dispatch])

     function handleClick(e){
         e.preventDefault()
         dispatch(getAllProducts())
     }
    
     function handleFilterByCategory(e){
         e.preventDefault()
         dispatch(filterByCategory(e.target.value))
         setSort(e.target.value)
     }

     function handleFilterByBrand(e){
         e.preventDefault()
         dispatch(filterProductByBrand(e.target.value))
         setSort(e.target.value)
     }

     function handleSortProducts(e){
         e.preventDefault()
         dispatch(sortProducts(e.target.value))
         setSort(e.target.value)
     }
     return (
        <div className={s.container}>
            <select key={filters.idProduct}
                name='category'
                onChange={handleFilterByCategory}>
                    <option value='All'>Select Your Category</option>
                    {/* {filters? filters.map((p) => {
                        return(
                        <option key={p.idProduct} value={p.idProduct}>{p.idProduct.category}</option>
                    )}):( 'Category is not Found')} */}
            </select>
            <select key={filters.idProduct}
                name='brand'
                onChange={handleFilterByBrand}>
                    <option value=''>Select Brand</option>
                   {/*  {filters?filters.map((p) => {
                        return(
                        <option key={p.idProduct} value={p.idProduct}>{p.brand}</option>
                    )}) :('Brand is not Found')} */}
            </select>
            <select key={filters.idProduct}
                name='Sorts'
                onChange={handleSortProducts}>
                <option value='All'>Sorts</option>
                <option value='A-Z'>Brands A-Z</option>
                <option value='Z-A'>Brands Z-A</option>
                <option value='Lower_price'>Lower Price</option>
                <option value='Highest_price'>Highest_price</option>
            </select>

            
        </div>
    )
}

export default Filters
