import React, { useContext, useEffect } from 'react'
import { Header } from '../app/components/Header'
import { Nav } from '../app/components/nav/Nav'
import { Footer } from '../app/components/Footer'
import { RoutePrivate } from '../app/routes/RoutePrivate'
import { RoutePublic } from '../app/routes/RoutePublic'
import { useSelector } from 'react-redux'

export const RouterApp = () => {
  const { isLogged } = useSelector(state => state.auth);

  return (
    <>
      <Header />
      <Nav />
      {isLogged && <RoutePrivate />}
      {!isLogged && <RoutePublic />}
      <Footer />
    </>

  )
}
