import React, { useContext, useEffect } from 'react'
import { Register } from './Register/Register'
import { Login } from './Login/Login'
import './Auth.css'
import { AuthContext } from './context/authContext'
export const Auth = () => {
    const { logged } = useContext(AuthContext);
    useEffect(() => { }, [logged])
    return (
        !logged ?
            (
                <div className='container auth-form'>
                    <h1>Acceso a tu cuenta</h1>
                    <p>Por favor complete la siguiente información</p>
                    <div className='login-register'>
                        <Login />
                        <Register />
                    </div>
                </div>
            )
            : null
    )
}
