import s from "../assets/styles/login.module.css";
import googleIcon from "../assets/img/google.png";
import githubIcon from "../assets/img/github.png";

const Login = () => {
    console.log(s.navbar)
    
    return (
        <form className={s.form}>
            <h2 className={s.title}>Ingresa a tu cuenta completando los datos</h2>

            <input className={s.input} name="txt-name" type="text" placeholder="ingresa tu nombre"/>
            <input className={s.input} name="txt-mail" type="email" placeholder="ingresa tu mail"/>
            <input className={s.input} name="txt-password" type="password" placeholder="ingresa tu contraseña"/>

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
        </form>
    )
}

export default Login