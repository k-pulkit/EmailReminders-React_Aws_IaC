import React from 'react'
import {useAuth} from '../../../contexts/auth'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'  
import { Toaster, toast } from 'react-hot-toast'

const Signin = () => {
  const {login} = useAuth()
  const {state} = useLocation()
  const navigate = useNavigate()


  return (
    <div>
      <button className='mt-10 px-4 py-2 bg-black text-white rounded-2xl'
        onClick={() => toast.promise(login(), {
          loading: "Loading",
          success: "Logged in",
          error: "An error occures"
        }).then(setTimeout(() => navigate(state?.path || "/"), 2000))
        }
      >
        Signin
      </button>
      <Toaster />
    </div>
  )
}

export default Signin