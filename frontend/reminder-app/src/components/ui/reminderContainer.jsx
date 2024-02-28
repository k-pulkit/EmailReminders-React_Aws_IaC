import ReminderCard from './reminderCard'
import { useMemo } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const ReminderContainer = ({fetchFn, deleteHandler}) => {
  const {data} = useSuspenseQuery({queryKey: ["getReminders"], queryFn: fetchFn, suspense: true, retry: false})
  // console.log(data)
  return (
    <div className={`relative pb-10 pt-3 pl-2 pr-16 max-h-[68vh] overflow-x-hidden overflow-y-scroll
    grid grid-cols-2 gap-x-9 gap-y-10 
    max-lg:pr-2 max-lg:max-h-max max-lg:overflow-y-visible 
    max-md:px-3 max-md:flex max-md:flex-row max-md:flex-wrap max-md:justify-center max-md:items-center max-md:grow-[2]
    ${data.length <= 6 ? "scrollbar-none" : "scrollbar scrollbar-thumb-slate-400 scrollbar-track-white-400"}`}>
        {
          (data.length === 0) ? (
            <p className='text-gray-600 text-2xl font-serif text-opacity-85 col-span-2'>Please add reminders to see history.</p>
          ) : (
              // useMemo(() =>
                data.map((r, index) => (
                    <ReminderCard key={index} reminder={r} deleteHandler={deleteHandler}/>
                ))
              // , [data.length])
            )
        }
    </div>
  )
}

export default ReminderContainer