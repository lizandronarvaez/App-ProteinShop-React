import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { account, profile } from '../../../../public';
import { useSelector } from 'react-redux';

export const UserAuthenticated = ({ toggleModalAuthenticated }) => {
    const { isLogged, user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const nameUserIsLogged = user?.fullname.split(" ")[0];
    const navigateProfile = () => {
        if (window.innerWidth < 648) {
            navigate("/profile/user");
            return;
        }
        toggleModalAuthenticated()
    }
    return (
        <>
            {isLogged &&
                <div className='flex justify-center items-center'>
                    <span className='hidden md:flex'>Bienvenido, {nameUserIsLogged}</span>
                    <img className='w-12 hover:cursor-pointer' src={profile} alt={profile} onClick={navigateProfile} />
                </div>
            }
            {!user && <Link to="/account" ><img src={account} alt={account} /></Link>}
        </>
    )
}
