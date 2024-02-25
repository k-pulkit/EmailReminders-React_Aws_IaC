import ReminderCard from './reminderCard'
import { useSuspenseQuery } from '@tanstack/react-query'

const ReminderContainer = ({fetchFn, deleteHandler}) => {

  const {data} = useSuspenseQuery({queryKey: ["getReminders"], queryFn: fetchFn, suspense: true, onSuccess: ()=>console.log("Fetched data")})

  return (
    <div className={`pb-10 pt-3 pl-2 pr-16 max-h-[68vh] overflow-x-hidden overflow-y-scroll
    grid grid-cols-2 gap-x-9 gap-y-10 items-baseline
    ${data.length <= 6 ? "scrollbar-none" : "scrollbar scrollbar-thumb-slate-400 scrollbar-track-white-400"}`}>
        {
            (data.length === 0) ? (
                <p className='text-gray-600 text-2xl font-serif text-opacity-85'>Please add reminders to see history.</p>
             ) : (
            data.map((r, index) => (
                <ReminderCard key={index} reminder={r} deleteHandler={deleteHandler} />
            )))
        }
    </div>
  )
}

export default ReminderContainer