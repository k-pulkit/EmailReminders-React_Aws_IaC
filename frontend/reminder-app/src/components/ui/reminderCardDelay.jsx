import React, { useState, useEffect, useMemo } from 'react'
import { delayTypeSecondsMultiplier, getCompactDateTimeFromEpoch, formatTimeLeft } from '@utils/common'

const ReminderCardDelay = ({delay, delayType, timestamp}) => {
  const multiplier = delayTypeSecondsMultiplier(delayType)
  const delaySeconds = multiplier * delay
  const due_timestamp = Number(timestamp) + delaySeconds*1000
  const timeLeftSeconds = Math.floor((due_timestamp - Date.now()) / 1000)
  const completed = due_timestamp <= Date.now()
  const [timeLeft, setTimeLeft] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft((prev) => prev-1), 1000)
    return () => timeLeft <=0 ? clearInterval(interval) : null
  }, [])

  return (
    <div className='w-full flex flex-col gap-1'>
        {
            useMemo(() =>
            <div className='flex flex-row justify-between max-xl:justify-end'>
                <p className='max-xl:hidden'>Delay: {delay} {delayType}</p>
                <p>Due: {getCompactDateTimeFromEpoch(due_timestamp)}</p>
            </div>
            , [due_timestamp])
        }
        <div className='text-right'>
            {   
                completed ? (
                    <p className='text-green-600'>Completed</p>
                ) : (
                    <p className='text-yellow-500'>Time Left: {formatTimeLeft(timeLeftSeconds)}</p>
                )
            }
        </div>
    </div>
  )
}

export default ReminderCardDelay