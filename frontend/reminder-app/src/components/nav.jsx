import React from 'react'
import Signout from './button.signout';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useMemo } from 'react';

const MyNav = ({hideSignout}) => {
  const {signOut} = useAuthenticator((context) => [context.user])

  return (
    <div className='w-screen bg-primary'>
        {useMemo(() => (
            <div className='max-container px-4 py-3 flex flex-row gap-10 items-center justify-around font-bold text-xl text-white'>
                <p>Email Reminder App</p>
                <div className={hideSignout ? "hidden" : "flex flex-row space-x-10 text-white justify-center items-center font-bold"}>
                    <p className='hover:underline hover:cursor-pointer'>About</p>
                    <div className='hover:cursor-pointer hover:bg-green-700 text-lg bg-green-600 rounded-full py-2 px-4 text-white border border:blue-800'
                        onClick={signOut}
                    >
                        SignOut
                    </div>
                </div>
                <p className={hideSignout ? "hover:underline hover:cursor-pointer" : "hidden"}>About</p>
            </div>
        ), [signOut, hideSignout])
            }
    </div>
  )
}

export default MyNav;