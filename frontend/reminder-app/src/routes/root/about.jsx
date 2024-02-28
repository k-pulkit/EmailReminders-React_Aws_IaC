import React from 'react'
import architecture from '@assets/architecture.png'

const About = () => {
  return (
    <div className="h-full flex flex-col gap-4 justify-center items-center mt-4 p-3">
        <h1 className='text-primary font-mono text-3xl'>Architecture Diagram</h1>
        <img 
         src={architecture}
         className='outline outline-primary p-2 rounded-xl'
        />
    </div>
  )
}

export default About