import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Nav_Account_Cart.css";
import { Trolley } from "../index"
export const Nav_Account_Cart = () => {
    const user = JSON.parse(localStorage.getItem("cliente"));
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false)
    useEffect(() => { }, [trolleyIsOpen])

    return (
        <>
            <div className='login-checkout'>
                {
                    user ?
                        <Link to="/profile">
                            {
                                user?.fullname
                                    ? user.fullname
                                    : "Cuenta"
                            }
                            <img src="../../../public/svg/account.svg" alt="account" />
                        </Link>
                        : <Link to="/account">
                            {
                                !user?.fullname
                                    ? "Cuenta"
                                    : user.fullname
                            }
                            <img src="../../../public/svg/account.svg" alt="account" /></Link>
                }
                {/* Carrito de compras */}
                <Link onClick={() => setTrolleyIsOpen(true)}>Carrito<img src="../../../public/svg/cart.svg" alt="cart" /> </Link>
            </div>
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
            {/* //todo:CREAR LOGOUT DE USUARIO PARA BORRAR LOS DATOS DEL LOCAL STORAGE */}
        </>
    )
}
