import React from 'react'
import ReminderCard from './reminderCard'

const ReminderContainer = ({reminders}) => {
  return (
    <div className=" pb-10 pt-3 pr-16 max-h-[68vh] overflow-y-scroll overflow-x-hidden 
    grid grid-cols-2 gap-x-9 gap-y-10
    scrollbar scrollbar-thumb-slate-400 scrollbar-track-white-400">
        {
            reminders.map((r, index) => (
                <ReminderCard key={index} reminder={r} />
            ))
        }
    </div>
  )
}

export default ReminderContainer