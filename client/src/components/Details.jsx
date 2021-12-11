import React from 'react';
import s from '../assets/styles/Details.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart as Heartwhite } from '@fortawesome/free-regular-svg-icons'

const Details = () => {
    return (
        <div className={s.container}>
            <div className={s.data}>
                <div className={`${s.subcontainer} ${s.imgcontainer}`}>
                    <img src="https://e.rpp-noticias.io/xlarge/2020/02/04/485948_896160.jpg" alt="Producto"/>
                </div>
                <div className={`${s.subcontainer} ${s.details}`}>
                    <button className={s.btnfav}><FontAwesomeIcon icon={Heartwhite} /></button>
                    <h2 className={s.prodname}>Huawei P40 Pro</h2>
                    <p className={s.prodprice}>$25.00 USD</p>
                    <div className={s.grupcount}>
                        <label>Cantidad</label>
                        <input type="number" min="0" max="20"/>
                    </div>
                    <p className={s.salesnum}><strong>130 </strong>Ventas realizadas</p>
                    <button className={`${s.btn}`}>Comprar ahora</button>
                    <button className={`${s.btn}`}>Agregar al carrito</button>

                    <h3 className={s.titlepay}>Medios de pago</h3>
                    <img className={s.payment} src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mlm-consumer_credits-medium_v_ddbb2eb147.png" alt="Logo medio de pago" />
                    <img className={s.payment} src="https://tdinversiones.com/wp-content/uploads/2020/12/paypal-logo.png" alt="Logo medio de pago" />
                </div>
            </div>
            <div className={s.desc}>
                <h3>Description</h3>
                <p>El Samsung Galaxy A12 llega con una pantalla HD + de 6.5 pulgadas y potenciado por un procesador de ocho núcleos, 4GB RAM con 64GB de almacenamiento expandible mediante ranura microSD. La cámara posterior del Galaxy A12 es cuádruple, con lentes de 48MP, 5MP, 2MP y 2MP, mientras que la cámara frontal para selfies es de 8 megapíxeles. Completando las características del Samsung Galaxy A12 encontramos una batería de 5000 mAh de carga rápida, lector de huellas montadas de lado, y Android 10 a bordo. 
                    Pantalla HD + de 6.5 pulgadas$$ Almacenamiento expandible mediante ranura microSD$$Cámara posterior del Galaxy A12 es cuádruple, con lentes de 48MP, 5MP, 2MP y 2MP, mientras que la cámara frontal para selfies es de 8 megapíxeles$$Sensores: Huella digital (lateral), acelerómetro, Batería: 5000 mAh, Procesador: Octa-core 2.35 GHz</p>
            </div>
        </div>
    )
}

export default Details;