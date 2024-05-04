import React from 'react'
import { Nav_Account_Cart, Nav_Form, NavItems } from '../index';
import { Link } from 'react-router-dom';
import "./Nav.css";

export const Nav = () => {
    return (
        <div className='nav'>
            <div className='nav-form'>
                <h2><Link to={"/"}>Protein<span>Shop</span> </Link></h2>
                <Nav_Form />
                <Nav_Account_Cart />
            </div>
            <NavItems />
        </div>
    )
}
