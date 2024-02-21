import React, { useEffect } from 'react'
import Signout from '../../components/button.signout'
import { post } from 'aws-amplify/api';
import { useAuth } from '../../contexts/auth';

async function getTodo({accessToken}) {
  try {
    const restOperation = post({ 
      apiName: 'dev-backend-api',
      path: '/remind',
      options: {
        headers: {
          Authorization: accessToken
        },
        body: {
          "message": "kdksjds",
          "email": "dsd",
          "delay": 33
      }
      }
    });
    const response = await restOperation.response;
    console.log('GET call succeeded: ', response);
    response.body.text().then((x)=>console.log(x))
  } catch (error) {
    console.log('GET call failed: ', error);
  }
}

const Home = () => {
  const {tokens} = useAuth()
  useEffect(() => {
    getTodo(tokens).then(() => console.log("Fetched from API"))
  }, [])

  return (
    <div className='flex flex-row space-x-5'>
      <p>home</p>
        <Signout />
    </div>
  )
}

export default Home