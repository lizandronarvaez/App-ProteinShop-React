import React from 'react'
import { Register } from './Register/Register'
import { Login } from './Login/Login'
import './Auth.css'
export const Auth = () => {
    return (
        <div className='container auth-form'>
            <h2>Acceso a tu cuenta</h2>
            <div className='login-register'>
                <Login />
                <Register />
            </div>
        </div>
    )
}
