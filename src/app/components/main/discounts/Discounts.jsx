import React from 'react'
import { FormDiscounts } from './FormDiscounts/FormDiscounts'
export const Discounts = () => {
  return (
    <div className='w-full bg-orange-300 px-5 md:px-10 py-10 md:py-20 text-center'>
      <div>
        <h3 className='text-3xl md:text-5xl font-light text-stone-900 flex flex-col'>Suscribete a nuestro boletín de noticias
          <span className=' md:text-7xl font-semibold text-stone-800'> y recibe descuentos</span>
        </h3>
      </div>
      <FormDiscounts />
    </div>
  )
}
