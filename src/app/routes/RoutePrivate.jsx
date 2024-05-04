import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../auth/Profile/Profile'
import { Main } from '../components/main/Main'
import { ProductsList } from '../products/ProductsList'

export const RoutePrivate = () => {
  return (
    <Routes>
      <Route exact path='/profile/*' element={<Profile />} />
      <Route exact path='/products' element={<ProductsList />} />
      <Route exact path='/' element={<Main />} />
    </Routes>
  )
}
