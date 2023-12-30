import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Catagory() {
  return (
   <>
   
   <center>
    <h1 className='text-primary bg-danger mt-5 p-5 '> This is Catagory page </h1>
    </center>

    <Outlet />
   
   </>
  )
}
