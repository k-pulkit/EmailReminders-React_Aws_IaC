import React from 'react'
import { IoIosWarning } from "react-icons/io";

const WarningMssg = ({children}) => {
  return (
    <div className="px-3 py-2 bg-red-700 rounded-xl text-white 
                    flex flex-row justify-center items-center">
        <IoIosWarning className='text-3xl' />
        <p className='text-sm font-mono text-center'>
            {children}
        </p>
    </div>
  )
}

export default WarningMssg