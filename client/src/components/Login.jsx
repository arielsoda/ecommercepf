import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import s from "../assets/styles/login.module.css";
import googleIcon from "../assets/img/google.png";
import githubIcon from "../assets/img/github.png";
import { Link } from "react-router-dom";

const Login = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        console.log(inputs)
    }, [inputs])

    return (
        <form className={s.form} onSubmit={e => {
            e.preventDefault();

            Swal.fire({
                title: "Login exitoso",
                text: "Se ingresará a tu cuenta",
                icon: "success"
            })
        }}>
            <h2 className={s.title}>Ingresa a tu cuenta completando los datos</h2>

            <input 
                onChange={e => setInputs(prev => {
                    return{
                        ...prev,
                        [e.target.name]: e.target.value
                    }
                })} 
                className={s.input} 
                name="name"
                value={inputs.name}
                type="text" 
                placeholder="ingresa tu nombre"
            />
            <input 
                onChange={e => setInputs(prev => {
                    return{
                        ...prev,
                        [e.target.name]: e.target.value
                    }
                })} 
                className={s.input} 
                name="email" 
                value={inputs.email}
                type="email"
                placeholder="ingresa tu mail"
            />
            <input 
                onChange={e => setInputs(prev => {
                    return{
                        ...prev,
                        [e.target.name]: e.target.value
                    }
                })} 
                className={s.input} 
                name="password"
                value={inputs.password} 
                type="password" 
                placeholder="ingresa tu contraseña"
            />

            <button className={s.alternativeSubmit} type="submit">
                <div className={s.container}>
                    <img className={s.icon} src={googleIcon} alt="icono"/>
                    <span className={s.btnText}>Continuar con Google</span>
                </div>
            </button>
            <button className={s.alternativeSubmit} type="submit">
                <div className={s.container}>
                    <img className={s.icon} src={githubIcon} alt="icono"/>
                    <span className={s.btnText}>Continuar con Github</span>
                </div>
            </button>
            
            <button className={`${s.normalSubmit} ${s.btnText}`} type="submit">Ingresar</button>

            <Link className={s.link} to="/register">Si no tenes cuenta, create una aquí</Link>
        </form>
    )
}

export default Login