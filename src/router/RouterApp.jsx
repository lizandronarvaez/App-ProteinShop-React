import React, { useEffect } from 'react'
import { Header } from '../app/components/header/Header'
import { Nav } from '../app/components/nav/Nav/Nav'
import { Footer } from '../app/components/footer/Footer'
import { RoutePrivate } from '../app/routes/RoutePrivate'
import { RoutePublic } from '../app/routes/RoutePublic'

export const RouterApp = () => {
  const token=localStorage.getItem("token");
  useEffect(() => { }, [token])

  return (

    <>
      <Header />
      <Nav />
      {token ? <RoutePrivate /> : <RoutePublic />}
      <Footer />
    </>

  )
}
