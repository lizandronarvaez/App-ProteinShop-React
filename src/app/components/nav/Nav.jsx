import React, { useEffect, useState } from 'react'
import { Nav_Account_Cart, Nav_Form, NavItems } from './index';
import { useNavigate } from 'react-router-dom';
import LogoTienda from "../../../../public/svg/LogoTienda.svg";
import { HamburgerMenu } from '../UI/HamburgerMenu';

export const Nav = () => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const toggleClass = () => setToggle(!toggle);
    return (
        <>
            <div className='w-11/12 md:w-4/5 mx-auto'>
                <div className='py-5 mx-auto flex justify-between border-b-2 '>
                    <div className='flex items-end hover:cursor-pointer'>
                        <img className='w-20 h-20' src={LogoTienda} alt={LogoTienda} />
                        <h2 className='text-3xl md:text-5xl font-light' onClick={() => navigate("/")}>
                            Protein
                            <span className='text-5xl md:text-7xl font-semibold font-sans'>
                                Shop
                            </span>
                        </h2>
                    </div>
                    <div className='flex justify-between items-end'>
                        <Nav_Account_Cart />
                        <HamburgerMenu toggleClass={toggleClass} />
                    </div>
                </div>
                <NavItems closeToggleItem={setToggle} toggleIsActive={toggle} />
            </div>
        </>
    )
}

{/* <Nav_Form /> */ }