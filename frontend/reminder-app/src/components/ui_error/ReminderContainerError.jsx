import React from 'react'

const ReminderContainerError = (props) => {
  return (
    <div className="pb-10 pt-3 pr-16 max-h-[68vh]">
        <p className='text-lg text-red-700 tracking-wider'>Something went wrong. Please refresh again!</p>
        {console.log(props)}
    </div>
  )
}

export default ReminderContainerError;
