import React, { useEffect, useState } from 'react'
import "./Trolley.css";
export const Trolley = ({ trolleyIsOpen, setTrolleyIsOpen }) => {

  const [isActive, setIsActive] = useState(true)

  const closeDivCart = () => {
    setTrolleyIsOpen(false)
    setIsActive(false)
  }
  useEffect(() => { }, [isActive])

  return (
    <div className={trolleyIsOpen ? "trolley" : "trolley-remove"}>
      {/* Titulo */}
      <div className='title'>
        <p onClick={closeDivCart}>x</p>
        <h2>Carrito</h2>
      </div>
      {/* Fin titulo */}
      <div className='trolley_products'>
        <div className='trolley_product_item'>
          <h3>Producto_1</h3>
          <p>precio producto: 25.99€</p>
        </div>
        <p>x</p>
      </div>
      <div className='trolley_products'>
        <div className='trolley_product_item'>
          <h3>Producto_1</h3>
          <p>precio producto: 25.99€</p>
        </div>
        <p>x</p>
      </div>      <div className='trolley_products'>
        <div className='trolley_product_item'>
          <h3>Producto_1</h3>
          <p>precio producto: 25.99€</p>
        </div>
        <p>x</p>
      </div>

      <div className='trolley_total'>
        <div>
          <p>Envio:</p>
          <p>Gratuito</p>
        </div>
        <div>
          <p>Total</p>
          <p>25.99€</p>
        </div>
        <button>Realizar Pedido</button>
      </div>
    </div>
  )
}
