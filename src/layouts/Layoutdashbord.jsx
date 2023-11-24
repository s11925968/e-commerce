import React from 'react'
import Dnavbar from '../dashboard/Dnavbar.jsx'
import Dfooter from '../dashboard/Dfooter.jsx'
import { Outlet } from 'react-router-dom'

export default function Layoutdashbord() {
  return (
    <>
        <Dnavbar />
        <Outlet />
        <Dfooter />

    </>
  )
}
