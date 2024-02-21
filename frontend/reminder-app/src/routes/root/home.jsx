import React, { useEffect } from 'react'
import { post } from 'aws-amplify/api';
import { useAuth } from '../../contexts/auth';
import toast from 'react-hot-toast'
import setReminder from '../../utils';


const Home = () => {
  const { tokens, email } = useAuth()
  const body = {
    message: "Hello world",
    email: email,
    delay: 20
  }
  // useEffect(() => {
  //   setReminder({...tokens, ...body}).then(() => console.log("Fetched from API"))
  // }, [])

  return (
    <div className='flex flex-row space-x-5'>
      <p>home</p>
        
    </div>
  )
}

export default Home