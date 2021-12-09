import React from 'react'
import s from '../assets/styles/ProductCard.module.css'
function ProductCard({ id , name , price , image}) {
   return (
      <div className={s.container}>
         <div className={s.namecont}>
            <p className={s.name}><strong>{name}</strong></p>
         </div>
         <div className={s.imgcont}>
            <img className={s.img} src={image} alt={`Imagen de ${name}`}/>
         </div>
         <div className={s.actions}>
            <button className={`${s.btn} `}>Comprar ahora</button>
            <button className={`${s.btn}`}>Agregar al carrito</button>
         </div>
      </div>
   )
}

export default ProductCard
