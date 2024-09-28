import React from 'react'
import "./Main.css";
import { Top_Sales } from './top-sales/Top_Sales';
import { Discounts } from './discounts/Discounts';
import { InfoStore } from './info-store/InfoStore';
export const Main = () => {
  return (
    <>
      <div className='w-11/12 md:w-4/5 mx-auto'>
        <div className='main-img'></div>
        <Top_Sales />
      </div>
      <div>
        <Discounts />
        <InfoStore />
      </div>
    </>
  )
}
