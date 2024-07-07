import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavItems.css";
import Menu from "../../../../../public/svg/menu.svg"
export const NavItems = () => {
  const [toggle, setToggle] = useState(true);
  const myRef = useRef();

  // TODO!!SOLUCIONAR EL TEMA DE MENU HAMBURGER PARA LOS ENLACES
  const toggleClass = () => {
    if (window.innerWidth < 768) {
      setToggle(!toggle)
    }
  }

  useEffect(() => {
    toggleClass();
  }, [])
  console.log(toggle)
  return (
    <>
      <nav className='nav-items'>
        <div className='hamburger-menu'>
          <img src={Menu} alt={Menu} onClick={toggleClass} />
        </div>
        <div className='items-menu'>
          {
            toggle ? (
              <ul>
                <li><Link to="/products" onClick={() => setToggle(false)}>Productos</Link></li>
                <li>Accesorios</li>
                <li>Top Ventas</li>
                <li>Promociones</li>
              </ul>
            ) : null
          }

        </div>
      </nav>
    </>
  )
}
