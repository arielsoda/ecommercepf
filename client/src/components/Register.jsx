import React,{useState}  from 'react'
import s from '../assets/styles/Register.module.css'
function Register() {
    let initialError={
        name:'Ingresa un nombre',
        lastname:'Ingresa un apellido',
        email:'Ingresa un email valido',
        pass:'Ingresa una contraseña',
        tel:'Ingresa un telefono',
        chterm:'Debe aceptar los terminos y condiciones para continuar con el registro',
    }
    let [data,setData] = useState({})

    function handleChange(e) {
        let name=e.target.name;
        let value=e.target.value;
        setData({
            ...data,
            [name]:value})
    }
    return (
        <div className={s.container}>
            <h2 className={s.title}>Formulario de registro</h2>
            <p><strong><i>Registrate y disfrutarás de una gran experiencia de compra</i></strong></p>
            <form className={s.form}>
                <div className={s.formGroup}>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Nombre"/>
                </div>
                <div className={s.formGroup}>
                    <label for="lastname">Apellidos</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Apellidos"/>
                </div>
                <div className={s.formGroup}>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                </div>
                <div className={s.formGroup}>
                    <label for="pass">Contraseña</label>
                    <input type="password" id="pass" name="pass" placeholder="Contraseña"/>
                </div>
                <div className={s.formGroup}>
                    <label for="tel">Telefono</label>
                    <input type="tel" id="tel" name="tel" placeholder="Telefono"/>
                </div>
                <div className={s.formGTerm}>
                    <label for="chterm">
                    <input type="checkbox" id="chterm" name="chterm" value=""/>Acepto los terminos y condiciones</label>
                </div>
                <div className={s.formGroup}>
                    <button className={s.btn} type="submit" >Registrarse</button>
                </div>
                
            </form>
        </div>
    )
}

export default Register
