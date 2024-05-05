import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./Nav_Account_Cart.css";
import { Trolley } from "../index";
import buttonLogout from "../../../../../public/svg/userLogout.svg";
import account from "../../../../../public/svg/account.svg";
import cart from "../../../../../public/svg/cart.svg";

export const Nav_Account_Cart = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("cliente"));
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false);

    const logoutAccount = () => {
        localStorage.clear();
    }
    useEffect(() => {}, [trolleyIsOpen])

    return (
        <>
            <div className='login-checkout'>
                {
                    user ?
                        <Link to="/profile" className='user-authenticated'>
                            {user?.fullname ? user?.fullname : "Cuenta"}
                            <img src={account} alt={account} />
                            {user?.fullname ? <img src={buttonLogout} alt={buttonLogout} onClick={logoutAccount} /> : null}
                        </Link>
                        :
                        <Link to="/account" >
                            {!user?.fullname ? "Cuenta" : user.fullname}
                            <img src={account} alt={account} />
                        </Link>
                }
                {/* Carrito de compras */}
                <Link onClick={() => setTrolleyIsOpen(true)}>Carrito<img src={cart} alt={cart} /> </Link>
            </div>
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
            {/* //todo:CREAR LOGOUT DE USUARIO PARA BORRAR LOS DATOS DEL LOCAL STORAGE */}
        </>
    )
}
