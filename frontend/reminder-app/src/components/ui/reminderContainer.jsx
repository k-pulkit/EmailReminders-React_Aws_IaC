import ReminderCard from './reminderCard'
import { useSuspenseQuery } from '@tanstack/react-query'

const ReminderContainer = ({fetchFn}) => {

  const {data} = useSuspenseQuery({queryKey: ["getReminders"], queryFn: fetchFn, suspense: true, onSuccess: ()=>console.log("Fetched data")})

  return (
    <div className=" pb-10 pt-3 pr-16 max-h-[68vh] overflow-y-scroll overflow-x-hidden 
    grid grid-cols-2 gap-x-9 gap-y-10 items-baseline
    scrollbar scrollbar-thumb-slate-400 scrollbar-track-white-400">
        {
            data.map((r, index) => (
                <ReminderCard key={index} reminder={r} />
            ))
        }
    </div>
  )
}

export default ReminderContainer