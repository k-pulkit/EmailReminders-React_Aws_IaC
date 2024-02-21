import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNav from '../../components/nav'
import Footer from '../../components/footer'

const DefaultLayout = () => {
  return (
    <div className='relative w-screen h-[100vh] bg-white-400'>
      <MyNav />
      <div className='relative max-container'>
        <Outlet />
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout