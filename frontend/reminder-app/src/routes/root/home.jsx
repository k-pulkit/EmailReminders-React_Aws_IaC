import React from 'react'
import Signout from '../../components/button.signout'
import { get } from 'aws-amplify/api';

const Home = () => {
  return (
    <div className='flex flex-row space-x-5'>
      <p>home</p>
        <Signout />
    </div>
  )
}

export default Home