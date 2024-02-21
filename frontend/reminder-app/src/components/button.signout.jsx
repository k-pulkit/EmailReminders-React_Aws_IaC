import React from 'react'
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