import React from 'react';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { useSelector } from 'react-redux';

export const Auth = () => {
    const { isLogged } = useSelector(state => state.auth);

    return (
        !isLogged && (
            <div className="w-4/5 mx-auto text-center">
                <div className='py-20'>
                    <h1 className="mt-20 text-2xl lg:text-6xl">Acceso a tu cuenta</h1>
                    <p className="text-xl lg:text-3xl">Por favor complete la siguiente información</p>
                    <div className="grid grid-cols-1 gap-20 mt-20 lg:grid-cols-2">
                        <Login />
                        <Register />
                    </div>
                </div>
            </div>
        )
    );
};
