import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { Authenticator, View } from '@aws-amplify/ui-react';
import AuthProvider from './contexts/auth/provider'

const router = App()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <View>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      </View>
    </Authenticator.Provider>
  </React.StrictMode>,
)
