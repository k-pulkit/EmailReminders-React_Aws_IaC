import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'  
import {useAuth} from '@/contexts/auth'

// Amplify Authenticator setup
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from '@/aws-exports';

import { fetchAuthSession } from '@aws-amplify/auth';

Amplify.configure(awsExports);

const Signin = ({ user, signOut }) => {

  const {state} = useLocation()
  const {isAuthenticated} = useAuth()

  // fetchAuthSession().then((x) => console.log(x))
  // console.log(isAuthenticated)

  return (
        <>
          {
            !isAuthenticated ?
            <button onClick={signOut}>Signout</button> :
            <Navigate to={state?.path || "/"} />
          }
        </>
  )
}

export default withAuthenticator(Signin, {signUpAttributes: ["email"]})