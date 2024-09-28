import React from 'react'
import "./Main.css";
import { Top_Sales } from './top-sales/Top_Sales';
import { Discounts } from './discounts/Discounts';
import { InfoStore } from './info-store/InfoStore';
import { SliderImg } from '../UI/SliderImg';
export const Main = () => {
  return (
    <>
      <div className='container'>
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
