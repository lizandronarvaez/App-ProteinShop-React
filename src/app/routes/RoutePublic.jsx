import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ProductsList } from '../products/ProductsList'
import { Login } from '../auth/Login/Login'
import { Main } from '../components/main/Main'
import { RegisterForm } from '../auth/Register/RegisterForm';
import { Auth } from '../auth/Auth';
export const RoutePublic = ({ elements }) => {
  return (
    <Routes>
      <Route exact path='/products' element={<ProductsList />} />
      <Route exact path='/account' element={<Auth />} />
      <Route exact path='/account/form-register' element={<RegisterForm />} />

      <Route exact path='/' element={<Main />} />

    </Routes>
  )
}
