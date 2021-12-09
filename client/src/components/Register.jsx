import React from 'react'
import s from '../assets/styles/Register.module.css'
function Register() {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Formulario de registro</h2>
            <p><strong><i>Registrate y disfrutarás de una gran experiencia de compra</i></strong></p>
            <form className={s.form}>
                <div className={s.formGroup}>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" placeholder="Nombre"/>
                </div>
                <div className={s.formGroup}>
                    <label for="lastname">Apellidos</label>
                    <input type="text" id="lastname" placeholder="Apellidos"/>
                </div>
                <div className={s.formGroup}>
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="Email"/>
                </div>
                <div className={s.formGroup}>
                    <label for="pass">Contraseña</label>
                    <input type="password" id="pass" placeholder="Contraseña"/>
                </div>
                <div className={s.formGroup}>
                    <label for="tel">Telefono</label>
                    <input type="tel" id="tel" placeholder="Telefono"/>
                </div>
                <div className={s.formGTerm}>
                    <label for="chterm">
                    <input type="checkbox" id="chterm"  value=""/>Acepto los terminos y condiciones</label>
                </div>
                <div className={s.formGroup}>
                    <button className={s.btn} type="submit" >Registrarse</button>
                </div>
                
            </form>
        </div>
    )
}

export default Register
