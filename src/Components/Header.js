import React from 'react'
import profileimage from '../Otherfile/profileimage.jpg'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='flex header'>
    <div className='flex header-content '>
      <h1><Link to = "/">Home</Link></h1>
      <h1>Consultations</h1>
      <h1>Profile</h1>
      <button className='rounded-button'>
        search
      </button>
      <button className='rounded-button'>
        Notification
      </button>
      <img className ="image" src={profileimage} alt="Profile Image" />
    </div>
    </div>
  )
}

export default Header