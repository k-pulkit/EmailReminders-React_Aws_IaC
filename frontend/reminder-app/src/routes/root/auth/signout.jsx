import React from 'react'
import {useAuth} from '../../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'  
import { Toaster, toast } from 'react-hot-toast'

const Signout = () => {
  const {logout} = useAuth()
  const {state} = useLocation()
  const navigate = useNavigate()


  return (
    <div>
      <button className='mt-10 px-4 py-2 bg-black text-white rounded-2xl'
        onClick={() => toast.promise(logout(), {
          loading: "Loading",
          success: "Logged out",
          error: "An error occures"
        }).then(setTimeout(() => navigate(state?.path || "/"), 2000))
        }
      >
        Signout
      </button>
      <Toaster />
    </div>
  )
}

export default Signout