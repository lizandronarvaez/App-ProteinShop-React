import React, { useContext } from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../auth/context/authContext";

export const Footer = () => {
  const { logged } = useContext(AuthContext);

  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-box'>
          <h3>Contacto</h3>
          <div>
            <ul>
              <li>Atención cliente: <b> +34 92612341234</b></li>
              <li>Email: <b>contacto@proteinshop.com</b></li>
              <li>Contestamos a las consultas en un máximo de 48 horas.</li>
            </ul>
          </div>
        </div>
        <div className='footer-box'>
          <h3>Información</h3>
          <div>
            <ul>
              <li>Envíos</li>
              <li>Aviso Legal</li>
              <li>Condiciones de uso</li>
              <li>Sobre nosotros</li>
              <li>Política de privavidad</li>
            </ul>
          </div>
        </div>
        <div className='footer-box'>
          <h3>Usuario</h3>
          <div>
            <ul>
              <li>
                {
                  !logged
                    ? <Link to={"/account"}>Mi cuenta </Link>
                    : <Link to={"/profile/orders_users"}>Mi cuenta </Link>

                }
              </li>
              <li>
                {
                  !logged ?
                    <Link to={"/account"}> Historial de pedidos</Link>
                    : <Link to={"/profile/user"}>Historial de pedidos </Link>
                }
              </li>
              <li>Recuperar contraseña</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='user-project'>
        <p><b>Desarrollado por Lizandro Narváez</b> </p>
      </div>
    </div >
  )
}
