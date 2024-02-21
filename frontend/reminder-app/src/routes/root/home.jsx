import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-row space-x-5'>
      <p>home</p>
      <Link to="/auth/signout">Logout</Link>
    </div>
  )
}

export default Home