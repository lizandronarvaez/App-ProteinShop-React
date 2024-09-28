import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Profile } from '../auth/Profile/Profile'
import { Main } from '../components/main/Main'
import { ProductsList } from '../products/ProductsList'
import { OrderProducts } from '../order/OrderProducts'

export const RoutePrivate = () => {
  return (
    <Routes>
      <Route path='/profile/*' element={<Profile />} />

      <Route path='/submit-order' element={<OrderProducts />} />
      <Route path='/products' element={<ProductsList />} />

      <Route path='/' element={<Main />} />

      <Route path="/*" element={<Navigate to={"/"} />} />

    </Routes>
  )
}
