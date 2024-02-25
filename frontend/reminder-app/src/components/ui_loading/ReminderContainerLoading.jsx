import React from 'react'

const ReminderContainerLoading = () => {
  return (
    <div className="pb-10 pt-3 pr-16 max-h-[68vh] overflow-y-hidden overflow-x-hidden 
    flex flex-row flex-wrap gap-10 items-baseline">
        {
            [...Array(8).keys()].map(i => (
                <div key={i} className='min-w-[200px] w-[40%] h-20 bg-gray-200 grow animate-pulse rounded-xl'
                     style={{animationDelay: `${i*0.05}s`, animationDuration: '1s', animationDirection: 'alternate'}}
                />
            ))
        }
    </div>
  )
}

export default ReminderContainerLoading;
