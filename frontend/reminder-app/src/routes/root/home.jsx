import React from 'react'
import { Link } from 'react-router-dom'
import Signout from '../../components/button.signout'

const Home = () => {
  return (
    <div className='flex flex-row space-x-5'>
      <p>home</p>
        <Signout />
    </div>
  )
}

export default Home