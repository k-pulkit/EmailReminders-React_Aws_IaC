import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/auth';
import toast from 'react-hot-toast'
import setReminder from '../../utils';
import FormComponent from "../../components/form"

const Home = () => {
  const { tokens, email } = useAuth()
  const body = {
    message: "Hello world",
    "email": email,
    delay: 20
  }
  
  // useEffect(() => {
  //   setReminder({...tokens, ...body}).then(() => console.log("Fetched from API"))
  // }, [])

  
  return (
    <div className='mt-10 px-3 grid grid-cols-3 '>
      <div className='px-4 py-6 col-span-2 shadow-xl min-h-[80vh]'>
        <h1 className='mb-5 text-primary font-serif'>Previous reminders</h1>
        <p>Reminder 1</p>
        <p>Reminder 2</p>
        <p>Reminder 3</p>
      </div>
      <div className='formclass flex flex-col gap-4 px-4 py-6 shadow-xl'>
        <h1 className=' text-primary font-serif'>Set new reminder</h1>
        <FormComponent /> 
      </div>
    </div>
  )
}

export default Home