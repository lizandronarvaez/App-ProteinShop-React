import React from 'react'
import { Link } from 'react-router-dom';
export const NavItems = ({ closeToggleItem, toggleIsActive }) => {
  const fontSemibold = "px-3 py-5 font-light mx-auto md:text-4xl border-b-2 border-transparent hover:border-orange-300 transition-all duration-300";
  const menuIsActive = toggleIsActive ? "" : "hidden";

  return (
    <>
      <nav className={`${menuIsActive} md:block border-b`}>
        <div className={`flex flex-col md:flex-row justify-around py-5 text-3xl font-sans`}>
          <Link className={fontSemibold} to="/products" onClick={() => closeToggleItem(false)}>Productos</Link>
          <Link className={fontSemibold} onClick={() => closeToggleItem(false)} >Sobre Nosotros</Link>
          <Link className={fontSemibold} onClick={() => closeToggleItem(false)} >Preguntas Frecuentes</Link>
          <Link className={fontSemibold} onClick={() => closeToggleItem(false)}>Contacto</Link>
        </div>
      </nav>
    </>
  )
}
