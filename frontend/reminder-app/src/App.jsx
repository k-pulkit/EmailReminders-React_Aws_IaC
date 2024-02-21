import React from 'react'
import { Route, createHashRouter, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PrivateRoute from './components/private.route.component'
import './App.css'

//Contexts
import AuthProvider from './contexts/auth/provider'
// Layouts
import DefaultLayout from './routes/root/defaultlayout'
import AuthLayout from './routes/root/auth/authlayout'
// Pages
import Home from './routes/root/home'
import Auth from './routes/root/auth/auth'
import Signin from './routes/root/auth/signin'
import Signup from './routes/root/auth/signup'
import Signout from './routes/root/auth/signout'


function App() {
  return (
      createBrowserRouter(createRoutesFromElements(
        <Route>
          
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Auth />} />
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/signout" element={<Signout />} />
          </Route>
          
        </Route>
      ))
  )
}

export default App
