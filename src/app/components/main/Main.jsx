import React from 'react'
import "./Main.css";
import { Top_Sales } from './top-sales/Top_Sales';
import { Discounts } from './discounts/Discounts';
import { Brands } from './brands/Brands';
import { InfoStore } from './info-store/InfoStore';
export const Main = () => {
  return (
    <div className='main'>
      <div className='main-img'></div>
      <div className='components-main'>
        <Top_Sales />
        <Discounts />
        <InfoStore />
      </div>
    </div>
  )
}
