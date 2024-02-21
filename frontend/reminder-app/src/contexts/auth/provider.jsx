import React, { createContext, useState } from 'react'
import { toast } from 'react-hot-toast'

// Create a new context for storing auth
export const authContext = createContext()

// A function with login, logout method and state
const makeAuth = () => {
  const [auth, setAuth] = useState(false)
  const login = () => {
    return new Promise((res) => {
      setTimeout(() => {
        setAuth(true)
        console.log("Logged in")
        console.log(`Auth is ${auth}`)
        res()
      }, 1000)
    })
  }
  const logout = () => {
    return new Promise((res) => {
      setTimeout(()=>{
        setAuth(false)
        toast.success(`User is logged out`, {duration: 2000})
        res()
      }, 2000)
    })
  }
  return {auth, login, logout}
}

const AuthProvider = ({children}) => {
  return <authContext.Provider value={makeAuth()}>{children}</authContext.Provider>
}

export default AuthProvider
