import React from 'react'
import ReminderCard from './reminderCard'

const ReminderContainer = ({reminders}) => {
  return (
    <div className="max-h-[65vh] overflow-y-scroll overflow-x-hidden
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