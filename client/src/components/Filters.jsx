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
        <div >
            <select 
            name='category'
            onChange={handleFilterByCategory}>
                <option value='All'>Filters By Categories</option>
                        <option value="smartPhone">SmathPhone</option>
                        <option value="smartWatch">SmartWatch</option>
                        <option value="television">Television</option>
                </select>
      
            <select key={filters.idProduct}
            name='brand'
            onChange={handleFilterByBrand}>
                <option value='All'>Select Brand</option>
                <opcion value='zte'>Zte</opcion>
                <opcion value='samsung'>Samsung</opcion>
                <opcion value='motorola'>Motorola</opcion>
                <opcion value='cat'>Cat</opcion>
                <opcion value='nokia'>Nokia</opcion>
                <opcion value='lg'>Lg</opcion>
                <opcion value='Kodak'>Kodak</opcion>
                <opcion value='ipro'>Ipro</opcion>
                <opcion value='energizer'>Energizer</opcion>
                <opcion value='quantum'>Quantum</opcion>
                <opcion value='philco'>Alcatel</opcion>
                <opcion value='panacom'>Panacom</opcion>
                <opcion value='tcl'>Tcl</opcion>
                <opcion value='positivo'>Positivo</opcion>
                <opcion value='ulefone'>Ulefone</opcion>
                <opcion value='xiaomi'>Xaiaomi</opcion>
                <opcion value='sansei'>Sansei</opcion>
                <opcion value='sky devices'>Sky Devices</opcion>
                <opcion value='apple'>Apple</opcion>
                <opcion value='excess'>Excess</opcion>
                <opcion value='blue'>Blu</opcion>
                <opcion value='roadstar'>Roadstar</opcion>
                <opcion value='rca'>Rca</opcion>
                <opcion value='blackview'>Blackview</opcion>
                <opcion value='ipro - blu - exc segun stock'>Ipro - blu - exc segun stock</opcion>
                <opcion value='noblex'>Noblex</opcion>
                <opcion value='blu - ipro - nokia - generico'>Blu - ipro - nokia - generico</opcion>
                <opcion value='luo'>Luo</opcion>
                <opcion value='microsoft'>Microsoft</opcion>
                <opcion value='imilab'>Imilab</opcion>
                <opcion value='microwear'>Microwear</opcion>
                <opcion value='amazfit'>Amazfit</opcion>
                <opcion value='Nictom'>Nictom</opcion>
                <opcion value='colmi'>Colmi</opcion>
                <opcion value='ruffo'>Ruffo</opcion>
                <opcion value='y9'>Y9</opcion>
                <opcion value='huawei'>Huawei</opcion>
                <opcion value='noga'>Noga</opcion>
                <opcion value='you'>You</opcion>
                <opcion value='skmei'>Skemi</opcion>
                <opcion value='tedge'>Tedge</opcion>
                <opcion value='gadnic'>Gadnic</opcion>
                <opcion value='dt no.1'>Dt no.1</opcion>
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
