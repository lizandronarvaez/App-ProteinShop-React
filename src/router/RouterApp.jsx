import React, { useContext, useEffect } from 'react'
import { Header } from '../app/components/header/Header'
import { Nav } from '../app/components/nav/Nav/Nav'
import { Footer } from '../app/components/footer/Footer'
import { RoutePrivate } from '../app/routes/RoutePrivate'
import { RoutePublic } from '../app/routes/RoutePublic'
import { AuthContext } from '../app/auth/context/authContext'

export const RouterApp = () => {
  const { logged } = useContext(AuthContext);
  useEffect(() => { }, [logged])

  return (
    <>
      <Header />
      <Nav />
      {logged ? <RoutePrivate /> : <RoutePublic />}
      <Footer />
    </>

  )
}
