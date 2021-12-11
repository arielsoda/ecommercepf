import React from 'react'
import s from '../assets/styles/Nav.module.css'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import logo from '../assets/img/logo-ecommerce.png'

const Nav = () => {
    return (
        <header className={s.container}>
            <nav className={s.options}>
               
                <img className={s.logo} src={logo} onClick={()=>{window.location='/'}} alt="logo ecommerce"/> 
                <SearchBar />
                <div className={s.buttons}>
                     <Link to="/login"><button className={s.btn}>Log In</button></Link>
                    <br />
                        <Link to="/register"><button className={s.btn}>Registrarse</button></Link>
                    <br />
                </div>
            </nav>
            
        </header>
    )
}

export default Nav
