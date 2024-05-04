import React from 'react'
import { FormDiscounts } from './FormDiscounts/FormDiscounts'
import "./Discounts.css";
export const Discounts = () => {
  return (
    <div className='discounts'>
      <div className='discounts-title'>
        <h3>Suscribete a nuestro boletín de noticias
          <span> y recibe descuentos</span>
        </h3>
      </div>
      <FormDiscounts />
    </div>
  )
}
