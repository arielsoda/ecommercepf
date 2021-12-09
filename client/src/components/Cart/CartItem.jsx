import s from '../assets/styles/CartItem.module.css'


 const CartItem = ({data, removeItem}) => {
     const {id, image,  name, price, quantity} = data;
   
    return (
        <>
            <div className={s.container} key={id}>
                <label className={s.lab}>PRODUCTO</label>
                <img src={image} alt="Item" />
                    <h4>{name}</h4> 
                    <h5>${price}.00  </h5>
                
                <label className={s.lab}>CANTIDAD</label>
                    <h5>{quantity}</h5>
                <label className={s.lab}>TOTAL</label>
                    <h4>${price*quantity}.00</h4>
            </div>
            <button onClick={()=> removeItem(id)}>Delete One Item</button>
            <br />
            <button onClick={() => removeItem(id,true)}>Delete All Items</button>
            <br />
        </>
    )
}

export default CartItem;
