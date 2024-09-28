import React from 'react'
import "./Main.css";
import { Top_Sales } from './top-sales/Top_Sales';
import { Discounts } from './discounts/Discounts';
import { InfoStore } from './info-store/InfoStore';
import { SliderImg } from './SliderImg';
export const Main = () => {

  const images = [
    "../../../../public/backgrounds-main/background-main.webp",
    "../../../../public/backgrounds-main/nutricion-deporte-800x600.jpg"
  ]
  return (
    <>
    <div className='py-5'>
      <SliderImg images={images} />
    </div>
      <div className='w-11/12 md:w-4/5 mx-auto'>
        <Top_Sales />
      </div>
      <div>
        <Discounts />
        <InfoStore />
      </div>
    </>
  )
}
