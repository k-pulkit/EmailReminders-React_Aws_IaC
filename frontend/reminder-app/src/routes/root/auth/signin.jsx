import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'  

// Amplify Authenticator setup
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from '../../../aws-exports';

Amplify.configure(awsExports);

const Signin = ({ user, signOut }) => {

  const {state} = useLocation()

  return (
        <>
          {
            !user ?
            <button onClick={signOut}>Signout</button> :
            <Navigate to={state?.path || "/"} />
          }
        </>
  )
}

export default withAuthenticator(Signin, {signUpAttributes: ["email"]})