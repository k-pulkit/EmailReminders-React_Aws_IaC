import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      defaultLayout
      <Outlet />
    </div>
  )
}

export default DefaultLayout