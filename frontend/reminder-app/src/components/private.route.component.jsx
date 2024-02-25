import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@contexts/auth'

const PrivateRoute = ({children}) => {
  const location = useLocation()
  const {isAuthenticated} = useAuth()

  // console.log(`isAuthenticated is ${isAuthenticated}`)

  return (
    <>
        {
            !isAuthenticated ? (
                <Navigate to="/auth/signin" replace state={{path: location.pathname}} />
            ) : (
                <div>
                {/* This is a Private route */}
                {children}
                </div>
            )
        }
    </>
  )
}

export default PrivateRoute