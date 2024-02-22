import React from 'react'
import { MdCancel } from "react-icons/md"

const ReminderCard = ({reminder}) => {
  const {message, subject, delay, delayType} = reminder
  return (
    <div className='max-w-[480px] min-h-md bg-gray-100 text-white-400 rounded-xl shadow-lg shadow-black'>
        <div className='relative py-1 pl-2 pr-1 bg-sky-700 rounded-t-xl
                        flex flex-row justify-between items-center'>
            <p className='text-center font-bold max-w-[80%] overflow-clip text-nowrap'>{subject ?? "Subject of email"}</p>
            <MdCancel className='self-start hover:cursor-pointer' />
        </div>
        <div className='py-4 px-3 text-black font-mono leading-tight min-h-[4rem]'>
            <p>{message}</p>
        </div>
        <div className='bg-pale-blue rounded-b-xl text-slate-800 font-semibold text-sm '>
            <p className='text-center font-mono text-white'>
                {delay} {delayType}
            </p>
        </div>
    </div>
  )
}

export default ReminderCard