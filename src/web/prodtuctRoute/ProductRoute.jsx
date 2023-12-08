import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProductRoute({children}) {
  if(!(localStorage.getItem('userToken'))){
    return <Navigate to='/login'/>
  }
  else{
    return children;
  }
}
