import React from 'react'

export default function ProductItem({data, addToCart}) {
    const{id, name, price} = data;
   
    return (
        <div style={{border:"thin solid grey", padding:"2rem"}}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={() => addToCart(id)}>ADD TO CART</button>
        </div>
    )
}
