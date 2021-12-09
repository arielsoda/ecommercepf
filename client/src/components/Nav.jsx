import React from 'react'
import s from '../assets/styles/Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header className={s.container}>
            <nav className={s.options}>
                <img className={s.logo} src="https://www.seekpng.com/png/detail/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="logo ecommerce" />
                <input className={s.search} type="text" placeholder="Ingrese el producto a buscar"></input>
                <div className={s.buttons}>
                    <Link to="/login"><button className={s.btn}>Log In</button></Link>
                    <Link to="/register"><button className={s.btn}>Registrarse</button></Link>
                </div>
            </nav>
            
        </header>
    )
}

export default Nav
