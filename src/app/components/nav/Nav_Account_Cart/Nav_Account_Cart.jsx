import "./Nav_Account_Cart.css";
import { account, buttonLogout, cart } from '../../../../../public';
import { AuthContext } from '../../../auth/context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trolley } from "../index";
import { useCart } from '../../../context/CartTrolleyContext';
import { useContext } from 'react';
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2/dist/sweetalert2.all";

export const Nav_Account_Cart = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);
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
                logoutUser();
                navigate("/", { replace: true })
            }
        });
    }

    useEffect(() => { }, [trolleyIsOpen, cartProducts, user])
    return (
        <>
            <div className='login-checkout'>
                {
                    user ?
                        (
                            <>
                                <Link to="/profile/user" className='user-authenticated'>
                                    {user?.fullname.split(" ")[0]}
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
                <Link onClick={() => setTrolleyIsOpen(true)}>
                    <img src={cart} alt={cart} />
                    <p className='products_length_cart'>{cartProducts.length}</p>
                </Link>
            </div>
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
        </>
    )
}
