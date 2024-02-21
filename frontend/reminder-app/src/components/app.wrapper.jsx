import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
// Auth listener
import { Hub } from 'aws-amplify/utils';
import { fetchAuthSession, fetchUserAttributes } from '@aws-amplify/auth';
// context
import {useAuth} from '../contexts/auth'


const AuthListener = () => {    
    const {tokens, isAuthenticated, setIsAuthenticated, setTokens, setEmail} = useAuth()
    const signedInActions = () => {
      fetchAuthSession().then(({tokens}) => {
                  if (tokens) {
                    setTokens({"accessToken": tokens.accessToken?.toString(), "idToken": tokens.idToken?.toString()})
                    setIsAuthenticated(true)
                    fetchUserAttributes().then(({email}) => setEmail(email))
                  }
                }).catch(error => toast.error(`Something went wrong: ${error.message}`))   }

    // Sign in and sign out events
    useEffect(() => {
        const hubListenerCancelToken = Hub.listen('auth', ({ payload }) => {
    
            switch (payload.event) {
                case 'signedIn':  
                  signedInActions()
                  toast.success("User has signed in successfully")
                  break;
                case 'signedOut':
                  setIsAuthenticated(false)
                  toast.success("User has signed out successfully")
                  break;
            }
        })

        return () => {
          console.log("Stopping all auth listeners")
          hubListenerCancelToken()
        }
      }, [])

    // restore to context after reload
    useEffect(() => {
      signedInActions()
    }, [])

    return (
      <>
      <div className='relative w-full h-full'>
          <Outlet />
          <Toaster position='bottom-right' />
      </div>
      </>
    )
  }

export default AuthListener