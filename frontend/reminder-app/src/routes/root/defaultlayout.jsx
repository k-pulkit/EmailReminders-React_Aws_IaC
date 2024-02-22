import React from 'react'
import { Outlet } from 'react-router-dom'
import MyNav from '@components/ui/nav'
import Footer from '@components/ui/footer'
import { useMemo } from 'react'

const DefaultLayout = () => {
  return (
    useMemo(() => (
    <div className='relative w-screen h-[100vh] bg-white-400 max-lg:h-auto max-lg:pb-20'>
      <MyNav />
      <div className='relative max-container'>
        <Outlet />
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
    ))
  )
}

export default DefaultLayout