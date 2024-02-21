import React, { createContext, useState } from 'react'

// Create a new context for storing auth
export const authContext = createContext()

// A function with login, logout method and state
const makeAuth = () => {
  const [tokens, setTokens] = useState(null)
  const [email, setEmail] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return {tokens, isAuthenticated, email, setIsAuthenticated, setTokens, setEmail}
}

const AuthProvider = ({children}) => {
  return <authContext.Provider value={makeAuth()}>{children}</authContext.Provider>
}

export default AuthProvider
