import React, { createContext, useState } from 'react'

// Create a new context for storing auth
export const authContext = createContext()

// A function with login, logout method and state
const makeAuth = () => {
  const [auth, setAuth] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return {auth, isAuthenticated, setIsAuthenticated, setAuth}
}

const AuthProvider = ({children}) => {
  return <authContext.Provider value={makeAuth()}>{children}</authContext.Provider>
}

export default AuthProvider
