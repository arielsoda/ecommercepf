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
    let [data,setData] = useState({
        name: '',
        lastname:'',
        email:'',
        pass:'',
        tel:'',
        chterm:false,
    })
    let [error,setError] = useState(initialError)
    const  validate =(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        let errort='';
        if((name==='name' || name==='lastname') && value && !/[a-zA-Záéíóú ]+$/.test(value)){
            errort='Solo se admiten letras.'
        }else if(name==='email' && value && /\S+@\S+\.\S+/.test(value)){
            errort='Correo no válido';
        }else if(name==='chterm' && data.chterm){
            value=!data.chterm;
            errort='Debe aceptar los terminos y condiciones para continuar'
        } else if(value==='' && name!=='chterm'){
            errort='Ingresa un valor para continuar'
        }/* else
            
        } */
        setData({
            ...data,
            [name]:name!=='chterm'?value:!data.chterm})
        setError({...error, [name]:errort});
        
    }
    return (
        <div className={s.container}>
            <h2 className={s.title}>Formulario de registro</h2>
            <p><strong><i>Registrate y disfrutarás de una gran experiencia de compra</i></strong></p>
            <form className={s.form}>
                <div className={s.formGroup}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" value={data.name} onChange={(e) => validate(e)} placeholder="Nombre"/>
                    {error.name?<span className={s.error}>{error.name}</span>:null}
                </div>
                <div className={s.formGroup}>
                    <label htmlFor="lastname">Apellidos</label>
                    <input type="text" id="lastname" name="lastname" value={data.lastname} onChange={(e) => validate(e)} placeholder="Apellidos"/>
                    {error.lastname?<span className={s.error}>{error.lastname}</span>:null}
                </div>
                <div className={s.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={data.email} onChange={(e) => validate(e)} placeholder="Email"/>
                    {error.email?<span className={s.error}>{error.email}</span>:null}
                </div>
                <div className={s.formGroup}>
                    <label htmlFor="pass">Contraseña</label>
                    <input type="password" id="pass" name="pass" value={data.pass} onChange={(e) => validate(e)} placeholder="Contraseña"/>
                    {error.pass?<span className={s.error}>{error.pass}</span>:null}
                </div>
                <div className={s.formGroup}>
                    <label htmlFor="tel">Telefono</label>
                    <input type="tel" id="tel" name="tel" value={data.tel} onChange={(e) => validate(e)}  placeholder="Telefono"/>
                    {error.tel?<span className={s.error}>{error.tel}</span>:null}
                </div>
                <div className={s.formGroup}>
                    <div className={s.formGTerm}>
                        <label htmlFor="chterm">
                        <input type="checkbox" id="chterm" name="chterm" value="" onChange={(e) => validate(e)}  />Acepto los terminos y condiciones</label>
                    </div>
                    {error.chterm?<span className={s.error}>{error.chterm}</span>:null}
                </div>
                
                <div className={s.formGroup}>
                    <button className={s.btn} type="submit" >Registrarse</button>
                </div>
                
            </form>
        </div>
    )
}

export default Register
