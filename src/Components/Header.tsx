import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
        <nav>
            Student Management App
        </nav>
        <div className='navboard'>
            <Link className='navlink' to='/'>Home</Link>
            <Link className='navlink' to='/create'>Create Students</Link>
            <Link className='navlink' to='/view'>View Students</Link>
            <Link className='navlink' to='/update'>Update Students</Link>
            <Link className='navlink' to='/delete'>Delete Students</Link>
        </div>
    </div>
  )
}
