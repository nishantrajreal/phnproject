import React from 'react'
import profileimage from '../../Otherfile/profileimage.jpg'

function PatientProfile() {
  return (
    <div>
        <h1>PatientProfile</h1>
        <div>
         <img src={profileimage} className='nextpatient-image'/>
          <h2>name</h2>
          <div className='flex'>
            <h2>age</h2>
            <h2>location</h2>
          </div>
          <div>
            <h1>General Information</h1>
            <h1>Medical History</h1>
            <h1>Consultation Notes</h1>
            <h1>Action Plans</h1>
            <h1>Files</h1>
            <h1>Wearable Stats</h1>
          </div>
        </div>
    </div>
    
  )
}

export default PatientProfile