import React from 'react'
import "./Brand.css";
import { BrandItem } from './brandItems/BrandItem';


export const Brands = () => {
  return (
    <div className='container grid-brands'>
      <h2>Marcas</h2>
      <BrandItem />
    </div>
  )
}
