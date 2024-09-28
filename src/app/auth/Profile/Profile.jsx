import React from 'react'
import "./Profile.css";
import userProfile from "../../../../public/svg/userProfile.svg"
import userOrders from "../../../../public/svg/userOrders.svg"
import { Link, Route, Routes } from 'react-router-dom';
import { ProfileForm } from './ProfileForm';
import { OrdersUsers } from '../Orders/OrdersUsers';
import { useSelector } from 'react-redux';

export const Profile = () => {
    const { user, token } = useSelector(state => state.auth);

    return (
        <div className='profile-user' >
            <h2>Perfil Usuario</h2>
            <div className='profile-user-grid'>
                <div className='profile-user-nav'>
                    <ul>
                        <Link to="/profile/user"><li><img src={userProfile} alt={userProfile} />Datos Personales</li></Link>
                        <Link to="/profile/orders_users"><li><img src={userOrders} alt={userProfile} />Pedidos</li></Link>
                    </ul>
                </div>
                <div className='profile-user-data'>
                    <Routes>
                        <Route path="/user" element={<ProfileForm user={user} />} />
                        <Route path="/orders_users" element={<OrdersUsers user={user} token={token} />} />
                    </Routes>
                </div>
            </div>
        </div >
    )
}
