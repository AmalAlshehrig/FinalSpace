import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='w-20 p-2'>
        <Link to={'/'}>
        <img src="https://finalspaceapi.com/img/logo.png"/>
        </Link>
    </div>
  )
}

export default NavBar