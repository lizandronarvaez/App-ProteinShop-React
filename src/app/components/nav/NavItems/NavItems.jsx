import React from 'react'
import { Link } from 'react-router-dom';
import "./NavItems.css";
export const NavItems = () => {
  return (
    <nav className='nav-items'>
      <ul>
        <li><Link to="/products">Productos</Link></li>
        <li>Accesorios</li>
        <li>Top Ventas</li>
        <li>Promociones</li>
      </ul>
    </nav>
  )
}
