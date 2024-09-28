import React from 'react'
import { Link } from 'react-router-dom';
export const NavItems = () => {
  const fontSemibold = "px-3 py-5 font-normal hover:font-semibold border-b-2 border-transparent hover:border-black transition-all duration-300";
  return (
    <>
      <nav className='border-b-2'>
          <div className='flex flex-col md:flex-row justify-around p-10 text-3xl font-sans'>
            <Link className={fontSemibold} to="/products" >Productos</Link>
            <Link className={fontSemibold} >Información</Link>
            <Link className={fontSemibold} >Acerca</Link>
            <Link className={fontSemibold} >Contacto</Link>
          </div>
      </nav>
    </>
  )
}
