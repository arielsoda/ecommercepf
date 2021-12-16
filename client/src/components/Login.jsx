import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useGoogleLogin} from 'react-google-login';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import s from "../assets/styles/login.module.css";
import googleIcon from "../assets/img/google.png";
import githubIcon from "../assets/img/github.png";
import { login } from "../actions";

const Login = () => {
    
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const {signIn} = useGoogleLogin({
        onSuccess: res => {
            console.log("dispatch")
            dispatch(login({submitType:"loginWithGoogle", user: res.profileObj}))
            
            Swal.fire({
                title: "Login exitoso",
                text: "Se ingresará a tu cuenta",
                icon: "success"
            })

            navigate("/")
        },
        
        onFailure: res => {
            console.log(res);
        
            Swal.fire({
                title: "Error!",
                text: "Revisa tus datos",
                icon: "error"
            })
        },
        
        clientId:"855728735481-riucm0j1968aq5bec0cp3qligm443549.apps.googleusercontent.com",
        isSignedIn: true,
        accessType: "offline"
    })

    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    return (
        <div className={s.container}>
            <div className={s.wrapLogin}>
            <form className={s.form} onSubmit={e => {
                e.preventDefault();

                // agarro el tipo de submit
                let submitType = e.nativeEvent.submitter.name; 

                console.log(submitType)

                switch(submitType){
                    case "loginWithGoogle":
                        signIn();
                        break;
                    
                    case "loginWithGithub":
                        console.log("te logueas con github")
                        break;

                    default:
                        console.log("voy a despachar")
                        dispatch(login({submitType, user: inputs}))
                        break
                }            
            }}>
                <h2 className={s.title}>Login</h2>

               {/*  <div className={s.formGroup}>
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
                        placeholder="Nombre"
                    />
                    
                </div> */}
                <div className={s.formGroup}>
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
                        placeholder="Email"
                    />
                    <FontAwesomeIcon className={s.iconInput} icon={faEnvelope}/>
                </div>
                <div className={s.formGroup}>
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
                        placeholder="Contraseña"
                    />
                    <FontAwesomeIcon className={s.iconInput} icon={faLock}/>
                    
                </div>
                <Link className={s.link} to="/reset_pass">¿Olvidaste tu contraseña?</Link>
               <div className={s.containerbuttons}>
                <button name="loginWithGoogle" className={`${s.firstbtn} ${s.alternativeSubmit}`} type="submit">
                <img className={s.icon} src={googleIcon} alt="icono"/>
                    {/*<div className={s.container}>
                         <img className={s.icon} src={googleIcon} alt="icono"/>
                        <span className={s.btnText}>Continuar con Google</span> 
                    </div>*/}
                </button>

                
                <button name="loginWithGithub" className={s.alternativeSubmit} type="submit">
                    <img className={s.icon} src={githubIcon} alt="icono"/>
                    {/* <div className={s.container}>
                        <img className={s.icon} src={githubIcon} alt="icono"/>
                        <span className={s.btnText}>Continuar con Github</span>
                    </div> */}
                </button>
                </div>
                <button name="login" className={`${s.normalSubmit} ${s.btnText}`} type="submit">Ingresar</button>

                <Link className={s.link} to="/register">Si no tenes cuenta, create una aquí</Link>
            </form>
            </div>
        </div>
    )
}

export default Login