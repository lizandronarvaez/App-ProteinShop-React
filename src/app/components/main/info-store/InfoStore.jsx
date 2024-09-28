import React from 'react'
import { dataInfoStore } from './infoStore';

export const InfoStore = () => {
  return (
    <div className='grid md:grid-cols-2 gap-10 mx-auto md:w-2/3 px-10'>
      {
        dataInfoStore.map((data, i) => (
          <div key={i} className='my-10'>
            <h2 className='text-4xl py-10'>{data.title}</h2>
            <p className='text-stone-600 uppercase text-4xl md:text-5xl font-bold md:ml-5'>{data.description.charAt(0)}<span className='font-normal text-stone-500 lowercase text-2xl md:text-3xl'>{data.description.slice(1,data.description.length -1)}</span></p>
          </div>
        ))
      }
    </div>
  )
}
