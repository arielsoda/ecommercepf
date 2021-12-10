import React from 'react'
import s from '../assets/styles/ProductCard.module.css'
function ProductCard({ id , name , price , image}) {
   return (
      <div className={s.card}> 
         <div className={s.container}> 
            <div className={s.imgcont}>
               <img className={s.img} src={image} alt={`Imagen de ${name}`}/>
            </div>
            <div className={s.actions}>
               <p className={s.price}>{`$${price} USD`}</p>
               <button className={`${s.btn} `}>Comprar ahora</button>
               <button className={`${s.btn}`}>Agregar al carrito</button>
            </div>
            <div className={s.namecont}>
                  <p className={s.name}><strong>{name}</strong></p>
            </div>
         </div>
      </div>
   )
}

export default ProductCard
