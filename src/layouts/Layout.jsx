import React from 'react'
import Navbar from '../web/Navbar.jsx'
import Footer from '../web/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  )
}
