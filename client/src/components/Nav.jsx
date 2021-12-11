import React from 'react'
import s from '../assets/styles/Nav.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useGoogleLogout } from 'react-google-login'; 
import { logOut } from '../actions';
import Swal from 'sweetalert2';

const Nav = () => {
    const session = useSelector(state => state.loginInfo);
    const dispatch = useDispatch();

    const {signOut} = useGoogleLogout({
        clientId: "855728735481-riucm0j1968aq5bec0cp3qligm443549.apps.googleusercontent.com",
        onLogoutSuccess: () => {
            dispatch(logOut())

            Swal.fire({
                title: "logOut",
                text: "Usted ha cerrado su sesión",
                icon: "info"
            })
        },
        onFailure: () => {}
    })

    return (
        <header className={s.container}>
            <nav className={s.options}>
                <img className={s.logo} src="https://www.seekpng.com/png/detail/428-4289671_logo-e-commerce-good-e-commerce-logo.png" alt="logo ecommerce" />
                <input className={s.search} type="text" placeholder="Ingrese el producto a buscar"></input>
                <div className={s.buttons}>
                    {session.isConnected ? <>
                        <h1>{session.user.name}</h1>
                        <button onClick={() => signOut()}>cerrar sesión</button>
                    </> : <>
                        <Link to="/login"><button className={s.btn}>Log In</button></Link>
                        <Link to="/register"><button className={s.btn}>Registrarse</button></Link>
                    </>}
                </div>
            </nav>
            
        </header>
    )
}

export default Nav
