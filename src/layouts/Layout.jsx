import React from 'react'
import Navbar from '../web/Navbar.jsx'
import Footer from '../web/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout({users,setUser}) {
  return (
    <>
    <Navbar users={users} setUser={setUser}/>
    <Outlet />
    <Footer />
    </>
  )
}
