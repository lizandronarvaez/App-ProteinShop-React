import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import IconReact from "../../../public/svg/react.svg";
import IconTailwind from "../../../public/svg/tailwinds.svg";
import IconVite from "../../../public/svg/vite.svg";

export const Footer = () => {

  const { isLogged } = useSelector(state => state.auth);

  return (
    <>
      <div className='bg-info flex flex-col mt-10 py-20'>
        <div className='md:flex md:justify-between mx-auto w-8/12 py-10 mt-10 text-stone-800'>
          <div>
            <h3 className='text-4xl mb-5'>Contacto</h3>
            <div className='text-stone-500'>
              <ul>
                <li>Atención cliente:<b>+34 92612341234</b></li>
                <li>Email: <b>contacto@proteinshop.com</b></li>
                <li>Contestamos a las consultas en un máximo de 48 horas.</li>
              </ul>
            </div>
          </div>
          <div className='my-10 md:my-0'>
            <h3 className='text-4xl mb-5'>Información</h3>
            <div className='text-stone-500'>
              <ul>
                <li>Envíos</li>
                <li>Aviso Legal</li>
                <li>Condiciones de uso</li>
                <li>Sobre nosotros</li>
                <li>Política de privavidad</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-4xl mb-5'>Usuario</h3>
            <div className='text-stone-500'>
              <ul>
                <li>
                  {!isLogged && <Link to={"/account"}>Mi cuenta </Link>}
                  {isLogged && <Link to={"/profile/orders_users"}>Mi cuenta </Link>}
                </li>
                <li>
                  {!isLogged && <Link to={"/account"}> Historial de pedidos</Link>}
                  {isLogged && <Link to={"/profile/user"}>Historial de pedidos </Link>}
                </li>
                <li>Recuperar contraseña</li>
              </ul>
            </div>
          </div>
        </div>
      </div >
      <div className='bg-stone-600 p-5'>
        <div className='flex text-white md:mx-auto md:w-1/2 justify-center items-end'>
          <h6 className='font-semibold text-1xl sm:text-2xl lg:text-3xl mr-5'>Desarrollado por Lizandro Narváez</h6>
          <div className='flex'>
            <img src={IconReact} alt={IconReact} />
            <img src={IconTailwind} alt={IconReact} />
            <img src={IconVite} alt={IconReact} />
          </div>
        </div>
      </div>
    </>
  )
}
