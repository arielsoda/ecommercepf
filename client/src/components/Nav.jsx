import React from 'react'
import s from '../assets/styles/Nav.module.css'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Nav = () => {
    return (
        <header className={s.container}>
            <nav className={s.options}>
                <Link to="/"><img className={s.logo} src="https://www.seekpng.com/png/detail/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="logo ecommerce" ></img></Link>
                    <div className={s.search}>
                        <SearchBar />
                    </div>
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
