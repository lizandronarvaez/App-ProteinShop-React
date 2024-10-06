import { cart } from '../../../../public';
import { Trolley } from "./index";
import React, { useEffect, useState } from 'react';
import { UserAuthenticated } from './UserAuthenticated';
import { ModalUserAuthenticated } from './ModalUserAuthenticated';
import { useSelector } from 'react-redux';

export const Nav_Account_Cart = () => {
    const { isLogged } = useSelector(state => state.auth);
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false);
    const [toggleModalUserAuth, setToggleModalUserAuth] = useState(false);

    const toggleModal = () => setToggleModalUserAuth(!toggleModalUserAuth);
    const { listProductCart } = useSelector(state => state.cart);

    useEffect(() => { }, [trolleyIsOpen, toggleModalUserAuth]);

    return (
        <div>
            <div className='flex px-5 space-x-5 md:space-x-10 relative'>
                <UserAuthenticated toggleModalAuthenticated={toggleModal} />
                <div className='flex items-center cursor-pointer relative' onClick={() => setTrolleyIsOpen(true)}  >
                    <img className='w-10 h-10' src={cart} alt="Cart" />
                    {listProductCart.length > 0 &&
                        <p className='absolute -top-2 -right-2 md:-top-2 md:-right-1 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-semibold'>
                            {listProductCart.length}
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
