import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-sky-900 w-screen text-center'>
        <p className='text-gray-500'>© 2023</p>
        <Link to="https://www.linkedin.com/in/amal-alshehrii" className='text-gray-500'> 
        By Amal Alshehri</Link>
    </div>
  )
}

export default Footer