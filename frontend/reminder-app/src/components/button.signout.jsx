import React from 'react'
import {useAuth} from '../contexts/auth'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'  
import { useAuthenticator } from '@aws-amplify/ui-react';

const Signout = () => {
  const {signOut} = useAuthenticator((context) => [context.user])

  return (
    <button className='mt-10 px-4 py-2 bg-black text-white rounded-2xl'
            onClick={signOut}>
      Signout
    </button>
  )
}

export default Signout