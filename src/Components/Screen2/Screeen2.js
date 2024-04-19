import React from 'react'
import Header from '../Header'
import PatientProfile from './PatientProfile'
import EditProfile from './EditProfile/EditProfile'

function Screeen2() {
  return (
    <div className='screen2-bg '>
        <Header />
        <div className='flex screen2-bg'>
            <PatientProfile />
            <EditProfile />
        </div>
    </div>
  )
}

export default Screeen2