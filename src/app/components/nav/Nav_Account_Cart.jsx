import { cart } from '../../../../public';
import { Trolley } from "./index";
import { useCart } from '../../context/CartTrolleyContext';
import React, { useEffect, useState } from 'react'
import { UserAuthenticated } from './UserAuthenticated';
import { ModalUserAuthenticated } from './ModalUserAuthenticated';
import { useSelector } from 'react-redux';
export const Nav_Account_Cart = () => {
    const { isLogged, user } = useSelector(state => state.auth);
    const [trolleyIsOpen, setTrolleyIsOpen] = useState(false);
    const { cartProducts } = useCart();
    const [toggleModalUserAuth, setToggleModalUserAuth] = useState(false);

    const toggleModal = () => setToggleModalUserAuth(!toggleModalUserAuth)
    useEffect(() => { }, [trolleyIsOpen, cartProducts, toggleModalUserAuth])
    return (
        <div>
            <div className='flex px-5 space-x-5 md:space-x-10 relative'>
                <UserAuthenticated toggleModalAuthenticated={toggleModal} />
                <div className='flex' >
                    <img src={cart} alt={cart} onClick={() => setTrolleyIsOpen(true)} />
                    <p>{cartProducts.length}</p>
                </div>
            </div>
            {
                toggleModalUserAuth && isLogged && <ModalUserAuthenticated setToggleModalUserAuth={setToggleModalUserAuth}/>
            }
            <Trolley trolleyIsOpen={trolleyIsOpen} setTrolleyIsOpen={setTrolleyIsOpen} />
        </div>
    )
}
