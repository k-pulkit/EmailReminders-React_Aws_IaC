import React from 'react'
import { MdCancel } from "react-icons/md"
import { ExpandableText } from '@components/expandable.text'

const ReminderCard = ({reminder, deleteHandler}) => {
  const {messageid, message, subject, delay, delayType} = reminder
  return (
    <div className='max-w-[480px] bg-gray-100 text-white-400 rounded-xl shadow-lg shadow-black flex flex-col justify-between'>
        <div className='relative py-1 pl-2 pr-1 bg-sky-700 rounded-t-xl
                        flex flex-row justify-between items-center'>
            <p className='text-center font-bold max-w-[80%] overflow-clip text-nowrap'>{subject ?? "Subject of email"}</p>
            <MdCancel className='self-start hover:cursor-pointer' onClick={() => deleteHandler(messageid)} />
        </div>
        <div className='py-4 px-3'>
            <ExpandableText classes='text-black font-sans leading-loose text-sm'>{message}</ExpandableText>
        </div>
        <div className='bg-slate-300 rounded-b-xl font-semibold text-sm py-1'>
            <p className='text-center font-mono text-primary'>
                {delay} {delayType}
            </p>
        </div>
    </div>
  )
}

export default ReminderCard