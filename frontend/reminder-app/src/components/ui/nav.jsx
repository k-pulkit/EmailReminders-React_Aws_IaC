import React from 'react'
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useMemo } from 'react';

const MyNav = ({hideSignout}) => {
  const {signOut} = useAuthenticator((context) => [context.user])

  return (
    <div className='w-screen bg-primary'>
        {useMemo(() => (
            <div className='max-container px-4 py-3 flex flex-row gap-10 items-center justify-between font-bold text-xl text-white'>
                <p>Email Reminder App</p>
                <div className="flex flex-row space-x-10 text-white justify-center items-center font-bold">
                    <p className='hover:underline hover:cursor-pointer'>About</p>
                    <div className={`hover:cursor-pointer text-lg rounded-full py-2 px-4 border border:blue-800 ${hideSignout ? "text-transparent bg-transparent" : "text-white bg-green-600 hover:bg-green-700"}`}
                        onClick={signOut}
                    >
                        SignOut
                    </div>
                </div>
            </div>
        ), [signOut, hideSignout])
            }
    </div>
  )
}

export default MyNav;