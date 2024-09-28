import { cart } from '../../../../public';
import { Trolley } from "./index";
import { useCart } from '../../context/CartTrolleyContext';
import React, { useEffect, useState } from 'react';
import { UserAuthenticated } from './UserAuthenticated';
import { ModalUserAuthenticated } from './ModalUserAuthenticated';
import { useSelector } from 'react-redux';

export const Nav_Account_Cart = () => {
    const { isLogged, user } = useSelector(state => state.auth);
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false);
    const { cartProducts } = useCart();
    const [toggleModalUserAuth, setToggleModalUserAuth] = useState(false);
    const toggleModal = () => setToggleModalUserAuth(!toggleModalUserAuth);
    useEffect(() => { }, [trolleyIsOpen, cartProducts, toggleModalUserAuth]);

    return (
        <div>
            <div className='flex px-5 space-x-5 md:space-x-10 relative'>
                <UserAuthenticated toggleModalAuthenticated={toggleModal} />
                <div className='flex items-center cursor-pointer relative'>
                    <img className='w-10 h-10'  src={cart} alt="Cart" onClick={() => setTrolleyIsOpen(true)} />
                    {cartProducts.length > 0 && 
                        <p className='absolute -top-2 -right-2 md:-top-2 md:-right-1 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-semibold'>
                            {cartProducts.length}
                        </p>
                    }
                </div>
            </div>
            {
                toggleModalUserAuth && isLogged && <ModalUserAuthenticated setToggleModalUserAuth={setToggleModalUserAuth} />
            }
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
        </div>
    );
}
