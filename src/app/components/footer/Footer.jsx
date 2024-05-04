import React from 'react'
import "./Footer.css";

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
        <div className='footer-box'>
          <h3>Contacto</h3>
          <div>
            <p>Atención cliente: +34 92612341234</p>
            <p>Contestamos a las consultas en un máximo de 48 horas.</p>
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
              <li>Mi cuenta</li>
              <li>Historial de pedidos</li>
              <li>Direcciones</li>
              <li>Recuperar contraseña</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
