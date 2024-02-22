import React from 'react'
import ReminderCard from './reminderCard'

const ReminderContainer = ({reminders}) => {
  return (
    <div className=" pb-10 pr-10 max-h-[65vh] overflow-y-scroll overflow-x-hidden 
    grid grid-cols-2 gap-x-6 gap-y-10
    scrollbar scrollbar-thumb-slate-400 scrollbar-track-white-400">
        {
            reminders.map((r, index) => (
                <ReminderCard reminder={r} />
            ))
        }
    </div>
  )
}

export default ReminderContainer