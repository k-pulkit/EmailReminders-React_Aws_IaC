import React, { useEffect } from 'react'
import { useAuth } from '../../contexts/auth';
import toast from 'react-hot-toast'
import setReminder from '../../utils/api';
import FormComponent from "../../components/ui/form"
import ReminderContainer from '../../components/ui/reminderContainer';
import { IoIosRefresh } from "react-icons/io";

import { dummy } from './dummy';

const Home = () => {
  const { tokens, email } = useAuth()

  const body = {
    message: "This is a message that needs to be reminded to me",
    "email": email,
    delay: 20,
    delayType: "Days"
  }
  const reminders = [body, body, body, body, body, body, body, body, body, body, body]
  

  // useEffect(() => {
  //   setReminder({...tokens, ...body}).then(() => console.log("Fetched from API"))
  // }, [])

  
  return (
    <div className='mt-3 px-3 grid grid-cols-3 max-lg:flex max-lg:flex-col-reverse max-lg:px-10'>
      <div className='py-6 pr-4 pl-10 col-span-2 shadow-xl min-h-[80vh] max-lg:col-span-1 max-lg:min-h-auto max-lg:pl-4'>
        <div className='flex flex-row justify-between items-center'>
          <h1 className='mb-5 text-primary font-serif max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>Previous reminders</h1>
          <IoIosRefresh className='text-2xl hover:cursor-pointer' />
        </div>
        <ReminderContainer reminders={dummy} />
      </div>
      <div className='formclass flex flex-col gap-4 px-10 py-6 shadow-xl max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center'>
        <h1 className=' text-primary font-serif'>Set new reminder</h1>
        <FormComponent /> 
      </div>
    </div>
  )
}

export default Home