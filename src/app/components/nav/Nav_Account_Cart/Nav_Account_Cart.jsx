import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Nav_Account_Cart.css";
import { Trolley } from "../index";
import buttonLogout from "../../../../../public/svg/userLogout.svg";
import account from "../../../../../public/svg/account.svg";
import cart from "../../../../../public/svg/cart.svg";
import { useCart } from '../../../context/CartTrolleyContext';
import Swal from "sweetalert2/dist/sweetalert2.all";
import { useContext } from 'react';
import { AuthContext } from '../../../auth/context/authContext';
export const Nav_Account_Cart = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("cliente"));
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false);
    const { cartProducts } = useCart();
    const { logoutUser } = useContext(AuthContext)
    const logoutAccount = () => {
        Swal.fire({
            title: "Salir de mi cuenta?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Salir",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                //Limpiar el localStorage
                logoutUser();
                // Redireccionamos a la pagina principal
                navigate("/", { replace: true })
            }
        });
    }

    useEffect(() => { }, [trolleyIsOpen, cartProducts, user])
    return (
        <>
            <div className='login-checkout'>
                {
                    user?.fullname ?
                        (
                            <>
                                <Link to="/profile/user" className='user-authenticated'>
                                    {user?.fullname}
                                    <img src={account} alt={account} />
                                </Link>
                                <img
                                    src={buttonLogout}
                                    alt={buttonLogout}
                                    onClick={logoutAccount}
                                    className='logout'
                                />
                            </>
                        )
                        :
                        <Link to="/account" >
                            Cuenta
                            <img src={account} alt={account} />
                        </Link>
                }
                {/* Carrito de compras */}
                <Link onClick={() => setTrolleyIsOpen(true)}>Carrito
                    <img src={cart} alt={cart} />
                    <p className='products_length_cart'>{cartProducts.length}</p>
                </Link>
            </div>
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
        </>
    )
}
