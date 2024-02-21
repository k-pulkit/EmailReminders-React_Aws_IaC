import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast'
// Auth listener
import { Hub } from 'aws-amplify/utils';
import { fetchAuthSession } from '@aws-amplify/auth';
// context
import {useAuth} from '../contexts/auth'


const getSession = async() => {
    try {
        return (await fetchAuthSession()).tokens ?? {};
      } catch (err) {
        console.log(err);       
        throw Error("An error occured")
    }
}

const AuthListener = () => {    
    const {tokens, isAuthenticated, setIsAuthenticated, setTokens} = useAuth()

    useEffect(() => {
        const hubListenerCancelToken = Hub.listen('auth', ({ payload }) => {
    
            switch (payload.event) {
                case 'signedIn':
                console.log('user have been signedIn successfully.');
                console.log(payload)
                setIsAuthenticated(true)
                getSession().then(x => console.log(x))
                getSession().then(({accessToken, idToken}) => {
                  setTokens({"accessToken": accessToken.toString(), "idToken": idToken.toString()})
                  setTimeout(()=>console.log(`Access Token is ${tokens?.accessToken}`), 3000)
                })
                toast.success("User has signed in successfully")
                break;
                case 'signedOut':
                console.log('user have been signedOut successfully.');
                console.log(payload)
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

  return (
    <div>app.wrapper
        <Toaster position='botton-right' />
        <Outlet />
    </div>
  )
}

export default AuthListener