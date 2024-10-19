import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { ProductsList } from '../products/ProductsList'
import { Login } from '../auth/Login/Login'
import { Main } from '../components/main/Main'
import { RegisterForm } from '../auth/Register/RegisterForm';
import { Auth } from '../auth/Auth';
import { OrderProducts } from '../order/OrderProducts';
export const RoutePublic = ({ elements }) => {
  return (
    <Routes>
      <Route path='/products/*' element={<ProductsList />} />
      <Route path='/submit-order' element={<OrderProducts />} />
      <Route path='/account' element={<Auth />} />
      <Route path='/account/form-register' element={<RegisterForm />} />

      <Route path='/' element={<Main />} />
      <Route path="/*" element={<Navigate to={"/"} />} />

    </Routes>
  )
}
