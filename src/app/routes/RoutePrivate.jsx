import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Profile } from '../auth/Profile/Profile'
import { Main } from '../components/main/Main'

export const RoutePrivate = () => {
  return (
    <Routes>
      <Route path='/profile' element={<Profile />} />
      <Route exact path='/' element={<Main />} />
    </Routes>
  )
}
