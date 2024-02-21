import React from 'react'

const ReminderCard = ({reminder}) => {
  const {message, delay, delayType} = reminder
  return (
    <div className='w-[480px] min-h-md bg-coral-red m-3 py-10 px-4'>
        <p>{message}</p>
        <p>{delay} {delayType}</p>
    </div>
  )
}

export default ReminderCard