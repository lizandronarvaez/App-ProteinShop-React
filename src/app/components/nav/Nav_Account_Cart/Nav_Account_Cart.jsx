import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Nav_Account_Cart.css";
import { Trolley } from "../index";
import buttonLogout from "../../../../../public/svg/userLogout.svg";
import account from "../../../../../public/svg/account.svg";
import cart from "../../../../../public/svg/cart.svg";
import { useCart } from '../../../context/CartTrolleyContext';

export const Nav_Account_Cart = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("cliente"));
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false);
    const { cartProducts } = useCart();
    const logoutAccount = () => {
        //Limpiar el localStorage
        localStorage.clear();
        // Redireccionamos a la pagina principal
        navigate("/", { replace: true })
    }
    useEffect(() => { }, [trolleyIsOpen, cartProducts])
    return (
        <>
            <div className='login-checkout'>
                {
                    user ?
                        <Link to="/profile/user" className='user-authenticated'>
                            {user?.fullname ? user?.fullname : "Cuenta"}
                            <img src={account} alt={account} />
                            {
                                user?.fullname ?
                                    <img src={buttonLogout} alt={buttonLogout} onClick={logoutAccount} />
                                    : null
                            }
                        </Link>
                        :
                        <Link to="/account" >
                            {!user?.fullname ? "Cuenta" : user.fullname}
                            <img src={account} alt={account} />
                        </Link>
                }
                {/* Carrito de compras */}
                <Link onClick={() => setTrolleyIsOpen(true)}>Carrito
                    <img src={cart} alt={cart} />
                    <p className='products_length_cart'>{cartProducts.length}
                    </p>
                </Link>
            </div>
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
            {/* //todo:CREAR LOGOUT DE USUARIO PARA BORRAR LOS DATOS DEL LOCAL STORAGE */}
        </>
    )
}
