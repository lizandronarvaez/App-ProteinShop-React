import React from 'react'
import "./Profile.css";
import userProfile from "../../../../public/svg/userProfile.svg"
import userOrders from "../../../../public/svg/userOrders.svg"
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { ProfileForm } from './ProfileForm';
import { OrdersUsers } from '../Orders/OrdersUsers';

export const Profile = () => {
    const { pathname } = useLocation();

    // todo:Obetener los datos del cliente desde el local storage
    const user = JSON.parse(localStorage.getItem("cliente"));
    // TODO: ALMACENAR LOS DATOS EN UN OBJETO

    // todo: enviar peticion al backend para actualizar los datos

    return (
        <div className='profile-user'>
            <h2>Perfil Usuario</h2>
            <div className='profile-user-grid'>
                <div className='profile-user-nav'>
                    <ul>
                        <Link to="/profile"><li><img src={userProfile} alt={userProfile} />Datos Personales</li></Link>
                        <Link to="/profile/orders_users"><li><img src={userOrders} alt={userProfile} />Pedidos</li></Link>
                    </ul>
                </div>
                <div className='profile-user-data'>
                    <Routes>
                        <Route exact path="/" element={<ProfileForm user={user} />} />
                        <Route exact path="/orders_users" element={<OrdersUsers />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
