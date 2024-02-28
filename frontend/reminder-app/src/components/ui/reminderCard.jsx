import React, {useState, useMemo} from 'react'
import { MdCancel } from "react-icons/md"
import { ExpandableText } from '@components/expandable.text'
import ReminderCardDelay from './reminderCardDelay'
import toast from 'react-hot-toast'

const ReminderCard = ({reminder, deleteHandler}) => {
  const {messageid, message, subject, delay, delayType, timestamp} = reminder

  return ( 
    <>
    <div className={`max-w-[480px] bg-gray-100 text-white-400 rounded-xl shadow-lg shadow-black flex flex-col justify-between 
          max-md:grow 
          animate-fade animate-delay-300 animate-once`}>
      {
      useMemo(() => (
        <>
        <div className='relative py-2 px-1 bg-primary rounded-t-lg
                          '>
              <p className='text-center font-sans font-bold tracking-wider max-w-[80%] mx-auto overflow-clip text-nowrap'>{subject ?? "Subject of email"}</p>
              <MdCancel key={messageid} className='absolute right-1 top-1 hover:cursor-pointer hover:text-red-400 text-bold' 
                          onClick={() => {
                                  const id = toast.success("Deleting item..")
                                  deleteHandler(messageid, id)        
                                  }} />
          </div>
          <div className='py-4 px-3'>
              <ExpandableText classes='text-black font-sans leading-loose text-sm'>{message}</ExpandableText>
          </div>
        </>
        ), [reminder])
      }
        <div className='py-2 px-4 rounded-b-md font-semibold text-sm bg-gray-900 text-white-400 font-mono'>
          <ReminderCardDelay delay={delay} delayType={delayType} timestamp={timestamp} />
        </div>
      </div>
    </>
  )
}

export default ReminderCard