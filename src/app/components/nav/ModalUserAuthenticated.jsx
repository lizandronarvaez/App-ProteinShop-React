import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { account, buttonLogout } from '../../../../public';
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2/dist/sweetalert2.all";
import { logoutUser } from "../../store/AuthSlice";

export const ModalUserAuthenticated = ({ setToggleModalUserAuth}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const linkItem = "font-light hover:text-orange-500 text-3xl"
    const logoutAccount = async () => {
        const result = await Swal.fire({
            title: "Salir de mi cuenta?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Salir",
            cancelButtonText: "Cancelar"
        });
        if (result.isConfirmed) {
            dispatch(logoutUser());
            navigate("/", { replace: true })
            return;
        }

    }
    return (
        <div className='bg-stone-100 absolute mt-5 px-20 py-10'>
            <div className='flex mb-5'>
                <h5 className='text-3xl'>Cuenta</h5>
                <img src={account} alt={account} />
            </div>
            <div className='flex flex-col space-y-3'>
                <Link className={linkItem} to={"/profile/user"} onClick={()=>setToggleModalUserAuth(false)}>Perfil</Link>
                <Link className={linkItem} to={"/profile/orders_users"} onClick={()=>setToggleModalUserAuth(false)}>Pedidos</Link>
                <div className='flex hover:cursor-pointer' onClick={logoutAccount}>
                    <Link className='font-semibold'>Logout</Link>
                    <img src={buttonLogout} alt="logout" />
                </div>
            </div>
        </div>
    );
};
